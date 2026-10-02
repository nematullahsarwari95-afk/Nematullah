/* ==================== CONFIGURATION ==================== */
const CONFIG = {
  name: "Nematullah Sarwari",
  initials: "student intertation",
  title: "Computer Science Student | Programmer | Web Developer",
  bio: "I am a passionate Computer Science student and Web Developer who enjoys building modern, responsive and user-friendly websites using HTML, CSS and JavaScript.",
  email: "nematullahsarwari95@gmail.com",
  phone: "+93 773032604",
  location: "Kabul, Afghanistan",
  university: " Kandahar UNIVERSITY ",
  faculty: "Computer cince",
  github: "[GITHUB LINK]",
  linkedin: "[LINKEDIN LINK]",
  facebook: "[FACEBOOK LINK]",
  instagram: "[INSTAGRAM LINK]",
  youtube: "[YOUTUBE LINK]",
  telegram: "[TELEGRAM LINK]",
  whatsapp: "[WHATSAPP LINK]",
  tiktok: "[TIKTOK LINK]",
  cv: "assets/cv/my-cv.pdf",
  googleMaps: "[GOOGLE MAPS LINK]",
  profileImg: "assets/images/img_large_06.jpg",
  projectsDir: "assets/images/projects/",
};

/* ==================== PROJECTS DATA ==================== */
const PROJECTS = [
  {
    id: 1,
    name: "E-Commerce Website",
    image: CONFIG.projectsDir + "project-1.jpg",
    category: "web-apps",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
    fullDescription: "This is a complete e-commerce website built with vanilla HTML, CSS and JavaScript. It features product catalog, shopping cart, and a simulated checkout flow.",
    problem: "Small businesses needed an affordable online store without relying on heavy frameworks.",
    solution: "Built a lightweight, fast-loading e-commerce frontend using pure vanilla JavaScript.",
    features: [
      "Product catalog with filtering",
      "Shopping cart with local storage",
      "Responsive product grid",
      "Checkout simulation",
      "Mobile-friendly navigation",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-1.jpg", CONFIG.projectsDir + "project-1-2.jpg"],
  },
  {
    id: 2,
    name: "Task Management App",
    image: CONFIG.projectsDir + "project-2.jpg",
    category: "web-apps",
    description: "A productivity app for managing daily tasks with drag-and-drop functionality.",
    fullDescription: "A task management application that helps users organize their daily work efficiently with a clean interface.",
    problem: "People struggle to stay organized with scattered notes and reminders.",
    solution: "Created a unified task manager with categories, priorities, and progress tracking.",
    features: [
      "Drag-and-drop task board",
      "Task categories and tags",
      "Priority levels",
      "Progress tracking",
      "Data persistence",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-2.jpg", CONFIG.projectsDir + "project-2-2.jpg"],
  },
  {
    id: 3,
    name: "Weather Dashboard",
    image: CONFIG.projectsDir + "project-3.jpg",
    category: "javascript",
    description: "Real-time weather dashboard with location-based forecasts and beautiful visualizations.",
    fullDescription: "A weather application that fetches real-time weather data and displays it with beautiful charts and icons.",
    problem: "Weather apps are often cluttered with ads and unnecessary information.",
    solution: "Built a clean, minimal weather dashboard focused on essential information.",
    features: [
      "Real-time weather data",
      "Location-based forecasts",
      "Beautiful visualizations",
      "5-day forecast",
      "Geolocation support",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "API Integration"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-3.jpg", CONFIG.projectsDir + "project-3-2.jpg"],
  },
  {
    id: 4,
    name: "Portfolio Website",
    image: CONFIG.projectsDir + "project-4.jpg",
    category: "html",
    description: "A modern, responsive portfolio website with dark mode and multilingual support.",
    fullDescription: "This very portfolio website demonstrates advanced HTML/CSS skills with animations, RTL/LTR support, and theme switching.",
    problem: "Students struggle to showcase their work professionally.",
    solution: "Created a premium, production-ready portfolio template.",
    features: [
      "Dark/Light mode",
      "Multilingual support",
      "RTL/LTR layout",
      "Smooth animations",
      "Fully responsive",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-4.jpg", CONFIG.projectsDir + "project-4-2.jpg"],
  },
  {
    id: 5,
    name: "Quiz Application",
    image: CONFIG.projectsDir + "project-5.jpg",
    category: "javascript",
    description: "An interactive quiz app with timer, scoring, and multiple categories.",
    fullDescription: "A fun and educational quiz application with multiple question categories and a timer system.",
    problem: "Learning can be boring without interactive elements.",
    solution: "Developed an engaging quiz app with instant feedback and progress tracking.",
    features: [
      "Multiple quiz categories",
      "Timer-based questions",
      "Score tracking",
      "Instant feedback",
      "Progress bar",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "CSS Animations"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-5.jpg", CONFIG.projectsDir + "project-5-2.jpg"],
  },
  {
    id: 6,
    name: "Landing Page Design",
    image: CONFIG.projectsDir + "project-6.jpg",
    category: "ui-design",
    description: "A high-converting landing page with modern glassmorphism design and smooth animations.",
    fullDescription: "A premium landing page design showcasing UI/UX skills with glassmorphism effects and scroll animations.",
    problem: "Businesses need attractive landing pages that convert visitors.",
    solution: "Designed a conversion-focused landing page with modern aesthetics.",
    features: [
      "Glassmorphism UI",
      "Scroll animations",
      "Contact form",
      "Responsive design",
      "Smooth transitions",
    ],
    technologies: ["HTML5", "CSS3", "UI Design", "CSS Animations"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-6.jpg", CONFIG.projectsDir + "project-6-2.jpg"],
  },
  {
    id: 7,
    name: "Calculator App",
    image: CONFIG.projectsDir + "project-7.jpg",
    category: "javascript",
    description: "A fully functional calculator with history, keyboard support, and modern design.",
    fullDescription: "A sleek calculator application supporting basic and advanced operations with a beautiful dark theme.",
    problem: "Online calculators are often basic and unattractive.",
    solution: "Built a feature-rich calculator with history tracking and keyboard input.",
    features: [
      "Basic & advanced operations",
      "Calculation history",
      "Keyboard support",
      "Dark/Light theme",
      "Responsive layout",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-7.jpg", CONFIG.projectsDir + "project-7-2.jpg"],
  },
  {
    id: 8,
    name: "To-Do List App",
    image: CONFIG.projectsDir + "project-8.jpg",
    category: "web-apps",
    description: "A minimalist to-do list with task priorities, due dates, and local storage.",
    fullDescription: "A clean and minimal to-do list application designed for productivity with task management features.",
    problem: "People need simple tools to manage daily tasks without complexity.",
    solution: "Developed a minimalist to-do app with essential features and fast performance.",
    features: [
      "Task CRUD operations",
      "Priority levels",
      "Due dates",
      "Local storage",
      "Filter tasks",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-8.jpg", CONFIG.projectsDir + "project-8-2.jpg"],
  },
  {
    id: 9,
    name: "Blog Template",
    image: CONFIG.projectsDir + "project-9.jpg",
    category: "html",
    description: "A clean, readable blog template with article cards and responsive typography.",
    fullDescription: "A professional blog template optimized for readability with modern typography and layout.",
    problem: "Many blog templates are cluttered and hard to read.",
    solution: "Designed a content-first blog template with excellent readability.",
    features: [
      "Content-first design",
      "Article cards",
      "Responsive typography",
      "Reading progress",
      "SEO optimized",
    ],
    technologies: ["HTML5", "CSS3", "Responsive Design", "UI Design"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-9.jpg", CONFIG.projectsDir + "project-9-2.jpg"],
  },
  {
    id: 10,
    name: "Music Player UI",
    image: CONFIG.projectsDir + "project-10.jpg",
    category: "ui-design",
    description: "A modern music player interface with album art, progress bar, and playlist.",
    fullDescription: "A beautiful music player UI concept demonstrating CSS animation and layout skills.",
    problem: "Music player interfaces can be dull and uninspiring.",
    solution: "Designed a vibrant, modern music player with smooth animations.",
    features: [
      "Album art display",
      "Progress bar",
      "Playlist view",
      "Volume control",
      "Smooth animations",
    ],
    technologies: ["HTML5", "CSS3", "UI Design", "CSS Animations"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-10.jpg", CONFIG.projectsDir + "project-10-2.jpg"],
  },
  {
    id: 11,
    name: "Restaurant Website",
    image: CONFIG.projectsDir + "project-11.jpg",
    category: "html",
    description: "An elegant restaurant website with menu, reservation form, and gallery.",
    fullDescription: "A complete restaurant website with menu display, reservation system, and photo gallery.",
    problem: "Restaurants need attractive online presence to attract customers.",
    solution: "Built an elegant, appetizing website with easy navigation.",
    features: [
      "Menu display",
      "Reservation form",
      "Photo gallery",
      "Contact info",
      "Opening hours",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-11.jpg", CONFIG.projectsDir + "project-11-2.jpg"],
  },
  {
    id: 12,
    name: "Dashboard UI Kit",
    image: CONFIG.projectsDir + "project-12.jpg",
    category: "ui-design",
    description: "A comprehensive dashboard UI kit with charts, tables, and widgets.",
    fullDescription: "A professional dashboard UI kit designed for admin panels and analytics applications.",
    problem: "Developers spend too much time building dashboard components from scratch.",
    solution: "Created a reusable UI kit with essential dashboard components.",
    features: [
      "Chart components",
      "Data tables",
      "Widget cards",
      "Sidebar navigation",
      "Dark mode ready",
    ],
    technologies: ["HTML5", "CSS3", "UI Design", "CSS Animations"],
    github: CONFIG.github,
    liveDemo: "#",
    screenshots: [CONFIG.projectsDir + "project-12.jpg", CONFIG.projectsDir + "project-12-2.jpg"],
  },
];

/* ==================== TRANSLATIONS ==================== */
const translations = {
  en: { ...(function () {
    const e = {};
    e.nav = { home: "Home", about: "About", skills: "Skills", services: "Services", projects: "Projects", resume: "Resume", certificates: "Certificates", contact: "Contact" };
    e.hero = { greeting: "Hello, I'm", name: CONFIG.name, title: CONFIG.title, description: CONFIG.bio, cta1: "View My Projects", cta2: "Download CV", cta3: "GitHub", cta4: "Contact Me" };
    e.about = { sectionTitle: "About Me", fullName: CONFIG.name, profession: "Computer Science Student", university: CONFIG.university, faculty: CONFIG.faculty, location: CONFIG.location, email: CONFIG.email, phone: CONFIG.phone, bioTitle: "My Biography", bioText: "I am a dedicated Computer Science student with a strong passion for programming and web development.", journeyTitle: "My Journey", journeyText: "My programming journey started during my university studies.", goalsTitle: "Career Goals", goalsText: "I aspire to become a professional Full-Stack Web Developer.", interests: "Interests", interest1: "Web Development", interest2: "Open Source", interest3: "UI/UX Design", interest4: "Learning New Technologies" };
    e.education = { sectionTitle: "Education", degree: "Computer Science", institution: CONFIG.university, description: "Studying core computer science subjects." };
    e.skills = { sectionTitle: "Skills", frontendTitle: "Frontend Development", html5: "HTML5", css3: "CSS3", javascript: "JavaScript", responsive: "Responsive Design", uiDesign: "UI Design", cssAnimations: "CSS Animations", domManipulation: "DOM Manipulation", apiIntegration: "API Integration", gitTitle: "Git & GitHub", git: "Git", github: "GitHub", repoManagement: "Repository Management", versionControl: "Version Control" };
    e.services = { sectionTitle: "Services", webDev: "Web Development", webDevDesc: "Building modern, responsive websites.", frontendDev: "Frontend Development", frontendDevDesc: "Creating clean, maintainable frontend code.", responsiveSites: "Responsive Websites", responsiveSitesDesc: "Designing responsive websites.", landingPages: "Landing Pages", landingPagesDesc: "Designing high-converting landing pages.", jsApps: "JavaScript Web Applications", jsAppsDesc: "Developing interactive web applications.", portfolioSites: "Portfolio Websites", portfolioSitesDesc: "Creating professional portfolio websites.", uiDesign: "UI Design", uiDesignDesc: "Designing beautiful user interfaces." };
    e.experience = { sectionTitle: "Experience", journeyTitle: "Learning & Development Journey", noExperience: "Building experience through personal projects." };
    e.projects = { sectionTitle: "Projects", filterAll: "All", filterHtml: "HTML", filterCss: "CSS", filterJavaScript: "JavaScript", filterWebApps: "Web Apps", filterUiDesign: "UI Design", filterOther: "Other", viewDetails: "View Details", github: "GitHub", liveDemo: "Live Demo", technologies: "Technologies", features: "Features", relatedProjects: "Related Projects", screenshots: "Screenshots", description: "Description", problem: "Problem", solution: "Solution", challenges: "Challenges", learned: "What I Learned", viewAll: "View All Projects" };
    e.certificates = { sectionTitle: "Certificates", viewCertificate: "View Certificate", organization: "Organization", date: "Date" };
    e.resume = { sectionTitle: "Resume", profile: "Profile", education: "Education", experience: "Experience", skills: "Skills", languages: "Languages", achievements: "Achievements", downloadCV: "Download CV", printResume: "Print Resume" };
    e.languages = { sectionTitle: "Languages", pashto: "Pashto", dari: "Dari", english: "English", native: "Native", fluent: "Fluent", intermediate: "Intermediate" };
    e.statistics = { projects: "Projects Completed", repositories: "GitHub Repositories", certificates: "Certificates", skills: "Skills", yearsLearning: "Years Learning" };
    e.testimonials = { sectionTitle: "Testimonials", testimonial1Text: "An exceptional developer who delivers high-quality work on time.", testimonial1Name: "John Doe", testimonial1Position: "Senior Developer", testimonial2Text: "Creative, dedicated, and always willing to learn.", testimonial2Name: "Jane Smith", testimonial2Position: "Project Manager", testimonial3Text: "Produces clean code and beautiful designs.", testimonial3Name: "Ahmed Khan", testimonial3Position: "Tech Lead" };
    e.contact = { sectionTitle: "Contact Me", infoTitle: "Contact Information", email: "Email", phone: "Phone", whatsapp: "WhatsApp", telegram: "Telegram", location: "Location", viewLocation: "View Location", formTitle: "Send Me a Message", fullName: "Full Name", emailField: "Email", phoneField: "Phone", subject: "Subject", message: "Message", sendButton: "Send Message", success: "Message sent successfully!", error: "Please fill in all required fields.", nameRequired: "Name is required.", emailRequired: "Valid email is required.", messageRequired: "Message is required." };
    e.footer = { description: CONFIG.bio, quickLinks: "Quick Links", socialMedia: "Social Media", copyright: "© 2026 " + CONFIG.name + ". All Rights Reserved." };
    e.loading = { text: "Loading..." };
    e.scrollProgress = { label: "Scroll Progress" };
    e.backToTop = { label: "Back to Top" };
    e.theme = { dark: "Dark Mode", light: "Light Mode" };
    e.langSwitch = { pashto: "Pashto", dari: "Dari", english: "English" };
    e.notFound = { title: "404", subtitle: "Page Not Found", message: "Sorry, the page you are looking for does not exist.", backHome: "Back to Home" };
    return e;
  })()},
  da: {
    nav: { home: "خانه", about: "درباره من", skills: "مهارت‌ها", services: "خدمات", projects: "پروژه‌ها", resume: "رزومه", certificates: "گواهینامه‌ها", contact: "تماس" },
    hero: { greeting: "سلام، من", name: CONFIG.name, title: "دانشجوی علوم کامپیوتر | برنامه‌نویس | توسعه‌دهنده وب", description: CONFIG.bio, cta1: "مشاهده پروژه‌ها", cta2: "دانلود رزومه", cta3: "گیت‌هاب", cta4: "تماس با من" },
    about: { sectionTitle: "درباره من", fullName: CONFIG.name, profession: "دانشجوی علوم کامپیوتر", university: CONFIG.university, faculty: CONFIG.faculty, location: CONFIG.location, email: CONFIG.email, phone: CONFIG.phone, bioTitle: "زندگی‌نامه من", bioText: "من یک دانشجوی علوم کامپیوتر متعهد هستم که علاقه شدیدی به برنامه‌نویسی و توسعه وب دارم.", journeyTitle: "سفر من", journeyText: "سفر برنامه‌نویسی من در طول دوران دانشگاهی شروع شد.", goalsTitle: "اهداف شغلی", goalsText: "من مشتاق هستم که به عنوان یک توسعه‌دهنده وب فول‌استک حرفه‌ای تبدیل شوم.", interests: "علاقه‌مندی‌ها", interest1: "توسعه وب", interest2: "منابع باز", interest3: "طراحی UI/UX", interest4: "یادگیری فناوری‌های جدید" },
    education: { sectionTitle: "تحصیلات", degree: "علوم کامپیوتر", institution: CONFIG.university, description: "مطالعه موضوعات اصلی علوم کامپیوتر." },
    skills: { sectionTitle: "مهارت‌ها", frontendTitle: "توسعه فرانت‌اند", html5: "HTML5", css3: "CSS3", javascript: "JavaScript", responsive: "طراحی پاسخگو", uiDesign: "طراحی UI", cssAnimations: "انیمیشن‌های CSS", domManipulation: "مدیریت DOM", apiIntegration: "یکپارچگی API", gitTitle: "Git و GitHub", git: "Git", github: "GitHub", repoManagement: "مدیریت مخزن", versionControl: "کنترل نسخه" },
    services: { sectionTitle: "خدمات", webDev: "توسعه وب", webDevDesc: "ساخت وب‌سایت‌های مدرن و پاسخگو.", frontendDev: "توسعه فرانت‌اند", frontendDevDesc: "نوشتن کد فرانت‌اند تمیز.", responsiveSites: "وب‌سایت‌های پاسخگو", responsiveSitesDesc: "طراحی وب‌سایت‌های پاسخگو.", landingPages: "صفحات فرود", landingPagesDesc: "طراحی صفحات فرود با تبدیل بالا.", jsApps: "برنامه‌های وب جاوااسکریپت", jsAppsDesc: "توسعه برنامه‌های وب تعاملی.", portfolioSites: "وب‌سایت‌های پورتفولیو", portfolioSitesDesc: "ساخت وب‌سایت‌های پورتفولیو.", uiDesign: "طراحی UI", uiDesignDesc: "طراحی رابط‌های کاربری زیبا." },
    experience: { sectionTitle: "تجربیات", journeyTitle: "سفر یادگیری و توسعه", noExperience: "ساخت تجربه از طریق پروژه‌های شخصی." },
    projects: { sectionTitle: "پروژه‌ها", filterAll: "همه", filterHtml: "HTML", filterCss: "CSS", filterJavaScript: "جاوااسکریپت", filterWebApps: "برنامه‌های وب", filterUiDesign: "طراحی UI", filterOther: "سایر", viewDetails: "مشاهده جزئیات", github: "گیت‌هاب", liveDemo: "دمو زنده", technologies: "فناوری‌ها", features: "ویژگی‌ها", relatedProjects: "پروژه‌های مرتبط", screenshots: "تصاویر", description: "توضیحات", problem: "مسئله", solution: "راه‌حل", challenges: "چالش‌ها", learned: "آنچه یاد گرفتم", viewAll: "مشاهده همه پروژه‌ها" },
    certificates: { sectionTitle: "گواهینامه‌ها", viewCertificate: "مشاهده گواهینامه", organization: "سازمان", date: "تاریخ" },
    resume: { sectionTitle: "رزومه", profile: "پروفایل", education: "تحصیلات", experience: "تجربیات", skills: "مهارت‌ها", languages: "زبان‌ها", achievements: "دستاوردها", downloadCV: "دانلود CV", printResume: "چاپ رزومه" },
    languages: { sectionTitle: "زبان‌ها", pashto: "پشتو", dari: "دری", english: "انگلیسی", native: "زبان مادری", fluent: "روان", intermediate: "متوسط" },
    statistics: { projects: "پروژه تکمیل شده", repositories: "مخزن گیت‌هاب", certificates: "گواهینامه", skills: "مهارت", yearsLearning: "سال یادگیری" },
    testimonials: { sectionTitle: "نظرات", testimonial1Text: "یک توسعه‌دهنده استثنایی.", testimonial1Name: "جان دو", testimonial1Position: "توسعه‌دهنده ارشد", testimonial2Text: "خلاق، متعهد و همیشه آماده یادگیری.", testimonial2Name: "جین اسمیت", testimonial2Position: "مدیر پروژه", testimonial3Text: "کد تمیز و طراحی‌های زیبا.", testimonial3Name: "احمد خان", testimonial3Position: "رهبر فنی" },
    contact: { sectionTitle: "تماس با من", infoTitle: "اطلاعات تماس", email: "ایمیل", phone: "تلفن", whatsapp: "واتس‌اپ", telegram: "تلگرام", location: "موقعیت", viewLocation: "مشاهده موقعیت", formTitle: "یک پیام برای من بفرستید", fullName: "نام کامل", emailField: "ایمیل", phoneField: "تلفن", subject: "موضوع", message: "پیام", sendButton: "ارسال پیام", success: "پیام با موفقیت ارسال شد!", error: "لطفا تمام فیلدها را پر کنید.", nameRequired: "نام لازم است.", emailRequired: "ایمیل معتبر لازم است.", messageRequired: "پیام لازم است." },
    footer: { description: CONFIG.bio, quickLinks: "لینک‌های سریع", socialMedia: "شبکه‌های اجتماعی", copyright: "© 2026 " + CONFIG.name+ ". تمامی حقوق محفوظ است." },
    loading: { text: "در حال بارگذاری..." },
    scrollProgress: { label: "پیشرفت اسکرول" },
    backToTop: { label: "بازگشت به بالا" },
    theme: { dark: "حالت تاریک", light: "حالت روشن" },
    langSwitch: { pashto: "پشتو", dari: "دری", english: "انگلیسی" },
    notFound: { title: "404", subtitle: "صفحه پیدا نشد", message: "متأسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد.", backHome: "بازگشت به خانه" },
  },
  ps: {
    nav: { home:"کور",about: "زما په اړه", skills: "چلندونه", services: "خدمتونه", projects: "پروژې", resume: "ریزیوم", certificates: "سندونه", contact: "اړیکه" },
    hero: { greeting: "سلام، زه", name: CONFIG.name, title: CONFIG.title, description: CONFIG.bio, cta1: "زما پروژې وګورئ", cta2: "ریزیوم ډاونلوډ", cta3: "ګیټ‌هاب", cta4: "زما سره اړیکه" },
    about: { sectionTitle: "زما په اړه", fullName: CONFIG.name, profession: "د کمپیوټر ساینس ډېل", university: CONFIG.university, faculty: CONFIG.faculty, location: CONFIG.location, email: CONFIG.email, phone: CONFIG.phone, bioTitle: "زما بیوګرافیه", bioText: "زه یم د کمپیوټر ساینس ډېل سیو.", journeyTitle: "زما سفر", journeyText: "زما پروګرامنګ سفر د زما پوهنتون زده کړو په جریان پیل شو.", goalsTitle: "په مسیر کي اهداف", goalsText: "زه هوس مه چې د فعال فول-سټیک ویب ډېولپر ګرځم.", interests: "علاقې", interest1: "ویب ډېولپمنټ", interest2: "اوپن سورس", interest3: "UI/UX ډیزاین", interest4: "د نوي فناوریو زده کړه" },
    education: { sectionTitle: "تحصیلات", degree: "کمپیوټر ساینس", institution: CONFIG.university, description: "د کمپیوټر ساینس اصلي موضوعاتو زده کړه." },
    skills: { sectionTitle: "چلندونه", frontendTitle: "فرانټ-اېنډ ډېولپمنټ", html5: "HTML5", css3: "CSS3", javascript: "JavaScript", responsive: "ریسپانسیو ډیزاین", uiDesign: "UI ډیزاین", cssAnimations: "انیمیشن‌های CSS", domManipulation: "DOM مدیریت", apiIntegration: "API یکپارچې", gitTitle: "Git او GitHub", git: "Git", github: "GitHub", repoManagement: "ریپوازټوري مدیریت", versionControl: "ورجن کنټرول" },
    services: { sectionTitle: "خدمتونه", webDev: "ویب ډېولپمنټ", webDevDesc: "ساخت وب‌سایت‌های مدرن.", frontendDev: "فرانټ-اېنډ ډېولپمنټ", frontendDevDesc: "نوشتن کد فرانت‌اند تمیز.", responsiveSites: "وب‌سایت‌های پاسخگو", responsiveSitesDesc: "طراحی وب‌سایت‌های پاسخگو.", landingPages: "لینډینګ پاڼې", landingPagesDesc: "طراحی صفحات فرود.", jsApps: "برنامه‌های وب جاوااسکریپت", jsAppsDesc: "توسعه برنامه‌های وب تعاملی.", portfolioSites: "وب‌سایت‌های پورتفولیو", portfolioSitesDesc: "ساخت وب‌سایت‌های پورتفولیو.", uiDesign: "UI ډیزاین", uiDesignDesc: "طراحی رابط‌های کاربری زیبا." },
    experience: { sectionTitle: "تجربیات", journeyTitle: "د زده کړو وده سفر", noExperience: "ساخت تجربه از طریق پروژه‌های شخصی." },
    projects: { sectionTitle: "پروژې", filterAll: "ټول", filterHtml: "HTML", filterCss: "CSS", filterJavaScript: "جاوا اسکریپټ", filterWebApps: "ویب اپلیکېشنونه", filterUiDesign: "UI ډیزاین", filterOther: "نور", viewDetails: "جزئیات وګورئ", github: "ګیټ‌هاب", liveDemo: "ژوندي ډمو", technologies: "فناوریونه", features: "ځانګړتیاوې", relatedProjects: "اړیکه پروژې", screenshots: "انځورونه", description: "تفصیلات", problem: "مسئله", solution: "حل", challenges: "چالنونه", learned: "زه څه زده کړم", viewAll: "ټولې پروژې وګورئ" },
    certificates: { sectionTitle: "سندونه", viewCertificate: "سند وګورئ", organization: "سازمان", date: "نیټه" },
    resume: { sectionTitle: "ریزیوم", profile: "پروفایل", education: "تحصیلات", experience: "تجربیات", skills: "چلندونه", languages: "ژبې", achievements: "لاستینې", downloadCV: "CV ډاونلوډ", printResume: "ریزیوم پرنټ" },
    languages: { sectionTitle: "ژبې", pashto: "پښتو", dari: "دری", english: "انګلیسي", native: "مادري ژبه", fluent: "روان", intermediate: "منځنی" },
    statistics: { projects: "تکمیل شوي پروژې", repositories: "ګیټ‌هاب ریپوازټورۍ", certificates: "سندونه", skills: "چلندونه", yearsLearning: "کلونه زده کړه" },
    testimonials: { sectionTitle: "نظرونه", testimonial1Text: "یو ډېر ښه ډېولپر.", testimonial1Name: "جان ډو", testimonial1Position: "ارشد ډېولپر", testimonial2Text: "خلاق، متعهد.", testimonial2Name: "جین سمیث", testimonial2Position: "د پروژې مدیر", testimonial3Text: "کد تمیز.", testimonial3Name: "احمد خان", testimonial3Position: "فنی لار" },
    contact: { sectionTitle: "زما سره اړیکه", infoTitle: "د اړیکو معلومات", email: "برېښنالیک", phone: "تلیفون", whatsapp: "واټساپ", telegram: "ټیلیګرام", location: "موقعیت", viewLocation: "موقعیت وګورئ", formTitle: "زما ته یو پیام ولیکئ", fullName: "بشپړ نوم", emailField: "برېښنالیک", phoneField: "تلیفون", subject: "موضوع", message: "پیام", sendButton: "پیام ولیکئ", success: "پیام بریالۍ سره!", error: "لطفا ټول فیلدونه ډک کړئ.", nameRequired: "نوم اړين دی.", emailRequired: "معتبر برېښنالیک اړين دی.", messageRequired: "پیام اړين دی." },
    footer: { description: CONFIG.bio, quickLinks: "ګران لینکونه", socialMedia: "ټولنیز شبکه", copyright: "© 2026 " + CONFIG.name + ". ټول حقونه خوندي دي." },
    loading: { text: "د بار کولو..." },
    scrollProgress: { label: "د سکرول پرمختګ" },
    backToTop: { label: "بازگشت بالا" },
    theme: { dark: "تیاره حالت", light: "روشن حالت" },
    langSwitch: { pashto: "پښتو", dari: "دری", english: "انګلیسي" },
    notFound: { title: "404", subtitle: "په نه موندل شوی صفحه", message: "وبخپلۍ، هغه صفحه چې وګورئ غواړئ شتون نه لري.", backHome: "کور ته راستنیدل" },
  },
};

/* ==================== GLOBAL IMAGE ERROR HANDLER ==================== */
window.addEventListener("error", function(e) {
  if (e.target && e.target.tagName === "IMG") {
    e.target.src = "assets/images/projects/project-placeholder.svg";
  }
}, true);

/* ==================== STATE ==================== */
let currentLang = localStorage.getItem("portfolio-lang") || "ps";
let currentTheme = localStorage.getItem("portfolio-theme") || "dark";

/* ==================== DOM READY ==================== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLang();
  initLoader();
  initScrollProgress();
  initBackToTop();
  initMobileMenu();
  initReveal();
  initTyping();
  initStats();
  initSkillBars();
  initContactForm();
  initProjectFilter();
  initLightbox();
  updateActiveNav();
  updateSocialLinks();
});

/* ==================== THEME ==================== */
function initTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.textContent = currentTheme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("aria-label", currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    btn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("portfolio-theme", currentTheme);
      btn.textContent = currentTheme === "dark" ? "☀️" : "🌙";
      btn.setAttribute("aria-label", currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  }
}

/* ==================== LANGUAGE ==================== */
function initLang() {
  setLang(currentLang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang && lang !== currentLang) {
        currentLang = lang;
        localStorage.setItem("portfolio-lang", lang);
        setLang(lang);
      }
    });
  });
}

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  const dir = lang === "en" ? "ltr" : "rtl";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getNestedValue(t, key);
    if (value !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) {
          el.setAttribute("placeholder", value);
        } else {
          el.value = value;
        }
      } else if (el.tagName === "OPTION") {
        el.textContent = value;
      } else {
        el.innerHTML = value;
      }
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    const value = getNestedValue(t, key);
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

  if (typeof updateProjects === "function") updateProjects();
  if (typeof updateTestimonials === "function") updateTestimonials();
  if (typeof updateContactInfo === "function") updateContactInfo();
  if (typeof updateFooter === "function") updateFooter();
  if (typeof updateSocialLinks === "function") updateSocialLinks();
}

function getNestedValue(obj, path) {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current && current[part] !== undefined) {
      current = current[part];
    } else {
      return undefined;
    }
  }
  return current;
}

/* ==================== LOADER ==================== */
function initLoader() {
  const loader = document.getElementById("loading-screen");
  if (loader) {
    window.addEventListener("load", () => {
      setTimeout(() => loader.classList.add("hidden"), 500);
    });
  }
}

/* ==================== SCROLL PROGRESS ==================== */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + "%";
  });
}

