import { ManualResource, ServiceItem, QAItem, ExperienceItem, BlogPost, PatientSession, PodcastItem, StoreItem, PublicationItem, TimelineItem, QuestionnaireItem } from "./types";

export const RESOURCES: ManualResource[] = [
  {
    id: "5",
    title: "Guía Bupropion para Dejar de Fumar",
    category: "Salud Física y Mental",
    size: "1.5 MB",
    pages: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmkWxyI6Xc1vD9JsBV3N9KqYam2qhDPFoNgQ7IpzdhgnsNPZRXZ5pLvlHyDInCQxn2DVPJfDnz3Pqfx3GMzFNTlNnLZluWwEvcWRFBtDnA-PJc8wGh21Z5gLjrU4jhl40S57tVwU-SP2ybSnWkbifJMYr3mf6xw27bMhQkW2nPvdOSP7cF15o2-bnF6EEUJoUFHy1soiighZjbT2rTv5HvKz7Nlu3fJcUVq2vxJ9B_0lrh2bRY3EPl-MzE50X5wIv7bZ5QrY33RMc",
    downloadUrl: "/tienda/descargables/guia-bupropion-fumar.pdf"
  },
  {
    id: "6",
    title: "Modelo de Informe Clínico",
    category: "Informes y Documentación",
    size: "0.5 MB",
    pages: 2,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    downloadUrl: "/area-privada/modelo-informe.pdf"
  },
  {
    id: "7",
    title: "Pautas Higiene del Sueño",
    category: "Salud Física y Mental",
    size: "0.1 MB",
    pages: 1,
    image: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?auto=format&fit=crop&q=80&w=1000",
    downloadUrl: "/docs/pautas-higiene-sueno.docx"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "neuro",
    title: "Neuropsicología",
    description: "Evaluación y rehabilitación de funciones cognitivas (memoria, atención, funciones ejecutivas) tras daño cerebral o en trastornos del neurodesarrollo.",
    icon: "psychology",
    features: ["Evaluación Neuropsicológica", "Rehabilitación Cognitiva", "TDAH Adulto", "Deterioro Cognitivo"]
  },
  {
    id: "health",
    title: "Psicología General",
    description: "Terapia psicológica basada en la evidencia para abordar ansiedad, depresión y regulación emocional en un entorno seguro.",
    icon: "favorite",
    features: ["Terapia Cognitivo-Conductual", "Manejo del Estrés", "Regulación Emocional", "Psicoeducación"]
  },
  {
    id: "reports",
    title: "Redacción de Informes",
    description: "Elaboración de informes clínicos detallados, peritajes y documentos oficiales para diversas necesidades administrativas y legales.",
    icon: "description",
    features: ["Informes Clínicos", "Peritajes Psicológicos", "Informes de Seguimiento", "Documentación Oficial"]
  }
];

export const QA_ITEMS: QAItem[] = [
  {
    id: "1",
    category: "Primera Sesión",
    question: "¿Qué sucede durante mi primera visita?",
    answer: "Es una toma de contacto relajada. Hablaremos sobre lo que te preocupa, tu historia y qué esperas conseguir, sin presiones."
  },
  {
    id: "2",
    category: "Evaluación",
    question: "¿En qué consiste la evaluación?",
    answer: "Realizamos una serie de pruebas y test estandarizados (como juegos mentales) para conocer tus fortalezas y áreas de mejora cognitiva."
  },
  {
    id: "3",
    category: "Tratamiento",
    question: "¿Cuánto dura la terapia?",
    answer: "Depende de cada caso. Trabajamos con objetivos claros y revisamos el progreso periódicamente para no alargar el proceso innecesariamente."
  },
  {
    id: "4",
    category: "Privacidad",
    question: "¿Es confidencial?",
    answer: "Absolutamente. Todo lo que hablamos en consulta está protegido por el secreto profesional y la normativa de protección de datos."
  },
  {
    id: "5",
    category: "Online",
    question: "¿Haces sesiones online?",
    answer: "Sí, disponemos de una plataforma segura para realizar videollamadas con la misma eficacia que las sesiones presenciales."
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "1",
    role: "Neuropsicólogo Clínico",
    institution: "Hospital Universitario San Rafael",
    period: "2018 - Presente",
    description: "Evaluación y rehabilitación de pacientes con daño cerebral adquirido y enfermedades neurodegenerativas. Coordinación del equipo de estimulación cognitiva."
  },
  {
    id: "2",
    role: "Psicólogo General Sanitario",
    institution: "Consulta Privada",
    period: "2016 - Presente",
    description: "Atención psicológica a adultos con trastornos de ansiedad, del estado de ánimo y adaptación a enfermedades crónicas."
  },
  {
    id: "3",
    role: "Máster en Neuropsicología Clínica",
    institution: "Universidad Complutense de Madrid",
    period: "2015 - 2017",
    description: "Especialización en evaluación neuropsicológica y neurorrehabilitación basada en la evidencia."
  },
  {
    id: "4",
    role: "Investigador Colaborador",
    institution: "Instituto de Neurociencias",
    period: "2017 - 2019",
    description: "Participación en proyectos de investigación sobre reserva cognitiva y envejecimiento saludable."
  }
];

