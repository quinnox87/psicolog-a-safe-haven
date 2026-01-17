import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, PODCAST_ITEMS } from '../constants';
import { useBooking } from '../context/BookingContext';

const Blog: React.FC = () => {
    const { openModal } = useBooking();
    const [activeTab, setActiveTab] = useState<'podcast' | 'readings'>('podcast');
    const [playingId, setPlayingId] = useState<string | null>(null);

    const handlePlay = (id: string) => {
        setPlayingId(playingId === id ? null : id);
    };

    return (
        <div className="animate-fade-in min-h-screen bg-[#fcfcfb]">
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Recursos Multimedia y Artículos</span>
                    <h1 className="text-4xl font-extrabold text-text-dark mb-4">Neurociencia y Bienestar</h1>
                    <p className="text-text-muted max-w-xl mx-auto mb-10">Explora contenido diseñado para tu bienestar mental, en el formato que prefieras.</p>

                    <button
                        onClick={openModal}
                        className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 mx-auto mb-12"
                    >
                        <span className="material-symbols-outlined">calendar_month</span>
                        Programa tu sesión
                    </button>

                    {/* Tabs */}
                    <div className="inline-flex bg-[#f4f3f0] p-1.5 rounded-2xl">
                        <button
                            onClick={() => setActiveTab('podcast')}
                            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'podcast'
                                ? 'bg-primary text-white shadow-md'
                                : 'text-text-muted hover:bg-[#e8e6e1] hover:text-text-dark'
                                }`}
                        >
                            <span className="material-symbols-outlined">headphones</span>
                            Podcast
                        </button>
                        <button
                            onClick={() => setActiveTab('readings')}
                            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'readings'
                                ? 'bg-primary text-white shadow-md'
                                : 'text-text-muted hover:bg-[#e8e6e1] hover:text-text-dark'
                                }`}
                        >
                            <span className="material-symbols-outlined">article</span>
                            Lecturas
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="animate-fade-in">
                    {activeTab === 'podcast' ? (
                        <div className="grid md:grid-cols-2 gap-8">
                            {PODCAST_ITEMS.map((item) => (
                                <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-[#edefec] shadow-sm hover:shadow-lg transition-all group">
                                    <div className="relative">
                                        {/* Media Player Overlay */}
                                        {playingId === item.id ? (
                                            <div className="w-full h-64 bg-black flex items-center justify-center">
                                                {item.type === 'video' ? (
                                                    <video
                                                        src={item.mediaUrl}
                                                        controls
                                                        autoPlay
                                                        className="w-full h-full"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#f4f3f0] p-6">
                                                        <span className="material-symbols-outlined text-6xl text-primary mb-4">graphic_eq</span>
                                                        <audio src={item.mediaUrl} controls autoPlay className="w-full" />
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="h-64 relative bg-gray-900 group-hover:opacity-95 transition-opacity cursor-pointer" onClick={() => handlePlay(item.id)}>
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover opacity-60"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                                                        <span className="material-symbols-outlined text-4xl text-white">play_arrow</span>
                                                    </div>
                                                </div>
                                                <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase">
                                                    {item.type === 'video' ? 'Video' : 'Audio'}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-xs text-text-muted mb-3 font-medium">
                                            <span className="uppercase tracking-wide">{item.category}</span>
                                            <span>•</span>
                                            <span>{item.duration}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-dark mb-4 group-hover:text-primary transition-colors">{item.title}</h3>

                                        {/* Actions */}
                                        <div className="flex items-center gap-4 pt-4 border-t border-[#f4f3f0]">
                                            <button
                                                onClick={() => handlePlay(item.id)}
                                                className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-lg">
                                                    {playingId === item.id ? 'pause' : 'play_arrow'}
                                                </span>
                                                {playingId === item.id ? 'Pausar' : 'Reproducir'}
                                            </button>

                                            {item.downloadUrl && (
                                                <a
                                                    href={item.downloadUrl}
                                                    download
                                                    className="flex items-center gap-2 text-sm font-bold text-text-muted hover:text-text-dark transition-colors ml-auto"
                                                >
                                                    <span className="material-symbols-outlined text-lg">download</span>
                                                    Descargar
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {BLOG_POSTS.map((post) => (
                                <Link to={`/blog/${post.id}`} key={post.id} className="bg-white rounded-2xl overflow-hidden border border-[#edefec] shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer block">
                                    <div className="h-56 overflow-hidden relative">
                                        <img
                                            src={post.imageUrl}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary uppercase tracking-wide">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-4 text-xs text-text-muted mb-4 font-medium">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-text-dark mb-3 leading-tight group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-primary font-bold text-sm gap-2">
                                            Leer más <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blog;