/* ==================== BACK TO TOP ==================== */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==================== MOBILE MENU ==================== */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileClose = document.getElementById("mobile-close");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.add("open");
      hamburger.classList.add("active");
    });
  }
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("active");
    });
  }
  mobileMenu?.querySelectorAll(".mobile-menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });
}

/* ==================== REVEAL ON SCROLL ==================== */
function initReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach((el) => observer.observe(el));
}

/* ==================== TYPING ANIMATION ==================== */
function initTyping() {
  const el = document.getElementById("typing-text");
  if (!el) return;
  const words = ["Web Developer", "Programmer", "Designer", "Problem Solver"];
  let i = 0;
  let j = 0;
  let isDeleting = false;
  function type() {
    const current = words[i];
    el.textContent = isDeleting ? current.substring(0, j - 1) : current.substring(0, j + 1);
    j = isDeleting ? j - 1 : j + 1;
    if (!isDeleting && j === current.length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
  type();
}

/* ==================== STATS COUNTER ==================== */
function initStats() {
  const counters = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute("data-count"));
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => observer.observe(c));
}

function animateCounter(el, target) {
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + "+";
  }, 30);
}

/* ==================== PROJECT FILTER ==================== */
function initProjectFilter() {
  const filters = document.querySelectorAll(".filter-btn");
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      const items = grid.querySelectorAll(".project-card");
      items.forEach((item) => {
        const cat = item.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          item.style.display = "block";
          item.style.animation = "fadeInUp 0.5s ease forwards";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

/* ==================== PROJECT DETAILS ==================== */
function getProjectById(id) {
  return PROJECTS.find((p) => p.id === parseInt(id));
}

function renderProjectDetail(id) {
  const project = getProjectById(id);
  if (!project) {
    window.location.href = "404.html";
    return;
  }
  const t = translations[currentLang] || translations.en;
  const container = document.getElementById("project-detail-container");
  if (!container) return;
  container.innerHTML = `
    <div class="project-detail-hero reveal">
      <img src="${project.image}" alt="${project.name}" class="project-detail-img" onerror="this.src='assets/images/projects/project-placeholder.svg'">
      <h1>${project.name}</h1>
      <p class="project-category">${project.category}</p>
      <div class="project-detail-meta">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
      </div>
    </div>
    <div class="project-detail-content">
      <div class="reveal">
        <h3>${getNestedValue(t, 'projects.description') || 'Description'}</h3>
        <p>${project.fullDescription}</p>
      </div>
      <div class="reveal">
        <h3>${getNestedValue(t, 'projects.problem') || 'Problem'}</h3>
        <p>${project.problem}</p>
      </div>
      <div class="reveal">
        <h3>${getNestedValue(t, 'projects.solution') || 'Solution'}</h3>
        <p>${project.solution}</p>
      </div>
      <div class="reveal">
        <h3>${getNestedValue(t, 'projects.features') || 'Features'}</h3>
        <ul style="color:var(--text-secondary); padding-left:1.5rem;">
          ${project.features.map(f => `<li style="margin-bottom:0.5rem;">${f}</li>`).join("")}
        </ul>
      </div>
      <div class="reveal">
        <h3>${getNestedValue(t, 'projects.technologies') || 'Technologies'}</h3>
        <div class="project-tech">${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}</div>
      </div>
      <div class="reveal">
        <h3>${getNestedValue(t, 'projects.screenshots') || 'Screenshots'}</h3>
        <div class="project-screenshots">
          ${project.screenshots.map(s => `<div class="project-screenshot"><img src="${s}" alt="Screenshot" onerror="this.src='assets/images/projects/project-placeholder.svg'"></div>`).join("")}
        </div>
      </div>
      <div class="reveal" style="display:flex; gap:1rem; flex-wrap:wrap; margin-top:2rem;">
        <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-primary">${getNestedValue(t, 'projects.github') || 'GitHub'}</a>
        <a href="${project.liveDemo}" target="_blank" rel="noopener" class="btn btn-outline">${getNestedValue(t, 'projects.liveDemo') || 'Live Demo'}</a>
      </div>
    </div>
  `;
  initReveal();
}

function updateProjects() {
  const t = translations[currentLang] || translations.en;
  document.querySelectorAll(".project-card").forEach((card, i) => {
    if (PROJECTS[i]) {
      card.querySelector(".project-category").textContent = PROJECTS[i].category;
      card.querySelector(".project-title").textContent = PROJECTS[i].name;
      card.querySelector(".project-desc").textContent = PROJECTS[i].description;
      const techContainer = card.querySelector(".project-tech");
      if (techContainer) {
        techContainer.innerHTML = PROJECTS[i].technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join("");
      }
    }
  });
}

/* ==================== LIGHTBOX ==================== */
function initLightbox() {
  document.addEventListener("click", (e) => {
    const screenshot = e.target.closest(".project-screenshot");
    if (screenshot) {
      const img = screenshot.querySelector("img");
      if (img) openLightbox(img.src);
    }
  });
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  if (closeBtn && lightbox) {
    closeBtn.addEventListener("click", () => lightbox.classList.remove("open"));
  }
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("open");
  });
}

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = lightbox?.querySelector("img");
  if (lightbox && img) {
    img.src = src;
    lightbox.classList.add("open");
  }
}

