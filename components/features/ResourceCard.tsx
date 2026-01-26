import React from 'react';
import { Link } from 'react-router-dom';
import { ManualResource } from '../../types';

interface ResourceCardProps {
  resource: ManualResource;
  compact?: boolean;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, compact = false }) => {
  const handleDownload = (e: React.MouseEvent) => {
    // TODO: INTEGRACIÓN BACKEND - Registrar evento de descarga para analíticas
    console.log(`Descargando recurso: ${resource.id}`);
  };

  if (compact) {
    return (
      <Link to="/resources" className="resource-card resource-card--compact group cursor-pointer block">
        <div className="aspect-[3/4] bg-white rounded-xl border border-[#daded8] mb-4 p-6 flex flex-col justify-between shadow-sm transition-transform group-hover:-translate-y-2 group-hover:shadow-md">
          <div className="w-full h-2/3 bg-background-light rounded-lg overflow-hidden relative">
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-bold text-sm leading-tight text-text-dark group-hover:text-primary transition-colors">
              {resource.title}
            </h4>
            <p className="text-[10px] text-text-muted mt-1 font-bold uppercase tracking-wider">
              PDF • {resource.size}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-primary group-hover:underline">
          <span className="material-symbols-outlined text-sm">download</span>
          Descargar
        </div>
      </Link>
    );
  }

  return (
    <div className="resource-card bg-white rounded-2xl overflow-hidden flex flex-col group border border-[#edefec] shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest text-primary uppercase shadow-sm">
          PDF • {resource.pages} Páginas
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-md">
            {resource.category}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors text-text-dark leading-tight">
          {resource.title}
        </h3>
        <div className="flex-grow"></div>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <a
            href={resource.downloadUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
            className="w-full py-3 bg-[#f4f6f4] text-primary-dark rounded-xl font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all duration-300"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            Descargar Guía
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
