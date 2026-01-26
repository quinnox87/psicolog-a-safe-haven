import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 animate-fade-in">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
                <span className="material-symbols-outlined text-5xl">explore_off</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-primary/20 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-4 tracking-tight">
                Página no encontrada
            </h2>
            <p className="text-text-muted max-w-md mx-auto mb-10 text-lg leading-relaxed">
                Lo sentimos, parece que la ruta que buscas no existe o ha sido movida a otra ubicación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/"
                    className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
                >
                    <span className="material-symbols-outlined">home</span>
                    Volver al Inicio
                </Link>
                <Link
                    to="/services"
                    className="bg-white text-text-dark border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2"
                >
                    Ver Servicios
                </Link>
            </div>

            <div className="mt-20 pt-10 border-t border-gray-100 max-w-xs mx-auto">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                    Joaquín Pabon
                </p>
            </div>
        </div>
    );
};

export default NotFound;
