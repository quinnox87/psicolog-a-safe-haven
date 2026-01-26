import React from 'react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  variant?: 'preview' | 'detail';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'preview' }) => {
  const isPreview = variant === 'preview';

  return (
    <div
      className={`service-card bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 ${isPreview
          ? 'p-10 flex flex-col md:flex-row gap-8 items-start hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
          : 'p-8 md:p-12 flex flex-col hover:shadow-lg h-full'
        }`}
    >
      <div
        className={`service-card__icon p-5 rounded-full flex items-center justify-center shrink-0 ${service.id === 'neuro' ? 'bg-primary/10 text-primary' : 'bg-accent-blue/10 text-accent-blue'
          } ${!isPreview ? 'mb-8 w-fit' : ''}`}
      >
        <span className="material-symbols-outlined text-4xl">{service.icon}</span>
      </div>

      <div className="service-card__content flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-4 text-text-dark">{service.title}</h3>
        <p className="text-text-muted leading-relaxed mb-6">
          {service.description}
        </p>

        <ul className={`service-card__features space-y-3 ${!isPreview ? 'mb-10 flex-grow' : ''}`}>
          {(isPreview ? service.features.slice(0, 2) : service.features).map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm font-medium text-text-dark">
              <span className={`material-symbols-outlined text-lg ${service.id === 'neuro' ? 'text-primary' : 'text-accent-blue'}`}>
                check_circle
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {!isPreview && (
          <button
            className="service-card__action w-full bg-primary hover:bg-primary-dark text-white h-14 rounded-xl font-bold tracking-wide transition-all shadow-md mt-auto"
            onClick={() => {
              // TODO: INTEGRACIÓN BACKEND - Lógica para abrir modal de reserva específico del servicio
              console.log(`Iniciar reserva para: ${service.title}`);
            }}
          >
            {`Consultar por ${service.title}`}
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
