import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const post = BLOG_POSTS.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-2xl font-bold text-text-dark mb-4">Artículo no encontrado</h2>
                <button
                    onClick={() => navigate('/blog')}
                    className="text-primary font-bold hover:underline"
                >
                    Volver al Blog
                </button>
            </div>
        );
    }

    return (
        <div className="animate-fade-in min-h-screen bg-[#fcfcfb] pb-20">
            {/* Header Image */}
            <div className="h-[40vh] md:h-[50vh] relative overflow-hidden">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <span className="bg-primary/90 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                        {post.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white max-w-4xl leading-tight drop-shadow-md">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-white/90 mt-6 font-medium text-sm md:text-base">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 -mt-20 relative z-10">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#edefec]">
                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-text-muted hover:text-primary transition-colors mb-8 font-medium"
                    >
                        <span className="material-symbols-outlined mr-2">arrow_back</span>
                        Volver
                    </Link>

                    <div
                        className="prose prose-lg prose-slate max-w-none prose-headings:text-text-dark prose-p:text-text-muted prose-a:text-primary"
                        dangerouslySetInnerHTML={{ __html: post.content || '' }}
                    />

                    <div className="border-t border-[#edefec] mt-12 pt-8">
                        <h3 className="font-bold text-text-dark mb-4">Comparte este artículo</h3>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full bg-[#f4f3f0] flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-all">
                                <span className="material-symbols-outlined text-lg">share</span>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-[#f4f3f0] flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-all">
                                <span className="material-symbols-outlined text-lg">favorite</span>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
