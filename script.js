/* ==========================================
   PORTFOLIO — MAIN SCRIPT
   John Ariel Ramos
   ========================================== */

(function () {
  'use strict';

  // ==========================================
  // PROJECT DATA (Newest to Oldest)
  // ==========================================
  const projects = [
    {
      id: 1,
      title: 'FuelOps — Fuel & Gasoline Management System',
      tag: 'Full-Stack Web App',
      category: 'Enterprise Fuel Station Management System',
      description: 'The Fuel & Gasoline Management System is a full-featured web application designed to track, streamline, and audit daily fuel inventory, dispenser transactions, and sales operations for fuel stations. It automates critical back-office functions—such as recording meter readings, managing fuel deliveries and price updates, tracking cashier shifts, and generating financial and inventory reports in both PDF and Excel formats—replacing manual pen-and-paper recordkeeping with an accurate, centralized digital platform.',
      contribution: 'I served as the full-stack developer responsible for architecting the application\'s core backend logic, relational database structure, and deployment lifecycle. I designed and implemented the Django models and secure view handlers to calculate station throughput, reconcile pump readings, and prevent discrepancies. In addition, I integrated automated reporting engines using ReportLab (PDF) and openpyxl (Excel), migrated the database from SQLite to a cloud-hosted PostgreSQL instance on Supabase, configured WhiteNoise for robust static asset delivery, and engineered the serverless deployment pipeline on Vercel.',
      tech: ['Python', 'Django (v6.0)', 'PostgreSQL', 'Supabase', 'ReportLab (PDF)', 'openpyxl (Excel)', 'WhiteNoise', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
      liveUrl: 'https://fuelops-zeta.vercel.app',
      githubUrl: 'https://github.com/Jordibot-art/FUELOPS',
      image: 'images/fuelops.png'
    },
    {
      id: 2,
      title: 'Void Book — Full-Stack Reading & Library Platform',
      tag: 'Full-Stack Web App',
      category: 'Digital Library & Reader Web Application',
      description: 'Void Book is a full-stack reading and library web application designed to give users a distraction-free, modern reading experience. It features interactive tools such as text highlighting, saving vocabulary words, tracking reading history, bookmarking favorite titles, and cloud synchronization for user libraries and reading progress across sessions.',
      contribution: 'Working in collaboration with my team who supplied the UI/UX designs, I served as the sole developer responsible for turning their static mockups into a fully interactive, working web platform. I took full ownership of coding the responsive frontend interface, engineering the application logic, and building the backend infrastructure with Django and Supabase to bring the design and functional concept to life.',
      tech: ['Django (v6.0)', 'Python 3', 'PostgreSQL', 'Supabase', 'JavaScript', 'HTML5', 'CSS3', 'WhiteNoise', 'Vercel'],
      liveUrl: 'https://voidbook.vercel.app',
      githubUrl: 'https://github.com/Jordibot-art/void-book',
      image: 'images/voidbook.png'
    },
    {
      id: 3,
      title: 'Brew Haven — Secure E-Commerce Web Application',
      tag: 'E-Commerce Platform',
      category: 'Coffee Shop E-Commerce & Management System',
      description: 'Brew Haven is a full-stack, coffee shop e-commerce platform designed to deliver an intuitive customer ordering experience while emphasizing robust application security. The application features user authentication, a dynamic product catalog, interactive cart management, order placement transactions, and an administrative oversight dashboard. Built with a security-first architecture, the platform integrates defensive programming principles to protect against common web vulnerabilities.',
      contribution: 'As the sole developer and designer of Brew Haven, I spearheaded the end-to-end planning, architecture, and implementation of a full-stack, security-focused e-commerce ordering platform using PHP, MySQL, JavaScript, HTML5, and CSS. I engineered dedicated role-based portals for both customers and administrators, integrating key features such as secure user authentication, dynamic menu browsing, interactive shopping cart management, transactional multi-item order placement, and an administrative management dashboard. Beyond core CRUD workflows, I placed a strong emphasis on cybersecurity by constructing a custom application firewall to detect and neutralize SQL injection and XSS exploits, enforcing parameterized prepared statements, and utilizing cryptographic password hashing. From designing the relational database schema and dual-environment cloud deployment to crafting an immersive, responsive storefront interface, I independently delivered a resilient web solution aimed at providing a seamless and protected online ordering experience.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Apache', 'XAMPP', 'InfinityFree'],
      liveUrl: 'https://brewhaven.infinityfree.io',
      githubUrl: 'https://github.com/Jordibot-art/Brew-Haven',
      image: 'images/brewhaven.png'
    },
    {
      id: 4,
      title: 'Ang Babae sa Balete — 3D Atmospheric Horror Game',
      tag: '3D Game Development',
      category: 'Indie Horror Game / Filipino Folklore',
      description: 'An atmospheric indie horror game inspired by Filipino folklore, centering around the chilling urban legend of the Woman in the Balete Tree, where you must collect 10 fuel canisters to escape the deadly forest.',
      contribution: 'Developed this 3D horror experience from the ground up using Unity. Handled the core game programming in C#, 3D environment setup, lighting design, atmospheric sound design, and the integration of horror elements. Deployed and published on itch.io.',
      tech: ['C#', 'Unity 3D', 'itch.io', 'Game Design', '3D Environment & Lighting'],
      liveUrl: 'https://john-ariel.itch.io/ang-babae-sa-balete',
      githubUrl: null,
      image: 'images/balete.png'
    },
    {
      id: 5,
      title: 'Barangay Mambaling — E-Governance Service Portal',
      tag: 'Full-Stack Portal',
      category: 'Public Service & Digital Governance Platform',
      description: 'This project marks the very first complete system I built from scratch. It is a web-based platform designed to digitize local government services, streamlining certificate requests, digital transactions, and community announcements for Barangay Mambaling.',
      contribution: 'As the sole developer and designer of the Barangay Mambaling E-Service System, I spearheaded the end-to-end planning, architecture, and implementation of a full-stack digital governance portal using PHP, MySQL, JavaScript, and CSS. I engineered dedicated role-based portals for both residents and barangay administrators, integrating key features such as online document requests, automated status tracking, dynamic community announcements, fee verification, and profile management. From designing the relational database schema in MySQL to crafting responsive client interfaces and secure backend CRUD logic, I independently delivered a centralized digital platform aimed at streamlining public service delivery and replacing paper-bound workflows.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'InfinityFree'],
      liveUrl: 'https://barangaymambaling.infinityfree.io',
      githubUrl: 'https://github.com/Jordibot-art/mambaling',
      image: 'images/barangaymambaling.png'
    },
    {
      id: 6,
      title: 'ShiftGear — Luxury Automotive Showcase & Spec Catalog',
      tag: 'Automotive Showcase',
      category: 'Frontend UI/UX & Interactive Web Catalog',
      description: 'ShiftGear is an interactive automotive showcase and luxury car catalog web platform. It is designed to give car enthusiasts and potential buyers a premium digital showroom experience where they can discover performance cars, examine detailed technical specifications (horsepower, 0–100 km/h acceleration, top speed), and explore multi-page car models.',
      contribution: 'As the developer responsible for the website\'s UI code: built clean, semantic multi-page layouts across the landing page, brand showcases, individual car spec sheets, and inquiry views in HTML5; crafted dark-mode styling with custom typography via Google Fonts (Poppins, Roboto, Permanent Marker) and interactive card hover effects, metric stat badges using Boxicons and Remixicon in CSS3; ensured responsive design across desktop, tablet, and mobile screen sizes; and implemented custom carousel slider logic in JavaScript featuring manual controls, auto-advance timers, and smooth visual progress indicators.',
      tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Vercel'],
      liveUrl: 'https://shiftgear-coral.vercel.app',
      githubUrl: 'https://github.com/Jordibot-art/Car-Web',
      image: 'images/shiftgear.png'
    },
    {
      id: 7,
      title: 'NovelNook — 1st-Year BSIT Web Project',
      tag: 'Foundational Web Project',
      category: '1st-Year BSIT Academic Web Project',
      description: 'NovelNook is my very first website project, developed during my second semester at Cebu Eastern College. I built this project to grasp the core fundamentals of web development. While my skills have grown significantly since then, this repository serves as a timeline of my coding journey and my foundational understanding of web technologies.',
      contribution: 'Designed and developed the initial structure of the website using core HTML, CSS, and basic JavaScript to establish a foundation in front-end web development.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      liveUrl: 'https://novelnook-two.vercel.app',
      githubUrl: 'https://github.com/Jordibot-art/novelnook',
      image: 'images/novelnook.png'
    }
  ];

  // ==========================================
  // DOM ELEMENTS
  // ==========================================
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('nav');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalTag = document.getElementById('modal-tag');
  const modalDescription = document.getElementById('modal-description');
  const modalContribution = document.getElementById('modal-contribution');
  const modalTech = document.getElementById('modal-tech');
  const modalLink = document.getElementById('modal-link');
  const modalGithub = document.getElementById('modal-github');
  const modalImage = document.getElementById('modal-image');

  // All Projects Modal Elements
  const allProjectsOverlay = document.getElementById('all-projects-overlay');
  const allProjectsClose = document.getElementById('all-projects-close');
  const viewAllBtn = document.getElementById('view-all-btn');
  const allProjectsList = document.getElementById('all-projects-list');

  // ==========================================
  // HEADER SCROLL EFFECT
  // ==========================================
  let lastScroll = 0;

  function handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ==========================================
  // MOBILE MENU TOGGLE
  // ==========================================
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      nav.classList.toggle('open');
    });

    // Close mobile menu on link click
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  // ==========================================
  // SMOOTH SCROLL FOR NAV LINKS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.id === 'view-all-btn') return; // Handled by popup modal
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  // ==========================================
  // PROJECT MODAL
  // ==========================================
  function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    modalTitle.textContent = project.title;
    if (modalCategory) modalCategory.textContent = project.category;
    modalTag.textContent = project.tag;
    modalDescription.textContent = project.description;

    if (modalContribution) {
      modalContribution.innerHTML = `
        <div class="modal__contribution-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          My Contribution
        </div>
        <p class="modal__contribution-text">${project.contribution}</p>
      `;
    }

    if (modalLink) {
      modalLink.href = project.liveUrl;
      modalLink.innerHTML = project.id === 4 ? `
        Play on itch.io
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      ` : `
        Open Live Site / Demo
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      `;
    }

    if (modalGithub) {
      if (project.githubUrl) {
        modalGithub.style.display = 'inline-flex';
        modalGithub.href = project.githubUrl;
      } else {
        modalGithub.style.display = 'none';
      }
    }

    // Tech badges
    modalTech.innerHTML = project.tech
      .map(t => `<span class="modal__tech-badge">${t}</span>`)
      .join('');

    // Actual project screenshot or sleek placeholder
    if (project.image) {
      modalImage.innerHTML = `<img src="${project.image}" alt="${project.title}" />`;
    } else {
      modalImage.innerHTML = `
        <div class="modal__placeholder">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span>Project preview screenshot coming soon</span>
        </div>
      `;
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Attach click events to project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = parseInt(card.dataset.project);
      openModal(projectId);
    });
  });

  // Stop modal from opening when clicking direct links in card
  document.querySelectorAll('.project-card a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // ==========================================
  // ALL PROJECTS POPUP MODAL
  // ==========================================
  function renderAllProjectsList() {
    if (!allProjectsList) return;
    allProjectsList.innerHTML = projects.map(p => `
      <div class="all-project-item">
        <div class="all-project-item__body">
          <div class="all-project-item__thumb">
            <img src="${p.image}" alt="${p.title}" />
          </div>
          <div class="all-project-item__content">
            <div class="all-project-item__header">
              <div>
                <div class="all-project-item__title">${p.title}</div>
                <div class="all-project-item__meta">${p.category}</div>
              </div>
              <div class="all-project-item__actions">
                <a href="${p.liveUrl}" target="_blank" class="btn btn--primary" style="padding: 7px 15px; font-size: 0.78rem;">
                  ${p.id === 4 ? 'Play Game' : 'Live Site'}
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
                ${p.githubUrl ? `
                <a href="${p.githubUrl}" target="_blank" class="btn btn--outline" style="padding: 7px 13px; font-size: 0.78rem;">
                  GitHub
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>` : ''}
                <button class="btn btn--outline btn-open-detail" data-project-id="${p.id}" style="padding: 7px 13px; font-size: 0.78rem; cursor: pointer;">
                  Details &rarr;
                </button>
              </div>
            </div>
            <p class="all-project-item__desc">${p.description}</p>
            <div class="all-project-item__tags">
              ${p.tech.map(t => `<span class="mini-badge">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Wire up detail buttons in all projects popup
    allProjectsList.querySelectorAll('.btn-open-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pid = parseInt(btn.dataset.projectId);
        closeAllProjectsModal();
        setTimeout(() => openModal(pid), 160);
      });
    });
  }

  function openAllProjectsModal() {
    if (!allProjectsOverlay) return;
    renderAllProjectsList();
    allProjectsOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeAllProjectsModal() {
    if (!allProjectsOverlay) return;
    allProjectsOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openAllProjectsModal();
    });
  }

  if (allProjectsClose) {
    allProjectsClose.addEventListener('click', closeAllProjectsModal);
  }

  if (allProjectsOverlay) {
    allProjectsOverlay.addEventListener('click', (e) => {
      if (e.target === allProjectsOverlay) closeAllProjectsModal();
    });
  }

  // Keyboard shortcut (Escape to close any modal)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeAllProjectsModal();
    }
  });

  // ==========================================
  // SCROLL REVEAL ANIMATION
  // ==========================================
  function setupRevealAnimations() {
    const revealElements = [
      ...document.querySelectorAll('.hero__content, .hero__visual'),
      ...document.querySelectorAll('.tech-logo'),
      ...document.querySelectorAll('.section-header, .section-label, .section-title'),
      ...document.querySelectorAll('.project-card'),
      ...document.querySelectorAll('.about__image-col, .about__content'),
      ...document.querySelectorAll('.skill-block'),
      ...document.querySelectorAll('.skills__tech-stack'),
      ...document.querySelectorAll('.contact__left, .contact__right'),
    ];

    revealElements.forEach((el, index) => {
      el.classList.add('reveal');
      const delay = index % 4;
      if (delay > 0) el.classList.add(`reveal-delay-${delay}`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // ==========================================
  // COUNTER ANIMATION
  // ==========================================
  function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            let current = 0;
            const duration = 2000;
            const increment = target / (duration / 16);

            const updateCounter = () => {
              current += increment;
              if (current < target) {
                el.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
              } else {
                el.textContent = target;
              }
            };

            updateCounter();
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(counter => counterObserver.observe(counter));
  }

  // ==========================================
  // CURSOR GLOW EFFECT
  // ==========================================
  function setupCursorGlow() {
    const glow = document.createElement('div');
    glow.classList.add('cursor-glow');
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = glowX + 'px';
      glow.style.top = glowY + 'px';
      requestAnimationFrame(animate);
    }

    animate();
  }

  // ==========================================
  // ACTIVE NAV LINK HIGHLIGHTING
  // ==========================================
  function setupActiveNav() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              link.style.color = '';
              link.style.fontWeight = '';
              if (link.getAttribute('href') === `#${id}`) {
                link.style.color = 'var(--black)';
                link.style.fontWeight = '600';
              }
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px -40% 0px'
      }
    );

    sections.forEach(section => sectionObserver.observe(section));
  }

  // ==========================================
  // INITIALIZE
  // ==========================================
  function init() {
    setupRevealAnimations();
    animateCounters();
    setupCursorGlow();
    setupActiveNav();

    // Initial scroll check
    handleScroll();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
