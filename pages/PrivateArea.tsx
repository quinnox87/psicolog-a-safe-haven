import React, { useState } from 'react';
import { MOCK_SESSIONS } from '../constants';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const PrivateArea: React.FC = () => {
    const { user, login, logout, isLoading } = useAuth();

    // Consent states
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [acceptedNewsletter, setAcceptedNewsletter] = useState(false);
    const [loginError, setLoginError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!acceptedTerms) {
            setLoginError('Debes aceptar la Política de Privacidad para continuar.');
            return;
        }
        setLoginError('');
        login();
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-background-light flex items-center justify-center px-6 py-20 animate-fade-in">
                <div className="bg-white p-10 rounded-2xl border border-[#edefec] shadow-xl w-full max-w-md relative overflow-hidden">
                    <div className="text-center mb-8 relative z-10">
                        <span className="material-symbols-outlined text-primary text-5xl mb-4">lock_person</span>
                        <h1 className="text-2xl font-bold text-text-dark">Área de Clientes</h1>
                        <p className="text-text-muted text-sm mt-2">Accede a tus materiales y recursos formativos.</p>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <button
                            onClick={handleLogin}
                            disabled={!acceptedTerms || isLoading}
                            className={`w-full py-4 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-3 ${!acceptedTerms
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-primary text-white hover:bg-primary-dark shadow-primary/20 hover:shadow-primary/40'
                                }`}
                        >
                            {isLoading ? (
                                <span>Cargando...</span>
                            ) : (
                                <>
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                                    <span>Iniciar Sesión con Google</span>
                                </>
                            )}
                        </button>

                        {loginError && (
                            <div className="p-3 bg-red-50 text-red-600 text-xs rounded-lg font-bold text-center">
                                {loginError}
                            </div>
                        )}

                        <div className="space-y-4 pt-2">
                            <label className="flex items-start gap-3 text-sm text-text-muted cursor-pointer group">
                                <div className="relative flex items-center mt-0.5">
                                    <input
                                        type="checkbox"
                                        checked={acceptedTerms}
                                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                                        className="peer h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20 cursor-pointer appearance-none border checked:bg-primary transition-all"
                                    />
                                    <span className="material-symbols-outlined text-white text-[10px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100">check</span>
                                </div>
                                <span className="leading-tight group-hover:text-text-dark transition-colors">
                                    He leído y acepto la <Link to="/politica-privacidad" target="_blank" className="font-bold underline decoration-primary/30 underline-offset-2 hover:decoration-primary text-primary">Política de Privacidad</Link> y el tratamiento de mis datos para la gestión del servicio.
                                </span>
                            </label>

                            <label className="flex items-start gap-3 text-sm text-text-muted cursor-pointer group">
                                <div className="relative flex items-center mt-0.5">
                                    <input
                                        type="checkbox"
                                        checked={acceptedNewsletter}
                                        onChange={(e) => setAcceptedNewsletter(e.target.checked)}
                                        className="peer h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20 cursor-pointer appearance-none border checked:bg-primary transition-all"
                                    />
                                    <span className="material-symbols-outlined text-white text-[10px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100">check</span>
                                </div>
                                <span className="leading-tight group-hover:text-text-dark transition-colors">
                                    (Opcional) Deseo recibir novedades sobre nuevos cursos, webinars y material técnico especializado.
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-terracotta/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
                </div>
                <p className="mt-8 text-xs text-center text-text-muted max-w-sm px-6">
                    Este sitio está protegido por reCAPTCHA y se aplican la Política de Privacidad y los Términos de Servicio de Google.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fcfcfb] animate-fade-in">
            <header className="bg-white border-b border-[#edefec] py-6 px-6 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-text-dark">Hola, {user.name.split(' ')[0]}</h1>
                            <p className="text-text-muted text-xs">ID Alumno: {user.email}</p>
                        </div>
                    </div>
                    <button onClick={logout} className="text-sm font-bold text-gray-400 hover:text-red-500 flex items-center gap-2 transition-colors">
                        <span className="material-symbols-outlined text-lg">logout</span>
                        <span className="hidden sm:inline">Cerrar Sesión</span>
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">

                {/* Dashboard Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Left Column: Navigation & Quick Stats */}
                    <div className="space-y-6">
                        <nav className="bg-white rounded-2xl overflow-hidden border border-[#edefec] shadow-sm">
                            <div className="p-4 border-b border-[#edefec] font-bold text-xs uppercase tracking-wider text-text-muted">Menú Principal</div>
                            <ul className="divide-y divide-[#edefec]">
                                <li>
                                    <button className="w-full text-left px-4 py-3 text-sm font-bold text-primary bg-primary/5 border-l-4 border-primary flex items-center gap-3">
                                        <span className="material-symbols-outlined">dashboard</span>
                                        Panel de Control
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-4 py-3 text-sm font-medium text-text-muted hover:bg-gray-50 hover:text-text-dark transition-colors flex items-center gap-3">
                                        <span className="material-symbols-outlined">school</span>
                                        Mis Cursos
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-4 py-3 text-sm font-medium text-text-muted hover:bg-gray-50 hover:text-text-dark transition-colors flex items-center gap-3">
                                        <span className="material-symbols-outlined">folder_shared</span>
                                        Materiales Comprados
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-4 py-3 text-sm font-medium text-text-muted hover:bg-gray-50 hover:text-text-dark transition-colors flex items-center gap-3">
                                        <span className="material-symbols-outlined">person</span>
                                        Mi Perfil y Privacidad
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <div className="bg-gradient-to-br from-primary to-[#4a6140] rounded-2xl p-6 text-white shadow-lg">
                            <span className="material-symbols-outlined text-4xl mb-4 opacity-80">grade</span>
                            <h3 className="font-bold text-lg mb-1">Usuario Premium</h3>
                            <p className="text-xs opacity-80 mb-4">Tienes acceso a actualizaciones prioritarias de tus materiales.</p>
                            <Link to="/tienda" className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">
                                Ver Novedades
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="md:col-span-2 space-y-8">

                        {/* Recent Activity / Content */}
                        <section>
                            <h2 className="text-xl font-bold text-text-dark mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">history</span>
                                Actividad Reciente
                            </h2>

                            <div className="bg-white rounded-2xl border border-[#edefec] shadow-sm overflow-hidden">
                                {/* Mock Content for now - Empty State */}
                                <div className="p-12 text-center flex flex-col items-center justify-center">
                                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
                                        <span className="material-symbols-outlined text-3xl">inbox</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-text-dark mb-2">No hay actividad reciente</h3>
                                    <p className="text-text-muted text-sm max-w-sm mb-6">
                                        Tus compras de cursos y materiales aparecerán aquí. ¡Comienza tu formación hoy mismo!
                                    </p>
                                    <Link to="/tienda" className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-dark transition-colors shadow-sm">
                                        Explorar Tienda
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* Downloadable Materials (Example) */}
                        <section>
                            <h2 className="text-xl font-bold text-text-dark mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">download</span>
                                Mis Descargas Seguras
                            </h2>
                            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-start gap-3">
                                <span className="material-symbols-outlined text-orange-500 shrink-0">info</span>
                                <p className="text-xs text-orange-800 leading-relaxed">
                                    <strong>Nota de Seguridad:</strong> Los enlaces de descarga son temporales y únicos para tu usuario. No compartas tus archivos con terceros, ya que están protegidos por derechos de autor y marca de agua digital.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PrivateArea;