export const PODCAST_ITEMS: PodcastItem[] = [
  {
    id: '1',
    title: 'Mindfulness para la Ansiedad Cotidiana',
    type: 'audio',
    duration: '15 min',
    imageUrl: 'https://images.unsplash.com/photo-1518175859702-bdd5031b272b?auto=format&fit=crop&q=80&w=1000',
    category: 'Meditación',
    mediaUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Placeholder MP3
    downloadUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },


  {
    id: '5',
    title: 'No critiques, aprecia y persuade',
    type: 'audio',
    duration: '10 min',
    imageUrl: 'https://images.unsplash.com/photo-1515023697514-6c0800b65640?auto=format&fit=crop&q=80&w=1000',
    category: 'Relaciones',
    mediaUrl: '/assets/podcast/No_critiques_aprecia_y_persuade.m4a',
    downloadUrl: '/assets/podcast/No_critiques_aprecia_y_persuade.m4a'
  },
  {
    id: '6',
    title: 'La Importancia de los Hábitos',
    type: 'audio',
    duration: '10 min',
    imageUrl: '/assets/podcast/pod1.png',
    category: 'Desarrollo Personal',
    mediaUrl: '/assets/podcast/pod1.m4a',
    downloadUrl: '/assets/podcast/pod1.m4a'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "¿Qué es la Reserva Cognitiva y cómo aumentarla?",
    excerpt: "Descubre cómo tus hábitos diarios pueden proteger tu cerebro del envejecimiento prematuro.",
    date: "12 Oct 2023",
    readTime: "5 min lectura",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjiXY7-NomIkaclrcyeAhJaxS7D0v4ppCPDcYDZsXSgqO9vtAANfCoGdjB4XBRJy1wh2DbKboZmqvbah_N6T80s1wbbStwXjXXlJa9kPyl2dHKqG7gVYeYvq_rQ43OaMkcIzxkgh9aIr6tYhvrnGPxOKBzn7K7JcpHfnWepp8nUhkO5gRwqJOE77tMLhkldTekuRXG3AUdch0b-dLa5TElkKU96qHEFzwmzbWeh3VlE0fvbs_kLkhJKbm9OV1nmoiekIZoJDxZbK4",
    category: "Neurociencia",
    content: `
      <p>La <strong>reserva cognitiva</strong> es la capacidad del cerebro para improvisar y encontrar formas alternativas de realizar un trabajo. Es como una cuenta de ahorros mental que nos protege frente al deterioro cognitivo.</p>
      <h2>¿Cómo funciona?</h2>
      <p>Imagina que tu cerebro es una red de carreteras. Si una carretera se bloquea, puedes usar otras rutas para llegar a tu destino. Cuantas más rutas alternativas tengas (mayor reserva cognitiva), menos notarás el bloqueo.</p>
      <h3>Estrategias para aumentarla</h3>
      <ul>
        <li><strong>Aprender cosas nuevas:</strong> Idiomas, instrumentos musicales, hobbies.</li>
        <li><strong>Leer habitualmente:</strong> Mantiene la mente activa y mejora la conectividad.</li>
        <li><strong>Relaciones sociales:</strong> Interactuar con otros estimula múltiples áreas cerebrales.</li>
      </ul>
      <p>Nunca es tarde para empezar a construir tu reserva cognitiva. Pequeños cambios diarios pueden tener un gran impacto a largo plazo.</p>
    `
  },
  {
    id: "2",
    title: "Ansiedad vs Estrés: Claves para diferenciarlos",
    excerpt: "Aunque a menudo se usan indistintamente, entender sus diferencias es el primer paso para gestionarlos.",
    date: "28 Sep 2023",
    readTime: "4 min lectura",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmkWxyI6Xc1vD9JsBV3N9KqYam2qhDPFoNgQ7IpzdhgnsNPZRXZ5pLvlHyDInCQxn2DVPJfDnz3Pqfx3GMzFNTlNnLZluWwEvcWRFBtDnA-PJc8wGh21Z5gLjrU4jhl40S57tVwU-SP2ybSnWkbifJMYr3mf6xw27bMhQkW2nPvdOSP7cF15o2-bnF6EEUJoUFHy1soiighZjbT2rTv5HvKz7Nlu3fJcUVq2vxJ9B_0lrh2bRY3EPl-MzE50X5wIv7bZ5QrY33RMc",
    category: "Salud Mental",
    content: `
      <p>A menudo usamos las palabras "estrés" y "ansiedad" como sinónimos, pero son experiencias distintas, aunque relacionadas.</p>
      <h2>El Estrés: Una respuesta a una amenaza externa</h2>
      <p>El estrés es típicamente causado por un desencadenante externo. Puede ser a corto plazo (una fecha límite de trabajo) o a largo plazo (dificultades financieras). Las personas bajo estrés experimentan síntomas mentales y físicos como irritabilidad, enojo, fatiga, dolor muscular, problemas digestivos y dificultad para dormir.</p>
      <h2>La Ansiedad: Una reacción interna</h2>
      <p>La ansiedad se define por preocupaciones persistentes y excesivas que no desaparecen incluso en ausencia de un factor estresante. Los síntomas son muy similares a los del estrés: insomnio, dificultad para concentrarse, fatiga, tensión muscular e irritabilidad.</p>
      <h3>¿Cómo diferenciarlos?</h3>
      <p>Si la sensación desaparece una vez que la situación externa se resuelve, probablemente era estrés. Si la sensación persiste sin una causa clara, podría ser ansiedad.</p>
    `
  },
  {
    id: "3",
    title: "Estrategias para mejorar la atención en adultos",
    excerpt: "Técnicas prácticas para mantener el foco en un mundo lleno de distracciones digitales.",
    date: "15 Sep 2023",
    readTime: "6 min lectura",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ61G6Sfx2lBQkUKwVth465YsrpYHaECvcC4Saje2k8Os2oTa0YvWXtVrrPNFnRWh-Gz3O14ZJovjEp60EDYltF7zACMidCkWfodtvxDvWbqQzD7DKyULJG614pmxQFsX2C3eVZy8XYejx8vkMFOP7wVpSKuE9lKgZkSJ-W8rYNALdTN351NAp444ZA_QDOCSWtGgWEcymiEK5BsCICKauyxNBKShDDx3QYvUaZrIvYHmQdpjKBkm97Aw61oFxEcBUqfpy8f-wPX8",
    category: "TDAH",
    content: `
      <p>En la era digital, mantener la atención sostenida es un desafío para todos, no solo para quienes tienen TDAH.</p>
      <h2>Técnica Pomodoro</h2>
      <p>Trabaja en bloques de 25 minutos seguidos de 5 minutos de descanso. Esto ayuda a mantener la mente fresca y enfocada.</p>
      <h2>Control del Entorno</h2>
      <p>Elimina las distracciones visuales y auditivas. Usa auriculares con cancelación de ruido o música instrumental suave si trabajas en entornos ruidosos.</p>
      <h2>Mindfulness</h2>
      <p>Practicar mindfulness te entrena para volver al momento presente cuando tu mente divaga. Es como "hacer pesas" con tu atención.</p>
    `
  }
];

