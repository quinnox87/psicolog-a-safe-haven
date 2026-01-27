import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RESOURCES, ONLINE_QUESTIONNAIRES, INTERACTIVE_RESOURCES, NICE_GUIDES } from '../constants';
import ResourceCard from '../components/features/ResourceCard';
import { useBooking } from '../context/BookingContext';

type ViewMode = 'landing' | 'questionnaires' | 'materials' | 'interactive' | 'nice-guides';

const Resources: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');
  const [activeCategory, setActiveCategory] = useState('Todos los Recursos');
  const [searchQuery, setSearchQuery] = useState('');
  const { openModal } = useBooking();

  // Categories for materials
  const categories = ['Todos los Recursos', 'Recursos Guías', 'Manejo de la Ansiedad', 'TDAH y Concentración', 'Higiene del Sueño', 'Neurodivergencia', 'Terapia y Trauma'];

  const filteredResources = RESOURCES.filter((resource) => {
    const matchesCategory = activeCategory === 'Todos los Recursos' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || resource.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleResourceClick = (resourceId: string) => {
    if (resourceId === 'nice-guides') {
      setViewMode('nice-guides');
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setViewMode('landing');
    setSearchQuery('');
    setActiveCategory('Todos los Recursos');
  };

  const filteredNiceGuides = NICE_GUIDES.filter(guide =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-fade-in min-h-screen bg-[#fcfcfb]">
      {/* Header Section */}
      <div className="bg-white border-b border-[#edefec] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-4 tracking-tight">
            Centro de <span className="text-primary">Recursos Clínicos</span>
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Herramientas basadas en evidencia para la evaluación y rehabilitación neuropsicológica.
            Selecciona el tipo de recurso que necesitas hoy.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 min-h-[500px]">
        {/* LANDING VIEW (SELECTOR) */}
        {viewMode === 'landing' && (
          <>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-up">
              {/* Option A: Questionnaires */}
              <button
                onClick={() => setViewMode('questionnaires')}
                className="group bg-white p-8 rounded-3xl border border-[#edefec] shadow-sm hover:shadow-xl hover:border-primary/30 transition-all text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110"></div>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">quiz</span>
                </div>
                <h2 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">Cuestionarios Online</h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  Evaluación interactiva de funciones ejecutivas, memoria, ansiedad y estado de ánimo.
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-xs">
                  <span>Acceder a las pruebas</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </button>

              {/* Option B: Materials */}
              <button
                onClick={() => setViewMode('materials')}
                className="group bg-white p-8 rounded-3xl border border-[#edefec] shadow-sm hover:shadow-xl hover:border-primary/30 transition-all text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/5 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110"></div>
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">folder_open</span>
                </div>
                <h2 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">Recursos Guías</h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  Repositorio de documentos PDF, protocolos de intervención, guías psicotécnicas y manuales técnicos.
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-xs">
                  <span>Explorar biblioteca</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </button>

              {/* Option C: Interactive Tools */}
              <button
                onClick={() => setViewMode('interactive')}
                className="group bg-white p-8 rounded-3xl border border-[#edefec] shadow-sm hover:shadow-xl hover:border-primary/30 transition-all text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110"></div>
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">interactive_space</span>
                </div>
                <h2 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">Herramientas Interactivas</h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  Analizadores funcionales y motores de mapeo avanzado de evidencia clínica.
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-xs">
                  <span>Ver herramientas</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </button>
            </div>

            <div className="mt-20 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-center text-sm font-bold text-text-muted uppercase tracking-[0.2em] mb-10">Recursos de Acceso Rápido</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {RESOURCES.filter(r => r.id === '9' || r.id === '8').map(resource => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          </>
        )}


        {/* QUESTIONNAIRES VIEW */}
        {viewMode === 'questionnaires' && (
          <div className="animate-fade-in">
            <button onClick={handleBack} className="flex items-center gap-2 text-text-muted hover:text-primary mb-8 font-bold text-sm transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
              Atrás
            </button>

            <h2 className="text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined">quiz</span>
              </span>
              Cuestionarios de Auto-Evaluación
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ONLINE_QUESTIONNAIRES.map((item) => {
                const isInternal = item.url.startsWith('/');
                const Wrapper = isInternal ? Link : 'a';
                const props = isInternal
                  ? { to: item.url, className: "bg-white p-6 rounded-2xl border border-[#edefec] hover:border-primary/50 hover:shadow-lg transition-all group flex flex-col h-full" }
                  : { href: item.url, target: "_blank", rel: "noopener noreferrer", className: "bg-white p-6 rounded-2xl border border-[#edefec] hover:border-primary/50 hover:shadow-lg transition-all group flex flex-col h-full" };

                return (
                  // @ts-ignore
                  <Wrapper key={item.id} {...props}>
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-text-muted uppercase tracking-wider group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        {item.category}
                      </span>
                      <span className="material-symbols-outlined text-gray-300 group-hover:text-primary">
                        {isInternal ? 'arrow_forward' : 'open_in_new'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6 flex-grow">{item.description}</p>
                    <div className="text-center w-full py-2 rounded-lg border border-gray-200 text-text-muted text-sm font-bold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                      Iniciar Test
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        )}
        {/* INTERACTIVE TOOLS VIEW */}
        {viewMode === 'interactive' && (
          <div className="animate-fade-in">
            <button onClick={handleBack} className="flex items-center gap-2 text-text-muted hover:text-primary mb-8 font-bold text-sm transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
              Atrás
            </button>

            <h2 className="text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                <span className="material-symbols-outlined">interactive_space</span>
              </span>
              Herramientas e Interactivos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INTERACTIVE_RESOURCES.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-2xl border border-[#edefec] hover:border-primary/50 hover:shadow-lg transition-all group flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-text-muted uppercase tracking-wider group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                      {item.category}
                    </span>
                    <span className="material-symbols-outlined text-gray-300 group-hover:text-primary">
                      open_in_new
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6 flex-grow">{item.description}</p>
                  <div className="text-center w-full py-2 rounded-lg border border-gray-200 text-text-muted text-sm font-bold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    Abrir Herramienta
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* NICE GUIDES VIEW */}
        {viewMode === 'nice-guides' && (
          <div className="animate-fade-in">
            <button onClick={() => setViewMode('landing')} className="flex items-center gap-2 text-text-muted hover:text-primary mb-8 font-bold text-sm transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
              Atrás
            </button>

            <div className="bg-primary/5 rounded-[40px] p-8 md:p-12 mb-12 border border-primary/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-primary shadow-xl">
                  <span className="material-symbols-outlined text-5xl">fact_check</span>
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-text-dark mb-3">Colección de Guías NICE</h2>
                  <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
                    National Institute for Health and Care Excellence. Protocolos de excelencia clínica basados en la evidencia más reciente.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="relative max-w-md">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                <input
                  type="text"
                  placeholder="Filtrar guías NICE..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNiceGuides.map((guide) => (
                <ResourceCard key={guide.id} resource={guide} />
              ))}
            </div>

            {filteredNiceGuides.length === 0 && (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <span className="material-symbols-outlined text-4xl mb-3 text-gray-300">search_off</span>
                <p className="text-text-muted font-medium">No se encontraron guías con ese nombre.</p>
              </div>
            )}
          </div>
        )}

        {/* MATERIALS VIEW */}
        {viewMode === 'materials' && (
          <div className="animate-fade-in">
            <button onClick={handleBack} className="flex items-center gap-2 text-text-muted hover:text-primary mb-8 font-bold text-sm transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
              Atrás
            </button>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar Filters */}
              <aside className="w-full lg:w-64 shrink-0 space-y-8">
                {/* Search */}
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                  <input
                    type="text"
                    placeholder="Buscar archivos..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Filtrar por tema</h3>
                  <nav className="flex flex-col gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeCategory === cat
                          ? 'bg-primary text-white shadow-md'
                          : 'text-text-dark hover:bg-white hover:shadow-sm bg-gray-50'
                          }`}
                      >
                        <span className="text-left">{cat}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Grid */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-dark mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
                    <span className="material-symbols-outlined">folder_open</span>
                  </span>
                  Biblioteca de Documentos
                </h2>

                {filteredResources.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredResources.map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} onClick={() => handleResourceClick(resource.id)} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                    <span className="material-symbols-outlined text-4xl mb-3 text-gray-300">search_off</span>
                    <p className="text-text-muted font-medium">No se encontraron materiales.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* CTA Section - Always visible at bottom */}
      <section className="bg-text-dark py-16 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            ¿Necesitas orientación profesional personalizada?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Si tras revisar estos recursos consideras que necesitas una evaluación o intervención especializada, mi consulta está abierta para ti.
          </p>
          <button
            onClick={openModal}
            className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 mx-auto"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            Programa tu sesión
          </button>
        </div>
      </section>
    </div >
  );
};

export default Resources;
