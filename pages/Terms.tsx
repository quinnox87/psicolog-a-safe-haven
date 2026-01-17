import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="animate-fade-in pt-12 pb-24 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-text-dark mb-8">Términos de Uso</h1>

            <div className="prose prose-lg text-text-muted">
                <p className="mb-6">Última actualización: Enero 2026</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-text-dark mb-4">1. Aceptación de los Términos</h2>
                    <p>
                        Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos y condiciones.
                        Si no estás de acuerdo con alguna parte de estos términos, no deberías utilizar nuestro servicio.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-text-dark mb-4">2. Uso del Sitio</h2>
                    <p>
                        Este sitio web proporciona información sobre servicios de neuropsicología y psicología.
                        El contenido es meramente informativo y no sustituye el consejo médico profesional.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-text-dark mb-4">3. Propiedad Intelectual</h2>
                    <p>
                        Todo el contenido publicado y puesto a disposición en este sitio es propiedad de Joaquín Pavón Pérez.
                        Esto incluye, pero no se limita a imágenes, textos, logotipos, documentos, archivos descargables y todo lo que contribuye a la composición de nuestro sitio.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-text-dark mb-4">4. Limitación de Responsabilidad</h2>
                    <p>
                        Joaquín Pavón Pérez no será responsable de ninguna acción, reclamación, pérdida, daño, responsabilidad y gasto que sufra como resultado del uso de este sitio.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Terms;