export const MOCK_SESSIONS: PatientSession[] = [
  {
    id: "s1",
    date: "14 Oct 2023",
    summaryTitle: "Evaluación Inicial - Informe Preliminar",
    doctorNotes: "El paciente muestra buena disposición. Se observan indicadores de ansiedad situacional. Objetivos iniciales establecidos.",
    downloadUrl: "#"
  },
  {
    id: "s2",
    date: "28 Oct 2023",
    summaryTitle: "Sesión 2: Psicoeducación y Herramientas",
    doctorNotes: "Introducción a técnicas de respiración diafragmática. Revisión de tareas de auto-registro.",
    downloadUrl: "#"
  },
  {
    id: "s3",
    date: "11 Nov 2023",
    summaryTitle: "Sesión 3: Reestructuración Cognitiva",
    doctorNotes: "Trabajo sobre distorsiones cognitivas identificadas. Planificación de exposición gradual.",
    downloadUrl: "#"
  }
];


export const STORE_ITEMS: StoreItem[] = [
  // Categoría: Formación Especializada
  {
    id: '1',
    title: 'Curso Experto: tDCS en Rehabilitación de Afasia',
    description: 'Aprende los fundamentos y protocolos prácticos para aplicar tDCS en pacientes con trastornos del lenguaje.',
    fullDescription: 'Este curso intensivo está diseñado para neuropsicólogos y logopedas que desean integrar la Estimulación Eléctrica Transcraneal por Corriente Directa (tDCS) en sus intervenciones de afasia. Cubrimos desde los mecanismos neurofisiológicos básicos hasta la colocación precisa de electrodos y el diseño de protocolos individualizados basados en la última evidencia científica.',
    features: ['Duración: 20 horas', 'Modalidad: Online (Asíncrono)', 'Certificado Acreditado', 'Acceso de por vida a actualizaciones'],
    benefits: ['Potencia la recuperación del lenguaje combinando tDCS con logopedia.', 'Aprende protocolos de seguridad y manejo de equipos.', 'Acceso a casos clínicos reales y resolución de dudas.'],
    price: 19.90,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-217358c7c814?auto=format&fit=crop&q=80&w=1000',
    category: 'Formación Especializada',
    tags: ['Basado en Evidencia', 'Metodología UGR'],
    ctaLabel: 'Inscribirse',
    imageAlt: 'Sesión de estimulación magnética transcraneal (tDCS) para rehabilitación del lenguaje'
  },
  {
    id: '2',
    title: 'Formación: Realidad Virtual en Daño Cerebral (DCA)',
    description: 'Formación completa sobre sistemas inmersivos vs semi-inmersivos y su aplicación clínica en DCA.',
    fullDescription: 'Explora el potencial de la Realidad Virtual (RV) como herramienta terapéutica en la neurorrehabilitación. Analizamos las diferencias críticas entre sistemas inmersivos y no inmersivos, revisamos el software comercial y de investigación disponible, y te enseñamos a seleccionar la mejor opción para cada perfil de paciente (ictus, TCE, etc.).',
    features: ['Duración: 15 horas', 'Guía de Hardware y Software', 'Protocolos de seguridad (Cybersickness)', 'Plantillas de consentimiento informado'],
    benefits: ['Aumenta la motivación y adherencia al tratamiento.', 'Permite trabajar AVDs en entornos ecológicos seguros.', 'Base empírica sólida para justificar su uso clínico.'],
    price: 19.90,
    imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1ac?auto=format&fit=crop&q=80&w=1000',
    category: 'Formación Especializada',
    tags: ['9 años de Experiencia Clínica', 'Certificado'],
    ctaLabel: 'Inscribirse',
    imageAlt: 'Paciente utilizando gafas de Realidad Virtual para rehabilitación cognitiva'
  },
  // Categoría: Materiales (Digitales)
  {
    id: '3',
    title: 'Protocolo Clínico: Evaluación de Heminegligencia',
    description: 'Batería de pruebas y plantilla de corrección automatizada para la detección precisa de negligencia.',
    fullDescription: 'Un kit completo para la evaluación sensible de la heminegligencia visuoespacial. Incluye versiones digitalizadas de pruebas clásicas y tareas ecológicas, junto con una hoja de cálculo automatizada que facilita la corrección y la interpretación de los resultados, ahorrando tiempo valioso en la redacción de informes.',
    features: ['Formato: PDF + Excel', 'Baremos actualizados', 'Instrucciones de administración detalladas', 'Hoja de corrección automática'],
    benefits: ['Detección más precisa de negligencia leve.', 'Ahorro de tiempo en corrección e interpretación.', 'Presentación profesional de resultados en informes.'],
    price: 2.99,
    imageUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1000',
    category: 'Materiales (Digitales)',
    tags: ['Recurso Clínico', 'Descarga Inmediata'],
    ctaLabel: 'Comprar',
    imageAlt: 'Protocolos de evaluación neuropsicológica en papel y tablet'
  },
  {
    id: '4',
    title: 'Guía Técnica: Implementación de Neurotecnología',
    description: 'Manual paso a paso para integrar VR y tDCS: seguridad, dosimetría y aspectos legales.',
    fullDescription: 'Esta guía práctica es el recurso que me hubiera gustado tener al empezar. Condensa años de experiencia técnica y legal en un manual directo. Aprende a configurar tu clínica para la neurotecnología, gestiona los consentimientos informados correctamente y domina los aspectos de seguridad eléctrica y biológica para proteger a tus pacientes.',
    features: ['Formato: eBook (PDF)', '45 Páginas', 'Checklists de seguridad', 'Modelos de documentos legales (España)'],
    benefits: ['Seguridad jurídica y clínica garantizada.', 'Evita errores costosos en la compra de equipos.', 'Protocolos listos para usar desde el primer día.'],
    price: 2.99,
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000',
    category: 'Materiales (Digitales)',
    tags: ['Gestión Clínica', 'PDF'],
    ctaLabel: 'Comprar',
    imageAlt: 'Guía de implementación de tecnología en clínica de neuropsicología'
  }
];

