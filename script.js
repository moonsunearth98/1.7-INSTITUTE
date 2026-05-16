/* =============================================
   1.7 INSTITUTE OF DANCE – script.js
   Features: i18n, particles, scroll effects,
   navbar, lightbox, back-to-top
   ============================================= */

/* =============================================
   TRANSLATIONS OBJECT
   ============================================= */
const translations = {
  en: {
    // Navbar
    nav_home:         "Home",
    nav_about:        "About",
    nav_classes:      "Classes",
    nav_achievements: "Achievements",
    nav_gallery:      "Gallery",
    nav_videos:       "Videos",
    nav_location:     "Location",
    nav_contact:      "Contact",

    // Hero
    hero_badge:    "🔥 Bhadohi's Premier Dance Academy",
    hero_learn:    "Learn Dance",
    hero_of_dance: "OF DANCE",
    hero_sub:      "Professional dance training for kids, youth, wedding events, and stage performances in Devanathpur Bajar, Bhadohi.",
    stat_students: "Students",
    stat_events:   "Events",
    stat_tv:       "TV Round Selected",
    btn_whatsapp:  "Join on WhatsApp",
    btn_gallery:   "View Gallery",
    scroll_down:   "Scroll Down",

    // About
    about_tag:          "About Us",
    about_title:        "Where Passion Meets Performance",
    about_p1:           "1.7 Institute of Dance is a professional dance training institute founded by Rama Sir in Devanathpur Bajar, Bhadohi. We believe every student has a unique rhythm waiting to be discovered.",
    about_p2:           "Our training builds confidence, stage presence, discipline, and creativity. Students are trained for competitions, school events, wedding choreography, and all styles of solo, duet, trio, and group performances.",
    about_founder_label:"Founder & Teacher",
    feat1:              "Competition-level Training",
    feat2:              "All Age Groups Welcome",
    feat3:              "TV Show & Audition Prep",
    feat4:              "Wedding Choreography Expert",
    btn_contact_now:    "Contact Now",

    // Classes
    classes_tag:   "Our Classes",
    classes_title: "What We Teach",
    classes_sub:   "From toddlers to wedding couples – we train everyone with passion.",
    popular:       "Popular",
    tv_ready:      "TV Ready",
    class1_title:  "Kids Dance Classes",
    class1_desc:   "Fun & energetic training for children building confidence and rhythm from a young age.",
    class2_title:  "Wedding Choreography",
    class2_desc:   "Make your wedding unforgettable. Special training for bride, groom & family dance.",
    class3_title:  "Solo Performance",
    class3_desc:   "Personal coaching for stage-ready solo performances at competitions and events.",
    class4_title:  "Duet / Couple Dance",
    class4_desc:   "Beautiful sync and chemistry-based choreography for duo & couple performances.",
    class5_title:  "Trio / Group Dance",
    class5_desc:   "High-energy group choreography that commands the stage with perfect sync.",
    class6_title:  "Stage Performance",
    class6_desc:   "Professional stage prep including expressions, lighting, and crowd engagement.",
    class7_title:  "Competition Training",
    class7_desc:   "Audition-level coaching to prepare students for dance reality shows & contests.",
    class8_title:  "All Dance Styles",
    class8_desc:   "Bollywood, Hip-Hop, Classical, Semi-Classical, Folk and freestyle – all under one roof.",

    // Achievements
    achieve_tag:   "Achievements",
    achieve_title: "Our Pride & Glory",
    achieve_sub:   "Years of hard work, sweat and passion – turned into victories.",
    ach1_title:    "TV Round Selection",
    ach1_desc:     "The 1.7 Crew was selected for the TV Round of India's Dance Idol Season 3 – a major national dance reality show. A proud milestone for our institute!",
    ach2_title:    "Certificates & Medals",
    ach2_desc:     "Students have won multiple certificates and medals at state and district level dance competitions, showcasing the quality of training at 1.7 Institute.",
    ach3_title:    "Group Trophies Won",
    ach3_desc:     "Our group teams have claimed trophies and top positions at multiple inter-school and open competitions across the region.",
    ach4_title:    "Superintendent Recognition",
    ach4_desc:     "Students were recognized and honored at the Superintendent of Police office, Bhadohi – a proud recognition of our talent and discipline.",
    ach5_title:    "Stage Performances",
    ach5_desc:     "Dozens of successful stage performances at public events, school functions, and community programs across Bhadohi and neighboring districts.",
    ach6_title:    "India's Dance Idol Ready",
    ach6_desc:     "Our students are trained to national competition standards – audition-ready for TV shows, talent hunts and dance reality programs across India.",

    // Gallery
    gallery_tag:   "Gallery",
    gallery_title: "Moments That Inspire",
    gallery_sub:   "Our journey in pictures – sweat, glory, smiles and dance.",
    gal_logo:      "Institute Logo",
    gal_cert:      "Certificate Ceremony",
    gal_police:    "SP Office Recognition",
    gal_trophy:    "Trophy Winners",
    gal_tv:        "TV Round Selection",
    gal_wedding:   "Wedding Choreography",

    // Videos
    videos_tag:       "Videos",
    videos_title:     "Watch Us Perform",
    videos_sub:       "See the energy, passion and skill of our students in action.",
    video_placeholder:"YouTube Video – Coming Soon",
    video_paste:      "Paste YouTube embed link here",
    vid1_label:       "Group Performance Video",
    vid2_label:       "Wedding Choreography Reel",
    vid3_label:       "Kids Performance Highlight",
    btn_yt:           "Visit Our YouTube Channel",

    // Location
    loc_tag:     "Location",
    loc_title:   "Find Us Here",
    loc_address: " 1.7 Institute of Dance, Devanathpur Bajar, Bhadohi",

    // Contact
    contact_tag:    "Contact Us",
    contact_title:  "Get In Touch",
    contact_sub:    "Ready to dance? Reach us on any platform – we're always available!",
    contact_wa:     "WhatsApp",
    contact_call:   "Call Us",
    cinfo_phone:    "Phone / WhatsApp",
    cinfo_addr:     "Address",
    cinfo_addr_val: "Devanathpur Bajar, Bhadohi",
    cinfo_founder:  "Founder",
    wa_tooltip:     "Chat with us!",
  },

  hi: {
    // Navbar
    nav_home:         "होम",
    nav_about:        "परिचय",
    nav_classes:      "क्लासेस",
    nav_achievements: "उपलब्धियाँ",
    nav_gallery:      "गैलरी",
    nav_videos:       "वीडियो",
    nav_location:     "लोकेशन",
    nav_contact:      "संपर्क",

    // Hero
    hero_badge:    "🔥 भदोही की सबसे अच्छी डांस अकादमी",
    hero_learn:    "डांस सीखें",
    hero_of_dance: "ऑफ डांस",
    hero_sub:      "देवनाथपुर बाजार, भदोही में बच्चों, युवाओं, शादी और स्टेज परफॉर्मेंस के लिए प्रोफेशनल डांस ट्रेनिंग।",
    stat_students: "छात्र",
    stat_events:   "इवेंट्स",
    stat_tv:       "TV राउंड सिलेक्शन",
    btn_whatsapp:  "WhatsApp पर जुड़ें",
    btn_gallery:   "गैलरी देखें",
    scroll_down:   "नीचे देखें",

    // About
    about_tag:          "हमारे बारे में",
    about_title:        "जहाँ जुनून और परफॉर्मेंस मिलते हैं",
    about_p1:           "1.7 Institute of Dance एक प्रोफेशनल डांस ट्रेनिंग संस्था है जिसे रमा सर ने देवनाथपुर बाजार, भदोही में शुरू किया। हमारा मानना है कि हर छात्र में एक अनोखी लय छुपी होती है।",
    about_p2:           "हमारी ट्रेनिंग आत्मविश्वास, स्टेज प्रेजेंस, अनुशासन और क्रिएटिविटी बढ़ाती है। छात्रों को प्रतियोगिता, स्कूल इवेंट, शादी कोरियोग्राफी और सोलो, ड्यूएट, ट्रियो, ग्रुप परफॉर्मेंस के लिए ट्रेन किया जाता है।",
    about_founder_label:"संस्थापक और शिक्षक",
    feat1:              "प्रतियोगिता स्तर की ट्रेनिंग",
    feat2:              "सभी उम्र के बच्चे स्वागत योग्य",
    feat3:              "TV शो और ऑडिशन की तैयारी",
    feat4:              "शादी कोरियोग्राफी के विशेषज्ञ",
    btn_contact_now:    "अभी संपर्क करें",

    // Classes
    classes_tag:   "हमारी क्लासेस",
    classes_title: "हम क्या सिखाते हैं",
    classes_sub:   "छोटे बच्चों से लेकर शादी के जोड़े तक – सभी को डांस सिखाते हैं।",
    popular:       "लोकप्रिय",
    tv_ready:      "TV तैयार",
    class1_title:  "बच्चों की डांस क्लास",
    class1_desc:   "छोटे बच्चों के लिए मजेदार और ऊर्जावान ट्रेनिंग जो आत्मविश्वास और लय बनाती है।",
    class2_title:  "शादी कोरियोग्राफी",
    class2_desc:   "अपनी शादी को यादगार बनाएं। दूल्हा, दुल्हन और परिवार के लिए खास ट्रेनिंग।",
    class3_title:  "सोलो परफॉर्मेंस",
    class3_desc:   "प्रतियोगिता और इवेंट में स्टेज-रेडी सोलो परफॉर्मेंस के लिए पर्सनल कोचिंग।",
    class4_title:  "ड्यूएट / कपल डांस",
    class4_desc:   "दो लोगों की खूबसूरत जुगलबंदी वाली कोरियोग्राफी।",
    class5_title:  "ट्रियो / ग्रुप डांस",
    class5_desc:   "हाई एनर्जी ग्रुप कोरियोग्राफी जो स्टेज पर अलग छाप छोड़े।",
    class6_title:  "स्टेज परफॉर्मेंस",
    class6_desc:   "प्रोफेशनल स्टेज तैयारी जिसमें एक्सप्रेशन, लाइटिंग और दर्शकों से जुड़ना सिखाया जाता है।",
    class7_title:  "प्रतियोगिता ट्रेनिंग",
    class7_desc:   "TV डांस शो और कॉन्टेस्ट के लिए ऑडिशन-लेवल कोचिंग।",
    class8_title:  "सभी डांस स्टाइल",
    class8_desc:   "बॉलीवुड, हिप-हॉप, क्लासिकल, सेमी-क्लासिकल, लोकगीत और फ्रीस्टाइल – सब एक ही जगह।",

    // Achievements
    achieve_tag:   "उपलब्धियाँ",
    achieve_title: "हमारा गौरव और शान",
    achieve_sub:   "मेहनत, लगन और जुनून से मिली जीतें।",
    ach1_title:    "TV राउंड सिलेक्शन",
    ach1_desc:     "1.7 क्रू को India's Dance Idol Season 3 के TV राउंड के लिए सेलेक्ट किया गया – यह हमारे संस्थान की एक बड़ी उपलब्धि है!",
    ach2_title:    "सर्टिफिकेट और मेडल",
    ach2_desc:     "छात्रों ने जिला और राज्य स्तरीय डांस प्रतियोगिताओं में कई सर्टिफिकेट और मेडल जीते हैं।",
    ach3_title:    "ग्रुप ट्रॉफियाँ जीती",
    ach3_desc:     "हमारी ग्रुप टीमों ने क्षेत्र में कई इंटर-स्कूल और ओपन प्रतियोगिताओं में ट्रॉफियाँ और शीर्ष स्थान हासिल किए हैं।",
    ach4_title:    "SP कार्यालय से सम्मान",
    ach4_desc:     "छात्रों को भदोही के पुलिस अधीक्षक कार्यालय में सम्मानित किया गया – हमारी प्रतिभा और अनुशासन की पहचान।",
    ach5_title:    "स्टेज परफॉर्मेंस",
    ach5_desc:     "भदोही और आसपास के जिलों में दर्जनों सफल स्टेज परफॉर्मेंस दिए गए हैं।",
    ach6_title:    "India's Dance Idol की तैयारी",
    ach6_desc:     "हमारे छात्र राष्ट्रीय स्तर की प्रतियोगिता के लिए तैयार हैं – TV शो, टैलेंट हंट और डांस रियलिटी प्रोग्राम के लिए ऑडिशन-रेडी।",

    // Gallery
    gallery_tag:   "गैलरी",
    gallery_title: "यादगार पल",
    gallery_sub:   "तस्वीरों में हमारा सफर – मेहनत, जीत, मुस्कान और डांस।",
    gal_logo:      "संस्थान का लोगो",
    gal_cert:      "सर्टिफिकेट समारोह",
    gal_police:    "SP कार्यालय सम्मान",
    gal_trophy:    "ट्रॉफी विजेता",
    gal_tv:        "TV राउंड सिलेक्शन",
    gal_wedding:   "शादी कोरियोग्राफी",

    // Videos
    videos_tag:       "वीडियो",
    videos_title:     "हमें परफॉर्म करते देखें",
    videos_sub:       "हमारे छात्रों की ऊर्जा, जुनून और हुनर देखें।",
    video_placeholder:"YouTube वीडियो – जल्द आ रहा है",
    video_paste:      "यहाँ YouTube एम्बेड लिंक डालें",
    vid1_label:       "ग्रुप परफॉर्मेंस वीडियो",
    vid2_label:       "शादी कोरियोग्राफी रील",
    vid3_label:       "बच्चों का परफॉर्मेंस हाइलाइट",
    btn_yt:           "हमारा YouTube चैनल देखें",

    // Location
    loc_tag:     "लोकेशन",
    loc_title:   "हमें यहाँ खोजें",
    loc_address: " 1.7 इंस्टीट्यूट ऑफ डांस, देवनाथपुर बाजार, भदोही",

    // Contact
    contact_tag:    "संपर्क करें",
    contact_title:  "हमसे बात करें",
    contact_sub:    "डांस सीखने के लिए तैयार हैं? किसी भी प्लेटफॉर्म पर हमसे जुड़ें!",
    contact_wa:     "WhatsApp",
    contact_call:   "कॉल करें",
    cinfo_phone:    "फोन / WhatsApp",
    cinfo_addr:     "पता",
    cinfo_addr_val: "देवनाथपुर बाजार, भदोही",
    cinfo_founder:  "संस्थापक",
    wa_tooltip:     "हमसे बात करें!",
  }
};

