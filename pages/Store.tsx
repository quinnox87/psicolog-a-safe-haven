import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { STORE_ITEMS } from '../constants';
import { useBooking } from '../context/BookingContext';
import PaymentModal from '../components/PaymentModal';
import StoreCard from '../components/StoreCard';
import { StoreItem } from '../types';

type ViewMode = 'landing' | 'training' | 'materials';

const Store: React.FC = () => {
    const { openModal } = useBooking();
    const [viewMode, setViewMode] = useState<ViewMode>('landing');
    const trainingItems = STORE_ITEMS.filter(item => item.category === 'Formación Especializada');
    const materialItems = STORE_ITEMS.filter(item => item.category === 'Materiales (Digitales)');

    // Payment Modal State
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<StoreItem | null>(null);

    const handlePurchaseClick = (item: StoreItem) => {
        setSelectedProduct(item);
        setIsPaymentModalOpen(true);
    };

    return (
        <div className="animate-fade-in min-h-screen bg-[#f6f7f7] store-page pb-20">
            {/* Header */}
            <div className="bg-white border-b border-[#edefec] py-20 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-4">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Formación y Materiales</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight">
                        Recursos Profesionales para <span className="text-primary">Neuropsicología</span>
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Herramientas clínicas y formación especializada basada en 9 años de experiencia y evidencia científica.
                    </p>
                    <div className="pt-6">
                        <button
                            onClick={openModal}
                            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
                        >
                            <span className="material-symbols-outlined">calendar_month</span>
                            Programa tu sesión
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 space-y-12 mt-12">

                {/* LANDING VIEW (SELECTOR) */}
                {viewMode === 'landing' && (
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-slide-up">
                        {/* Option A: Training */}
                        <button
                            onClick={() => setViewMode('training')}
                            className="group bg-white p-10 rounded-3xl border border-[#edefec] shadow-sm hover:shadow-xl hover:border-primary/30 transition-all text-left relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-4xl">school</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">Formación Especializada</h2>
                            <p className="text-text-muted leading-relaxed">
                                Cursos y webinars sobre neurorrehabilitación, tDCS, Realidad Virtual y evaluación clínica.
                            </p>
                            <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm">
                                <span>Ver cursos</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </button>

                        {/* Option B: Materials */}
                        <button
                            onClick={() => setViewMode('materials')}
                            className="group bg-white p-10 rounded-3xl border border-[#edefec] shadow-sm hover:shadow-xl hover:border-primary/30 transition-all text-left relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-4xl">description</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">Materiales y Guías</h2>
                            <p className="text-text-muted leading-relaxed">
                                Protocolos clínicos, plantillas de informes y recursos digitales listos para descargar.
                            </p>
                            <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm">
                                <span>Ver materiales</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </button>
                    </div>
                )}

                {/* TRAINING VIEW */}
                {viewMode === 'training' && (
                    <div className="animate-fade-in">
                        <button onClick={() => setViewMode('landing')} className="flex items-center gap-2 text-text-muted hover:text-primary mb-8 font-bold text-sm transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                            Atrás
                        </button>

                        <h2 className="text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                <span className="material-symbols-outlined">school</span>
                            </span>
                            Formación Especializada
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {trainingItems.map((item) => (
                                <div key={item.id} className="h-full">
                                    <StoreCard item={item} onPurchase={handlePurchaseClick} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* MATERIALS VIEW */}
                {viewMode === 'materials' && (
                    <div className="animate-fade-in">
                        <button onClick={() => setViewMode('landing')} className="flex items-center gap-2 text-text-muted hover:text-primary mb-8 font-bold text-sm transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                            Atrás
                        </button>

                        <h2 className="text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
                                <span className="material-symbols-outlined">description</span>
                            </span>
                            Materiales (Digitales)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {materialItems.map((item) => (
                                <Link to={`/tienda/${item.id}`} key={item.id} className="bg-white rounded-2xl p-6 border border-[#edefec] hover:border-primary/30 transition-all hover:shadow-lg flex flex-col md:flex-row gap-6 items-start group cursor-pointer">
                                    <div className="w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shrink-0 relative">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.imageAlt || item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex-1 w-full">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {item.tags?.map((tag, idx) => (
                                                <span key={idx} className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-bold text-text-dark mb-2 leading-snug group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-lg font-bold text-primary">{item.price.toFixed(2)}€</span>
                                            <span className="text-text-dark font-bold text-sm underline decoration-2 underline-offset-4 group-hover:text-primary transition-colors">
                                                Ver Detalles
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Cross-Link Banner */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/20 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                            <span className="material-symbols-outlined">folder_open</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-dark">¿Buscas recursos públicos?</h3>
                            <p className="text-sm text-text-muted">Accede a guías y materiales gratuitos de administraciones y asociaciones.</p>
                        </div>
                    </div>
                    <Link to="/resources" className="bg-white text-primary px-6 py-3 rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-sm whitespace-nowrap border border-primary/20">
                        Visita Recursos Gratuitos
                    </Link>
                </div>

                {/* FAQ / Info */}
                <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-[#edefec]">
                    <div className="text-center">
                        <span className="material-symbols-outlined text-3xl text-gray-400 mb-2">lock</span>
                        <h4 className="font-bold text-text-dark text-sm">Pago Seguro</h4>
                        <p className="text-xs text-text-muted mt-1">Transacciones cifradas SSL</p>
                    </div>
                    <div className="text-center">
                        <span className="material-symbols-outlined text-3xl text-gray-400 mb-2">download</span>
                        <h4 className="font-bold text-text-dark text-sm">Entrega Inmediata</h4>
                        <p className="text-xs text-text-muted mt-1">Acceso digital automático</p>
                    </div>
                    <div className="text-center">
                        <span className="material-symbols-outlined text-3xl text-gray-400 mb-2">mail</span>
                        <h4 className="font-bold text-text-dark text-sm">Soporte Directo</h4>
                        <p className="text-xs text-text-muted mt-1">Dudas resueltas por mí</p>
                    </div>
                </div>

            </div>

            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                product={selectedProduct}
            />
        </div>
    );
};

export default Store;
