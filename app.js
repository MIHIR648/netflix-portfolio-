/**
 * =========================================================================
 * NETFOLIO - Core Interactive Application
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("Portfolio data not found!");
    return;
  }

  // State Management
  const state = {
    selectedProfile: null,
    soundEnabled: true,
    myList: JSON.parse(localStorage.getItem("netflix_portfolio_my_list") || "[]"),
    likedProjects: JSON.parse(localStorage.getItem("netflix_portfolio_likes") || "[]"),
    activeModalProject: null,
    searchQuery: ""
  };

  // Audio Synthesizer (Cinematic Netflix "Ta-Dum" bass chime)
  function playCinematicChime() {
    if (!state.soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const now = ctx.currentTime;

      // Primary deep cinematic impact
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(85, now);
      osc1.frequency.exponentialRampToValueAtTime(32, now + 1.2);

      gain1.gain.setValueAtTime(0.001, now);
      gain1.gain.linearRampToValueAtTime(0.7, now + 0.08);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);

      // Secondary metallic cello / string harmonic
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(170, now + 0.05);
      osc2.frequency.exponentialRampToValueAtTime(65, now + 1.1);

      gain2.gain.setValueAtTime(0.001, now);
      gain2.gain.linearRampToValueAtTime(0.35, now + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      // Shimmer accent
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.type = "sine";
      osc3.frequency.setValueAtTime(340, now + 0.1);
      osc3.frequency.exponentialRampToValueAtTime(120, now + 0.8);

      gain3.gain.setValueAtTime(0.001, now);
      gain3.gain.linearRampToValueAtTime(0.18, now + 0.15);
      gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

      osc3.connect(gain3);
      gain3.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc3.start(now);

      osc1.stop(now + 1.5);
      osc2.stop(now + 1.3);
      osc3.stop(now + 1.0);
    } catch (e) {
      console.warn("Audio playback not supported or blocked by user gesture:", e);
    }
  }

  // Toast Notification helper
  function showToast(message, duration = 3800) {
    let toast = document.getElementById("toast-notice");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast-notice";
      toast.className = "toast-notice";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <span style="color:var(--netflix-red); font-size:1.2rem;">●</span>
      <span>${message}</span>
    `;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, duration);
  }

  // Available avatar choices for newly added profiles
  const avatarPool = [
    "./assets/diva-healthcare-coolsculpting.jpg",
    "./assets/darshan-shah-studio-guest.jpg",
    "./assets/gabardine-stretch-ad.jpg",
    "./assets/greentech-rera-ad.jpg",
    "./assets/clonex-logo-brand.jpg"
  ];
  let currentAvatarIndex = 0;

  // Render "Who's Watching?" Profiles (1. Crown Creation, 2. Custom Profiles, 3. + Add Profile, Bottom: Guest)
  function renderProfileGate() {
    const grid = document.getElementById("profiles-grid");
    if (!grid) return;

    // Load any saved custom profiles from localStorage
    const customProfiles = JSON.parse(localStorage.getItem("crown_custom_profiles") || "[]");
    const allProfiles = [...data.viewerProfiles, ...customProfiles];

    let profilesHtml = allProfiles.map(p => `
      <div class="profile-card" data-profile-id="${p.id}">
        <div class="profile-avatar-box">
          <img src="${p.avatar}" alt="${p.name}" class="profile-avatar-img" />
        </div>
        <div class="profile-name">${p.name}</div>
        <div class="profile-subtitle">${p.description || "Viewing Profile"}</div>
      </div>
    `).join("");

    // Append the iconic Netflix "+ Add Profile" tile
    profilesHtml += `
      <div class="profile-card profile-card-add" id="profile-card-add" title="Add a new viewing profile">
        <div class="profile-add-box">
          <div class="profile-add-icon-circle">+</div>
        </div>
        <div class="profile-name">Add Profile</div>
        <div class="profile-subtitle">Personalize View</div>
      </div>
    `;

    grid.innerHTML = profilesHtml;

    // Attach click events to profiles
    grid.querySelectorAll(".profile-card:not(.profile-card-add)").forEach(card => {
      card.addEventListener("click", () => {
        const pId = card.getAttribute("data-profile-id");
        const profile = allProfiles.find(p => p.id === pId) || data.viewerProfiles[0];
        selectProfile(profile);
      });
    });

    // Attach click event to "+ Add Profile" tile
    const addCard = document.getElementById("profile-card-add");
    if (addCard) {
      addCard.addEventListener("click", () => {
        openAddProfileModal();
      });
    }

    // Bottom "Explore As Guest" button
    const guestBtn = document.getElementById("manage-profiles-btn");
    if (guestBtn) {
      guestBtn.textContent = "Explore As Guest";
      guestBtn.onclick = () => {
        const guestProfile = data.guestProfile || {
          id: "guest",
          name: "Guest Explorer",
          avatar: "./assets/darshan-shah-studio-guest.jpg",
          welcomeMessage: "Welcome, Guest! Feel free to explore Crown Creation's client campaigns."
        };
        selectProfile(guestProfile);
      };
    }
  }

  // Open & Close "Add Profile" Modal
  function openAddProfileModal() {
    const modal = document.getElementById("add-profile-modal");
    const nameInput = document.getElementById("new-profile-name-input");
    const avatarPreview = document.getElementById("new-profile-avatar-preview");
    
    if (!modal) return;
    
    // Pick an avatar
    currentAvatarIndex = (currentAvatarIndex + 1) % avatarPool.length;
    if (avatarPreview) {
      avatarPreview.src = avatarPool[currentAvatarIndex];
    }
    if (nameInput) {
      nameInput.value = "";
    }

    modal.classList.add("active");
    setTimeout(() => {
      if (nameInput) nameInput.focus();
    }, 100);
  }

  function closeAddProfileModal() {
    const modal = document.getElementById("add-profile-modal");
    if (modal) {
      modal.classList.remove("active");
    }
  }

  // Setup Add Profile Dialog Handlers
  function setupAddProfileModal() {
    const modal = document.getElementById("add-profile-modal");
    const saveBtn = document.getElementById("save-new-profile-btn");
    const cancelBtn = document.getElementById("cancel-new-profile-btn");
    const nameInput = document.getElementById("new-profile-name-input");
    const avatarPreview = document.getElementById("new-profile-avatar-preview");

    if (avatarPreview) {
      avatarPreview.style.cursor = "pointer";
      avatarPreview.title = "Click to change avatar";
      avatarPreview.addEventListener("click", () => {
        currentAvatarIndex = (currentAvatarIndex + 1) % avatarPool.length;
        avatarPreview.src = avatarPool[currentAvatarIndex];
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener("click", closeAddProfileModal);
    }

    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeAddProfileModal();
      });
    }

    function handleCreateProfile() {
      const rawName = nameInput ? nameInput.value.trim() : "";
      const profileName = rawName || "New Profile";
      const newProfile = {
        id: "profile-" + Date.now(),
        name: profileName,
        avatar: avatarPool[currentAvatarIndex],
        description: "Custom Viewer",
        welcomeMessage: `Welcome, ${profileName}! Enjoy exploring Crown Creation's client campaigns.`
      };

      const customProfiles = JSON.parse(localStorage.getItem("crown_custom_profiles") || "[]");
      customProfiles.push(newProfile);
      localStorage.setItem("crown_custom_profiles", JSON.stringify(customProfiles));

      closeAddProfileModal();
      renderProfileGate();
      selectProfile(newProfile);
    }

    if (saveBtn) {
      saveBtn.addEventListener("click", handleCreateProfile);
    }

    if (nameInput) {
      nameInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleCreateProfile();
        } else if (e.key === "Escape") {
          closeAddProfileModal();
        }
      });
    }
  }

  function selectProfile(profile) {
    state.selectedProfile = profile;
    playCinematicChime();

    const gate = document.getElementById("profile-gate");
    if (gate) {
      gate.classList.add("hidden");
    }

    // Update Header Avatar & Dropdown
    const headerAvatar = document.getElementById("header-avatar");
    if (headerAvatar && profile) {
      headerAvatar.src = profile.avatar;
      headerAvatar.alt = profile.name;
    }

    const currentProfileName = document.getElementById("dropdown-current-name");
    if (currentProfileName && profile) {
      currentProfileName.textContent = profile.name;
    }

    if (profile && profile.welcomeMessage) {
      setTimeout(() => {
        showToast(`<strong>${profile.name}</strong>: ${profile.welcomeMessage}`, 4500);
      }, 600);
    }
  }

  // Switch Profile (opens gate again)
  window.switchProfile = function() {
    const gate = document.getElementById("profile-gate");
    const dropdown = document.getElementById("profile-dropdown");
    if (dropdown) dropdown.classList.remove("open");
    if (gate) gate.classList.remove("hidden");
  };

  // Header Scroll and Dropdown
  function setupHeader() {
    const header = document.querySelector(".netflix-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // Profile Dropdown
    const profileMenu = document.getElementById("profile-menu");
    const profileDropdown = document.getElementById("profile-dropdown");
    if (profileMenu && profileDropdown) {
      profileMenu.addEventListener("click", (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle("open");
      });
      document.addEventListener("click", () => {
        profileDropdown.classList.remove("open");
      });
    }

    // Sound Toggle
    const soundBtn = document.getElementById("sound-toggle-btn");
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        state.soundEnabled = !state.soundEnabled;
        soundBtn.innerHTML = state.soundEnabled ? `🔊` : `🔇`;
        showToast(state.soundEnabled ? "Cinematic audio enabled" : "Audio muted");
        if (state.soundEnabled) playCinematicChime();
      });
    }

    // Search Toggle & Filter
    const searchBtn = document.getElementById("search-toggle-btn");
    const searchInput = document.getElementById("search-input");
    if (searchBtn && searchInput) {
      searchBtn.addEventListener("click", () => {
        searchInput.classList.toggle("expanded");
        if (searchInput.classList.contains("expanded")) {
          searchInput.focus();
        }
      });

      searchInput.addEventListener("input", (e) => {
        handleSearch(e.target.value.trim().toLowerCase());
      });
    }

    // Update My List Badge Count in Nav
    updateMyListBadge();
  }

  function updateMyListBadge() {
    const badge = document.getElementById("nav-my-list-count");
    if (badge) {
      badge.textContent = state.myList.length;
      badge.style.display = state.myList.length > 0 ? "inline-block" : "none";
    }
  }

  // Render Hero Billboard
  function renderBillboard() {
    const hero = data.featuredProject;
    if (!hero) return;

    const billboardElem = document.getElementById("billboard");
    if (!billboardElem) return;

    billboardElem.innerHTML = `
      <img src="${hero.backdropImage}" alt="${hero.title}" class="billboard-backdrop" id="billboard-img" />
      <div class="billboard-vignette"></div>
      <div class="billboard-bottom-fade"></div>

      <div class="billboard-content">
        <div class="billboard-badge">
          <span>${hero.badge || "FEATURED CLIENT SPOTLIGHT"}</span>
        </div>
        <h1 class="billboard-title">${hero.title}</h1>
        <div class="billboard-client">
          <span>Client: <strong>${hero.client}</strong></span> • <span>${hero.duration}</span>
        </div>
        <div class="billboard-meta">
          <span class="meta-match">${hero.matchScore}</span>
          <span class="meta-pill">${hero.year}</span>
          <span class="meta-pill">${hero.qualityTag}</span>
          <span class="meta-pill">${hero.typeTag}</span>
        </div>
        <p class="billboard-synopsis">${hero.description}</p>
        <div class="billboard-buttons">
          <button class="btn btn-primary" id="billboard-play-btn">
            <span>▶</span>
            <span>View Case Study</span>
          </button>
          <button class="btn btn-secondary" id="billboard-info-btn">
            <span>ⓘ</span>
            <span>More Info</span>
          </button>
          <button class="btn btn-secondary" id="billboard-list-btn" title="Add to My List">
            <span>${state.myList.includes(hero.id) ? "✓" : "+"}</span>
            <span>${state.myList.includes(hero.id) ? "In My List" : "Add to List"}</span>
          </button>
        </div>
      </div>
    `;

    document.getElementById("billboard-play-btn")?.addEventListener("click", () => {
      openDetailModal(hero);
    });

    document.getElementById("billboard-info-btn")?.addEventListener("click", () => {
      openDetailModal(hero);
    });

    document.getElementById("billboard-list-btn")?.addEventListener("click", (e) => {
      toggleMyList(hero.id);
      renderBillboard(); // re-render state
    });

    // Subtle Ken Burns slow zoom
    setTimeout(() => {
      const img = document.getElementById("billboard-img");
      if (img) img.classList.add("ken-burns");
    }, 500);
  }

  // Render Netflix Rows & Carousels
  function renderAllRows() {
    const container = document.getElementById("netflix-rows");
    if (!container) return;

    let html = "";

    // If My List has items, display a "My List" row first!
    if (state.myList.length > 0) {
      const allProjects = getAllProjectsList();
      const mySavedProjects = allProjects.filter(p => state.myList.includes(p.id));
      if (mySavedProjects.length > 0) {
        html += renderRowMarkup({
          id: "row-my-list",
          title: "📌 My List (Saved Projects)",
          subtitle: "Projects you bookmarked to discuss or review",
          projects: mySavedProjects
        });
      }
    }

    // Render regular category rows
    data.categories.forEach(cat => {
      html += renderRowMarkup(cat);
    });

    container.innerHTML = html;

    // Attach row events
    attachRowEventListeners(container);
  }

  function renderRowMarkup(category) {
    const cardsHtml = category.projects.map(proj => {
      const isInList = state.myList.includes(proj.id);
      const isLiked = state.likedProjects.includes(proj.id);

      return `
        <div class="project-card" data-project-id="${proj.id}">
          <div class="card-media">
            <img src="${proj.thumbnail}" alt="${proj.title}" class="card-img" loading="lazy" />
            ${proj.badge ? `<div class="card-badge">${proj.badge}</div>` : ""}
            <div class="card-info-peek">
              <div class="card-peek-title">${proj.title}</div>
              <div class="card-peek-client">${proj.client} • ${proj.year}</div>
            </div>
          </div>

          <div class="card-hover-body">
            <div class="card-actions-row">
              <div class="card-actions-left">
                <button class="icon-btn primary-play card-play-trigger" title="View details & deliverables">▶</button>
                <button class="icon-btn card-list-trigger" data-id="${proj.id}" title="${isInList ? 'Remove from My List' : 'Add to My List'}">
                  ${isInList ? "✓" : "+"}
                </button>
                <button class="icon-btn card-like-trigger ${isLiked ? 'liked' : ''}" data-id="${proj.id}" title="Endorse / Like">
                  ${isLiked ? "❤️" : "👍"}
                </button>
              </div>
              <button class="icon-btn card-info-trigger" title="Project Details">⌄</button>
            </div>

            <div class="card-meta-line">
              <span class="card-match">${proj.matchScore || "98%"} Match</span>
              <span class="meta-pill">${proj.year}</span>
              <span class="meta-pill">${proj.duration || "Deliverable"}</span>
            </div>

            <div class="card-peek-client" style="color: #fff; font-weight:600;">${proj.client}</div>

            <div class="card-tags-cloud">
              ${(proj.tags || []).slice(0, 3).map(t => `<span class="card-tag">${t}</span>`).join("")}
            </div>
          </div>
        </div>
      `;
    }).join("");

    return `
      <section class="row-section" id="section-${category.id}">
        <div class="row-header">
          <div class="row-title-wrap">
            <h2 class="row-title">${category.title}</h2>
            ${category.subtitle ? `<div class="row-subtitle">${category.subtitle}</div>` : ""}
          </div>
        </div>
        <div class="carousel-wrapper">
          <button class="carousel-arrow prev" aria-label="Previous">‹</button>
          <div class="carousel-slider" data-row-id="${category.id}">
            ${cardsHtml}
          </div>
          <button class="carousel-arrow next" aria-label="Next">›</button>
        </div>
      </section>
    `;
  }

  function attachRowEventListeners(container) {
    // Carousel Arrows
    container.querySelectorAll(".carousel-wrapper").forEach(wrapper => {
      const slider = wrapper.querySelector(".carousel-slider");
      const prevBtn = wrapper.querySelector(".carousel-arrow.prev");
      const nextBtn = wrapper.querySelector(".carousel-arrow.next");

      if (prevBtn && nextBtn && slider) {
        prevBtn.addEventListener("click", () => {
          slider.scrollBy({ left: -slider.clientWidth * 0.75, behavior: "smooth" });
        });
        nextBtn.addEventListener("click", () => {
          slider.scrollBy({ left: slider.clientWidth * 0.75, behavior: "smooth" });
        });
      }
    });

    // Card Clicks & Hover Actions
    container.querySelectorAll(".project-card").forEach(card => {
      const projId = card.getAttribute("data-project-id");
      const project = findProjectById(projId);

      // Entire card or play button opens modal
      card.addEventListener("click", (e) => {
        // If clicking action buttons, avoid opening modal twice
        if (e.target.closest(".card-list-trigger") || e.target.closest(".card-like-trigger")) {
          return;
        }
        if (project) openDetailModal(project);
      });

      // Add to List button
      const listBtn = card.querySelector(".card-list-trigger");
      if (listBtn) {
        listBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleMyList(projId);
          renderAllRows();
        });
      }

      // Like button
      const likeBtn = card.querySelector(".card-like-trigger");
      if (likeBtn) {
        likeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleLike(projId);
          renderAllRows();
        });
      }
    });
  }

  // Toggle My List
  function toggleMyList(projId) {
    const idx = state.myList.indexOf(projId);
    const proj = findProjectById(projId);
    if (idx === -1) {
      state.myList.push(projId);
      showToast(`Added <strong>${proj ? proj.title : 'Project'}</strong> to My List`);
    } else {
      state.myList.splice(idx, 1);
      showToast(`Removed from My List`);
    }
    localStorage.setItem("netflix_portfolio_my_list", JSON.stringify(state.myList));
    updateMyListBadge();
  }

  // Toggle Like
  function toggleLike(projId) {
    const idx = state.likedProjects.indexOf(projId);
    const proj = findProjectById(projId);
    if (idx === -1) {
      state.likedProjects.push(projId);
      showToast(`You endorsed <strong>${proj ? proj.title : 'this project'}</strong>! Thank you!`);
    } else {
      state.likedProjects.splice(idx, 1);
    }
    localStorage.setItem("netflix_portfolio_likes", JSON.stringify(state.likedProjects));
  }

  // Search Functionality
  function handleSearch(query) {
    state.searchQuery = query;
    const searchSection = document.getElementById("search-results-section");

    if (!query) {
      if (searchSection) searchSection.style.display = "none";
      document.getElementById("netflix-rows").style.display = "block";
      document.getElementById("billboard").style.display = "flex";
      return;
    }

    const all = getAllProjectsList();
    const matched = all.filter(p => {
      const text = `${p.title} ${p.client} ${p.tagline || ''} ${p.description || ''} ${(p.tags || []).join(' ')} ${p.category || ''}`.toLowerCase();
      return text.includes(query);
    });

    if (!searchSection) {
      const sSec = document.createElement("section");
      sSec.id = "search-results-section";
      sSec.className = "row-section";
      sSec.style.padding = "2rem 4%";
      document.getElementById("netflix-rows").before(sSec);
    }

    const sec = document.getElementById("search-results-section");
    sec.style.display = "block";
    sec.innerHTML = `
      <div class="row-header" style="padding-left:0; padding-right:0;">
        <div class="row-title-wrap">
          <h2 class="row-title">Search Results for "${escapeHtml(query)}" (${matched.length})</h2>
          <div class="row-subtitle">Matching titles, clients, deliverables, and tech stack tags</div>
        </div>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:1.2rem; margin-top:1.5rem;">
        ${matched.length === 0 ? `<p style="color:#888; font-size:1.1rem; padding: 2rem 0;">No projects found matching "${escapeHtml(query)}". Try searching for "Fintech", "Figma", "React", "Mobile", or "AI".</p>` : ""}
        ${matched.map(p => `
          <div class="project-card" style="flex: 0 0 260px;" data-project-id="${p.id}">
            <div class="card-media">
              <img src="${p.thumbnail}" alt="${p.title}" class="card-img" />
              <div class="card-info-peek">
                <div class="card-peek-title">${p.title}</div>
                <div class="card-peek-client">${p.client}</div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    sec.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const p = findProjectById(card.getAttribute("data-project-id"));
        if (p) openDetailModal(p);
      });
    });
  }

  // Netflix Detail Modal ("More Info")
  function setupDetailModal() {
    const overlay = document.getElementById("detail-modal");
    if (!overlay) return;

    const closeBtn = document.getElementById("modal-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeDetailModal);
    }

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeDetailModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("active")) {
        closeDetailModal();
      }
    });
  }

  function openDetailModal(project) {
    state.activeModalProject = project;
    const overlay = document.getElementById("detail-modal");
    if (!overlay) return;

    playCinematicChime();

    const isInList = state.myList.includes(project.id);

    // Populate modal contents
    document.getElementById("modal-hero-img").src = project.backdrop || project.thumbnail;
    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-client").innerHTML = `Client: <strong>${project.client}</strong> • ${project.year}`;
    document.getElementById("modal-match").textContent = project.matchScore || "98% Match";
    document.getElementById("modal-year").textContent = project.year || "2024";
    document.getElementById("modal-duration").textContent = project.duration || "Deliverable";
    document.getElementById("modal-synopsis").textContent = project.description || project.tagline;

    // List button state in modal
    const modalListBtn = document.getElementById("modal-list-btn");
    if (modalListBtn) {
      modalListBtn.innerHTML = `<span>${isInList ? "✓" : "+"}</span> <span>${isInList ? "In My List" : "Add to List"}</span>`;
      modalListBtn.onclick = () => {
        toggleMyList(project.id);
        const updated = state.myList.includes(project.id);
        modalListBtn.innerHTML = `<span>${updated ? "✓" : "+"}</span> <span>${updated ? "In My List" : "Add to List"}</span>`;
        renderAllRows();
      };
    }

    // WhatsApp Inquire button
    const liveBtn = document.getElementById("modal-live-btn");
    if (liveBtn) {
      const waUrl = (project.links && project.links.whatsapp) 
        ? project.links.whatsapp 
        : `https://wa.me/qr/KGEWR3H7AEQJM1?text=Hi%20Crown%20Creation,%20I'm%20interested%20in%20work%20like%20${encodeURIComponent(project.title)}`;
      liveBtn.href = waUrl;
      liveBtn.innerHTML = `<span>💬</span> <span>Inquire on WhatsApp</span>`;
      liveBtn.style.display = "inline-flex";
    }

    // Instagram / Second link button
    const figmaBtn = document.getElementById("modal-figma-btn");
    if (figmaBtn) {
      const igUrl = (project.links && project.links.instagram)
        ? project.links.instagram
        : (project.links && project.links.live)
          ? project.links.live
          : "https://www.instagram.com/crownc.reations?stkn=MTRxdW9jdHY3Z2U3cg==";
      figmaBtn.href = igUrl;
      figmaBtn.innerHTML = `<span>📷</span> <span>Instagram</span>`;
      figmaBtn.style.display = "inline-flex";
    }

    // Metrics Row
    const metricsContainer = document.getElementById("modal-metrics");
    if (metricsContainer) {
      if (project.metrics && project.metrics.length > 0) {
        metricsContainer.innerHTML = project.metrics.map(m => `
          <div class="metric-item">
            <div class="metric-value">${m.value}</div>
            <div class="metric-label">${m.label}</div>
          </div>
        `).join("");
        metricsContainer.style.display = "grid";
      } else {
        metricsContainer.style.display = "none";
      }
    }

    // Deliverables List
    const delivContainer = document.getElementById("modal-deliverables");
    if (delivContainer) {
      if (project.deliverables && project.deliverables.length > 0) {
        delivContainer.innerHTML = project.deliverables.map(d => `<li>${d}</li>`).join("");
      } else {
        delivContainer.innerHTML = `<li>Full UI/UX Specification</li><li>Interactive Figma Prototype</li>`;
      }
    }

    // Tech Tags Cloud
    const tagsContainer = document.getElementById("modal-tags");
    if (tagsContainer) {
      tagsContainer.innerHTML = (project.tags || []).map(t => `<span class="tech-badge">${t}</span>`).join("");
    }

    // Client Review Box
    const reviewBox = document.getElementById("modal-review-card");
    if (reviewBox) {
      if (project.clientReview) {
        reviewBox.style.display = "block";
        reviewBox.innerHTML = `
          <p class="review-quote">"${project.clientReview.comment || project.clientReview.quote}"</p>
          <div class="review-author-wrap">
            <img src="${project.clientReview.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}" class="review-avatar" alt="${project.clientReview.author}">
            <div>
              <div class="review-author-name">${project.clientReview.author}</div>
              <div class="review-author-role">${project.clientReview.role}</div>
            </div>
          </div>
        `;
      } else {
        reviewBox.style.display = "none";
      }
    }

    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // lock scroll
  }

  function closeDetailModal() {
    const overlay = document.getElementById("detail-modal");
    if (overlay) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // Render Documentary / About Section
  function renderAboutSection() {
    const p = data.profile;
    if (!p) return;

    const nameElem = document.getElementById("about-name");
    if (nameElem) nameElem.textContent = p.name;

    const bioElem = document.getElementById("about-bio");
    if (bioElem) bioElem.textContent = p.bio;

    const photoElem = document.getElementById("about-photo");
    if (photoElem) photoElem.src = p.avatar;

    const statsGrid = document.getElementById("stats-grid");
    if (statsGrid && p.stats) {
      statsGrid.innerHTML = p.stats.map(s => `
        <div class="stat-box">
          <div class="stat-box-num">${s.value}</div>
          <div class="stat-box-desc">${s.label}</div>
        </div>
      `).join("");
    }

    // Skills Matrix
    const skillsGrid = document.getElementById("skills-matrix");
    if (skillsGrid && data.skills) {
      skillsGrid.innerHTML = data.skills.map(cat => `
        <div class="skill-category-card">
          <div class="skill-category-title">
            <span>⚡</span>
            <span>${cat.category}</span>
          </div>
          ${cat.items.map(item => `
            <div class="skill-bar-row">
              <div class="skill-name-flex">
                <span>${item.name}</span>
                <span>${item.level}</span>
              </div>
              <div class="skill-progress-track">
                <div class="skill-progress-fill" style="width: ${item.level};"></div>
              </div>
            </div>
          `).join("")}
        </div>
      `).join("");
    }
  }

  // Render Testimonials Row
  function renderTestimonials() {
    const slider = document.getElementById("testimonials-slider");
    if (!slider || !data.testimonials) return;

    slider.innerHTML = data.testimonials.map(t => `
      <div class="testimonial-card">
        <div>
          <div class="testimonial-stars">${"★".repeat(t.rating || 5)}</div>
          <p class="testimonial-quote">"${t.quote}"</p>
        </div>
        <div class="review-author-wrap">
          <img src="${t.avatar}" class="review-avatar" alt="${t.author}">
          <div>
            <div class="review-author-name">${t.author}</div>
            <div class="review-author-role">${t.title}, ${t.client}</div>
          </div>
        </div>
      </div>
    `).join("");
  }

  // FAQ Accordion
  function setupFaqs() {
    const faqContainer = document.getElementById("faq-list");
    if (!faqContainer || !data.faqs) return;

    faqContainer.innerHTML = data.faqs.map((f, i) => `
      <div class="faq-item" data-index="${i}">
        <button class="faq-question">
          <span>${f.q}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>${f.a}</p>
        </div>
      </div>
    `).join("");

    faqContainer.querySelectorAll(".faq-item").forEach(item => {
      const btn = item.querySelector(".faq-question");
      btn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqContainer.querySelectorAll(".faq-item").forEach(other => other.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    });
  }

  // Contact Form & Direct Email
  function setupContact() {
    const form = document.getElementById("quick-contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("quick-contact-email");
      const emailVal = input ? input.value.trim() : "";
      if (!emailVal) return;

      playCinematicChime();
      showToast(`Thank you! Opening email client to contact ${data.profile.email}...`, 4000);

      setTimeout(() => {
        window.location.href = `mailto:${data.profile.email}?subject=Project Inquiry via Netfolio&body=Hi ${data.profile.name},%0D%0A%0D%0AI came across your Netflix-themed portfolio and would love to discuss a project for our team.%0D%0A%0D%0AMy Email: ${encodeURIComponent(emailVal)}`;
      }, 1000);
    });
  }

  // Helper Functions
  function getAllProjectsList() {
    const list = [];
    if (data.featuredProject) list.push(data.featuredProject);
    data.categories.forEach(cat => {
      cat.projects.forEach(p => {
        if (!list.some(existing => existing.id === p.id)) {
          list.push(p);
        }
      });
    });
    return list;
  }

  function findProjectById(id) {
    return getAllProjectsList().find(p => p.id === id);
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // Initialize all modules
  renderProfileGate();
  setupAddProfileModal();
  setupHeader();
  renderBillboard();
  renderAllRows();
  setupDetailModal();
  renderAboutSection();
  renderTestimonials();
  setupFaqs();
  setupContact();
});
