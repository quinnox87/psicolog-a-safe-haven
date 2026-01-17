import React from 'react';
import { Link } from 'react-router-dom';
import { STORE_ITEMS } from '../constants';

const Store: React.FC = () => {
    const trainingItems = STORE_ITEMS.filter(item => item.category === 'Formación Especializada');
    const materialItems = STORE_ITEMS.filter(item => item.category === 'Materiales (Digitales)');

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
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 space-y-20 mt-16">

                {/* Training Section */}
                <section>
                    <h2 className="text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">school</span>
                        Formación Especializada
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {trainingItems.map((item) => (
                            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-[#edefec] hover:border-primary/30 transition-all hover:shadow-xl flex flex-col h-full">
                                <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                        {item.tags?.map((tag, idx) => (
                                            <span key={idx} className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-text-dark shadow-sm uppercase tracking-wide">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-text-muted text-base leading-relaxed mb-6 flex-grow">
                                        {item.description}
                                    </p>
                                    <div className="pt-6 border-t border-[#edefec] flex items-center justify-between">
                                        <div>
                                            <span className="block text-[#afb6ad] text-xs font-bold uppercase tracking-wider">Precio</span>
                                            <span className="text-2xl font-bold text-primary">{item.price.toFixed(2)}€</span>
                                        </div>
                                        <button className="bg-text-dark text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-primary transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                                            {item.ctaLabel || 'Comprar'}
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>



                {/* Materials Section */}
                <section>
                    <h2 className="text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">description</span>
                        Materiales (Digitales)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {materialItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl p-6 border border-[#edefec] hover:border-primary/30 transition-all hover:shadow-lg flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shrink-0 relative group">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
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
                                    <h3 className="text-xl font-bold text-text-dark mb-2 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-lg font-bold text-primary">{item.price.toFixed(2)}€</span>
                                        <button className="text-text-dark font-bold text-sm hover:text-primary underline decoration-2 underline-offset-4 transition-colors">
                                            {item.ctaLabel || 'Comprar'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

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
        </div>
    );
};

export default Store;
