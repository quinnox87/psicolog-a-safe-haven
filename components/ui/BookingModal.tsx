import React, { useEffect } from 'react';
import { useBooking } from '../../context/BookingContext';

const BookingModal: React.FC = () => {
    const { isModalOpen, closeModal } = useBooking();

    useEffect(() => {
        if (isModalOpen) {
            const script = document.createElement('script');
            script.src = "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl h-[80vh] flex flex-col">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-text-dark hover:text-primary transition-all shadow-sm backdrop-blur-sm"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="flex-1 w-full bg-white">
                    <div
                        className="calendly-inline-widget w-full h-full"
                        data-url="https://calendly.com/joaquinpavonperez/30min"
                        style={{ minWidth: '320px', height: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