/* ==================== SKILL BARS ==================== */
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-fill");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute("data-width");
        if (width) entry.target.style.width = width;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach((bar) => observer.observe(bar));
}

/* ==================== CONTACT FORM ==================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-message");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    const t = translations[currentLang] || translations.en;
    if (!name || !email || !message) {
      showFormMessage(msg, "error", t.contact.error || "Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFormMessage(msg, "error", t.contact.emailRequired || "Valid email is required.");
      return;
    }
    showFormMessage(msg, "success", t.contact.success || "Message sent successfully!");
    form.reset();
  });
}

function showFormMessage(el, type, text) {
  if (!el) return;
  el.className = "form-message " + type;
  el.textContent = text;
}

/* ==================== TESTIMONIALS ==================== */
function updateTestimonials() {
  const t = translations[currentLang] || translations.en;
  document.querySelectorAll(".testimonial-card").forEach((card, i) => {
    const texts = [t.testimonials.testimonial1Text, t.testimonials.testimonial2Text, t.testimonials.testimonial3Text];
    const names = [t.testimonials.testimonial1Name, t.testimonials.testimonial2Name, t.testimonials.testimonial3Name];
    const positions = [t.testimonials.testimonial1Position, t.testimonials.testimonial2Position, t.testimonials.testimonial3Position];
    if (card) {
      const textEl = card.querySelector(".testimonial-text");
      const nameEl = card.querySelector(".testimonial-info h4");
      const posEl = card.querySelector(".testimonial-info span");
      if (textEl) textEl.textContent = texts[i] || "";
      if (nameEl) nameEl.textContent = names[i] || "";
      if (posEl) posEl.textContent = positions[i] || "";
    }
  });
}

