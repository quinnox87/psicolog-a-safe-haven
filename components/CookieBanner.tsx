import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'false');
        setIsVisible(false);
    };

    const handleConfigure = () => {
        // Placeholder for configuration logic
        alert('Configuración de cookies no disponible en esta demo.');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-fade-in-up">
            <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] border border-[#edefec] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">

                <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 text-primary font-bold">
                        <span className="material-symbols-outlined">cookie</span>
                        <h3 className="text-lg">Valoramos tu privacidad</h3>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                        En esta web utilizamos cookies propias y de terceros para asegurar que tu experiencia sea fluida y segura.
                        Al ser una web de psicología, tu privacidad es nuestra prioridad. ¿Aceptas el uso de cookies para seguir navegando?
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                    <button
                        onClick={handleAccept}
                        className="flex-1 sm:flex-none bg-primary text-white font-bold py-2.5 px-6 rounded-xl hover:bg-primary-dark transition-all shadow-sm"
                    >
                        Aceptar todas
                    </button>
                    <button
                        onClick={handleConfigure}
                        className="flex-1 sm:flex-none border border-primary text-primary font-bold py-2.5 px-6 rounded-xl hover:bg-primary/5 transition-all bg-transparent"
                    >
                        Configurar
                    </button>
                    <button
                        onClick={handleReject}
                        className="flex-1 sm:flex-none text-text-muted font-bold py-2.5 px-4 rounded-xl hover:text-text-dark transition-all text-sm"
                    >
                        Rechazar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