// Timeline Data
export const EXPERIENCE_TIMELINE: TimelineItem[] = [
  {
    year: '2024',
    title: 'Ponencia sobre Sexualidad y DCA',
    institution: 'X Jornadas DCA Granada',
    description: 'Participación como ponente experto.'
  },
  {
    year: '2020',
    title: 'Máster en Psicología General Sanitaria',
    institution: 'UDIMA',
    description: 'Desarrollo de App de Accesibilidad Cognitiva para monumentos de Granada y publicación de libro con Editorial Panamericana.'
  },
  {
    year: '2017 - 2018',
    title: 'Responsable del proyecto Mefacilyta',
    institution: 'FEDACE y Fundación Vodafone',
    description: 'Investigación y desarrollo sobre accesibilidad cognitiva y entornos virtuales.'
  },
  {
    year: '2016',
    title: 'Tutor de prácticas del Máster en Neurociencia Cognitiva',
    institution: 'Universidad de Granada (UGR)',
    description: 'Inicio de labor docente y supervisión de alumnos.'
  },
  {
    year: '2015',
    title: 'Máster en Neurociencia Cognitiva y del Comportamiento',
    institution: 'Universidad de Granada (UGR)'
  },
  {
    year: '2014',
    title: 'Licenciatura en Psicología',
    institution: 'Universidad de Granada (UGR)',
    description: 'Inicio como Neuropsicólogo Clínico en AGREDACE (hasta la actualidad).'
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: '1',
    title: '¿Ayuda el movimiento? Influencia del formato visual en la denominación de verbos',
    type: 'Póster',
    date: '2025',
    url: 'https://www.researchgate.net/profile/Joaquin-Perez-11'
  },
  {
    id: '2',
    title: 'Diferencias del impacto de la Realidad Virtual inmersiva vs. semi-inmersiva en la Fluidez Verbal y la Memoria en DCA',
    type: 'Póster',
    date: '2025',
    doi: '10.13140/RG.2.2.36135.46242',
    url: 'https://www.researchgate.net/profile/Joaquin-Perez-11'
  },
  {
    id: '3',
    title: 'Conversational Speech and Motor Action Therapy with tDCS in global aphasia post stroke',
    type: 'Póster',
    date: '2023',
    doi: '10.13140/RG.2.2.10343.21921',
    url: 'https://www.researchgate.net/profile/Joaquin-Perez-11'
  },
  {
    id: '4',
    title: 'A Virtual Reality Intervention on Chronic Spatial Hemineglect, Impulsivity and Working Memory Deficits',
    type: 'Póster',
    date: '2021',
    doi: '10.13140/RG.2.2.33771.05929',
    url: 'https://www.researchgate.net/profile/Joaquin-Perez-11'
  },
  {
    id: '5',
    title: 'Long term effects of a neuropsychological intervention with tDCS in anomic aphasia',
    type: 'Póster',
    date: '2019',
    doi: '10.13140/RG.2.2.27786.31688',
    url: 'https://www.researchgate.net/profile/Joaquin-Perez-11'
  },
  {
    id: '6',
    title: 'Protocolo de intervención neuropsicológica mediante neuromodulación (tDCS) en afasia anómica',
    type: 'Póster',
    date: '2018',
    doi: '10.13140/RG.2.2.29303.88481',
    url: 'https://www.researchgate.net/profile/Joaquin-Perez-11'
  },
  {
    id: '7',
    title: 'Proyecto de Rehabilitación Multisensorial en el Síndrome de Heminegligencia',
    type: 'Póster',
    date: '2016',
    doi: '10.13140/RG.2.2.32412.49281',
    url: 'https://www.researchgate.net/profile/Joaquin-Perez-11'
  }
];

