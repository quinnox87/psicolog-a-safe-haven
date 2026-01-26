import React, { useRef } from 'react';
import { PublicationItem } from '../../types';

interface ResearchCarouselProps {
    items: PublicationItem[];
}

const ResearchCarousel: React.FC<ResearchCarouselProps> = ({ items }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = 320;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative w-full">
            {/* Navigation Controls */}
            <div className="flex items-center justify-end gap-2 mb-4 px-2">
                <button
                    onClick={() => scroll('left')}
                    className="w-10 h-10 rounded-full border border-[#daded8] bg-white flex items-center justify-center hover:bg-primary/10 text-text-dark transition-colors shadow-sm"
                    aria-label="Publicación anterior"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="w-10 h-10 rounded-full border border-primary bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-md"
                    aria-label="Siguiente publicación"
                >
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>

            {/* Scroll Container */}
            <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 px-1 no-scrollbar"
                style={{ scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem' }}
            >
                {items.map((pub) => (
                    <a
                        key={pub.id}
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="snap-start shrink-0 w-[280px] md:w-[320px] bg-white p-6 rounded-2xl border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                                {pub.year}
                            </span>
                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">open_in_new</span>
                        </div>

                        <h4 className="text-lg font-bold mb-3 text-text-dark leading-snug group-hover:text-primary transition-colors line-clamp-3">
                            {pub.title}
                        </h4>

                        <div className="mt-auto pt-4 border-t border-gray-100">
                            <p className="text-xs text-text-muted font-medium">
                                {pub.journal || 'Publicación en ResearchGate'}
                            </p>
                        </div>
                    </a>
                ))}
                <div className="snap-start shrink-0 w-4"></div>
            </div>
        </div>
    );
};

export default ResearchCarousel;
