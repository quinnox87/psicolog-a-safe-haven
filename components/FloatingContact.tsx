import React, { useState } from 'react';
import ChatWidget from './ChatWidget';

const FloatingContact: React.FC = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const whatsappNumber = "34676451662"; // Updated
    const whatsappMessage = encodeURIComponent("Hola Joaquín, me gustaría solicitar información sobre una consulta.");

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Assistant Window */}
            {isChatOpen && (
                <div className="mb-4 animate-slide-up relative">
                    <ChatWidget />
                    {/* Interior close button for the chat window context */}
                    <button
                        onClick={() => setIsChatOpen(false)}
                        className="absolute top-2 right-2 text-white/50 hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                </div>
            )}

            {/* Options Menu */}
            {showOptions && !isChatOpen && (
                <div className="flex flex-col items-end gap-3 mb-2 animate-slide-up">
                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-green-100 group hover:bg-green-50 transition-all hover:-translate-y-1"
                    >
                        <span className="text-sm font-bold text-gray-700">WhatsApp Directo</span>
                        <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </div>
                    </a>

                    {/* Assistant Toggle Button */}
                    <button
                        onClick={() => {
                            setIsChatOpen(true);
                            setShowOptions(false);
                        }}
                        className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100 group hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                    >
                        <span className="text-sm font-bold text-gray-700 group-hover:text-white">Asistente Virtual</span>
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-white transition-all">
                            <span className="material-symbols-outlined font-bold">psychology</span>
                        </div>
                    </button>
                </div>
            )}

            {/* Main Trigger Button */}
            <button
                onClick={() => {
                    if (isChatOpen) {
                        setIsChatOpen(false);
                    } else {
                        setShowOptions(!showOptions);
                    }
                }}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all hover:scale-105 shadow-[0_8px_20px_rgba(58,90,64,0.3)] hover:shadow-[0_12px_24px_rgba(58,90,64,0.4)] ${(showOptions || isChatOpen) ? 'bg-gray-800 rotate-90' : 'bg-primary'
                    }`}
            >
                {(showOptions || isChatOpen) ? (
                    <span className="material-symbols-outlined text-white text-3xl">close</span>
                ) : (
                    <span className="material-symbols-outlined text-white text-3xl">chat</span>
                )}
            </button>
        </div>
    );
};

export default FloatingContact;