export const ONLINE_QUESTIONNAIRES: QuestionnaireItem[] = [
  {
    id: '1',
    title: 'Cuestionario de Ansiedad (GAD-7)',
    description: 'Evalúa la frecuencia e intensidad de los síntomas de ansiedad en las últimas 2 semanas.',
    url: 'https://patient.info/doctor/generalized-anxiety-disorder-assessment-gad-7',
    category: 'Ansiedad'
  },
  {
    id: '2',
    title: 'Cuestionario de Depresión (PHQ-9)',
    description: 'Herramienta estándar para el cribado de la depresión y la medición de su severidad.',
    url: 'https://patient.info/doctor/patient-health-questionnaire-phq-9',
    category: 'Estado de Ánimo'
  },
  {
    id: '3',
    title: 'Escala de Estrés Percibido (PSS)',
    description: 'Mide el grado en que las situaciones de la vida se evalúan como estresantes.',
    url: 'https://www.mindgarden.com/132-perceived-stress-scale',
    category: 'Estrés'
  },
  {
    id: '4',
    title: 'Evaluación de Memoria (Cribado) [NUEVO]',

    description: 'Test interactivo para diferenciar olvidos benignos de señales de alerta. Incluye informe visual inmediato.',
    url: '/resources/cuestionario-cognitivo',
    category: 'Memoria y Atención'
  },
  {
    id: '5',
    title: 'Evaluación de la Participación (PART-O)',
    description: 'Protocolo de Participación Objetiva para evaluar la integración en la comunidad tras Daño Cerebral.',
    url: 'https://forestgreen-louse-133305.hostingersite.com/',
    category: 'Participación y Comunidad'
  }
];

