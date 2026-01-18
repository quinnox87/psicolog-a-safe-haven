import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CognitiveQuestionnaire: React.FC = () => {
    const questions = [
        { id: 1, text: "¿Tiene dificultad para recordar eventos de la actualidad reciente?", domain: "reciente" },
        { id: 2, text: "¿Tiene dificultad para seguir el hilo de una película o un libro?", domain: "atencion" },
        { id: 3, text: "¿Le sucede entrar en una habitación y olvidar lo que iba a buscar?", domain: "atencion" },
        { id: 4, text: "¿Olvida hacer cosas importantes (pagar facturas, citas, invitaciones)?", domain: "prospectiva" },
        { id: 5, text: "¿Tiene dificultad para recordar números de teléfono conocidos?", domain: "remota" },
        { id: 6, text: "¿Olvida con frecuencia el nombre de personas conocidas?", domain: "anomia" },
        { id: 7, text: "¿Se ha perdido o desorientado en lugares familiares?", domain: "orientacion" },
        { id: 8, text: "¿Tiene dificultad para encontrar objetos en sus lugares habituales?", domain: "orientacion" },
        { id: 9, text: "¿Olvida apagar la estufa, cerrar con llave o tareas de seguridad?", domain: "atencion" },
        { id: 10, text: "¿Repite la misma pregunta o historia varias veces en un día?", domain: "reciente" },
        { id: 11, text: "¿Le cuesta encontrar el nombre de objetos, personas o lugares?", domain: "anomia" },
        { id: 12, text: "¿Tiene dificultad para aprender cosas nuevas (manejo de móviles, recetas)?", domain: "aprendizaje" },
        { id: 13, text: "¿Pierde el hilo de la conversación con frecuencia?", domain: "atencion" },
        { id: 14, text: "¿Olvida lo que hizo el día anterior?", domain: "reciente" },
        { id: 15, text: "¿Olvida lo que le acaban de decir hace apenas unos minutos?", domain: "trabajo" }
    ];

    const [step, setStep] = useState<'intro' | 'questions' | 'results'>('intro');
    const [userRole, setUserRole] = useState<'paciente' | 'familiar'>('paciente');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);

    const handleStart = (role: 'paciente' | 'familiar') => {
        setUserRole(role);
        setStep('questions');
    };

    const handleAnswer = (value: number) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = value;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (answers[currentQuestionIndex] === undefined) {
            alert("Por favor, selecciona una opción antes de continuar.");
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setStep('results');
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleRestart = () => {
        setStep('intro');
        setCurrentQuestionIndex(0);
        setAnswers([]);
    };

    const calculateResults = () => {
        const totalScore = answers.reduce((a, b) => a + b, 0);
        let status = "";
        let description = "";
        let colorClass = "";
        let borderColor = "";

        if (totalScore <= 12) {
            status = "Normalidad / Quejas Leves";
            colorClass = "bg-green-500";
            borderColor = "#22c55e";
            description = "Los resultados se encuentran dentro de los parámetros de normalidad. Los fallos detectados suelen estar asociados a falta de atención puntual, estrés o cansancio.";
        } else if (totalScore <= 25) {
            status = "Deterioro Leve / Moderado";
            colorClass = "bg-yellow-500";
            borderColor = "#eab308";
            description = "Se detectan quejas significativas que podrían interferir en la vida diaria. Es recomendable realizar una valoración neuropsicológica detallada para descartar procesos de deterioro temprano.";
        } else {
            status = "Quejas Significativas";
            colorClass = "bg-red-500";
            borderColor = "#ef4444";
            description = "La puntuación indica una afectación cognitiva marcada. Se sugiere consultar con un especialista a la mayor brevedad para una evaluación diagnóstica integral y planificación de tratamiento.";
        }

        return { totalScore, status, description, colorClass, borderColor };
    };

    const getDomainStatus = (questionIndex: number) => {
        const val = answers[questionIndex];
        if (val >= 2) {
            return { text: "Frecuente - Atención recomendada", className: "text-sm font-bold mt-1 text-red-600" };
        }
        return { text: "Preservado / Leve", className: "text-sm font-medium mt-1 text-green-600" };
    };

    const results = step === 'results' ? calculateResults() : null;

    // Calculate progress percentage
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#f8fafc] py-12 px-4">
            {/* Back Button */}
            <div className="w-full max-w-2xl mb-6">
                <Link to="/resources" className="flex items-center gap-2 text-text-muted hover:text-primary font-bold text-sm transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Volver a Recursos
                </Link>
            </div>

            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden animate-fade-in">
                {/* Header */}
                <div className="bg-primary p-6 text-white text-center">
                    <h1 className="text-2xl font-bold">Evaluación de Memoria y Atención</h1>
                    <p className="text-blue-100 text-sm mt-1">Herramienta de cribado neuropsicológico profesional</p>
                </div>

                {/* Progress Bar */}
                {step === 'questions' && (
                    <div className="h-2 bg-blue-100">
                        <div
                            className="h-full bg-primary-dark transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                )}

                <div className="p-6 md:p-10">

                    {/* Step 1: Intro & Role Selection */}
                    {step === 'intro' && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="text-center space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    ¿Sientes que tu memoria ya no es la misma? Este breve cuestionario te ayudará a identificar si tus fallos son despistes cotidianos o señales que requieren la atención de un profesional en <strong>Granada</strong>.
                                </p>
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left">
                                    <p className="text-sm text-yellow-700"><strong>Nota importante:</strong> Esta herramienta es un cribado informativo y no sustituye a un diagnóstico clínico formal.</p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <p className="font-semibold text-gray-800 text-center">Para comenzar, dinos quién completa el test:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        onClick={() => handleStart('paciente')}
                                        className="p-4 border-2 border-blue-100 rounded-2xl hover:border-primary hover:bg-blue-50 transition-all text-left group"
                                    >
                                        <span className="block text-lg font-bold text-primary">Soy el paciente</span>
                                        <span className="text-sm text-gray-500">Evalúo mis propias dificultades.</span>
                                    </button>
                                    <button
                                        onClick={() => handleStart('familiar')}
                                        className="p-4 border-2 border-blue-100 rounded-2xl hover:border-primary hover:bg-blue-50 transition-all text-left group"
                                    >
                                        <span className="block text-lg font-bold text-primary">Soy un familiar</span>
                                        <span className="text-sm text-gray-500">Evalúo a otra persona cercana.</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Questions */}
                    {step === 'questions' && (
                        <div className="animate-fade-in">
                            <div className="mb-8">
                                <span className="text-primary font-bold text-sm uppercase tracking-wider">Pregunta {currentQuestionIndex + 1} de {questions.length}</span>
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-2">{questions[currentQuestionIndex].text}</h2>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                {[0, 1, 2, 3].map((val) => (
                                    <div key={val} className="relative">
                                        <input
                                            type="radio"
                                            name="option"
                                            id={`opt${val}`}
                                            value={val}
                                            checked={answers[currentQuestionIndex] === val}
                                            onChange={() => handleAnswer(val)}
                                            className="hidden peer"
                                        />
                                        <label
                                            htmlFor={`opt${val}`}
                                            className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${answers[currentQuestionIndex] === val
                                                    ? 'bg-primary text-white border-primary transform scale-105'
                                                    : 'border-gray-100 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary peer-checked:scale-105 hover:bg-gray-50'
                                                }`}
                                        >
                                            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 text-sm font-bold ${answers[currentQuestionIndex] === val ? 'border-white' : 'border-gray-300'}`}>
                                                {val}
                                            </span>
                                            <span>
                                                {val === 0 && 'Nunca'}
                                                {val === 1 && 'Rara vez'}
                                                {val === 2 && 'A veces'}
                                                {val === 3 && 'Casi siempre'}
                                            </span>
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex justify-between items-center">
                                <button
                                    onClick={handlePrev}
                                    disabled={currentQuestionIndex === 0}
                                    className="text-gray-400 hover:text-gray-600 font-medium disabled:opacity-0 transition-opacity"
                                >
                                    ← Anterior
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark shadow-lg shadow-green-100 transition-all"
                                >
                                    {currentQuestionIndex === questions.length - 1 ? 'Ver Resultados' : 'Siguiente'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Results */}
                    {step === 'results' && results && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-800">Resultados del Test</h2>
                                <p className="text-gray-500 mt-2">
                                    {userRole === 'paciente' ? 'Autopercepción del Paciente' : 'Percepción del Familiar'}
                                </p>
                            </div>

                            {/* Gauge Chart */}
                            <div className="flex flex-col items-center py-6">
                                <div className="relative w-64 h-32 overflow-hidden">
                                    <div className="w-64 h-64 border-[24px] border-gray-100 rounded-full"></div>
                                    <div
                                        className="absolute top-0 w-64 h-64 border-[24px] rounded-full rotate-45 box-border"
                                        style={{
                                            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
                                            borderColor: results.borderColor
                                        }}
                                    ></div>
                                    <div
                                        className="absolute bottom-0 left-1/2 w-1 h-28 bg-gray-800 origin-bottom -translate-x-1/2 transition-transform duration-1000"
                                        style={{
                                            transform: `translateX(-50%) rotate(${((results.totalScore / 45) * 1.8) - 90}deg)`
                                        }}
                                    ></div>
                                    <div className="absolute bottom-0 left-0 w-full text-center">
                                        <span className="text-4xl font-black text-gray-800">{results.totalScore}</span>
                                        <span className="text-gray-400 font-bold">/ 45</span>
                                    </div>
                                </div>
                                <div className={`mt-4 px-6 py-2 rounded-full text-white font-bold text-sm uppercase tracking-widest ${results.colorClass}`}>
                                    {results.status}
                                </div>
                            </div>

                            <div className="p-6 bg-blue-50 rounded-2xl text-blue-900 leading-relaxed border border-blue-100">
                                <p>{results.description}</p>
                            </div>

                            {/* Domains Breakdown */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                                    <p className="text-xs font-bold text-gray-400 uppercase">Memoria Prospectiva</p>
                                    <p className={getDomainStatus(3).className}>{getDomainStatus(3).text}</p>
                                </div>
                                <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                                    <p className="text-xs font-bold text-gray-400 uppercase">Atención y Registro</p>
                                    <p className={getDomainStatus(14).className}>{getDomainStatus(14).text}</p>
                                </div>
                                <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                                    <p className="text-xs font-bold text-gray-400 uppercase">Orientación</p>
                                    <p className={getDomainStatus(6).className}>{getDomainStatus(6).text}</p>
                                </div>
                                <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                                    <p className="text-xs font-bold text-gray-400 uppercase">Denominación</p>
                                    <p className={getDomainStatus(10).className}>{getDomainStatus(10).text}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-800 border-b pb-2">Factores que pueden influir:</h3>
                                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                                    <li><strong>Estado emocional:</strong> La ansiedad y el bajo estado de ánimo pueden simular fallos de memoria.</li>
                                    <li><strong>Descanso:</strong> La falta de sueño afecta directamente a la capacidad de registro.</li>
                                    <li><strong>Polimedicación:</strong> Algunos fármacos pueden tener efectos secundarios cognitivos.</li>
                                </ul>
                            </div>

                            <div className="pt-6 border-t flex flex-col items-center space-y-4">
                                <button
                                    onClick={handleRestart}
                                    className="text-primary font-semibold hover:underline"
                                >
                                    Reiniciar Cuestionario
                                </button>
                                <a
                                    href="#contact" // Assuming there is a contact section or we can open modal
                                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-center hover:bg-primary-dark transition-all"
                                >
                                    Solicitar Valoración en Granada
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-8 text-center text-gray-400 text-sm max-w-2xl px-4">
                <p>© 2026 - Especialista en Neuropsicología Clínica | Granada, España</p>
                <p className="mt-2 leading-relaxed italic">Como neuropsicólogo, entiendo que los olvidos generan preocupación. Esta herramienta está diseñada bajo estándares clínicos para ayudarte a decidir el mejor camino para tu salud cerebral.</p>
            </footer>
        </div>
    );
};

export default CognitiveQuestionnaire;
