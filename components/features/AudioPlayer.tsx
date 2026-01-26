import React, { useRef, useState, useEffect } from 'react';

interface AudioPlayerProps {
    src: string;
    title: string;
    isPlaying: boolean;
    onTogglePlay: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title, isPlaying, onTogglePlay }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration, setDuration] = useState('0:00');

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const total = audioRef.current.duration;
            setProgress((current / total) * 100);
            setCurrentTime(formatTime(current));
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(formatTime(audioRef.current.duration));
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const seekTime = (parseFloat(e.target.value) / 100) * (audioRef.current?.duration || 0);
        if (audioRef.current) {
            audioRef.current.currentTime = seekTime;
            setProgress(parseFloat(e.target.value));
        }
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-[#E8DFCA] rounded-2xl p-4 flex items-center gap-4 shadow-inner transition-all hover:shadow-md border border-[#3A5A40]/10">
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => onTogglePlay()} // Auto-pause when done
            />

            <button
                onClick={onTogglePlay}
                className="w-10 h-10 rounded-full bg-[#3A5A40] text-[#F2E8CF] flex items-center justify-center hover:scale-105 transition-transform flex-shrink-0 shadow-sm"
            >
                <span className="material-symbols-outlined text-2xl">
                    {isPlaying ? 'pause' : 'play_arrow'}
                </span>
            </button>

            <div className="flex-grow flex flex-col justify-center">
                <div className="flex justify-between text-[10px] font-bold text-[#3A5A40] mb-1 tracking-wider uppercase opacity-80">
                    <span>{title}</span>
                    <span>{currentTime} / {duration}</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-1 bg-[#3A5A40]/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#3A5A40]"
                />
            </div>
        </div>
    );
};

export default AudioPlayer;