/* =============================================
   LANGUAGE SYSTEM
   ============================================= */
let currentLang = localStorage.getItem('lang_17iod') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang_17iod', lang);

  // Update all i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';

  // Update active button
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-hi').classList.toggle('active', lang === 'hi');
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});

/* =============================================
   NAVBAR SCROLL EFFECT + ACTIVE LINK
   ============================================= */
const mainNav = document.getElementById('mainNav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
  // Scrolled class
  if (window.scrollY > 60) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }

  // Back to top button
  const btn = document.getElementById('backToTop');
  if (window.scrollY > 400) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }

  // Active nav link
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });

  // Scroll reveal
  revealOnScroll();
});

/* =============================================
   SCROLL REVEAL
   ============================================= */
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

// Run once on load too
window.addEventListener('load', revealOnScroll);

/* =============================================
   LIGHTBOX
   ============================================= */
const galleryImages = [
  { src: 'assets/logo.jpg',                alt: '1.7 Institute of Dance Logo' },
  { src: 'assets/stage-certificate.jpg',   alt: 'Certificate Ceremony' },
  { src: 'assets/office-recognition.jpg',  alt: 'SP Office Recognition – Bhadohi' },
  { src: 'assets/trophy-winners.jpg',      alt: 'Trophy & Medal Winners' },
  { src: 'assets/tv-selection.jpg',        alt: '1.7 Crew – TV Round Selection' },
  { src: 'assets/wedding-choreography.jpg',alt: 'Professional Wedding Choreography' },
];

