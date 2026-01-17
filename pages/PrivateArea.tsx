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
        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            setShowSaveSuccess(true);
            setTimeout(() => setShowSaveSuccess(false), 3000);
        }, 1500);
    };

    const handleDownload = (fileName: string, type: string) => {
        // In a real app, this would use the downloadUrl.
        // For now, we simulate a secure download start.
        alert(`Iniciando descarga segura de: ${fileName} (${type})\n\nEste archivo está cifrado para tu uso personal.`);
    };

    const handlePreview = (file: { title: string; type: string; downloadUrl: string }) => {
        // For mock purposes, if url is '#', we use a corresponding placeholder
        let url = file.downloadUrl;
        if (url === '#' || !url) {
            if (file.type === 'PDF' || file.type === 'Evaluación' || file.type === 'Seguimiento') {
                url = '/modelo-informe.pdf'; // Use a local PDF for demo
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
        <div className="min-h-screen bg-[#fcfcfb] animate-fade-in relative">
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
                                <div key={session.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                            {session.date}
                                        </span>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handlePreview({ title: session.summaryTitle, type: 'Evaluación', downloadUrl: session.downloadUrl })}
                                                className="text-xs text-blue-600 font-bold hover:underline flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg"
                                            >
                                                <span className="material-symbols-outlined text-[14px]">visibility</span>
                                                Ver
                                            </button>
                                            <button
                                                onClick={() => handleDownload(session.summaryTitle, 'Resumen')}
                                                className="text-xs text-primary font-bold hover:underline flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-lg"
                                            >
                                                <span className="material-symbols-outlined text-[14px]">download</span>
                                                Descargar
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-text-dark text-sm mb-1 cursor-pointer hover:text-primary transition-colors" onClick={() => handlePreview({ title: session.summaryTitle, type: 'Evaluación', downloadUrl: session.downloadUrl })}>{session.summaryTitle}</h3>
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
                                    <div key={report.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-white hover:bg-gray-50 transition-colors group cursor-pointer" onClick={() => handlePreview(report)}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center text-terracotta">
                                                <span className="material-symbols-outlined">article</span>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-text-dark group-hover:text-primary transition-colors">{report.title}</h3>
                                                <p className="text-xs text-gray-400">{report.type} • {report.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handlePreview(report); }}
                                                className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center gap-1 hover:bg-blue-100 transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-[16px]">visibility</span>
                                                Ver
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleDownload(report.title, 'Informe'); }}
                                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                                                title="Descargar"
                                            >
                                                <span className="material-symbols-outlined text-sm">download</span>
                                            </button>
                                        </div>
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
                                <div key={material.id} className="flex gap-4 p-4 rounded-xl bg-orange-50/50 border border-orange-100 hover:border-orange-300 transition-colors cursor-pointer group" onClick={() => handlePreview(material)}>
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${material.type === 'PDF' ? 'bg-red-50 text-red-500' :
                                        material.type === 'Audio' ? 'bg-purple-50 text-purple-500' : 'bg-blue-50 text-blue-500'
                                        }`}>
                                        <span className="material-symbols-outlined text-2xl">
                                            {material.type === 'PDF' ? 'picture_as_pdf' : material.type === 'Audio' ? 'headphones' : 'play_circle'}
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-sm font-bold text-text-dark mb-1 group-hover:text-primary transition-colors">{material.title}</h3>
                                        <p className="text-xs text-text-muted mb-2">{material.description}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{material.type}</span>
                                            <span className="text-[10px] text-gray-300">•</span>
                                            <span className="text-[10px] text-gray-400">Asignado: {material.assignedDate}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 shrink-0 self-center">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handlePreview(material); }}
                                            className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center gap-1 hover:bg-blue-100 transition-colors w-full justify-center"
                                        >
                                            <span className="material-symbols-outlined text-[16px]">
                                                {material.type === 'Audio' || material.type === 'Video' ? 'play_arrow' : 'visibility'}
                                            </span>
                                            {material.type === 'Audio' ? 'Oír' : 'Ver'}
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleDownload(material.title, material.type); }}
                                            className="w-full h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors"
                                            title="Descargar"
                                        >
                                            <span className="material-symbols-outlined text-sm">download</span>
                                        </button>
                                    </div>
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

            {/* PREVIEW MODAL */}
            {previewFile && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">
                                    {previewFile.type === 'Audio' ? 'headphones' : previewFile.type === 'Image' ? 'image' : 'description'}
                                </span>
                                <h3 className="font-bold text-text-dark">{previewFile.title}</h3>
                            </div>
                            <button
                                onClick={() => setPreviewFile(null)}
                                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"
                            >
                                <span className="material-symbols-outlined text-lg">close</span>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 bg-gray-100 p-2 overflow-auto flex items-center justify-center min-h-[400px]">
                            {(previewFile.type === 'PDF' || previewFile.type === 'Evaluación' || previewFile.type === 'Seguimiento') && (
                                <iframe src={previewFile.url} className="w-full h-full min-h-[600px] rounded-lg bg-white shadow-inner" title={previewFile.title}></iframe>
                            )}
                            {previewFile.type === 'Audio' && (
                                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                                    <div className="w-24 h-24 mx-auto bg-purple-50 rounded-full flex items-center justify-center text-purple-500 mb-6">
                                        <span className="material-symbols-outlined text-6xl">graphic_eq</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-text-dark mb-2">{previewFile.title}</h4>
                                    <p className="text-sm text-text-muted mb-8">Reproducción segura de archivo de audio</p>
                                    <audio controls src={previewFile.url} className="w-full" />
                                </div>
                            )}
                            {previewFile.type === 'Image' && (
                                <img src={previewFile.url} alt={previewFile.title} className="max-w-full max-h-full rounded-lg shadow-lg" />
                            )}
                            {previewFile.type === 'Video' && (
                                <video controls src={previewFile.url} className="max-w-full max-h-full rounded-lg shadow-lg" />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PrivateArea;

