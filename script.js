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
  // NAVIGATION ACTIVE STATE MANAGEMENT
  // ==========================================
  let isNavClickScrolling = false;
  let navClickTimer = null;

  function setActiveNav(targetHref) {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.style.color = '';
      link.style.fontWeight = '';
      if (link.getAttribute('href') === targetHref) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function clearActiveNav() {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.style.color = '';
      link.style.fontWeight = '';
      link.classList.remove('active');
    });
  }

  // ==========================================
  // FLOATING & FOOTER BACK TO TOP (ARROW UP)
  // ==========================================
  const backToTopBtn = document.getElementById('back-to-top');
  const floatingBackToTop = document.getElementById('floating-back-to-top');

  function scrollToTop(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    clearActiveNav();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTop);
  }

  if (floatingBackToTop) {
    floatingBackToTop.addEventListener('click', scrollToTop);
  }

  // ==========================================
  // THEME SWITCHER (DARK & WHITE / LIGHT MODE)
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

  function getSystemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null;
    }
  }

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || getStoredTheme() || getSystemTheme();
  }

  function updateToggleUI(theme) {
    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    if (themeToggle) {
      themeToggle.setAttribute('aria-label', label);
      themeToggle.setAttribute('title', label);
    }

    if (mobileThemeToggle) {
      mobileThemeToggle.setAttribute('aria-label', label);
      const textSpan = mobileThemeToggle.querySelector('.theme-toggle__text');
      if (textSpan) {
        textSpan.textContent = isDark ? 'Light Mode' : 'Dark Mode';
      }
    }
  }

  function applyTheme(theme, persist = true) {
    // Add smooth transition class temporarily
    document.documentElement.classList.add('theme-transition');

    document.documentElement.setAttribute('data-theme', theme);
    if (metaColorScheme) {
      metaColorScheme.content = theme;
    }

    if (persist) {
      try {
        localStorage.setItem('theme', theme);
      } catch (e) { }
    }

    updateToggleUI(theme);

    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 320);
  }

  function toggleTheme() {
    const current = getCurrentTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next, true);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }

  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }

  // Listen to OS system theme changes if user hasn't set an explicit override
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!getStoredTheme()) {
        applyTheme(e.matches ? 'dark' : 'light', false);
      }
    });
  }

  // Cross-tab synchronization
  window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
      const newTheme = e.newValue || getSystemTheme();
      applyTheme(newTheme, false);
    }
  });

  // Ensure initial UI is synced
  updateToggleUI(getCurrentTheme());

  // ==========================================
  // HEADER SCROLL EFFECT & BACK TO TOP VISIBILITY
  // ==========================================
  let lastScroll = 0;

  function handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (floatingBackToTop) {
      if (currentScroll > 360) {
        floatingBackToTop.classList.add('visible');
      } else {
        floatingBackToTop.classList.remove('visible');
      }
    }

    lastScroll = currentScroll;
    updateActiveNavOnScroll();
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
  // SMOOTH SCROLL & CLICK HANDLING FOR NAV
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.id === 'view-all-btn' || this.id === 'header-cta' || this.id === 'hero-ojt-contact-btn' || this.id === 'mobile-nav-cta' || this.hasAttribute('data-action')) return;
      const href = this.getAttribute('href');
      if (!href) return;

      // Handle back to top or header scroll to top smoothly
      if (href === '#' || href === '#header' || href === '#top' || this.id === 'back-to-top' || this.classList.contains('back-to-top')) {
        scrollToTop(e);
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        // Highlight active immediately when a nav link or related anchor is clicked
        if (['#work', '#about', '#skills', '#contact'].includes(href)) {
          setActiveNav(href);
          isNavClickScrolling = true;
          clearTimeout(navClickTimer);
          navClickTimer = setTimeout(() => {
            isNavClickScrolling = false;
          }, 850);
        }

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
  // ACTIVE NAV LINK HIGHLIGHTING ON SCROLL
  // ==========================================
  function updateActiveNavOnScroll() {
    if (isNavClickScrolling) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Reached near bottom of page -> highlight contact
    if (scrollY + windowHeight >= documentHeight - 60) {
      setActiveNav('#contact');
      return;
    }

    const sectionIds = ['work', 'about', 'skills', 'contact'];
    const headerOffset = 130; // 80px header height + padding offset

    let activeId = null;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (scrollY + headerOffset >= top) {
          activeId = sectionIds[i];
          break;
        }
      }
    }

    if (activeId) {
      setActiveNav(`#${activeId}`);
    } else {
      clearActiveNav();
    }
  }

  // ==========================================
  // CONTACT MODAL & FORM
  // ==========================================
  const contactModalOverlay = document.getElementById('contact-modal-overlay');
  const contactModalClose = document.getElementById('contact-modal-close');
  const contactForm = document.getElementById('portfolio-contact-form');
  const contactPurposeSelect = document.getElementById('contact-purpose');
  const contactNameInput = document.getElementById('contact-name');
  const contactFormStatus = document.getElementById('contact-form-status');
  const contactSubmitBtn = document.getElementById('contact-submit-btn');

  function openContactModal(purpose) {
    if (!contactModalOverlay) return;
    if (contactPurposeSelect && purpose) {
      contactPurposeSelect.value = purpose;
    }
    if (contactFormStatus) {
      contactFormStatus.style.display = 'none';
      contactFormStatus.textContent = '';
      contactFormStatus.className = 'form-status';
    }
    contactModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (contactNameInput) contactNameInput.focus();
    }, 150);
  }

  function closeContactModal() {
    if (!contactModalOverlay) return;
    contactModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (contactModalClose) {
    contactModalClose.addEventListener('click', closeContactModal);
  }

  if (contactModalOverlay) {
    contactModalOverlay.addEventListener('click', (e) => {
      if (e.target === contactModalOverlay) {
        closeContactModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModalOverlay && contactModalOverlay.classList.contains('active')) {
      closeContactModal();
    }
  });

  // "Let's talk" (header CTA) -> Opens general contact form
  const headerCta = document.getElementById('header-cta');
  if (headerCta) {
    headerCta.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openContactModal('general');
    });
  }

  // Mobile nav "Let's talk" CTA
  const mobileNavCta = document.getElementById('mobile-nav-cta');
  if (mobileNavCta) {
    mobileNavCta.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (mobileToggle) mobileToggle.classList.remove('active');
      if (nav) nav.classList.remove('open');
      openContactModal('general');
    });
  }

  // "Get in touch" (Seeking OJT hero card) -> Opens form preselected with "OJT / Internship"
  const heroOjtBtn = document.getElementById('hero-ojt-contact-btn');
  if (heroOjtBtn) {
    heroOjtBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openContactModal('ojt');
    });
  }

  // Footer "Send a Message" button
  const footerContactBtn = document.getElementById('footer-contact-btn');
  if (footerContactBtn) {
    footerContactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openContactModal('general');
    });
  }

  // Chatbot header contact button
  const chatHeaderContactBtn = document.getElementById('pf-chat-contact-btn');
  if (chatHeaderContactBtn) {
    chatHeaderContactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openContactModal('general');
    });
  }

  // Event delegation for any "Open Contact Form" buttons inside chatbot log
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="open-contact-modal"]');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const purpose = btn.getAttribute('data-purpose') || 'general';
      openContactModal(purpose);
    }
  });

  // Make openContactModal accessible globally
  window.openContactModal = openContactModal;

  // Handle Contact Form Submission via FormSubmit
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtnSpan = contactSubmitBtn ? contactSubmitBtn.querySelector('span') : null;
      const originalBtnText = submitBtnSpan ? submitBtnSpan.textContent : 'Send Message';

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email-input').value.trim();
      const purpose = contactPurposeSelect ? contactPurposeSelect.value : 'general';
      const purposeText = contactPurposeSelect ? contactPurposeSelect.options[contactPurposeSelect.selectedIndex].text : 'General Inquiry';
      const message = document.getElementById('contact-message').value.trim();

      if (submitBtnSpan) submitBtnSpan.textContent = 'Sending...';
      if (contactSubmitBtn) contactSubmitBtn.disabled = true;
      if (contactFormStatus) contactFormStatus.style.display = 'none';

      try {
        const response = await fetch('https://formsubmit.co/ajax/ramosjohnariel761@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            purpose: purposeText,
            message: message,
            _subject: `New Portfolio Message from ${name} [${purposeText}]`,
            _captcha: 'false',
            _template: 'table'
          })
        });

        const data = await response.json();

        if (contactFormStatus) {
          contactFormStatus.style.display = 'block';
          contactFormStatus.className = 'form-status success';
          contactFormStatus.innerHTML = `
            <strong>✅ Thank you, ${name}!</strong> Your message has been sent to John Ariel. I'll get back to you at <em>${email}</em> shortly!
          `;
        }
        contactForm.reset();

        setTimeout(() => {
          closeContactModal();
        }, 3500);
      } catch (err) {
        if (contactFormStatus) {
          contactFormStatus.style.display = 'block';
          contactFormStatus.className = 'form-status error';
          contactFormStatus.innerHTML = `
            Could not connect to the form server right now. You can reach me directly via email at <a href="mailto:ramosjohnariel761@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}">ramosjohnariel761@gmail.com</a> or text 09388052961!
          `;
        }
      } finally {
        if (submitBtnSpan) submitBtnSpan.textContent = originalBtnText;
        if (contactSubmitBtn) contactSubmitBtn.disabled = false;
      }
    });
  }

  // ==========================================
  // INITIALIZE
  // ==========================================
  function init() {
    setupRevealAnimations();
    animateCounters();
    setupCursorGlow();

    // Check initial hash or scroll position
    if (window.location.hash && ['#work', '#about', '#skills', '#contact'].includes(window.location.hash)) {
      setActiveNav(window.location.hash);
    } else {
      updateActiveNavOnScroll();
    }

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