let currentLbIndex = 0;

function openLightbox(index) {
  currentLbIndex = index;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = galleryImages[index].src;
  img.alt = galleryImages[index].alt;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function changeLightbox(dir) {
  currentLbIndex = (currentLbIndex + dir + galleryImages.length) % galleryImages.length;
  const img = document.getElementById('lightbox-img');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = galleryImages[currentLbIndex].src;
    img.alt = galleryImages[currentLbIndex].alt;
    img.style.opacity = '1';
  }, 150);
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('active')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') changeLightbox(1);
  if (e.key === 'ArrowLeft')  changeLightbox(-1);
});

/* =============================================
   PARTICLE CANVAS
   ============================================= */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = [
    'rgba(200,16,46,',
    'rgba(245,197,24,',
    'rgba(255,255,255,',
  ];

  function Particle() {
    this.reset();
  }
  Particle.prototype.reset = function() {
    this.x      = Math.random() * canvas.width;
    this.y      = Math.random() * canvas.height;
    this.r      = Math.random() * 1.8 + 0.5;
    this.vx     = (Math.random() - 0.5) * 0.4;
    this.vy     = (Math.random() - 0.5) * 0.4 - 0.15;
    this.life   = Math.random() * 200 + 100;
    this.maxLife= this.life;
    this.color  = COLORS[Math.floor(Math.random() * COLORS.length)];
  };
  Particle.prototype.draw = function() {
    const alpha = this.life / this.maxLife * 0.7;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color + alpha + ')';
    ctx.fill();
  };
  Particle.prototype.update = function() {
    this.x    += this.vx;
    this.y    += this.vy;
    this.life -= 1;
    if (this.life <= 0) this.reset();
  };

  // Create particles
  for (let i = 0; i < 90; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    animId = requestAnimationFrame(animate);
  }
  animate();
})();

