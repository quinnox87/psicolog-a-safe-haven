import React, { useState } from 'react';
import { MOCK_SESSIONS, MOCK_REPORTS, MOCK_PATIENT_MATERIALS } from '../constants';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PrivateArea: React.FC = () => {
    const { user, login, logout, isLoading } = useAuth();

    // Consent states
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Notebook State
    const [notebookContent, setNotebookContent] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [showSaveSuccess, setShowSaveSuccess] = useState(false);

    // Preview State
    const [previewFile, setPreviewFile] = useState<{ url: string; type: string; title: string } | null>(null);

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

        // Construct mailto link
        const subject = `Nota Paciente Web - ${user?.name || 'Paciente'}`;
        const body = encodeURIComponent(notebookContent);
        const mailtoLink = `mailto:joaquinpavonperez@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Simulate success UI
        setTimeout(() => {
            setIsSaving(false);
            setShowSaveSuccess(true);
            setTimeout(() => setShowSaveSuccess(false), 3000);
        }, 1000);
    };

    const handleDownload = (fileName: string, type: string) => {
        alert(`Iniciando descarga segura de: ${fileName} (${type})\n\nEste archivo está cifrado para tu uso personal.`);
    };

    const handlePreview = (file: { title: string; type: string; downloadUrl: string }) => {
        let url = file.downloadUrl;
        if (url === '#' || !url) {
            if (file.type === 'PDF' || file.type === 'Evaluación' || file.type === 'Seguimiento') {
                url = '/area-privada/modelo-informe.pdf';
            } else if (file.type === 'Audio') {
                url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
            } else if (file.type === 'Image') {
                url = 'https://via.placeholder.com/800x600';
            }
        }
        setPreviewFile({ url, type: file.type, title: file.title });
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-[#f8f9f8] flex items-center justify-center px-6 py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -mr-64 -mt-64 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-terracotta/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-10 md:p-12 rounded-[40px] border border-[#edefec] shadow-2xl w-full max-w-md relative z-10 transition-all duration-500 hover:shadow-primary/5"
                >
                    <div className="text-center mb-10">
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-6 shadow-sm">
                            <span className="material-symbols-outlined text-4xl">lock_open</span>
                        </div>
                        <h1 className="text-3xl font-bold text-text-dark font-display tracking-tight">Acceso Privado</h1>
                        <p className="text-text-muted text-base mt-3">Gestiona tu proceso terapéutico de forma <span className="text-primary font-bold">segura y confidencial</span>.</p>
                    </div>

                    <div className="space-y-8">
                        <button
                            onClick={handleLogin}
                            disabled={!acceptedTerms || isLoading}
                            className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-4 group relative overflow-hidden ${!acceptedTerms
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-100'
                                : 'bg-text-dark text-white hover:bg-black shadow-xl active:scale-95'
                                }`}
                        >
                            {isLoading ? (
                                <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : (
                                <>
                                    <div className="bg-white p-1 rounded-full group-hover:scale-110 transition-transform">
                                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 transition-transform" />
                                    </div>
                                    <span className="font-display tracking-wide">Acceder con Google</span>
                                </>
                            )}
                        </button>

                        <AnimatePresence>
                            {loginError && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="p-4 bg-red-50 text-red-600 text-sm rounded-2xl font-bold text-center border border-red-100"
                                >
                                    {loginError}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="pt-2">
                            <label className="flex items-start gap-4 text-sm text-text-muted cursor-pointer group p-2 hover:bg-gray-50 rounded-xl transition-colors">
                                <div className="relative flex items-center mt-0.5">
                                    <input
                                        type="checkbox"
                                        checked={acceptedTerms}
                                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                                        className="peer h-5 w-5 rounded-lg border-gray-300 text-primary focus:ring-primary/20 cursor-pointer appearance-none border checked:bg-primary transition-all"
                                    />
                                    <span className="material-symbols-outlined text-white text-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 font-bold">check</span>
                                </div>
                                <span className="leading-relaxed group-hover:text-text-dark transition-colors">
                                    Confirmo que he leído y acepto la <Link to="/politica-privacidad" target="_blank" className="font-bold underline decoration-primary/30 underline-offset-4 hover:decoration-primary text-primary transition-all">Política de Privacidad</Link> y el tratamiento de mis datos clínicos.
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-bold">Conexión Segura SSL 256-bit</p>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fcfcfb] animate-fade-in relative pb-20">
            <header className="bg-white/80 backdrop-blur-lg border-b border-[#edefec] py-5 px-6 sticky top-0 z-20 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-display font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105 uppercase">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-text-dark font-display leading-tight tracking-tight">Bienvenido, {user.name.split(' ')[0]}</h1>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest">Canal de Paciente Cifrado</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={logout} className="text-sm font-bold text-text-muted hover:text-red-500 flex items-center gap-2 transition-all px-4 py-2 hover:bg-red-50 rounded-xl group font-display">
                        <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform">logout</span>
                        <span className="hidden sm:inline">Finalizar Sesión</span>
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-8 rounded-[32px] border border-[#edefec] shadow-sm flex items-center gap-5 group hover:border-primary/20 transition-all card-hover">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white shadow-sm">
                            <span className="material-symbols-outlined text-3xl">event</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Próxima Cita</p>
                            <h3 className="text-xl font-bold text-text-dark font-display tracking-wide">28 Ene, 16:30</h3>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-[32px] border border-[#edefec] shadow-sm flex items-center gap-5 group hover:border-primary/20 transition-all card-hover">
                        <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center transition-colors group-hover:bg-green-600 group-hover:text-white shadow-sm">
                            <span className="material-symbols-outlined text-3xl">description</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Informes Listos</p>
                            <h3 className="text-xl font-bold text-text-dark font-display tracking-wide">2 Pendientes</h3>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-[32px] border border-[#edefec] shadow-sm flex items-center gap-5 group hover:border-primary/20 transition-all card-hover">
                        <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center transition-colors group-hover:bg-purple-600 group-hover:text-white shadow-sm">
                            <span className="material-symbols-outlined text-3xl">fitness_center</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Materiales Hoy</p>
                            <h3 className="text-xl font-bold text-text-dark font-display tracking-wide">4 Ejercicios</h3>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    <section className="bg-white p-8 md:p-10 rounded-[40px] border border-[#edefec] shadow-sm card-hover">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-text-dark flex items-center gap-4 font-display">
                                <span className="material-symbols-outlined text-primary p-3 bg-primary/5 rounded-2xl">history_edu</span>
                                Historial de Sesiones
                            </h2>
                            <span className="text-[10px] font-bold text-primary bg-primary/10 px-4 py-2 rounded-full uppercase tracking-[0.1em]">{MOCK_SESSIONS.length} Registros</span>
                        </div>
                        <div className="space-y-5 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                            {MOCK_SESSIONS.map((session) => (
                                <div key={session.id} className="p-6 rounded-3xl bg-[#fcfcfb] border border-[#edefec] hover:border-primary/20 transition-all group/item shadow-sm hover:shadow-md">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-gray-100 shadow-sm">
                                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                            {session.date}
                                        </span>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handlePreview({ title: session.summaryTitle, type: 'Evaluación', downloadUrl: session.downloadUrl })}
                                                className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm group-hover/item:scale-105"
                                                title="Ver Online"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                            <button
                                                onClick={() => handleDownload(session.summaryTitle, 'Resumen')}
                                                className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm group-hover/item:scale-105"
                                                title="Descargar PDF"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">download</span>
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-text-dark text-lg mb-2 group-hover/item:text-primary transition-colors cursor-pointer font-display tracking-tight" onClick={() => handlePreview({ title: session.summaryTitle, type: 'Evaluación', downloadUrl: session.downloadUrl })}>
                                        {session.summaryTitle}
                                    </h3>
                                    <p className="text-sm text-text-muted leading-relaxed line-clamp-2 italic opacity-80">"{session.doctorNotes}"</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 md:p-10 rounded-[40px] border border-[#edefec] shadow-sm card-hover">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-text-dark flex items-center gap-4 font-display">
                                <span className="material-symbols-outlined text-terracotta p-3 bg-terracotta/5 rounded-2xl">description</span>
                                Informes Clínicos
                            </h2>
                            {MOCK_REPORTS.length > 0 && <span className="text-[10px] font-bold text-terracotta bg-terracotta/10 px-4 py-2 rounded-full uppercase tracking-[0.1em]">Seguros</span>}
                        </div>

                        {MOCK_REPORTS.length > 0 ? (
                            <div className="space-y-5">
                                {MOCK_REPORTS.map((report) => (
                                    <div key={report.id} className="flex items-center justify-between p-5 rounded-3xl border border-gray-100 bg-[#f9faf9] hover:bg-white hover:border-terracotta/30 transition-all group cursor-pointer shadow-sm hover:shadow-xl" onClick={() => handlePreview(report)}>
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-terracotta shadow-sm transition-transform group-hover:rotate-3 group-hover:scale-110">
                                                <span className="material-symbols-outlined text-3xl">article</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-text-dark group-hover:text-primary transition-colors font-display tracking-wide">{report.title}</h3>
                                                <div className="flex items-center gap-3 mt-1">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{report.type}</span>
                                                    <span className="text-gray-200">|</span>
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{report.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleDownload(report.title, 'Informe'); }}
                                            className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                                            title="Descargar"
                                        >
                                            <span className="material-symbols-outlined text-2xl">download</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-gray-50/50 rounded-[32px] border border-dashed border-gray-200">
                                <span className="material-symbols-outlined text-gray-200 text-6xl mb-4">folder_off</span>
                                <p className="text-sm text-text-muted italic max-w-[240px] mx-auto">Tu historial de informes está vacío por el momento.</p>
                            </div>
                        )}
                    </section>

                    <section className="bg-white p-8 md:p-10 rounded-[40px] border border-[#edefec] shadow-sm card-hover">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-text-dark flex items-center gap-4 font-display">
                                <span className="material-symbols-outlined text-orange-500 p-3 bg-orange-50 rounded-2xl">folder_special</span>
                                Pauta de Rehabilitación
                            </h2>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                            </span>
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            {MOCK_PATIENT_MATERIALS.map((material) => (
                                <div key={material.id} className="flex gap-6 p-6 rounded-[32px] bg-white border border-gray-100 hover:border-orange-200 transition-all cursor-pointer group shadow-sm hover:shadow-2xl hover:-translate-y-1" onClick={() => handlePreview(material)}>
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110 ${material.type === 'PDF' ? 'bg-red-50 text-red-500' :
                                        material.type === 'Audio' ? 'bg-purple-50 text-purple-500' : 'bg-blue-50 text-blue-500'
                                        }`}>
                                        <span className="material-symbols-outlined text-3xl">
                                            {material.type === 'PDF' ? 'picture_as_pdf' : material.type === 'Audio' ? 'headphones' : 'play_circle'}
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold text-text-dark mb-1 group-hover:text-primary transition-colors font-display tracking-wide">{material.title}</h3>
                                        <p className="text-sm text-text-muted mb-4 leading-relaxed line-clamp-2">{material.description}</p>
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-lg border border-primary/10">{material.type}</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Asignado: {material.assignedDate}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 md:p-10 rounded-[40px] border border-[#edefec] shadow-sm card-hover relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50/50 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <div className="flex items-center justify-between mb-1">
                            <h2 className="text-2xl font-bold text-text-dark flex items-center gap-4 font-display">
                                <span className="material-symbols-outlined text-blue-500 p-3 bg-blue-50 rounded-2xl">edit_note</span>
                                Notas para la Sesión
                            </h2>
                            {showSaveSuccess && (
                                <span className="text-[10px] font-bold text-green-600 flex items-center gap-2 animate-fade-in bg-green-50 px-3 py-1.5 rounded-full">
                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                    Guardado
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-text-muted mb-8 italic opacity-70">
                            Anota tus inquietudes para tratarlas en nuestra próxima cita.
                        </p>
                        <textarea
                            className="w-full h-48 p-6 rounded-[24px] border border-gray-100 bg-[#f9faf9] focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm resize-none shadow-inner leading-relaxed"
                            placeholder="Ej: He notado dificultades con la memoria de trabajo esta semana..."
                            value={notebookContent}
                            onChange={(e) => setNotebookContent(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end mt-6">
                            <button
                                onClick={handleSaveNotebook}
                                disabled={isSaving || !notebookContent.trim()}
                                className="bg-text-dark text-white px-8 py-4 rounded-2xl text-sm font-bold hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 shadow-xl active:scale-95"
                            >
                                {isSaving ? (
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined">send</span>
                                        Sincronizar Notas
                                    </>
                                )}
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            {previewFile && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
                    <div className="bg-white rounded-[40px] w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-2xl shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-2xl">
                                        {previewFile.type === 'Audio' ? 'headphones' : previewFile.type === 'Image' ? 'image' : 'description'}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-text-dark text-lg font-display tracking-wide">{previewFile.title}</h3>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Visor Seguro Cifrado</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setPreviewFile(null)}
                                className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>

                        <div className="flex-1 bg-gray-100 p-6 overflow-auto flex items-center justify-center min-h-[500px]">
                            {(previewFile.type === 'PDF' || previewFile.type === 'Evaluación' || previewFile.type === 'Seguimiento') && (
                                <iframe src={previewFile.url} className="w-full h-full min-h-[600px] rounded-[24px] bg-white shadow-2xl" title={previewFile.title}></iframe>
                            )}
                            {previewFile.type === 'Audio' && (
                                <div className="w-full max-w-lg bg-white p-12 rounded-[40px] shadow-2xl border border-gray-100 text-center">
                                    <div className="w-32 h-32 mx-auto bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-8 shadow-inner">
                                        <span className="material-symbols-outlined text-7xl animate-pulse">graphic_eq</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-text-dark mb-3 font-display">{previewFile.title}</h4>
                                    <p className="text-sm text-text-muted mb-10 max-w-xs mx-auto">Estas escuchando un archivo protegido de tu historial clínica.</p>
                                    <audio controls src={previewFile.url} className="w-full h-14" />
                                </div>
                            )}
                            {previewFile.type === 'Image' && (
                                <img src={previewFile.url} alt={previewFile.title} className="max-w-full max-h-full rounded-2xl shadow-2xl border-4 border-white" />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PrivateArea;
