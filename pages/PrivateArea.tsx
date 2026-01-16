import React, { useState } from 'react';
import { MOCK_SESSIONS } from '../constants';

const PrivateArea: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ id: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: INTEGRACIÓN BACKEND - Autenticación real
    if (loginData.id && loginData.password) {
        setIsLoggedIn(true);
    }
  };

  const handleLogout = () => setIsLoggedIn(false);

  if (!isLoggedIn) {
    return (
        <div className="min-h-screen bg-background-light flex items-center justify-center px-6 py-20 animate-fade-in">
            <div className="bg-white p-10 rounded-2xl border border-[#edefec] shadow-xl w-full max-w-md">
                <div className="text-center mb-8">
                    <span className="material-symbols-outlined text-primary text-5xl mb-4">lock</span>
                    <h1 className="text-2xl font-bold text-text-dark">Acceso Pacientes</h1>
                    <p className="text-text-muted text-sm mt-2">Introduce tus credenciales para acceder a tu historial y documentos.</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-text-dark mb-2">ID Paciente / Email</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            value={loginData.id}
                            onChange={(e) => setLoginData({...loginData, id: e.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-text-dark mb-2">Contraseña</label>
                        <input 
                            type="password" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-md">
                        Entrar al Área Privada
                    </button>
                    <div className="text-center text-xs text-text-muted mt-4">
                        <a href="#" className="hover:underline">¿Olvidaste tu contraseña?</a>
                    </div>
                </form>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfb] animate-fade-in">
        <header className="bg-white border-b border-[#edefec] py-6 px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-text-dark">Área Privada</h1>
                    <p className="text-text-muted text-sm">Bienvenido de nuevo, Paciente.</p>
                </div>
                <button onClick={handleLogout} className="text-sm font-bold text-accent-blue hover:text-text-dark flex items-center gap-2">
                    <span className="material-symbols-outlined">logout</span> Salir
                </button>
            </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <h3 className="font-bold text-text-dark mb-2">Próxima Sesión</h3>
                        <div className="flex items-center gap-3 text-primary mb-1">
                            <span className="material-symbols-outlined">calendar_month</span>
                            <span className="font-bold">24 Nov 2023</span>
                        </div>
                        <div className="flex items-center gap-3 text-primary mb-4">
                            <span className="material-symbols-outlined">schedule</span>
                            <span>17:00 - 18:00</span>
                        </div>
                        <button className="w-full bg-white border border-primary text-primary py-2 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-all">
                            Cambiar Cita
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm">
                        <h3 className="font-bold text-text-dark mb-4">Mis Datos</h3>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li className="flex justify-between">
                                <span>Expediente:</span> <span className="font-mono text-text-dark">P-2023-884</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Estado:</span> <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full text-xs">Activo</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Session List */}
                <div className="md:col-span-2">
                    <h2 className="text-xl font-bold text-text-dark mb-6">Resumen de Sesiones e Informes</h2>
                    <div className="space-y-4">
                        {MOCK_SESSIONS.map((session) => (
                            <div key={session.id} className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm hover:shadow-md transition-all">
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                                    <h3 className="font-bold text-text-dark text-lg">{session.summaryTitle}</h3>
                                    <span className="text-sm font-bold text-text-muted bg-background-light px-3 py-1 rounded-full w-fit">
                                        {session.date}
                                    </span>
                                </div>
                                <p className="text-text-muted text-sm leading-relaxed mb-6">
                                    {session.doctorNotes}
                                </p>
                                <div className="border-t border-gray-100 pt-4 flex justify-end">
                                    {/* TODO: INTEGRACIÓN BACKEND - Link real de descarga segura */}
                                    <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                                        <span className="material-symbols-outlined">download</span>
                                        Descargar Resumen (PDF)
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
};

export default PrivateArea;