/* =============================================
   SMOOTH SCROLL FOR NAV LINKS
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      // Close mobile navbar if open
      const navCollapse = document.getElementById('navbarNav');
      if (navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* =============================================
   HERO TITLE LETTER ANIMATION
   ============================================= */
window.addEventListener('load', () => {
  document.querySelectorAll('.hero-content .reveal-up').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 150);
  });
  document.querySelectorAll('.hero-visual .reveal-right').forEach(el => {
    setTimeout(() => el.classList.add('visible'), 600);
  });
});

/* =============================================
   COUNTER ANIMATION FOR STATS
   ============================================= */
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const text = el.textContent;
    const num  = parseInt(text.replace(/\D/g,''));
    if (!num || el.dataset.counted) return;
    el.dataset.counted = true;
    const suffix = text.replace(/[0-9]/g, '');
    let start = 0;
    const duration = 1500;
    const step = duration / num;
    const timer = setInterval(() => {
      start++;
      el.textContent = start + suffix;
      if (start >= num) clearInterval(timer);
    }, step < 10 ? 10 : step);
  });
}

// Trigger counter when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero-section');
if (heroSection) heroObserver.observe(heroSection);

/* =============================================
   CLOSE MOBILE MENU ON OVERLAY TAP
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const navCollapse = document.getElementById('navbarNav');
  // Close when clicking the dark overlay area (not the nav links themselves)
  navCollapse.addEventListener('click', function(e) {
    if (e.target === navCollapse) {
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
  // Update aria-expanded for CSS animation
  navCollapse.addEventListener('show.bs.collapse', () => {
    document.querySelector('.navbar-toggler').setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  });
  navCollapse.addEventListener('hide.bs.collapse', () => {
    document.querySelector('.navbar-toggler').setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  });
});