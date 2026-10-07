const projectsList = document.querySelector('#projects-list');
const modal = document.querySelector('#project-modal');
const modalContent = document.querySelector('#modal-content');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
let lastFocusedElement = null;

function safeAsset(path) {
  return path && typeof path === 'string' ? path : '';
}

function projectCard(project) {
  const article = document.createElement('article');
  article.className = 'project-card reveal';
  article.dataset.projectId = project.id;

  article.innerHTML = `
    <div class="project-media" data-preview="${project.id}">
      <img class="project-cover" src="${safeAsset(project.cover)}" alt="${project.title} gameplay screenshot" loading="lazy">
      <video class="project-preview-video" muted loop playsinline preload="none" aria-hidden="true"></video>
      <img class="project-preview-gif" alt="" aria-hidden="true" loading="lazy">
      <div class="media-missing">MEDIA</div>
    </div>
    <div class="project-info">
      <div class="project-heading">
        <h2>${project.title}</h2>
        <div class="project-meta">${project.meta}${project.year ? ` · ${project.year}` : ''}</div>
      </div>
      <p class="project-summary">${project.summary}</p>
      <button class="see-more" type="button" data-project="${project.id}">SEE MORE <span>↗</span></button>
    </div>
  `;

  const cover = article.querySelector('.project-cover');
  const missing = article.querySelector('.media-missing');
  cover.addEventListener('error', () => {
    cover.style.display = 'none';
    missing.textContent = project.title;
    missing.style.opacity = '1';
  }, { once: true });

  return article;
}

function renderProjects() {
  projectsList.innerHTML = '';
  projects.forEach(project => projectsList.appendChild(projectCard(project)));
  setupPreviewMedia();
  setupRevealObserver();
}

function setupPreviewMedia() {
  document.querySelectorAll('[data-preview]').forEach(media => {
    const id = media.dataset.preview;
    const project = projects.find(item => item.id === id);
    if (!project) return;

    const video = media.querySelector('.project-preview-video');
    const gif = media.querySelector('.project-preview-gif');
    let active = null;

    const activate = () => {
      if (active) return;
      const videoSrc = safeAsset(project.previewVideo);
      const gifSrc = safeAsset(project.previewGif);

      if (videoSrc) {
        video.src = videoSrc;
        video.style.opacity = '1';
        active = 'video';
        video.play().catch(() => {});
      } else if (gifSrc) {
        gif.src = gifSrc;
        gif.style.opacity = '1';
        active = 'gif';
      }
    };

    const deactivate = () => {
      if (active === 'video') {
        video.pause();
        video.removeAttribute('src');
        video.load();
        video.style.opacity = '0';
      } else if (active === 'gif') {
        gif.removeAttribute('src');
        gif.style.opacity = '0';
      }
      active = null;
    };

    media.addEventListener('mouseenter', activate);
    media.addEventListener('mouseleave', deactivate);
    media.addEventListener('focusin', activate);
    media.addEventListener('focusout', deactivate);
  });
}

function galleryMarkup(project) {
  const gallery = (project.gallery || []).filter(item => item && item.src);
  if (!gallery.length) return '';

  return `
    <div class="gallery" data-gallery="${project.id}">
      <div class="gallery-main-wrap">
        <img class="gallery-main" src="${gallery[0].src}" alt="${project.title} screenshot" loading="lazy">
        <div class="gallery-caption">${gallery[0].caption || ''}</div>
      </div>
      <div class="gallery-thumbs">
        ${gallery.map((item, index) => `
          <button class="gallery-thumb ${index === 0 ? 'active' : ''}" type="button" data-src="${item.src}" data-caption="${item.caption || ''}" aria-label="Show screenshot ${index + 1}">
            <img src="${item.src}" alt="" loading="lazy">
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function videoMarkup(project) {
  if (!project.video) return '';
  const isYoutube = /youtube\.com|youtu\.be/.test(project.video);
  if (isYoutube) {
    return `<div class="modal-video"><iframe src="${project.video}" title="${project.title} gameplay video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
  }
  return `<div class="modal-video"><video src="${project.video}" controls playsinline preload="metadata"></video></div>`;
}

function linksMarkup(project) {
  const links = (project.links || []).filter(link => link && link.url);
  if (!links.length) return '';
  return `<div class="project-links">${links.map(link => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label} ↗</a>`).join('')}</div>`;
}

function openProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  lastFocusedElement = document.activeElement;

  const modalMedia = project.video
    ? videoMarkup(project)
    : `<img class="modal-cover" src="${project.cover}" alt="${project.title} screenshot">`;

  modalContent.innerHTML = `
    <div class="modal-header">
      <p class="section-label">PROJECT</p>
      <h2>${project.title}</h2>
      <div class="project-meta">${project.meta}${project.year ? ` · ${project.year}` : ''}</div>
    </div>
    <div class="modal-media">${modalMedia}</div>
    ${galleryMarkup(project)}
    <div class="modal-description">${project.description.split('\n').filter(Boolean).map(p => `<p>${p}</p>`).join('')}</div>
    ${linksMarkup(project)}
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
  setupGallery();
}

function closeProject() {
  if (!modal.classList.contains('open')) return;
  const modalVideo = modal.querySelector('video');
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.removeAttribute('src');
  }
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastFocusedElement) lastFocusedElement.focus();
}

function setupGallery() {
  document.querySelectorAll('.gallery').forEach(gallery => {
    const main = gallery.querySelector('.gallery-main');
    const caption = gallery.querySelector('.gallery-caption');
    gallery.querySelectorAll('.gallery-thumb').forEach(button => {
      button.addEventListener('click', () => {
        main.src = button.dataset.src;
        caption.textContent = button.dataset.caption || '';
        gallery.querySelectorAll('.gallery-thumb').forEach(item => item.classList.remove('active'));
        button.classList.add('active');
      });
    });
  });
}

projectsList.addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (button) openProject(button.dataset.project);
});

document.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeProject));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeProject();
});

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  siteNav.classList.toggle('open', !open);
});

siteNav.addEventListener('click', event => {
  if (event.target.matches('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('open');
  }
});

function setupRevealObserver() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(element => element.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  elements.forEach(element => observer.observe(element));
}

renderProjects();
