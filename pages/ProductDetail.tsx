import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { STORE_ITEMS } from '../constants';
import PaymentModal from '../components/PaymentModal';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const product = STORE_ITEMS.find(item => item.id === id);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-2xl font-bold text-text-dark mb-4">Producto no encontrado</h2>
                <Link to="/tienda" className="text-primary font-bold hover:underline">Volver a la Tienda</Link>
            </div>
        );
    }

    return (
        <div className="animate-fade-in min-h-screen bg-[#fcfcfb] pb-20">
            {/* Header / Nav */}
            <div className="bg-white border-b border-[#edefec] py-6 sticky top-[72px] z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
                    <button
                        onClick={() => navigate('/tienda')}
                        className="flex items-center gap-2 text-text-muted hover:text-primary font-bold text-sm transition-colors py-2"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                        Volver a la Tienda
                    </button>
                    <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
                    <span className="text-xs font-bold text-[#3A5A40]/50 uppercase tracking-widest hidden md:block">{product.category}</span>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Image */}
                    <div className="space-y-8 sticky top-32">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#edefec] bg-white group relative">
                            <img
                                src={product.imageUrl}
                                alt={product.imageAlt || product.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Quick Stats / Tags */}
                        <div className="flex flex-wrap gap-2">
                            {product.tags?.map((tag, idx) => (
                                <span key={idx} className="bg-[#E8DFCA]/30 text-[#3A5A40] px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#3A5A40]/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Info */}
                    <div className="animate-slide-up">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
                            {product.title}
                        </h1>

                        <div className="flex items-end gap-4 mb-8 pb-8 border-b border-[#edefec]">
                            <span className="text-4xl font-bold text-primary">{product.price.toFixed(2)}€</span>
                            <button
                                onClick={() => setIsPaymentModalOpen(true)}
                                className="ml-auto bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined">shopping_cart</span>
                                {product.ctaLabel || 'Comprar Ahora'}
                            </button>
                        </div>

                        <div className="space-y-10">
                            {/* Description */}
                            <section>
                                <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">info</span>
                                    Descripción
                                </h3>
                                <p className="text-text-muted leading-relaxed text-lg">
                                    {product.fullDescription || product.description}
                                </p>
                            </section>

                            {/* Features */}
                            {product.features && (
                                <section className="bg-[#f6f7f7] rounded-2xl p-6 border border-[#edefec]">
                                    <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">fact_check</span>
                                        Ficha Técnica
                                    </h3>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-sm text-primary mt-1">check_circle</span>
                                                <span className="text-text-muted">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {/* Benefits / Evidence */}
                            {product.benefits && (
                                <section>
                                    <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">psychology</span>
                                        Beneficios Clínicos
                                    </h3>
                                    <ul className="space-y-3">
                                        {product.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                                                <span className="text-text-muted">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                product={product}
            />
        </div>
    );
};

export default ProductDetail;
