const translations = {
  fr: {
    accueil: "Accueil",
    apropos: "À propos",
    projets: "Projets",
    contact: "Contact",
    title: "Je suis <span>Yasmine<br>une</span> Développeuse Web",
    description: "Bonjour et bienvenue dans mon portfolio. Je suis une étudiante en développement web, motivée et passionnée par la création d’applications modernes.",
    contactBtn: "Contactez-moi",
    aboutTitle: "À PROPOS DE MOI",
    aboutText1: "Je suis Yasmine Mahfoud, une développeuse web passionnée. J’aime créer des sites modernes, propres et bien structurés, apprendre continuellement, et réaliser des projets utiles et innovants.",
    aboutText2: "Je travaille avec HTML, CSS, JavaScript, React.js côté front-end. Côté back-end : Node.js, Express, PostgreSQL. J’intègre aussi TensorFlow.js pour la reconnaissance d’images et l’IA.",
    aboutText3: "Projets récents :<br>- Automatisation des appels d’échéance et réponses aux emails clients via IA.<br>- Gestion de recettes avec reconnaissance d’images.",
    aboutTags: ["Frontend","Backend","IA / Reconnaissance d’images"],
    aboutCards: [
      { title: "Actuellement", text: "Étudiante en développement web et réalisant des projets full-stack." },
      { title: "Compétences", text: "React.js • Node.js • SQL • TensorFlow.js • IA appliquée" },
      { title: "Objectif", text: "Créer des applications complètes et innovantes tout en développant mes compétences full-stack." }
    ],
    projectsTitle: "Mes Projets",
    projectsSubtitle: "Voici une sélection de mes réalisations les plus importantes.",
    projects: [
      {
        title: "Application de Gestion de Recettes avec Reconnaissance d’Images",
        desc: "Une application permettant de gérer des recettes, reconnaître des ingrédients via image avec TensorFlow.js, et offrir une interface moderne réalisée en React.",
        env: ["React.js","Node.js / Express","PostgreSQL","TensorFlow.js"],
        linkText: "Voir les captures"
      },
      {
        title: "Système de Rappel Automatique des Échéances Clients",
        desc: "Mise en place d'un système qui envoie automatiquement des e-mails aux clients pour rappeler leurs échéances.",
        env: ["HTML/CSS","JavaScript","Node.js","PostgreSQL","Nodemailer","API GPT"],
        linkText: "Voir les captures"
      }
    ],
    contactTitle: "Contactez-moi",
    contactSubtitle: "Je suis à votre écoute, contactez-moi ici",
    namePlaceholder: "Votre Nom Complet",
    emailPlaceholder: "Votre Adresse Email",
    messagePlaceholder: "Votre message",
    sendBtn: "Envoyer"
  },
  en: {
    accueil: "Home",
    apropos: "About",
    projets: "Projects",
    contact: "Contact",
    title: "I am <span>Yasmine<br>a </span>Web Developer",
    description: "Hello and welcome to my portfolio. I am a web development student, motivated and passionate about creating modern applications.",
    contactBtn: "Contact Me",
    aboutTitle: "ABOUT ME",
    aboutText1: "I am Yasmine Mahfoud, a passionate web developer. I enjoy creating modern, clean, well-structured websites, learning continuously, and delivering useful, innovative projects.",
    aboutText2: "I work with HTML, CSS, JavaScript, React.js on the front-end. Back-end: Node.js, Express, PostgreSQL. I also use TensorFlow.js for image recognition and AI.",
    aboutText3: "Recent projects:<br>- Automation of client email reminders using AI.<br>- Recipe management with image recognition.",
    aboutTags: ["Frontend","Backend","AI / Image Recognition"],
    aboutCards: [
      { title: "Currently", text: "Web development student working on full-stack projects." },
      { title: "Skills", text: "React.js • Node.js • SQL • TensorFlow.js • Applied AI" },
      { title: "Goal", text: "Build complete and innovative applications while developing full-stack skills." }
    ],
    projectsTitle: "My Projects",
    projectsSubtitle: "Here is a selection of my most important works.",
    projects: [
      {
        title: "Recipe Management Application with Image Recognition",
        desc: "An app to manage recipes, recognize ingredients via images using TensorFlow.js, with a modern React interface.",
        env: ["React.js","Node.js / Express","PostgreSQL","TensorFlow.js"],
        linkText: "View screenshots"
      },
      {
        title: "Automatic Client Deadline Reminder System",
        desc: "Set up a system that automatically sends emails to clients reminding them of their deadlines.",
        env: ["HTML/CSS","JavaScript","Node.js","PostgreSQL","Nodemailer","GPT API"],
        linkText: "View screenshots"
      }
    ],
    contactTitle: "Contact Me",
    contactSubtitle: "I am here to listen, contact me here",
    namePlaceholder: "Your Full Name",
    emailPlaceholder: "Your Email Address",
    messagePlaceholder: "Your message",
    sendBtn: "Send"
  }
};

