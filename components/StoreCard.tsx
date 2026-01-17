import React from 'react';
import { StoreItem } from '../types';

interface StoreCardProps {
    item: StoreItem;
    onPurchase: (item: StoreItem) => void;
    compact?: boolean;
}

const StoreCard: React.FC<StoreCardProps> = ({ item, onPurchase, compact = false }) => {
    return (
        <div className={`group bg-white rounded-2xl overflow-hidden border border-[#edefec] hover:border-primary/30 transition-all hover:shadow-xl flex flex-col h-full ${compact ? 'text-sm' : ''}`}>
            <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
                <img
                    src={item.imageUrl}
                    alt={item.imageAlt || item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {item.tags?.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-text-dark shadow-sm uppercase tracking-wide">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className={`flex flex-col flex-grow ${compact ? 'p-6' : 'p-8'}`}>
                <h3 className={`font-bold text-text-dark mb-2 group-hover:text-primary transition-colors leading-tight ${compact ? 'text-lg' : 'text-2xl'}`}>
                    {item.title}
                </h3>
                <p className={`text-text-muted leading-relaxed mb-6 flex-grow ${compact ? 'text-xs' : 'text-base'}`}>
                    {item.description}
                </p>
                <div className="pt-6 border-t border-[#edefec] flex items-center justify-between mt-auto">
                    <div>
                        <span className="block text-[#afb6ad] text-xs font-bold uppercase tracking-wider">Precio</span>
                        <span className={`font-bold text-primary ${compact ? 'text-xl' : 'text-2xl'}`}>{item.price.toFixed(2)}€</span>
                    </div>
                    <button
                        onClick={() => onPurchase(item)}
                        className={`bg-text-dark text-white rounded-xl font-bold hover:bg-primary transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 ${compact ? 'px-4 py-2 text-xs' : 'px-8 py-3 text-sm'}`}
                    >
                        {item.ctaLabel || 'Comprar'}
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StoreCard;
