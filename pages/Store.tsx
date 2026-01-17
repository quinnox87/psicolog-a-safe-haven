import React from 'react';
import { STORE_ITEMS } from '../constants';

const Store: React.FC = () => {
    return (
        <div className="animate-fade-in min-h-screen bg-[#f6f7f7] store-page">
            {/* Header */}
            <div className="bg-white border-b border-[#edefec] py-16 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-4">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Tienda y Recursos</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight">
                        Herramientas para tu <span className="text-primary">Bienestar</span>
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Material de actividades, cuadernos y recursos de psicoterapia seleccionados para complementar tu proceso.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {STORE_ITEMS.map((item) => (
                        <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-[#edefec] hover:border-primary/30 transition-all hover:shadow-xl flex flex-col h-full">
                            {/* Image */}
                            <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-text-dark shadow-sm">
                                    {item.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                                    {item.description}
                                </p>

                                {/* Footer with Price and Action */}
                                <div className="pt-6 border-t border-[#edefec] flex items-center justify-between">
                                    <div>
                                        <span className="block text-[#afb6ad] text-xs font-bold uppercase tracking-wider">Precio</span>
                                        <span className="text-xl font-bold text-primary">{item.price.toFixed(2)}€</span>
                                    </div>
                                    <button className="bg-text-dark text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary transition-colors shadow-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">shopping_bag</span>
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Banner */}
                <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-4">verified_user</span>
                    <h3 className="text-2xl font-bold text-text-dark mb-4">Compra Segura y Descarga Inmediata</h3>
                    <p className="text-text-muted max-w-2xl mx-auto mb-8">
                        Todos los recursos son digitales. Una vez completado el pago, recibirás un enlace de descarga en tu correo electrónico.
                        Si tienes alguna duda, contáctame.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Store;
