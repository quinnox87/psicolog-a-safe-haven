import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="animate-fade-in min-h-screen bg-[#fcfcfb] py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-[#edefec] shadow-sm">
                <h1 className="text-3xl md:text-4xl font-extrabold text-text-dark mb-8 border-b border-[#edefec] pb-6">
                    Política de Privacidad y Protección de Datos
                </h1>

                <div className="space-y-8 text-text-muted leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-text-dark mb-4">1. Responsable del Tratamiento</h2>
                        <p>
                            De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos que los datos personales facilitados serán tratados por:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong>Titular:</strong> Joaquín Pabon</li>
                            <li><strong>Actividad:</strong> Neuropsicología Clínica y Formación</li>
                            <li><strong>Domicilio:</strong> Granada, España</li>
                            <li><strong>Contacto:</strong> contacto@joaquinpavonperez.com</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-text-dark mb-4">2. Finalidad del Tratamiento</h2>
                        <p className="mb-2">Sus datos serán tratados con las siguientes finalidades:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Gestión de Usuarios:</strong> Registro y acceso al Área Privada de alumnos/pacientes.</li>
                            <li><strong>Prestación de Servicios:</strong> Gestión de citas, descargas de materiales y cursos formativos.</li>
                            <li><strong>Comunicaciones:</strong> Envío de confirmaciones de compra, recordatorios de sesión y, si lo autoriza, boletines técnicos.</li>
                            <li><strong>Cumplimiento Legal:</strong> Facturación y obligaciones contables.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-text-dark mb-4">3. Legitimación</h2>
                        <p>
                            La base legal para el tratamiento de sus datos es la <strong>ejecución del contrato</strong> (prestación de servicios de salud/formación) y su <strong>consentimiento explícito</strong> para comunicaciones comerciales o registro en la web (Art. 6.1.a y 6.1.b RGPD).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-text-dark mb-4">4. Destinatarios de los Datos</h2>
                        <p>
                            Sus datos no se cederán a terceros salvo obligación legal. No obstante, para prestar nuestros servicios utilizamos proveedores tecnológicos (Encargados del Tratamiento) que cumplen con la normativa europea de privacidad:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong>Hosting y Base de Datos:</strong> Proveedores con servidores en la UE (Supabase/Hostinger).</li>
                            <li><strong>Autenticación:</strong> Google OAuth (Google Ireland Ltd).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-text-dark mb-4">5. Derechos ARCO</h2>
                        <p>
                            Como usuario, tiene derecho a:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Acceder, rectificar o suprimir sus datos.</li>
                            <li>Solicitar la limitación de su tratamiento.</li>
                            <li>Oponerse al tratamiento.</li>
                            <li>Solicitar la portabilidad de sus datos.</li>
                        </ul>
                        <p className="mt-2">
                            Para ejercer estos derechos, envíe un email a <strong>contacto@joaquinpavonperez.com</strong> indicando "Derechos Protección de Datos" junto con una copia de su DNI.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-text-dark mb-4">6. Seguridad</h2>
                        <p>
                            Hemos implementado medidas técnicas y organizativas para garantizar la seguridad de sus datos, incluyendo cifrado SSL en toda la web y bases de datos cifradas.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
