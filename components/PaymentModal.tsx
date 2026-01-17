import React, { useState } from 'react';
import { StoreItem } from '../types';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: StoreItem | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, product }) => {
    const [step, setStep] = useState<'select' | 'processing' | 'success'>('select');
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

    if (!isOpen || !product) return null;

    const handlePayment = (method: string) => {
        setSelectedMethod(method);
        setStep('processing');

        // Simulate processing time
        setTimeout(() => {
            setStep('success');
        }, 2000);
    };

    const resetModal = () => {
        setStep('select');
        setSelectedMethod(null);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={resetModal}
            ></div>

            {/* Modal Content */}
            <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden animate-slide-up z-10">

                {/* Header */}
                <div className="bg-gray-50 p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-text-dark">Resumen del Pedido</h3>
                    <button onClick={resetModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="p-8">
                    {/* Product Info */}
                    <div className="flex gap-4 mb-8">
                        <div className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                            <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-dark text-sm leading-tight mb-1">{product.title}</h4>
                            <span className="text-primary font-bold text-lg">{product.price.toFixed(2)}€</span>
                        </div>
                    </div>

                    {step === 'select' && (
                        <div className="space-y-4">
                            <p className="text-sm text-text-muted font-medium mb-2">Selecciona un método de pago seguro:</p>

                            {/* Apple Pay */}
                            <button
                                onClick={() => handlePayment('Apple Pay')}
                                className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors shadow-sm"
                            >
                                <span className="material-symbols-outlined">dataset</span>
                                Apple Pay
                            </button>

                            {/* Google Pay */}
                            <button
                                onClick={() => handlePayment('Google Pay')}
                                className="w-full bg-white text-gray-800 border border-gray-300 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm"
                            >
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                                Google Pay
                            </button>

                            {/* PayPal */}
                            <button
                                onClick={() => handlePayment('PayPal')}
                                className="w-full bg-[#0070BA] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#005ea6] transition-colors shadow-sm"
                            >
                                <span className="material-symbols-outlined text-xl">payments</span>
                                PayPal
                            </button>

                            <p className="text-[10px] text-center text-gray-400 mt-4">
                                Todas las transacciones están encriptadas y son seguras.
                            </p>
                        </div>
                    )}

                    {step === 'processing' && (
                        <div className="py-12 flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-6"></div>
                            <p className="font-bold text-text-dark">Procesando pago...</p>
                            <p className="text-xs text-text-muted mt-2">Conectando con {selectedMethod}</p>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="py-8 flex flex-col items-center justify-center text-center animate-fade-in">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl">check_circle</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-dark mb-2">¡Pago Completado!</h3>
                            <p className="text-sm text-text-muted mb-8">
                                Hemos enviado un email de confirmación y el enlace de descarga a tu correo.
                            </p>
                            <button
                                onClick={resetModal}
                                className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors"
                            >
                                Cerrar y Descargar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