export const MOCK_REPORTS: import("./types").ClinicalReport[] = [
  {
    id: 'r1',
    date: '10 Nov 2023',
    title: 'Informe Neuropsicológico Completo',
    type: 'Evaluación',
    downloadUrl: '#'
  },
  {
    id: 'r2',
    date: '25 Oct 2023',
    title: 'Informe de Evolución Trimestral',
    type: 'Seguimiento',
    downloadUrl: '#'
  }
];

export const MOCK_PATIENT_MATERIALS: import("./types").PatientMaterial[] = [
  {
    id: 'm1',
    title: 'Ejercicios de Estimulación de Memoria de Trabajo',
    type: 'PDF',
    description: 'Cuaderno de actividades para realizar en casa (20 min/día).',
    downloadUrl: '#',
    assignedDate: '15 Nov 2023'
  },
  {
    id: 'm2',
    title: 'Pautas de Higiene del Sueño',
    type: 'PDF',
    description: 'Guía práctica para mejorar la calidad del descanso.',
    downloadUrl: '#',
    assignedDate: '01 Nov 2023'
  },
  {
    id: 'm3',
    title: 'Técnica de Relajación Progresiva',
    type: 'Audio',
    description: 'Audio guía para crisis de ansiedad.',
    downloadUrl: '#',
    assignedDate: '28 Oct 2023'
  }
];
