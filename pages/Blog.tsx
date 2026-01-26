import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PODCAST_ITEMS } from '../constants';
import { useBooking } from '../context/BookingContext';
import AudioPlayer from '../components/AudioPlayer';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
    const { openModal } = useBooking();
    const [viewMode, setViewMode] = useState<'landing' | 'articles' | 'multimedia'>('landing');
    const [playingId, setPlayingId] = useState<string | null>(null);
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        fetch('/data/blog-posts.json')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading blog posts:", err);
                setLoading(false);
            });
    }, []);

    const handlePlay = (id: string) => {
        setPlayingId(playingId === id ? null : id);
    };

    return (
        <div className="animate-fade-in min-h-screen bg-[#fcfcfb]">
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Recursos Multimedia y Artículos</span>
                    <h1 className="text-4xl font-extrabold text-text-dark mb-4">Neurociencia y Bienestar</h1>
                    <p className="text-text-muted max-w-xl mx-auto mb-8">Explora contenido diseñado para tu bienestar mental, en el formato que prefieras.</p>

                    <button
                        onClick={openModal}
                        className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 mx-auto mb-12"
                    >
                        <span className="material-symbols-outlined">calendar_month</span>
                        Programa tu sesión
                    </button>
                </div>

                {/* Content Area */}
                <div className="animate-fade-in">

                    {/* LANDING VIEW */}
                    {viewMode === 'landing' && (
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-slide-up">
                            {/* Option A: Multimedia */}
                            <button
                                onClick={() => setViewMode('multimedia')}
                                className="group bg-white p-10 rounded-3xl border border-[#edefec] shadow-sm hover:shadow-xl hover:border-primary/30 transition-all text-left relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-4xl">headphones</span>
                                </div>
                                <h2 className="text-2xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">Podcast y Multimedia</h2>
                                <p className="text-text-muted leading-relaxed">
                                    Audios guiados, meditaciones y videos explicativos sobre neuropsicología y bienestar.
                                </p>
                                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm">
                                    <span>Escuchar ahora</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </button>

                            {/* Option B: Articles */}
                            <button
                                onClick={() => setViewMode('articles')}
                                className="group bg-white p-10 rounded-3xl border border-[#edefec] shadow-sm hover:shadow-xl hover:border-primary/30 transition-all text-left relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-4xl">article</span>
                                </div>
                                <h2 className="text-2xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">Artículos y Lecturas</h2>
                                <p className="text-text-muted leading-relaxed">
                                    Artículos basados en evidencia científica sobre salud mental, TDAH y daño cerebral.
                                </p>
                                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm">
                                    <span>Leer artículos</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </button>
                        </div>
                    )}

                    {/* MULTIMEDIA VIEW */}
                    {viewMode === 'multimedia' && (
                        <div className="animate-fade-in">
                            <button onClick={() => setViewMode('landing')} className="flex items-center gap-2 text-text-muted hover:text-primary mb-8 font-bold text-sm transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                                Atrás
                            </button>

                            <h2 className="text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined">headphones</span>
                                </span>
                                Podcast y Multimedia
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-auto flex items-center gap-2 bg-[#E8DFCA] text-[#3A5A40] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#3A5A40] hover:text-[#F2E8CF] transition-colors shadow-sm"
                                >
                                    <span className="material-symbols-outlined text-sm">podcasts</span>
                                    Escuchar en Ivoox
                                </a>
                            </h2>

                            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                                {PODCAST_ITEMS.map((item) => (
                                    <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#edefec] flex flex-col md:flex-row">
                                        {/* Image Section - Zen Filter */}
                                        <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-[#3A5A40]/20 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0"></div>
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className="w-full h-full object-cover filter sepia-[.3] hue-rotate-[50deg] grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:filter-none"
                                            />
                                            <div className="absolute top-4 left-4 z-20 bg-[#F2E8CF]/90 backdrop-blur-sm text-[#3A5A40] px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-[#3A5A40]/10">
                                                {item.type === 'video' ? 'Video' : 'Audio'}
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                            <div className="flex items-center gap-2 text-xs text-[#3A5A40]/60 mb-3 font-bold tracking-wider uppercase">
                                                <span>{item.category}</span>
                                                <span>•</span>
                                                <span>{item.duration}</span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-[#1B261E] mb-2 leading-tight">
                                                {item.title}
                                            </h3>

                                            <p className="text-[#3A5A40]/70 text-sm leading-relaxed mb-6 font-medium">
                                                Escucha este episodio para explorar técnicas de bienestar y neurociencia aplicada.
                                            </p>

                                            {/* Audio Player Integration */}
                                            {item.type === 'audio' ? (
                                                <AudioPlayer
                                                    src={item.mediaUrl}
                                                    title={item.title}
                                                    isPlaying={playingId === item.id}
                                                    onTogglePlay={() => handlePlay(item.id)}
                                                />
                                            ) : (
                                                <div className="mt-2">
                                                    <a
                                                        href={item.mediaUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-[#3A5A40] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#2C4A33] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                                    >
                                                        <span className="material-symbols-outlined">play_circle</span>
                                                        Ver Video
                                                    </a>
                                                </div>
                                            )}

                                            {item.downloadUrl && item.type === 'audio' && (
                                                <div className="mt-4 flex justify-end">
                                                    <a
                                                        href={item.downloadUrl}
                                                        download
                                                        className="flex items-center gap-1 text-[10px] font-bold text-[#3A5A40]/50 hover:text-[#3A5A40] transition-colors uppercase tracking-widest"
                                                    >
                                                        <span className="material-symbols-outlined text-sm">download</span>
                                                        Descargar
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ARTICLES VIEW */}
                    {viewMode === 'articles' && (
                        <div className="animate-fade-in">
                            <button onClick={() => setViewMode('landing')} className="flex items-center gap-2 text-text-muted hover:text-primary mb-8 font-bold text-sm transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                                Atrás
                            </button>

                            <h2 className="text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined">article</span>
                                </span>
                                Artículos y Lecturas Recomendadas
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {loading ? (
                                    <div className="col-span-full text-center py-20">
                                        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                                        <p className="text-text-muted">Cargando artículos...</p>
                                    </div>
                                ) : posts.map((post) => (
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
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blog;
