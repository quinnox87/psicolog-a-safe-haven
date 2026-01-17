import React, { useState } from 'react';
import { MOCK_SESSIONS, MOCK_REPORTS, MOCK_PATIENT_MATERIALS } from '../constants';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const PrivateArea: React.FC = () => {
    const { user, login, logout, isLoading } = useAuth();

    // Consent states
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [acceptedNewsletter, setAcceptedNewsletter] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Notebook State
    const [notebookContent, setNotebookContent] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [showSaveSuccess, setShowSaveSuccess] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!acceptedTerms) {
            setLoginError('Debes aceptar la Política de Privacidad para continuar.');
            return;
        }
        setLoginError('');
        login();
    };

    const handleSaveNotebook = () => {
        if (!notebookContent.trim()) return;
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            setShowSaveSuccess(true);
            setTimeout(() => setShowSaveSuccess(false), 3000);
        }, 1500);
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-background-light flex items-center justify-center px-6 py-20 animate-fade-in">
                <div className="bg-white p-10 rounded-2xl border border-[#edefec] shadow-xl w-full max-w-md relative overflow-hidden">
                    <div className="text-center mb-8 relative z-10">
                        <span className="material-symbols-outlined text-primary text-5xl mb-4">lock_person</span>
                        <h1 className="text-2xl font-bold text-text-dark">Área de Pacientes</h1>
                        <p className="text-text-muted text-sm mt-2">Acceso seguro a tu historial y recursos clínicos.</p>
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
                                    He leído y acepto la <Link to="/politica-privacidad" target="_blank" className="font-bold underline decoration-primary/30 underline-offset-2 hover:decoration-primary text-primary">Política de Privacidad</Link> y el tratamiento datos de salud.
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-terracotta/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fcfcfb] animate-fade-in">
            <header className="bg-white border-b border-[#edefec] py-4 px-6 sticky top-0 z-20 shadow-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-text-dark">Hola, {user.name.split(' ')[0]}</h1>
                            <p className="text-text-muted text-xs">Paciente verificado</p>
                        </div>
                    </div>
                    <button onClick={logout} className="text-xs font-bold text-gray-400 hover:text-red-500 flex items-center gap-2 transition-colors px-4 py-2 hover:bg-red-50 rounded-lg">
                        <span className="material-symbols-outlined text-lg">logout</span>
                        <span className="hidden sm:inline">Cerrar Sesión</span>
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">

                {/* Security Disclaimer */}
                <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600 shrink-0">lock</span>
                    <p className="text-xs text-blue-800 leading-relaxed">
                        <strong>Entorno Seguro:</strong> Todos los documentos y notas en esta sección están cifrados y son estrictamente confidenciales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

                    {/* MODULE 1: SESSION NOTES */}
                    <section className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-text-dark flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">history_edu</span>
                                Historial de Sesiones
                            </h2>
                            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">{MOCK_SESSIONS.length} Sesiones</span>
                        </div>
                        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
                            {MOCK_SESSIONS.map((session) => (
                                <div key={session.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                            {session.date}
                                        </span>
                                        <a href={session.downloadUrl} className="text-xs text-primary font-bold hover:underline flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">download</span>
                                            Resumen
                                        </a>
                                    </div>
                                    <h3 className="font-bold text-text-dark text-sm mb-1">{session.summaryTitle}</h3>
                                    <p className="text-xs text-text-muted leading-relaxed line-clamp-2">{session.doctorNotes}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* MODULE 2: CLINICAL REPORTS */}
                    <section className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-text-dark flex items-center gap-2">
                                <span className="material-symbols-outlined text-terracotta">description</span>
                                Informes Clínicos
                            </h2>
                            {MOCK_REPORTS.length === 0 && <span className="text-xs bg-gray-100 text-gray-400 px-2 py-1 rounded-lg">No disponibles</span>}
                        </div>

                        {MOCK_REPORTS.length > 0 ? (
                            <div className="space-y-3">
                                {MOCK_REPORTS.map((report) => (
                                    <div key={report.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-white hover:bg-gray-50 transition-colors group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center text-terracotta">
                                                <span className="material-symbols-outlined">article</span>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-text-dark">{report.title}</h3>
                                                <p className="text-xs text-gray-400">{report.type} • {report.date}</p>
                                            </div>
                                        </div>
                                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-sm">download</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-sm text-text-muted italic">No hay informes disponibles para descargar en este momento.</p>
                            </div>
                        )}
                    </section>

                    {/* MODULE 3: REHABILITATION MATERIALS */}
                    <section className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-lg font-bold text-text-dark flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-orange-500">folder_special</span>
                            Materiales de Rehabilitación
                        </h2>
                        <div className="grid grid-cols-1 gap-3">
                            {MOCK_PATIENT_MATERIALS.map((material) => (
                                <div key={material.id} className="flex gap-4 p-4 rounded-xl bg-orange-50/50 border border-orange-100 hover:border-orange-300 transition-colors">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${material.type === 'PDF' ? 'bg-red-50 text-red-500' :
                                        material.type === 'Audio' ? 'bg-purple-50 text-purple-500' : 'bg-blue-50 text-blue-500'
                                        }`}>
                                        <span className="material-symbols-outlined text-2xl">
                                            {material.type === 'PDF' ? 'picture_as_pdf' : material.type === 'Audio' ? 'headphones' : 'play_circle'}
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-sm font-bold text-text-dark mb-1">{material.title}</h3>
                                        <p className="text-xs text-text-muted mb-2">{material.description}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{material.type}</span>
                                            <span className="text-[10px] text-gray-300">•</span>
                                            <span className="text-[10px] text-gray-400">Asignado: {material.assignedDate}</span>
                                        </div>
                                    </div>
                                    <button className="shrink-0 self-center w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">download</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* MODULE 4: PATIENT NOTEBOOK */}
                    <section className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold text-text-dark flex items-center gap-2">
                                <span className="material-symbols-outlined text-blue-500">edit_note</span>
                                Cuaderno del Paciente
                            </h2>
                            {showSaveSuccess && (
                                <span className="text-xs font-bold text-green-600 flex items-center gap-1 animate-fade-in">
                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                    Guardado
                                </span>
                            )}
                        </div>
                        <p className="text-xs text-text-muted mb-4">
                            Anota aquí tus dudas, dificultades o temas que te gustaría tratar en la próxima sesión.
                        </p>
                        <textarea
                            className="w-full h-40 p-4 rounded-xl border border-gray-200 bg-yellow-50/30 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm resize-none"
                            placeholder="Ej: Esta semana me he sentido más ansioso por las tardes..."
                            value={notebookContent}
                            onChange={(e) => setNotebookContent(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleSaveNotebook}
                                disabled={isSaving || !notebookContent.trim()}
                                className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-sm"
                            >
                                {isSaving ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        Guardando...
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined text-lg">save</span>
                                        Guardar Notas
                                    </>
                                )}
                            </button>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default PrivateArea;