function updateTexts(lang) {
  document.querySelector('a[href="#accueil"]').innerHTML = translations[lang].accueil;
  document.querySelector('a[href="#apropos"]').innerHTML = translations[lang].apropos;
  document.querySelector('a[href="#projets"]').innerHTML = translations[lang].projets;
  document.querySelector('a[href="#contact"]').innerHTML = translations[lang].contact;
  document.querySelector('.title').innerHTML = translations[lang].title;
  document.querySelector('.description').innerHTML = translations[lang].description;
  document.querySelector('.hire__me a').innerHTML = translations[lang].contactBtn;
  document.querySelector('.about-title').innerHTML = translations[lang].aboutTitle;
  const aboutTexts = document.querySelectorAll('.about-text p');
  aboutTexts[0].innerHTML = translations[lang].aboutText1;
  aboutTexts[1].innerHTML = translations[lang].aboutText2;
  aboutTexts[2].innerHTML = translations[lang].aboutText3;
  const aboutTags = document.querySelectorAll('.tags span');
  aboutTags.forEach((tag,i)=>tag.innerHTML = translations[lang].aboutTags[i]);
  const aboutCards = document.querySelectorAll('.about-cards .card');
  aboutCards.forEach((card,i)=>{
    card.querySelector('h4').innerHTML = translations[lang].aboutCards[i].title;
    card.querySelector('p').innerHTML = translations[lang].aboutCards[i].text;
  });
  document.querySelector('.project-title').innerHTML = translations[lang].projectsTitle;
  document.querySelector('.project-subtitle').innerHTML = translations[lang].projectsSubtitle;
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card,i)=>{
    const project = translations[lang].projects[i];
    card.querySelector('h3').innerHTML = project.title;
    card.querySelector('p').innerHTML = project.desc;
    const liElements = card.querySelectorAll('ul li');
    liElements.forEach((li,j)=>li.innerHTML = project.env[j]);
    card.querySelector('a.project-link').innerHTML = project.linkText;
  });
  document.querySelector('.contact-title').innerHTML = translations[lang].contactTitle;
  document.querySelector('.contact-subtitle').innerHTML = translations[lang].contactSubtitle;
  document.querySelector('input[name="name"]').placeholder = translations[lang].namePlaceholder;
  document.querySelector('input[name="email"]').placeholder = translations[lang].emailPlaceholder;
  document.querySelector('textarea[name="message"]').placeholder = translations[lang].messagePlaceholder;
  document.querySelector('.contact-form button').innerHTML = translations[lang].sendBtn;
  document.querySelectorAll('.language-switcher button').forEach(btn=>btn.classList.remove('active'));
  document.querySelector(`.language-switcher button[onclick="setLanguage('${lang}')"]`)?.classList.add('active');
}

function setLanguage(lang) {
  localStorage.setItem('lang',lang);
  updateTexts(lang);
}