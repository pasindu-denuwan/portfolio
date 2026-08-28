/**
 * Pasindu Denuwan - Portfolio Engine
 * Dynamic JSON-driven single page application
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();

  let portfolioData = null;
  let activeCategory = 'all';
  let searchQuery = '';

  // DOM Elements
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const hamburger = document.getElementById('hamburger');
  const navMenuWrapper = document.querySelector('.nav-menu-wrapper');
  const projectModal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalContent = document.getElementById('modal-dynamic-content');
  const projectSearchInput = document.getElementById('project-search');
  const projectFilterBtns = document.querySelectorAll('.filter-btn');
  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.getElementById('toast-container');

  // --- Preloader Loading Animation ---
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    function dismissPreloader() {
      if (!preloader.classList.contains('loaded')) {
        preloader.classList.add('loaded');
        setTimeout(() => {
          if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
        }, 700);
      }
    }

    // Smooth display duration (1.1s for clean animation)
    setTimeout(dismissPreloader, 1100);

    window.addEventListener('load', () => {
      setTimeout(dismissPreloader, 700);
    });
  }

  // --- 1. Theme Management (Dark/Light) ---
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeIcon) {
      themeIcon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }

  // --- 2. Mobile Drawer Navigation ---
  if (hamburger && navMenuWrapper) {
    hamburger.addEventListener('click', () => {
      navMenuWrapper.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenuWrapper.classList.remove('active');
      });
    });
  }

  // --- 3. Dynamic Data Fetching ---
  fetch('./data/content.json?v=' + Date.now())
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      portfolioData = data;
      renderAllSections(data);
      initScrollSpy();
    })
    .catch(error => {
      console.warn('Could not fetch ./data/content.json directly, using fallback.', error);
      // Fallback data if opened directly from file system
      portfolioData = getFallbackData();
      renderAllSections(portfolioData);
      initScrollSpy();
    });

  // --- 4. Render All Sections ---
  function renderAllSections(data) {
    if (data.profile) renderProfile(data.profile);
    if (data.about) renderAbout(data.about);
    if (data.skills) renderSkills(data.skills);
    if (data.projects) renderProjects(data.projects);
    if (data.education) renderEducation(data.education);
    if (data.experience) renderExperience(data.experience);
    if (data.certifications) renderCertifications(data.certifications);
    if (data.achievements) renderAchievements(data.achievements);
    if (data.profile && data.profile.reference) renderReference(data.profile.reference);
  }

  // --- Section 1: Profile / Hero / Contact Details ---
  function renderProfile(profile) {
    // Brand Name
    const brandName = document.getElementById('nav-brand-name');
    if (brandName) brandName.textContent = profile.name;

    // First & Last Name
    const names = (profile.name || 'Thilini Bhagya').split(' ');
    const firstName = names[0] || 'Thilini';
    const lastName = names.slice(1).join(' ') || 'Bhagya';

    const heroFirst = document.getElementById('hero-first-name');
    const heroLast = document.getElementById('hero-last-name');
    if (heroFirst) heroFirst.textContent = firstName;
    if (heroLast) heroLast.textContent = lastName;

    // Titles and Bio
    const titleText = document.getElementById('hero-title-text');
    if (titleText && profile.title) titleText.textContent = profile.title;

    const bioText = document.getElementById('hero-bio-text');
    if (bioText && profile.bio) bioText.textContent = profile.bio;

    const greetingText = document.getElementById('hero-greeting-text');
    if (greetingText && profile.availability) greetingText.textContent = profile.availability;

    // Resume buttons
    const heroResume = document.getElementById('hero-resume-btn');
    const sectionResume = document.getElementById('section-resume-download-btn');
    const resumeUrl = profile.resumePath || 'resume.pdf';
    if (heroResume) heroResume.setAttribute('href', resumeUrl);
    if (sectionResume) sectionResume.setAttribute('href', resumeUrl);

    // Socials
    const socialsMarkup = `
      ${profile.github ? `<a href="${profile.github}" target="_blank" rel="noopener" class="hero-social-link" title="GitHub"><i class="fa-brands fa-github"></i></a>` : ''}
      ${profile.linkedin ? `<a href="${profile.linkedin}" target="_blank" rel="noopener" class="hero-social-link" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>` : ''}
      ${profile.email ? `<a href="mailto:${profile.email}" class="hero-social-link" title="Email"><i class="fa-solid fa-envelope"></i></a>` : ''}
      ${profile.phone ? `<a href="tel:${profile.phone.replace(/\\s+/g, '')}" class="hero-social-link" title="Phone"><i class="fa-solid fa-phone"></i></a>` : ''}
    `;

    const heroSocials = document.getElementById('hero-socials-container');
    const footerSocials = document.getElementById('footer-socials');
    if (heroSocials) heroSocials.innerHTML = socialsMarkup;
    if (footerSocials) footerSocials.innerHTML = socialsMarkup;

    // Contact Details Cards
    const contactCards = document.getElementById('contact-details-container');
    if (contactCards) {
      contactCards.innerHTML = `
        <div class="contact-info-card">
          <div class="contact-card-icon"><i class="fa-solid fa-envelope"></i></div>
          <div class="contact-card-text">
            <h4>Email Address</h4>
            <p><a href="mailto:${profile.email}">${profile.email}</a></p>
          </div>
        </div>
        <div class="contact-info-card">
          <div class="contact-card-icon"><i class="fa-solid fa-phone"></i></div>
          <div class="contact-card-text">
            <h4>Phone Number</h4>
            <p><a href="tel:${(profile.phone || '').replace(/\\s+/g, '')}">${profile.phone || '+94 76 947 6496'}</a></p>
          </div>
        </div>
        <div class="contact-info-card">
          <div class="contact-card-icon"><i class="fa-solid fa-location-dot"></i></div>
          <div class="contact-card-text">
            <h4>Location</h4>
            <p>${profile.location || 'Kelaniya / Matale, Sri Lanka'}</p>
          </div>
        </div>
      `;
    }
  }

  // --- Section 2: About Me & Highlights ---
  function renderAbout(about) {
    const headingEl = document.getElementById('about-heading');
    if (headingEl && about.heading) headingEl.textContent = about.heading;

    const descEl = document.getElementById('about-description');
    if (descEl && about.description) descEl.textContent = about.description;

    // Highlights
    const highlightsContainer = document.getElementById('about-highlights-container');
    if (highlightsContainer && about.highlights) {
      highlightsContainer.innerHTML = about.highlights.map(h => `
        <div class="highlight-card">
          <div class="highlight-num">${h.number}</div>
          <div class="highlight-label">${h.label}</div>
        </div>
      `).join('');
    }

    // Core Values
    const valuesContainer = document.getElementById('about-values-container');
    if (valuesContainer && about.coreValues) {
      const icons = ['fa-chart-line', 'fa-brain', 'fa-people-group'];
      valuesContainer.innerHTML = about.coreValues.map((v, i) => `
        <div class="core-value-card">
          <div class="core-value-icon"><i class="fa-solid ${icons[i % icons.length]}"></i></div>
          <h3>${v.title}</h3>
          <p>${v.description}</p>
        </div>
      `).join('');
    }
  }

  // --- Section 3: Skills ---
  function renderSkills(skills) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const catIcons = {
      'Technical Skills': 'fa-code',
      'Soft Skills': 'fa-lightbulb',
      'Languages & Governance': 'fa-language'
    };

    container.innerHTML = skills.map(cat => `
      <div class="skill-category-card">
        <div class="skill-category-header">
          <i class="fa-solid ${catIcons[cat.category] || 'fa-star'}"></i>
          <h3>${cat.category}</h3>
        </div>
        <div class="skill-items-list">
          ${cat.items.map(item => `
            <div class="skill-item">
              <div class="skill-item-header">
                <span>${item.name}</span>
                <span style="color: var(--accent-purple); font-weight:700;">${item.level}%</span>
              </div>
              <div class="skill-bar-bg">
                <div class="skill-bar-fill" style="width: ${item.level}%;"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // --- Section 4: Projects (with Filtering & Search) ---
  function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let filtered = projects.filter(p => {
      // Category filter
      const matchCategory = activeCategory === 'all' || (p.category && p.category.toLowerCase() === activeCategory.toLowerCase());
      
      // Keyword search
      const query = searchQuery.trim().toLowerCase();
      const matchSearch = !query || 
        (p.title && p.title.toLowerCase().includes(query)) ||
        (p.subtitle && p.subtitle.toLowerCase().includes(query)) ||
        (p.description && p.description.toLowerCase().includes(query)) ||
        (p.technologies && p.technologies.some(t => t.toLowerCase().includes(query)));

      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
          <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-muted);"></i>
          <h3>No projects found</h3>
          <p>Try adjusting your search query or filter category.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(p => `
      <div class="project-card" data-id="${p.id}">
        <div class="project-card-image">
          <img src="${p.image || 'assets/project1.png'}" alt="${p.title}" loading="lazy" onerror="this.src='https://placehold.co/600x400/161626/c471ed?text=Project+Preview'">
          <span class="project-card-badge">${p.category}</span>
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${p.title}</h3>
          ${p.subtitle ? `<div class="project-card-subtitle">${p.subtitle}</div>` : ''}
          <p class="project-card-desc">${p.description}</p>
          
          <div class="project-card-tags">
            ${(p.technologies || []).map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>

          <div class="project-card-footer">
            <span class="details-link"><i class="fa-solid fa-circle-info"></i> View Details</span>
            <div class="project-card-links" onclick="event.stopPropagation();">
              ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="icon-btn" title="GitHub Repository"><i class="fa-brands fa-github"></i></a>` : ''}
              ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="icon-btn" title="Live Preview"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click event for Project Modal
    container.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const proj = (portfolioData.projects || []).find(item => item.id === id);
        if (proj) openProjectModal(proj);
      });
    });
  }

  // Project Category Filter buttons
  if (projectFilterBtns) {
    projectFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        projectFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-category');
        if (portfolioData && portfolioData.projects) {
          renderProjects(portfolioData.projects);
        }
      });
    });
  }

  // Project Search input
  if (projectSearchInput) {
    projectSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (portfolioData && portfolioData.projects) {
        renderProjects(portfolioData.projects);
      }
    });
  }

  // Project Detail Modal
  function openProjectModal(p) {
    if (!modalContent || !projectModal) return;

    modalContent.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <span class="badge" style="margin-bottom: 0.5rem;">${p.category}</span>
        <h2 style="font-size: 1.85rem; margin-top: 0.25rem;">${p.title}</h2>
        ${p.subtitle ? `<div style="color: var(--accent-cyan); font-weight: 600; margin-top: 0.2rem;">${p.subtitle}</div>` : ''}
      </div>

      <div style="width: 100%; height: 260px; border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 1.5rem; background: #111;">
        <img src="${p.image || 'assets/project1.png'}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://placehold.co/600x400/161626/c471ed?text=Project+Preview'">
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h4 style="margin-bottom: 0.4rem; font-size: 1.05rem;">Project Overview</h4>
        <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">${p.description}</p>
      </div>

      ${p.contribution ? `
        <div class="contribution-box">
          <strong><i class="fa-solid fa-code-commit"></i> Personal Contribution & Architecture:</strong>
          ${p.contribution}
        </div>
      ` : ''}

      <div style="margin-bottom: 1.75rem;">
        <h4 style="margin-bottom: 0.6rem; font-size: 1rem;">Technologies & Tools</h4>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${(p.technologies || []).map(t => `<span class="badge">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline"><i class="fa-brands fa-github"></i> View GitHub Repo</a>` : ''}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ''}
      </div>
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (projectModal) {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeModal();
    }
  });

  // --- Section 5: Education Timeline ---
  function renderEducation(education) {
    const container = document.getElementById('education-timeline-container');
    if (!container) return;

    container.innerHTML = education.map(edu => `
      <div class="timeline-card">
        <div class="timeline-dot"><i class="fa-solid fa-graduation-cap" style="font-size: 0.65rem; color: var(--accent-purple);"></i></div>
        <div class="timeline-header">
          <h3 class="timeline-title">${edu.degree}</h3>
          <span class="timeline-period">${edu.period}</span>
        </div>
        <div class="timeline-subtitle">${edu.institution} • <span style="font-weight: 400; color: var(--text-secondary);">${edu.location}</span></div>
        <div class="timeline-bullets">
          ${(edu.highlights || []).map(h => `
            <div class="timeline-bullet-item">
              <i class="fa-solid fa-circle-check"></i>
              <span>${h}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // --- Section 6: Experience Timeline ---
  function renderExperience(experience) {
    const container = document.getElementById('experience-timeline-container');
    if (!container) return;

    container.innerHTML = experience.map(exp => `
      <div class="timeline-card">
        <div class="timeline-dot"><i class="fa-solid fa-briefcase" style="font-size: 0.65rem; color: var(--accent-purple);"></i></div>
        <div class="timeline-header">
          <h3 class="timeline-title">${exp.role}</h3>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <div class="timeline-subtitle">${exp.company} <span class="badge" style="margin-left: 0.5rem; font-size: 0.7rem;">${exp.type}</span></div>
        <div class="timeline-bullets">
          ${(exp.description || []).map(d => `
            <div class="timeline-bullet-item">
              <i class="fa-solid fa-circle-dot"></i>
              <span>${d}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // --- Section 7: Certifications Grid ---
  function renderCertifications(certifications) {
    const container = document.getElementById('certifications-container');
    if (!container) return;

    container.innerHTML = certifications.map(cert => `
      <div class="cert-card">
        <div class="cert-icon-wrapper">
          <i class="${cert.icon || 'fa-solid fa-certificate'}"></i>
        </div>
        <h3>${cert.title}</h3>
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-meta">
          <span>${cert.year} ${cert.credentialId ? `• ID: ${cert.credentialId}` : ''}</span>
          ${cert.url ? `<a href="${cert.url}" target="_blank" rel="noopener" class="cert-link">Verify <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
        </div>
      </div>
    `).join('');
  }

  // --- Section 8: Achievements Grid ---
  function renderAchievements(achievements) {
    const container = document.getElementById('achievements-container');
    if (!container) return;

    container.innerHTML = achievements.map(ach => `
      <div class="achieve-card">
        <div class="achieve-icon"><i class="fa-solid fa-trophy"></i></div>
        <div class="achieve-content">
          <h3>${ach.title}</h3>
          <div class="achieve-meta">${ach.issuer} • ${ach.year}</div>
          <p>${ach.description}</p>
        </div>
      </div>
    `).join('');
  }

  // --- Section 10: Academic Reference ---
  function renderReference(reference) {
    const refName = document.getElementById('ref-name');
    const refDesignation = document.getElementById('ref-designation');
    const refEmail = document.getElementById('ref-email');
    const refPhone = document.getElementById('ref-phone');

    if (refName && reference.name) refName.textContent = reference.name;
    if (refDesignation) refDesignation.textContent = `${reference.designation} • ${reference.institution}`;
    if (refEmail && reference.email) {
      refEmail.textContent = reference.email;
      refEmail.setAttribute('href', `mailto:${reference.email}`);
    }
    if (refPhone && reference.phone) {
      refPhone.textContent = reference.phone;
      refPhone.setAttribute('href', `tel:${reference.phone.replace(/\\s+/g, '')}`);
    }
  }

  // --- 5. ScrollSpy Active Nav Highlight ---
  function initScrollSpy() {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 200;
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  }

  // --- 6. Contact Form Simulation with Toast ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      showToast(`Thank you, ${name}! Your message has been sent successfully.`, 'success');
      contactForm.reset();
    });
  }

  function showToast(message, type = 'success') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 350);
    }, 4000);
  }

  // Fallback data helper for local file:// protocol viewing
  function getFallbackData() {
    return {
      profile: {
        name: "Pasindu Denuwan",
        title: "Data & Technology Enthusiast | Undergraduate",
        bio: "An enthusiastic undergraduate pursuing a B.Sc (Hons) in Computing and Information Systems at the Faculty of Computing, Sabaragamuwa University of Sri Lanka, passionate about learning Python, SQL, and data science to create meaningful data-driven insights.",
        location: "Sabaragamuwa / Colombo, Sri Lanka",
        email: "pasindudenuwan@gmail.com",
        phone: "+94 76 947 6496",
        github: "https://github.com/pasindu-denuwan",
        linkedin: "https://linkedin.com/in/pasindu-denuwan",
        resumePath: "resume.pdf",
        availability: "Open for Internships (Undergraduate 2025 - Present)",
        reference: {
          name: "Ms. Kumudu Kauwshalya",
          designation: "Senior Lecturer Grade II",
          institution: "Sabaragamuwa University of Sri Lanka",
          phone: "+94 76 423 0976",
          email: "Kaushalya@gmail.com"
        }
      },
      about: {
        heading: "Driven by Technology, Inspired by Data",
        description: "Currently pursuing my B.Sc (Hons) in Computing and Information Systems at the Faculty of Computing, Sabaragamuwa University of Sri Lanka. My focus lies in combining software engineering fundamentals—such as Python, Java, C++, and database design—with data analytics tools like SQL query optimization, Excel, and Power BI to extract actionable insights.",
        highlights: [
          { number: "2025", label: "B.Sc (Hons) CIS Entry" },
          { number: "4+", label: "Certifications Earned" },
          { number: "4+", label: "Academic Projects" },
          { number: "2", label: "Languages (EN / SI)" }
        ],
        coreValues: [
          { title: "Data-Driven Analytics", description: "Leveraging Python and SQL to query datasets, optimize database structures, and derive practical insights." },
          { title: "Continuous Learning", description: "Actively expanding technical competencies in Power BI, data science, and modern web software development." },
          { title: "Collaborative Leadership", description: "Demonstrating teamwork, communication, and leadership built through academic projects and student governance." }
        ]
      },
      skills: [
        {
          category: "Technical Skills",
          items: [
            { name: "Python Programming", level: 88 },
            { name: "SQL Query Optimization", level: 85 },
            { name: "Database Design", level: 84 },
            { name: "C++ Programming", level: 78 },
            { name: "Java", level: 75 },
            { name: "Microsoft Excel (Advanced)", level: 90 },
            { name: "Power BI (Reading)", level: 72 }
          ]
        },
        {
          category: "Soft Skills",
          items: [
            { name: "Problem Solving", level: 95 },
            { name: "Critical Thinking", level: 92 },
            { name: "Communication Skills", level: 90 },
            { name: "Continuous Learning Mindset", level: 96 },
            { name: "Leadership", level: 88 },
            { name: "Excellent Teamwork", level: 94 }
          ]
        },
        {
          category: "Languages & Governance",
          items: [
            { name: "English (Professional)", level: 90 },
            { name: "Sinhala (Native)", level: 100 },
            { name: "Team Leadership & Coordination", level: 88 },
            { name: "Event & Club Management", level: 85 }
          ]
        }
      ],
      projects: [
        {
          id: "proj-1",
          title: "Object Oriented Programming Application",
          subtitle: "Java Online Bookstore Booking System",
          category: "Software Engineering",
          description: "Developed a Java-based online booking system for a bookstore, incorporating core OOP concepts and database management.",
          contribution: "Architected class hierarchies (encapsulation, inheritance, polymorphism), designed database schemas for book reservation, and built session management workflows.",
          technologies: ["Java", "OOP", "Database Design", "SQL"],
          github: "https://github.com/pasindu-denuwan/OOP-Bookstore-System",
          demo: "",
          image: "assets/project1.png"
        },
        {
          id: "proj-2",
          title: "Pong Game",
          subtitle: "C++ Arcade Game with Real-Time Control",
          category: "Software Engineering",
          description: "Created a classic Pong arcade game in C++ with real-time paddle movement, collision physics, and dynamic score tracking as part of a university group project.",
          contribution: "Engineered game loop architecture, real-time keyboard event handlers, ball-bounce physics algorithms, and score state rendering.",
          technologies: ["C++", "Game Logic", "Data Structures", "OOP"],
          github: "https://github.com/pasindu-denuwan/CPP-Pong-Game",
          demo: "",
          image: "assets/project2.png"
        }
      ],
      education: [
        {
          id: "edu-1",
          institution: "Sabaragamuwa University of Sri Lanka",
          degree: "B.Sc (Hons) in Computing and Information Systems",
          period: "Jan 2025 - Present",
          location: "Belihuloya, Sri Lanka",
          highlights: ["Specializing in Computing, Data Analytics, Database Management, and Software Engineering."]
        }
      ],
      experience: [
        {
          id: "exp-1",
          role: "School Prefect",
          company: "Govt. Science College Matale",
          period: "2021 - 2022",
          type: "Leadership & Governance",
          description: ["Maintained student discipline, organized school assembly events, and represented student interests."]
        }
      ],
      certifications: [
        {
          id: "cert-1",
          title: "Python for Beginners",
          issuer: "University of Moratuwa",
          year: "2025",
          credentialId: "UOM-PY-2025",
          url: "https://open.uom.lk",
          icon: "fa-brands fa-python"
        }
      ],
      achievements: [
        {
          id: "ach-1",
          title: "Appointed School Prefect",
          issuer: "Govt. Science College Matale",
          year: "2021",
          description: "Awarded official prefectship badge in recognition of leadership and academic dedication."
        }
      ]
    };
  }
});
