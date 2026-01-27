import { ManualResource, ServiceItem, QAItem, ExperienceItem, BlogPost, PatientSession, PodcastItem, StoreItem, PublicationItem, TimelineItem, QuestionnaireItem, InteractiveResource } from "./types";

export const RESOURCES: ManualResource[] = [
  {
    id: "9",
    title: "Guía Terapia EMDR",
    category: "Recursos Guías",
    size: "0.1 MB",
    pages: 2,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
    downloadUrl: "/docs/guia-terapia-emdr.pdf",
    description: "Introducción a la terapia EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares) para el tratamiento del trauma."
  },
  {
    id: "5",
    title: "Guía Bupropion para Dejar de Fumar",
    category: "Salud Física y Mental",
    size: "1.5 MB",
    pages: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmkWxyI6Xc1vD9JsBV3N9KqYam2qhDPFoNgQ7IpzdhgnsNPZRXZ5pLvlHyDInCQxn2DVPJfDnz3Pqfx3GMzFNTlNnLZluWwEvcWRFBtDnA-PJc8wGh21Z5gLjrU4jhl40S57tVwU-SP2ybSnWkbifJMYr3mf6xw27bMhQkW2nPvdOSP7cF15o2-bnF6EEUJoUFHy1soiighZjbT2rTv5HvKz7Nlu3fJcUVq2vxJ9B_0lrh2bRY3EPl-MzE50X5wIv7bZ5QrY33RMc",
    downloadUrl: "/assets/docs/guia-bupropion-fumar.pdf",
    description: "Información técnica y pautas de administración del Bupropión como apoyo farmacológico en la deshabituación tabáquica."
  },
  {
    id: "7",
    title: "Pautas Higiene del Sueño",
    category: "Higiene del Sueño",
    size: "0.1 MB",
    pages: 1,
    image: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?auto=format&fit=crop&q=80&w=1000",
    downloadUrl: "/docs/pautas-higiene-sueno.docx",
    description: "Recomendaciones y hábitos saludables para mejorar la calidad del descanso y regular los ciclos del sueño."
  },
  {
    id: "8",
    title: "Guía de Pruebas Psicotécnicas",
    category: "Recursos Guías",
    size: "2.4 MB",
    pages: 15,
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=1000",
    downloadUrl: "/docs/guia-psicotecnicos.pdf",
    description: "Manual práctico con estrategias y ejercicios para afrontar con éxito las pruebas de aptitud en procesos de selección."
  },
  {
    id: "nice-guides",
    title: "Guías NICE (Excelencia Clínica)",
    category: "Recursos Guías",
    size: "Colección",
    pages: 0,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
    downloadUrl: "#nice-guides",
    description: "Acceso a la colección completa de guías de práctica clínica del NICE (National Institute for Health and Care Excellence)."
  }
];