/* ==================== CONTACT INFO ==================== */
function updateContactInfo() {
  const t = translations[currentLang] || translations.en;
  document.querySelectorAll(".contact-card").forEach((card) => {
    const iconEl = card.querySelector(".contact-icon");
    if (iconEl) {
      const type = iconEl.getAttribute("data-type");
      if (type === "email") iconEl.textContent = "✉️";
      if (type === "phone") iconEl.textContent = "📞";
      if (type === "whatsapp") iconEl.textContent = "💬";
      if (type === "telegram") iconEl.textContent = "✈️";
      if (type === "location") iconEl.textContent = "📍";
    }
  });
}

/* ==================== FOOTER ==================== */
function updateFooter() {
  const t = translations[currentLang] || translations.en;
  const desc = document.querySelector(".footer-brand p");
  if (desc) desc.textContent = t.footer.description;
  const copy = document.querySelector(".footer-bottom");
  if (copy) copy.textContent = t.footer.copyright;
  const locationLink = document.getElementById("footer-location-link");
  if (locationLink && CONFIG.googleMaps && CONFIG.googleMaps !== "[GOOGLE MAPS LINK]") {
    locationLink.href = CONFIG.googleMaps;
  }
}

/* ==================== SOCIAL LINKS ==================== */
function updateSocialLinks() {
  const githubBtn = document.getElementById("hero-github-btn");
  if (githubBtn && CONFIG.github && CONFIG.github !== "[GITHUB LINK]") {
    githubBtn.href = CONFIG.github;
  }
  const socials = [
    { id: "social-github", url: CONFIG.github },
    { id: "social-linkedin", url: CONFIG.linkedin },
    { id: "social-instagram", url: CONFIG.instagram },
    { id: "social-youtube", url: CONFIG.youtube },
    { id: "footer-github", url: CONFIG.github },
    { id: "footer-linkedin", url: CONFIG.linkedin },
    { id: "footer-facebook", url: CONFIG.facebook },
    { id: "footer-instagram", url: CONFIG.instagram },
  ];
  socials.forEach((s) => {
    const el = document.getElementById(s.id);
    if (el && s.url && !s.url.startsWith("[") && !s.url.endsWith("]")) {
      el.href = s.url;
    }
  });
}

/* ==================== ACTIVE NAV ==================== */
function updateActiveNav() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-menu-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === page || (page === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* ==================== RTL HELPERS ==================== */
function isRTL() {
  return document.documentElement.getAttribute("dir") === "rtl";
}

/* ==================== INIT ON LOAD ==================== */
window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("active");
    }
  });
});
