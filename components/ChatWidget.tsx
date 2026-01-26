import React, { useState, useRef, useEffect } from 'react';
import { useBooking } from '../context/BookingContext';

interface Message {
    id: string;
    role: 'user' | 'bot';
    text: string;
    timestamp: Date;
}

const ChatWidget: React.FC = () => {
    const { openModal } = useBooking();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'bot',
            text: 'Hola, soy el asistente virtual de la consulta de Joaquín Pabon. Estoy aquí para informarte sobre nuestros servicios de neuropsicología y ayudarte a gestionar tu cita. ¿En qué puedo ayudarte hoy?',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            text: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Analyze and respond
        setTimeout(() => {
            const botResponse = generateResponse(userMessage.text);
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                text: botResponse,
                timestamp: new Date()
            }]);
            setIsTyping(false);
        }, 1500);
    };

    const generateResponse = (text: string): string => {
        const lowerText = text.toLowerCase();

        // REGLA 2: SEGURIDAD (CRÍTICA)
        if (lowerText.includes('suicidio') || lowerText.includes('matar') || lowerText.includes('morir') || lowerText.includes('autolesi')) {
            return "⚠️ IMPORTANTE: Si estás en una situación de crisis o riesgo inmediato, por favor llama ahora mismo al 112 o acude a urgencias del Hospital Virgen de las Nieves o el Clínico San Cecilio. No podemos atender urgencias vitales por este chat.";
        }

        // REGLA 1: NO DIAGNOSTICAR
        if (lowerText.includes('tengo') || lowerText.includes('diagnostico') || lowerText.includes('creu que') || lowerText.includes('autismo') || lowerText.includes('tdah') || lowerText.includes('alzheimer')) {
            return "Entiendo tu preocupación, pero es importante aclarar que la evaluación neuropsicológica es un proceso complejo que requiere pruebas presenciales. Como asistente virtual, no puedo ofrecer diagnósticos. ¿Te gustaría agendar una primera sesión para que Joaquín pueda evaluar tu caso personalmente?";
        }

        // Citas y Agenda
        if (lowerText.includes('cita') || lowerText.includes('agendar') || lowerText.includes('hora') || lowerText.includes('reserva')) {
            // We can trigger the booking modal via text, but here we just guide them.
            // Ideally could add a button int he chat, but text is safer for now.
            return "Puedes reservar tu cita directamente a través de nuestra agenda online. ¿Quieres que abra el calendario de reservas por ti ahora mismo?"; // Note: simplistic logic, advanced would handle 'yes'
        }

        // Ubicación
        if (lowerText.includes('donde') || lowerText.includes('ubicacion') || lowerText.includes('direccion') || lowerText.includes('calle')) {
            return "Nuestra consulta está ubicada en el centro de Granada. Contamos con buena conexión de transporte público y aparcamiento cercano. ¿Necesitas indicaciones específicas para llegar?";
        }

        // Servicios / Tecnología
        if (lowerText.includes('servicio') || lowerText.includes('haces') || lowerText.includes('tratamiento')) {
            return "Ofrecemos evaluación neuropsicológica, rehabilitación cognitiva y tratamiento de trastornos del neurodesarrollo y daño cerebral. Joaquín utiliza tecnología avanzada como Realidad Virtual y neuromodulación para potenciar los resultados. ¿Te interesa saber más sobre alguno en concreto?";
        }

        // Precio / Tarifas (Generic safe answer)
        if (lowerText.includes('precio') || lowerText.includes('coste') || lowerText.includes('cuanto vale')) {
            return "Las tarifas dependen del tipo de servicio (evaluación completa, sesión de rehabilitación, etc.). Te invito a reservar una breve llamada o consulta informativa para valorar tu caso y darte un presupuesto ajustado.";
        }

        // Default / Fallback
        return "Gracias por tu consulta. Para poder darte una respuesta más precisa y personalizada, lo ideal sería vernos en consulta. ¿Te gustaría ver la disponibilidad para una primera sesión?";
    };

    return (
        <>
            {/* Chat Window - Positioned relative to the parent context now */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 z-50 w-[calc(100vw-2rem)] max-w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col h-[450px] animate-slide-up overflow-hidden">
                    {/* Header */}
                    <div className="bg-primary p-4 flex items-center gap-3 shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                            <span className="material-symbols-outlined text-white">psychology</span>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">Asistente Virtual</h3>
                            <p className="text-white/80 text-[10px] flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                En línea ahora
                            </p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                                        ? 'bg-primary text-white rounded-tr-none'
                                        : 'bg-white text-text-dark border border-gray-100 rounded-tl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Escribe tu consulta..."
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="bg-primary text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                        >
                            <span className="material-symbols-outlined text-lg">send</span>
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ChatWidget;