export const NICE_GUIDES: ManualResource[] = [
  {
    id: "nice-asd-adults",
    title: "Autism spectrum disorder in adults: diagnosis and management",
    category: "NICE",
    size: "0.2 MB",
    pages: 45,
    image: "https://images.unsplash.com/photo-1518173946687-a4c8a3b7752e?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/autism-spectrum-disorder-in-adults-diagnosis-and-management-pdf-35109567475909.pdf",
    description: "Guía NICE [CG142] (2012): Protocolos detallados para el diagnóstico y manejo del autismo en adultos."
  },
  {
    id: "nice-asd-under19-rec",
    title: "Autism spectrum disorder in under 19s: recognition and referral",
    category: "NICE",
    size: "0.2 MB",
    pages: 52,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/autism-spectrum-disorder-in-under-19s-recognition-referral-and-diagnosis-pdf-35109456621253.pdf",
    description: "Guía NICE [CG128] (2011): Reconocimiento clínico y derivación de niños y jóvenes en el espectro autista."
  },
  {
    id: "nice-asd-under19-mgmt",
    title: "Autism spectrum disorder in under 19s: support and management",
    category: "NICE",
    size: "0.2 MB",
    pages: 48,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/autism-spectrum-disorder-in-under-19s-support-and-management-pdf-35109745515205.pdf",
    description: "Guía NICE [CG170] (2013): Apoyo y manejo integral para niños y jóvenes en el espectro autista."
  },
  {
    id: "nice-brain-tumours",
    title: "Brain tumours and brain metastases in over 16s",
    category: "NICE",
    size: "0.4 MB",
    pages: 65,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/brain-tumours-primary-and-brain-metastases-in-over-16s-pdf-1837763558341.pdf",
    description: "Guía NICE [NG99] (2018): Protocolos de diagnóstico y tratamiento para tumores cerebrales y metástasis."
  },
  {
    id: "nice-learning-dis-older",
    title: "Growing older with learning disabilities",
    category: "NICE",
    size: "0.2 MB",
    pages: 42,
    image: "https://images.unsplash.com/photo-1581579438747-1dc8c17bbce4?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/care-and-support-of-people-growing-older-with-learning-disabilities-pdf-1837758519493.pdf",
    description: "Guía NICE [NG96] (2018): Cuidados y apoyo especializado para personas mayores con dificultades de aprendizaje."
  },
  {
    id: "nice-cp-adults",
    title: "Cerebral palsy in adults: management and support",
    category: "NICE",
    size: "0.4 MB",
    pages: 45,
    image: "https://images.unsplash.com/photo-1576091160550-217358c7c814?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/cerebral-palsy-in-adults-pdf-66141606816709.pdf",
    description: "Guía NICE [NG119] (2019): Manejo clínico y apoyo social para adultos con parálisis cerebral."
  },
  {
    id: "nice-challenging-behaviour",
    title: "Challenging behaviour and learning disabilities",
    category: "NICE",
    size: "0.2 MB",
    pages: 55,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/challenging-behaviour-and-learning-disabilities-prevention-and-interventions-for-people-with-learning-disabilities-whose-behaviour-challenges-pdf-1837266392005.pdf",
    description: "Guía NICE [NG11] (2015): Prevención e intervención en conductas desafiantes y discapacidades de aprendizaje."
  },
  {
    id: "nice-dementia-mgmt",
    title: "Dementia: assessment, management and support",
    category: "NICE",
    size: "0.3 MB",
    pages: 60,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/dementia-assessment-management-and-support-for-people-living-with-dementia-and-their-carers-pdf-1837760199109.pdf",
    description: "Guía NICE [NG97] (2018): Evaluación moderna y apoyo para personas con demencia y sus cuidadores."
  },
  {
    id: "nice-dementia-prevention",
    title: "Dementia, disability and frailty in later life",
    category: "NICE",
    size: "0.3 MB",
    pages: 50,
    image: "https://images.unsplash.com/photo-1581579438783-6f8a05d14bc3?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/dementia-disability-and-frailty-in-later-life-midlife-approaches-to-delay-or-prevent-onset-pdf-1837274790085.pdf",
    description: "Guía NICE [NG16] (2015): Enfoques preventivos para retrasar la aparición de la demencia y fragilidad."
  },
  {
    id: "nice-depression-adults",
    title: "Depression in adults: treatment and management",
    category: "NICE",
    size: "0.5 MB",
    pages: 80,
    image: "https://images.unsplash.com/photo-1527137342181-19a8416bdfb1?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/depression-in-adults-treatment-and-management-pdf-66143832307909.pdf",
    description: "Guía NICE [NG222] (2022): Estándar de oro para el reconocimiento y tratamiento de la depresión en adultos."
  },
  {
    id: "nice-depression-chronic",
    title: "Depression in adults with chronic physical health problems",
    category: "NICE",
    size: "0.3 MB",
    pages: 45,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/depression-in-adults-with-a-chronic-physical-health-problem-recognition-and-management-pdf-975744316357.pdf",
    description: "Guía NICE [CG91] (2009): Manejo de la depresión en pacientes con enfermedades físicas crónicas."
  },
  {
    id: "nice-preterm-followup",
    title: "Developmental follow-up of children born preterm",
    category: "NICE",
    size: "0.2 MB",
    pages: 38,
    image: "https://images.unsplash.com/photo-1555252333-978fe3c788c8?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/developmental-followup-of-children-and-young-people-born-preterm-pdf-1837630868677.pdf",
    description: "Guía NICE [NG72] (2017): Seguimiento del desarrollo a largo plazo para niños nacidos prematuramente."
  },
  {
    id: "nice-epilepsies",
    title: "Epilepsies in children, young people and adults",
    category: "NICE",
    size: "0.7 MB",
    pages: 110,
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/epilepsies-in-children-young-people-and-adults-pdf-66143780239813.pdf",
    description: "Guía NICE [NG217] (2022): Diagnóstico y manejo de las epilepsias en todos los grupos de edad."
  },
  {
    id: "nice-head-injury",
    title: "Head injury: assessment and early management",
    category: "NICE",
    size: "0.4 MB",
    pages: 50,
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/head-injury-assessment-and-early-management-pdf-66143892774085.pdf",
    description: "Guía NICE [NG232] (2023): Protocolos críticos para la evaluación inicial y manejo de traumatismos craneales."
  },
  {
    id: "nice-learning-dis-service",
    title: "Learning disabilities: service design and delivery",
    category: "NICE",
    size: "0.3 MB",
    pages: 55,
    image: "https://images.unsplash.com/photo-1454165833019-d8b77ed55c3a?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/learning-disabilities-and-behaviour-that-challenges-service-design-and-delivery-pdf-1837753480645.pdf",
    description: "Guía NICE [NG93] (2018): Mejores prácticas para el diseño de servicios para personas con discapacidad intelectual."
  },
  {
    id: "nice-mh-learning-dis",
    title: "Mental health problems in people with learning disabilities",
    category: "NICE",
    size: "0.2 MB",
    pages: 40,
    image: "https://images.unsplash.com/photo-1518173946687-a4c8a3b7752e?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/mental-health-problems-in-people-with-learning-disabilities-prevention-assessment-and-management-pdf-1837513295557.pdf",
    description: "Guía NICE [NG54] (2016): Prevención y manejo de problemas de salud mental en población con discapacidad intelectual."
  },
  {
    id: "nice-ms-mgmt",
    title: "Multiple sclerosis in adults: management",
    category: "NICE",
    size: "0.3 MB",
    pages: 40,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/multiple-sclerosis-in-adults-management-pdf-66143828948677.pdf",
    description: "Guía NICE [NG220] (2022): Estrategias integrales de manejo para adultos con Esclerosis Múltiple."
  },
  {
    id: "nice-ocd-bdd",
    title: "Obsessive-compulsive disorder and body dysmorphic disorder",
    category: "NICE",
    size: "0.2 MB",
    pages: 35,
    image: "https://images.unsplash.com/photo-1513258496099-48168024adb0?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/obsessivecompulsive-disorder-and-body-dysmorphic-disorder-treatment-pdf-975381519301.pdf",
    description: "Guía NICE [CG31] (2005): Protocolos de tratamiento clínico para el TOC y el Trastorno Dismórfico Corporal."
  },
  {
    id: "nice-parkinsons",
    title: "Parkinson's disease in adults",
    category: "NICE",
    size: "0.2 MB",
    pages: 30,
    image: "https://images.unsplash.com/photo-1576091160550-217358c7c814?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/parkinsons-disease-in-adults-pdf-1837629189061.pdf",
    description: "Guía NICE [NG71] (2017): Manejo basado en evidencia de la enfermedad de Parkinson en adultos."
  },
  {
    id: "nice-rehab-trauma",
    title: "Rehabilitation after traumatic injury",
    category: "NICE",
    size: "0.7 MB",
    pages: 95,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1ac?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/rehabilitation-after-traumatic-injury-pdf-66143770162117.pdf",
    description: "Guía NICE [NG211] (2022): Protocolos para la rehabilitación y recuperación después de lesiones traumáticas graves."
  },
  {
    id: "nice-wellbeing-early",
    title: "Social and emotional wellbeing: early years",
    category: "NICE",
    size: "0.4 MB",
    pages: 45,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/social-and-emotional-wellbeing-early-years-pdf-1996351221445.pdf",
    description: "Guía NICE [PH40] (2012): Promoción del bienestar socioemocional en los primeros años de vida."
  },
  {
    id: "nice-stroke-rehab",
    title: "Stroke rehabilitation in adults",
    category: "NICE",
    size: "0.4 MB",
    pages: 55,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300",
    downloadUrl: "/docs/nice-guides/stroke-rehabilitation-in-adults-pdf-66143899492549.pdf",
    description: "Guía NICE [CG162] (2013): Directrices fundamentales para la recuperación tras un ictus y rehabilitación neurológica."
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

export const BLOG_POSTS: BlogPost[] = []; // Managed via /public/data/blog-posts.json

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

// Configuration flags
export const STORE_ACTIVE = false; // Set to true to enable the store functionality

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
    title: 'Evaluación de Memoria (Cribado) [NUEVO]',
    description: 'Test interactivo para diferenciar olvidos benignos de señales de alerta. Incluye informe visual inmediato.',
    url: '/resources/cuestionario-cognitivo',
    category: 'Memoria y Atención'
  },
  {
    id: '2',
    title: 'Evaluación de la Participación (PART-O)',
    description: 'Protocolo de Participación Objetiva para evaluar la integración en la comunidad tras Daño Cerebral.',
    url: 'https://forestgreen-louse-133305.hostingersite.com/',
    category: 'Participación y Comunidad'
  }
];

export const INTERACTIVE_RESOURCES: InteractiveResource[] = [
  {
    id: '1',
    title: 'psicoTHERA Analysis',
    description: 'Analizador funcional interactivo para explorar evidencia clínica basada en procesos, trastornos y tratamientos.',
    url: 'https://orangered-hornet-406219.hostingersite.com/',
    category: 'Análisis Funcional'
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
    downloadUrl: 'docs/pautas-higiene-sueno.docx',
    assignedDate: '01 Nov 2023'
  },
  {
    id: 'm3',
    title: 'Técnica de Relajación Progresiva',
    type: 'Audio',
    description: 'Audio guía para crisis de ansiedad.',
    downloadUrl: '#',
    assignedDate: '28 Oct 2023'
  },
  {
    id: 'm4',
    title: 'Guía Terapia EMDR',
    type: 'PDF',
    description: 'Información sobre el proceso y beneficios de la terapia EMDR.',
    downloadUrl: '/docs/guia-terapia-emdr.pdf',
    assignedDate: '20 Ene 2024'
  }
];

