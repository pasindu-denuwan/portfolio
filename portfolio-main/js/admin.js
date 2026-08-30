/**
 * Antigravity Portfolio - Admin CMS Engine
 * Local Content Administration Script
 */

document.addEventListener('DOMContentLoaded', () => {
  let contentData = null;
  let currentEditType = null; // 'project', 'experience', 'education', 'certification', 'achievement'
  let currentEditId = null;

  // DOM Elements
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const downloadBtn = document.getElementById('download-json-btn');
  const adminTabs = document.getElementById('admin-tabs');
  const adminModal = document.getElementById('admin-modal');
  const adminModalClose = document.getElementById('admin-modal-close');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  const dynamicFormFields = document.getElementById('dynamic-form-fields');
  const adminEntryForm = document.getElementById('admin-entry-form');
  const profileForm = document.getElementById('profile-form');
  const toastContainer = document.getElementById('toast-container');

  // --- 1. Theme Management ---
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeIcon) {
      themeIcon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }

  // --- 2. Tab Navigation ---
  if (adminTabs) {
    adminTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.admin-tab-btn');
      if (!btn) return;

      document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tabName = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');
      const targetTab = document.getElementById(`tab-${tabName}`);
      if (targetTab) targetTab.style.display = 'block';
    });
  }

  // --- 3. Load content.json ---
  fetch('./data/content.json?v=' + Date.now())
    .then(res => res.json())
    .then(data => {
      contentData = data;
      renderAllLists();
    })
    .catch(err => {
      console.warn('Error reading content.json, using fallback store.', err);
      contentData = getFallbackData();
      renderAllLists();
      showToast('Loaded local fallback data.', 'info');
    });

  function renderAllLists() {
    if (!contentData) return;
    renderProjectsList();
    renderExperienceList();
    renderEducationList();
    renderCertificationsList();
    renderAchievementsList();
    renderSkillsList();
    populateProfileForm();
  }

  // --- Render Lists ---
  function renderProjectsList() {
    const container = document.getElementById('admin-projects-list');
    if (!container) return;

    container.innerHTML = (contentData.projects || []).map(p => `
      <div class="admin-item-row">
        <div>
          <strong>${p.title}</strong> 
          <span class="badge" style="margin-left: 0.5rem; font-size: 0.72rem;">${p.category}</span>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">
            ${(p.description || '').substring(0, 95)}...
          </div>
        </div>
        <div class="admin-actions">
          <button class="btn btn-sm btn-secondary edit-btn" data-type="project" data-id="${p.id}">
            <i class="fa-solid fa-pen"></i> Edit
          </button>
          <button class="btn btn-sm btn-outline delete-btn" data-type="project" data-id="${p.id}" style="border-color: #ef4444; color: #ef4444;">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  function renderExperienceList() {
    const container = document.getElementById('admin-experience-list');
    if (!container) return;

    container.innerHTML = (contentData.experience || []).map(e => `
      <div class="admin-item-row">
        <div>
          <strong>${e.role}</strong> — <span style="color: var(--accent-cyan); font-weight: 600;">${e.company}</span>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">
            ${e.period} (${e.type})
          </div>
        </div>
        <div class="admin-actions">
          <button class="btn btn-sm btn-secondary edit-btn" data-type="experience" data-id="${e.id}">
            <i class="fa-solid fa-pen"></i> Edit
          </button>
          <button class="btn btn-sm btn-outline delete-btn" data-type="experience" data-id="${e.id}" style="border-color: #ef4444; color: #ef4444;">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  function renderEducationList() {
    const container = document.getElementById('admin-education-list');
    if (!container) return;

    container.innerHTML = (contentData.education || []).map(edu => `
      <div class="admin-item-row">
        <div>
          <strong>${edu.degree}</strong> — <span style="color: var(--accent-purple); font-weight: 600;">${edu.institution}</span>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">
            ${edu.period} • ${edu.location}
          </div>
        </div>
        <div class="admin-actions">
          <button class="btn btn-sm btn-secondary edit-btn" data-type="education" data-id="${edu.id}">
            <i class="fa-solid fa-pen"></i> Edit
          </button>
          <button class="btn btn-sm btn-outline delete-btn" data-type="education" data-id="${edu.id}" style="border-color: #ef4444; color: #ef4444;">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  function renderCertificationsList() {
    const container = document.getElementById('admin-cert-list');
    if (!container) return;

    container.innerHTML = (contentData.certifications || []).map(c => `
      <div class="admin-item-row">
        <div>
          <strong>${c.title}</strong>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">
            ${c.issuer} (${c.year}) ${c.credentialId ? `• ID: ${c.credentialId}` : ''}
          </div>
        </div>
        <div class="admin-actions">
          <button class="btn btn-sm btn-secondary edit-btn" data-type="certification" data-id="${c.id}">
            <i class="fa-solid fa-pen"></i> Edit
          </button>
          <button class="btn btn-sm btn-outline delete-btn" data-type="certification" data-id="${c.id}" style="border-color: #ef4444; color: #ef4444;">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  function renderAchievementsList() {
    const container = document.getElementById('admin-achieve-list');
    if (!container) return;

    container.innerHTML = (contentData.achievements || []).map(a => `
      <div class="admin-item-row">
        <div>
          <strong>${a.title}</strong>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">
            ${a.issuer} (${a.year})
          </div>
        </div>
        <div class="admin-actions">
          <button class="btn btn-sm btn-secondary edit-btn" data-type="achievement" data-id="${a.id}">
            <i class="fa-solid fa-pen"></i> Edit
          </button>
          <button class="btn btn-sm btn-outline delete-btn" data-type="achievement" data-id="${a.id}" style="border-color: #ef4444; color: #ef4444;">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  function renderSkillsList() {
    const container = document.getElementById('admin-skills-list');
    if (!container) return;

    container.innerHTML = (contentData.skills || []).map(cat => `
      <div class="admin-item-row" style="flex-direction: column; align-items: flex-start;">
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
          <strong style="font-size: 1.1rem; color: var(--accent-purple);">${cat.category}</strong>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; width: 100%;">
          ${cat.items.map(item => `
            <span class="badge" style="font-size: 0.8rem;">
              ${item.name} (${item.level}%)
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function populateProfileForm() {
    if (!contentData.profile) return;
    const p = contentData.profile;
    const ref = p.reference || {};

    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val || '';
    };

    setVal('prof-name', p.name);
    setVal('prof-title', p.title);
    setVal('prof-bio', p.bio);
    setVal('prof-email', p.email);
    setVal('prof-phone', p.phone);
    setVal('prof-location', p.location);
    setVal('prof-availability', p.availability);
    setVal('prof-github', p.github);
    setVal('prof-linkedin', p.linkedin);

    setVal('ref-input-name', ref.name);
    setVal('ref-input-desig', ref.designation);
    setVal('ref-input-inst', ref.institution);
    setVal('ref-input-email', ref.email);
    setVal('ref-input-phone', ref.phone);
  }

  // --- Add / Edit / Delete Event Listeners ---
  document.addEventListener('click', (e) => {
    const editBtn = e.target.closest('.edit-btn');
    if (editBtn) {
      const type = editBtn.getAttribute('data-type');
      const id = editBtn.getAttribute('data-id');
      openEditModal(type, id);
      return;
    }

    const delBtn = e.target.closest('.delete-btn');
    if (delBtn) {
      const type = delBtn.getAttribute('data-type');
      const id = delBtn.getAttribute('data-id');
      deleteItem(type, id);
      return;
    }
  });

  const addProjBtn = document.getElementById('add-project-btn');
  const addExpBtn = document.getElementById('add-experience-btn');
  const addEduBtn = document.getElementById('add-education-btn');
  const addCertBtn = document.getElementById('add-cert-btn');
  const addAchBtn = document.getElementById('add-achieve-btn');

  if (addProjBtn) addProjBtn.addEventListener('click', () => openEditModal('project', null));
  if (addExpBtn) addExpBtn.addEventListener('click', () => openEditModal('experience', null));
  if (addEduBtn) addEduBtn.addEventListener('click', () => openEditModal('education', null));
  if (addCertBtn) addCertBtn.addEventListener('click', () => openEditModal('certification', null));
  if (addAchBtn) addAchBtn.addEventListener('click', () => openEditModal('achievement', null));

  function openEditModal(type, id) {
    currentEditType = type;
    currentEditId = id;
    const isEdit = !!id;
    document.getElementById('modal-title').textContent = `${isEdit ? 'Edit' : 'Add New'} ${type.charAt(0).toUpperCase() + type.slice(1)}`;

    let item = {};
    if (isEdit && contentData) {
      const keyMap = {
        'project': 'projects',
        'experience': 'experience',
        'education': 'education',
        'certification': 'certifications',
        'achievement': 'achievements'
      };
      const list = contentData[keyMap[type]] || [];
      item = list.find(x => x.id === id) || {};
    }

    if (type === 'project') {
      dynamicFormFields.innerHTML = `
        <div class="form-group"><label>Project Title *</label><input type="text" id="inp-title" class="form-control" value="${item.title || ''}" required></div>
        <div class="form-group"><label>Subtitle</label><input type="text" id="inp-subtitle" class="form-control" value="${item.subtitle || ''}"></div>
        <div class="form-group"><label>Category *</label><input type="text" id="inp-category" class="form-control" value="${item.category || 'Software Engineering'}" required></div>
        <div class="form-group"><label>Description *</label><textarea id="inp-description" class="form-control" rows="3" required>${item.description || ''}</textarea></div>
        <div class="form-group"><label>My Contribution</label><textarea id="inp-contribution" class="form-control" rows="2">${item.contribution || ''}</textarea></div>
        <div class="form-group"><label>Technologies (Comma separated)</label><input type="text" id="inp-tech" class="form-control" value="${(item.technologies || []).join(', ')}"></div>
        <div class="form-group"><label>GitHub URL</label><input type="url" id="inp-github" class="form-control" value="${item.github || ''}"></div>
        <div class="form-group"><label>Demo URL</label><input type="url" id="inp-demo" class="form-control" value="${item.demo || ''}"></div>
      `;
    } else if (type === 'experience') {
      dynamicFormFields.innerHTML = `
        <div class="form-group"><label>Role Title *</label><input type="text" id="inp-role" class="form-control" value="${item.role || ''}" required></div>
        <div class="form-group"><label>Company / Organization *</label><input type="text" id="inp-company" class="form-control" value="${item.company || ''}" required></div>
        <div class="form-group"><label>Period (e.g. 2021 - 2022) *</label><input type="text" id="inp-period" class="form-control" value="${item.period || ''}" required></div>
        <div class="form-group"><label>Type (e.g. Leadership & Governance)</label><input type="text" id="inp-type" class="form-control" value="${item.type || 'Leadership & Governance'}"></div>
        <div class="form-group"><label>Bullet Points (One per line)</label><textarea id="inp-bullets" class="form-control" rows="4">${(item.description || []).join('\n')}</textarea></div>
      `;
    } else if (type === 'education') {
      dynamicFormFields.innerHTML = `
        <div class="form-group"><label>Degree / Qualification *</label><input type="text" id="inp-edu-degree" class="form-control" value="${item.degree || ''}" required></div>
        <div class="form-group"><label>Institution *</label><input type="text" id="inp-edu-inst" class="form-control" value="${item.institution || ''}" required></div>
        <div class="form-group"><label>Period *</label><input type="text" id="inp-edu-period" class="form-control" value="${item.period || ''}" required></div>
        <div class="form-group"><label>Location</label><input type="text" id="inp-edu-loc" class="form-control" value="${item.location || 'Sri Lanka'}"></div>
        <div class="form-group"><label>Highlights (One per line)</label><textarea id="inp-edu-highlights" class="form-control" rows="3">${(item.highlights || []).join('\n')}</textarea></div>
      `;
    } else if (type === 'certification') {
      dynamicFormFields.innerHTML = `
        <div class="form-group"><label>Certification Title *</label><input type="text" id="inp-cert-title" class="form-control" value="${item.title || ''}" required></div>
        <div class="form-group"><label>Issuing Body *</label><input type="text" id="inp-cert-issuer" class="form-control" value="${item.issuer || ''}" required></div>
        <div class="form-group"><label>Year *</label><input type="text" id="inp-cert-year" class="form-control" value="${item.year || ''}" required></div>
        <div class="form-group"><label>Credential ID</label><input type="text" id="inp-cert-id" class="form-control" value="${item.credentialId || ''}"></div>
        <div class="form-group"><label>Verification URL</label><input type="url" id="inp-cert-url" class="form-control" value="${item.url || ''}"></div>
      `;
    } else if (type === 'achievement') {
      dynamicFormFields.innerHTML = `
        <div class="form-group"><label>Achievement Title *</label><input type="text" id="inp-ach-title" class="form-control" value="${item.title || ''}" required></div>
        <div class="form-group"><label>Issuer / Organization *</label><input type="text" id="inp-ach-issuer" class="form-control" value="${item.issuer || ''}" required></div>
        <div class="form-group"><label>Year *</label><input type="text" id="inp-ach-year" class="form-control" value="${item.year || ''}" required></div>
        <div class="form-group"><label>Description *</label><textarea id="inp-ach-desc" class="form-control" rows="3" required>${item.description || ''}</textarea></div>
      `;
    }

    adminModal.classList.add('active');
  }

  function closeAdminModal() {
    if (adminModal) adminModal.classList.remove('active');
  }

  if (adminModalClose) adminModalClose.addEventListener('click', closeAdminModal);
  if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeAdminModal);

  // Save Modal Form
  if (adminEntryForm) {
    adminEntryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!contentData) return;

      const keyMap = {
        'project': 'projects',
        'experience': 'experience',
        'education': 'education',
        'certification': 'certifications',
        'achievement': 'achievements'
      };

      const listKey = keyMap[currentEditType];
      if (!contentData[listKey]) contentData[listKey] = [];
      const list = contentData[listKey];

      let newItem = {};

      if (currentEditType === 'project') {
        newItem = {
          id: currentEditId || `proj-${Date.now()}`,
          title: document.getElementById('inp-title').value,
          subtitle: document.getElementById('inp-subtitle').value,
          category: document.getElementById('inp-category').value,
          description: document.getElementById('inp-description').value,
          contribution: document.getElementById('inp-contribution').value,
          technologies: document.getElementById('inp-tech').value.split(',').map(t => t.trim()).filter(Boolean),
          github: document.getElementById('inp-github').value,
          demo: document.getElementById('inp-demo').value,
          image: 'assets/project1.png'
        };
      } else if (currentEditType === 'experience') {
        newItem = {
          id: currentEditId || `exp-${Date.now()}`,
          role: document.getElementById('inp-role').value,
          company: document.getElementById('inp-company').value,
          period: document.getElementById('inp-period').value,
          type: document.getElementById('inp-type').value,
          location: 'Matara, Sri Lanka',
          description: document.getElementById('inp-bullets').value.split('\n').map(s => s.trim()).filter(Boolean)
        };
      } else if (currentEditType === 'education') {
        newItem = {
          id: currentEditId || `edu-${Date.now()}`,
          degree: document.getElementById('inp-edu-degree').value,
          institution: document.getElementById('inp-edu-inst').value,
          period: document.getElementById('inp-edu-period').value,
          location: document.getElementById('inp-edu-loc').value,
          highlights: document.getElementById('inp-edu-highlights').value.split('\n').map(s => s.trim()).filter(Boolean)
        };
      } else if (currentEditType === 'certification') {
        newItem = {
          id: currentEditId || `cert-${Date.now()}`,
          title: document.getElementById('inp-cert-title').value,
          issuer: document.getElementById('inp-cert-issuer').value,
          year: document.getElementById('inp-cert-year').value,
          credentialId: document.getElementById('inp-cert-id').value,
          url: document.getElementById('inp-cert-url').value,
          icon: 'fa-solid fa-certificate'
        };
      } else if (currentEditType === 'achievement') {
        newItem = {
          id: currentEditId || `ach-${Date.now()}`,
          title: document.getElementById('inp-ach-title').value,
          issuer: document.getElementById('inp-ach-issuer').value,
          year: document.getElementById('inp-ach-year').value,
          description: document.getElementById('inp-ach-desc').value
        };
      }

      if (currentEditId) {
        const index = list.findIndex(x => x.id === currentEditId);
        if (index !== -1) list[index] = newItem;
      } else {
        list.push(newItem);
      }

      closeAdminModal();
      renderAllLists();
      showToast(`${currentEditType.toUpperCase()} item saved to session!`, 'success');
    });
  }

  // Delete Item
  function deleteItem(type, id) {
    if (!confirm('Are you sure you want to delete this entry?')) return;
    const keyMap = {
      'project': 'projects',
      'experience': 'experience',
      'education': 'education',
      'certification': 'certifications',
      'achievement': 'achievements'
    };
    const listKey = keyMap[type];
    if (contentData && contentData[listKey]) {
      contentData[listKey] = contentData[listKey].filter(x => x.id !== id);
      renderAllLists();
      showToast('Item removed from session.', 'info');
    }
  }

  // Save Profile Form
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!contentData) return;

      contentData.profile = {
        ...(contentData.profile || {}),
        name: document.getElementById('prof-name').value,
        title: document.getElementById('prof-title').value,
        bio: document.getElementById('prof-bio').value,
        email: document.getElementById('prof-email').value,
        phone: document.getElementById('prof-phone').value,
        location: document.getElementById('prof-location').value,
        availability: document.getElementById('prof-availability').value,
        github: document.getElementById('prof-github').value,
        linkedin: document.getElementById('prof-linkedin').value,
        reference: {
          name: document.getElementById('ref-input-name').value,
          designation: document.getElementById('ref-input-desig').value,
          institution: document.getElementById('ref-input-inst').value,
          email: document.getElementById('ref-input-email').value,
          phone: document.getElementById('ref-input-phone').value
        }
      };

      showToast('Profile & reference details updated in session!', 'success');
    });
  }

  // --- Download updated content.json ---
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (!contentData) return;
      const jsonStr = JSON.stringify(contentData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'content.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('content.json downloaded! Replace /data/content.json and push to GitHub.', 'success');
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

  function getFallbackData() {
    return {
      profile: {
        name: "Pasindu Denuwan",
        title: "Data & Technology Enthusiast | Undergraduate",
        bio: "An enthusiastic undergraduate pursuing a B.Sc (Hons) in Computing and Information Systems at the Faculty of Computing, Sabaragamuwa University of Sri Lanka.",
        email: "pasindudenuwan@gmail.com",
        phone: "+94 76 947 6496",
        location: "Sabaragamuwa / Colombo, Sri Lanka",
        github: "https://github.com/pasindu-denuwan",
        linkedin: "https://linkedin.com/in/pasindu-denuwan",
        reference: {
          name: "Ms. Kumudu Kauwshalya",
          designation: "Senior Lecturer Grade II",
          institution: "Sabaragamuwa University of Sri Lanka",
          phone: "+94 76 423 0976",
          email: "Kaushalya@gmail.com"
        }
      },
      projects: [],
      experience: [],
      education: [],
      certifications: [],
      achievements: [],
      skills: []
    };
  }
});
