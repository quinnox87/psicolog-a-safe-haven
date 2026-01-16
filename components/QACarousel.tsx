import React, { useRef } from 'react';
import { QAItem } from '../types';

interface QACarouselProps {
  items: QAItem[];
}

const QACarousel: React.FC<QACarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320; // Aproximadamente el ancho de una tarjeta + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Controles de Navegación */}
      <div className="flex items-center justify-end gap-2 mb-4 px-2">
        <button 
          onClick={() => scroll('left')}
          className="w-10 h-10 rounded-full border border-[#daded8] bg-white flex items-center justify-center hover:bg-primary/10 text-text-dark transition-colors shadow-sm"
          aria-label="Anterior pregunta"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-10 h-10 rounded-full border border-primary bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-md"
          aria-label="Siguiente pregunta"
        >
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

      {/* Contenedor Scroll Snap */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 px-1 no-scrollbar"
        style={{ scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem' }}
      >
        {items.map((qa) => (
          <div 
            key={qa.id} 
            className="snap-start shrink-0 w-[300px] md:w-[350px] bg-white p-8 rounded-2xl border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-[10px] font-bold uppercase tracking-wider">
                {qa.category}
              </span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-text-dark leading-tight">
              {`"${qa.question}"`}
            </h4>
            <div className="w-12 h-1 bg-primary/20 rounded-full mb-4"></div>
            <p className="text-sm text-text-muted leading-relaxed flex-grow">
              {qa.answer}
            </p>
          </div>
        ))}
        {/* Espaciador final para facilitar el scroll en móviles */}
        <div className="snap-start shrink-0 w-4"></div>
      </div>
    </div>
  );
};

export default QACarousel;
