import { ManualResource, ServiceItem, QAItem, ExperienceItem, BlogPost, PatientSession, PodcastItem, StoreItem } from "./types";

export const RESOURCES: ManualResource[] = [
  {
    id: "5",
    title: "Guía Bupropion para Dejar de Fumar",
    category: "Salud Física y Mental",
    size: "1.5 MB",
    pages: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmkWxyI6Xc1vD9JsBV3N9KqYam2qhDPFoNgQ7IpzdhgnsNPZRXZ5pLvlHyDInCQxn2DVPJfDnz3Pqfx3GMzFNTlNnLZluWwEvcWRFBtDnA-PJc8wGh21Z5gLjrU4jhl40S57tVwU-SP2ybSnWkbifJMYr3mf6xw27bMhQkW2nPvdOSP7cF15o2-bnF6EEUJoUFHy1soiighZjbT2rTv5HvKz7Nlu3fJcUVq2vxJ9B_0lrh2bRY3EPl-MzE50X5wIv7bZ5QrY33RMc",
    downloadUrl: "/guia-bupropion-fumar.pdf"
  },
  {
    id: "6",
    title: "Modelo de Informe Clínico",
    category: "Informes y Documentación",
    size: "0.5 MB",
    pages: 2,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    downloadUrl: "/modelo-informe.pdf"
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
    id: '2',
    title: 'Entendiendo el Daño Cerebral Adquirido',
    type: 'video',
    duration: '45 min',
    imageUrl: 'https://images.unsplash.com/photo-1559757139-3b6598514930?auto=format&fit=crop&q=80&w=1000',
    category: 'Neuropsicología',
    mediaUrl: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', // Placeholder Video
    downloadUrl: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4'
  },


  {
    id: '5',
    title: 'No critiques, aprecia y persuade',
    type: 'audio',
    duration: '10 min',
    imageUrl: 'https://images.unsplash.com/photo-1515023697514-6c0800b65640?auto=format&fit=crop&q=80&w=1000',
    category: 'Relaciones',
    mediaUrl: '/audio/No_critiques_aprecia_y_persuade.m4a',
    downloadUrl: '/audio/No_critiques_aprecia_y_persuade.m4a'
  },
  {
    id: '6',
    title: 'La Importancia de los Hábitos',
    type: 'audio',
    duration: '10 min',
    imageUrl: '/images/pod1.png',
    category: 'Desarrollo Personal',
    mediaUrl: '/audio/pod1.m4a',
    downloadUrl: '/audio/pod1.m4a'
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
  {
    id: '1',
    title: 'Cuaderno de Ejercicios de Ansiedad',
    description: 'Guía práctica con ejercicios cognitivo-conductuales para manejar la ansiedad en el día a día.',
    price: 0.99,
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000',
    category: 'Cuadernos'
  },
  {
    id: '2',
    title: 'Kit de Mindfulness para Principiantes',
    description: 'Recopilación de audios y fichas prácticas para iniciarte en la atención plena.',
    price: 0.99,
    imageUrl: 'https://images.unsplash.com/photo-1515023697514-6c0800b65640?auto=format&fit=crop&q=80&w=1000',
    category: 'Recursos'
  },
  {
    id: '3',
    title: 'Plantillas de Registro Emocional',
    description: 'Herramientas visuales para monitorizar tu estado de ánimo y detectar patrones.',
    price: 0.99,
    imageUrl: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1000',
    category: 'Material de Actividades'
  }
];
