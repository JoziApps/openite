/* OpenNites — shared front-end behaviour */

const CONSENT_KEY = "opennites_consent_v1";
const GALLERY_KEY = "opennites_gallery_v1";

/* Nav toggle */
(function navToggle(){
  const btn = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if(!btn || !links) return;
  btn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

/* Modal helpers */
function openModal(backdrop){ backdrop.classList.add("open"); }
function closeModal(backdrop){ backdrop.classList.remove("open"); }
document.querySelectorAll("[data-modal-close]").forEach(el => {
  el.addEventListener("click", () => closeModal(el.closest(".modal-backdrop")));
});
document.querySelectorAll(".modal-backdrop").forEach(bd => {
  bd.addEventListener("click", (e) => { if(e.target === bd) closeModal(bd); });
});

/* Age gate */
(function ageGate(){
  const form = document.getElementById("gate-form");
  if(!form) return;

  if(localStorage.getItem(CONSENT_KEY) === "true"){
    const skip = document.getElementById("gate-returning");
    if(skip) skip.hidden = false;
    const enterAnyway = document.getElementById("gate-enter-again");
    if(enterAnyway) enterAnyway.addEventListener("click", () => window.location.href = "main.html");
  }

  const age = document.getElementById("chk-age");
  const terms = document.getElementById("chk-terms");
  const rights = document.getElementById("chk-rights");
  const submit = document.getElementById("gate-submit");

  function refresh(){
    submit.disabled = !(age.checked && terms.checked && rights.checked);
  }
  [age, terms, rights].forEach(c => c.addEventListener("change", refresh));
  refresh();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(submit.disabled) return;
    localStorage.setItem(CONSENT_KEY, "true");
    window.location.href = "main.html";
  });

  const readTermsBtn = document.getElementById("open-terms");
  const termsModal = document.getElementById("terms-modal");
  if(readTermsBtn && termsModal){
    readTermsBtn.addEventListener("click", () => openModal(termsModal));
  }
})();

/* Require consent on other pages */
(function requireConsent(){
  const isGatePage = !!document.getElementById("gate-form");
  if(isGatePage) return;
  if(localStorage.getItem(CONSENT_KEY) !== "true"){
    window.location.href = "index.html";
  }
})();

/* Q&A accordion */
function renderQna(){
  const list = document.getElementById("qna-list");
  if(!list || typeof QNA === "undefined") return;
  list.innerHTML = QNA.map((item, i) => `
    <div class="accordion-item">
      <button class="accordion-trigger" aria-expanded="false" data-index="${i}">
        <span>${item.q}</span><span class="icon">+</span>
      </button>
      <div class="accordion-panel"><p>${item.a}</p></div>
    </div>
  `).join("");

  list.querySelectorAll(".accordion-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      const panel = btn.parentElement.querySelector(".accordion-panel");
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      btn.querySelector(".icon").textContent = open ? "+" : "\u2212";
      panel.style.maxHeight = open ? "0px" : panel.scrollHeight + "px";
    });
  });
}

/* Activities grid + modal slideshow */
function renderActivities(){
  const grid = document.getElementById("activity-grid");
  if(!grid || typeof ACTIVITIES === "undefined") return;

  grid.innerHTML = ACTIVITIES.map(a => `
    <button class="stub" data-id="${a.id}">
      <img src="${a.photos[0]}" alt="${a.name}">
      <div class="stub-body">
        <span class="stub-tag">${a.tag}</span>
        <h3>${a.name}</h3>
        <p>${a.blurb}</p>
      </div>
    </button>
  `).join("");

  let current = null;
  let photoIndex = 0;
  const modal = document.getElementById("activity-modal");
  const amName = document.getElementById("am-name");
  const amTag = document.getElementById("am-tag");
  const amBlurb = document.getElementById("am-blurb");
  const amSource = document.getElementById("am-source");
  const amPhoto = document.getElementById("am-photo");
  const amCounter = document.getElementById("am-counter");

  function showPhoto(){
    if(!current) return;
    amPhoto.src = current.photos[photoIndex];
    amCounter.textContent = `${photoIndex + 1} / ${current.photos.length}`;
  }

  grid.querySelectorAll(".stub").forEach(btn => {
    btn.addEventListener("click", () => {
      current = ACTIVITIES.find(a => a.id === btn.dataset.id);
      if(!current) return;
      photoIndex = 0;
      amName.textContent = current.name;
      amTag.textContent = current.tag;
      amBlurb.textContent = current.blurb;
      amSource.textContent = current.source;
      showPhoto();
      openModal(modal);
    });
  });

  document.getElementById("am-prev")?.addEventListener("click", () => {
    if(!current) return;
    photoIndex = (photoIndex - 1 + current.photos.length) % current.photos.length;
    showPhoto();
  });
  document.getElementById("am-next")?.addEventListener("click", () => {
    if(!current) return;
    photoIndex = (photoIndex + 1) % current.photos.length;
    showPhoto();
  });
}

/* Gallery */
function loadGallery(){
  let items = [];
  try { items = JSON.parse(localStorage.getItem(GALLERY_KEY) || "[]"); } catch(e){}
  if(!items.length && typeof GALLERY_SEED !== "undefined") items = GALLERY_SEED.slice();
  return items;
}

function renderGallery(){
  const grid = document.getElementById("gallery-grid");
  if(!grid) return;
  const items = loadGallery();
  grid.innerHTML = items.map(g => `
    <div class="gallery-item">
      <img src="${g.img}" alt="">
      <div class="cap">
        <div class="who">${g.who || "Anonymous"}</div>
        <div>${g.caption || ""}</div>
      </div>
    </div>
  `).join("");
}

(function galleryForm(){
  const openBtn = document.getElementById("open-gallery-form");
  const modal = document.getElementById("gallery-modal");
  const form = document.getElementById("gallery-form");
  if(!openBtn || !modal || !form) return;

  openBtn.addEventListener("click", () => openModal(modal));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const who = document.getElementById("g-who").value.trim() || "Anonymous";
    const caption = document.getElementById("g-caption").value.trim();
    const img = document.getElementById("g-img").value.trim();
    if(!caption || !img) return;

    const items = loadGallery();
    items.unshift({ who, caption, img });
    localStorage.setItem(GALLERY_KEY, JSON.stringify(items.slice(0, 40)));
    renderGallery();
    form.reset();
    closeModal(modal);
  });
})();

/* Live feed */
function renderLiveFeed(){
  const el = document.getElementById("live-feed");
  if(!el || typeof LIVE_FEED_SEED === "undefined") return;
  let idx = 0;
  function tick(){
    const item = LIVE_FEED_SEED[idx % LIVE_FEED_SEED.length];
    const node = document.createElement("div");
    node.className = "feed-item";
    node.innerHTML = `<strong>${item.who}</strong> <span class="muted">· ${item.when}</span><br>${item.text}`;
    el.prepend(node);
    while(el.children.length > 6) el.removeChild(el.lastChild);
    idx++;
  }
  tick();
  setInterval(tick, 4500);
}

/* Contact form */
(function contactForm(){
  const form = document.getElementById("contact-form");
  if(!form) return;

  const anon = document.getElementById("c-anon");
  const identity = document.getElementById("identity-fields");
  if(anon && identity){
    anon.addEventListener("change", () => {
      identity.style.display = anon.checked ? "none" : "block";
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // TODO(backend): POST to serverless function or email service
    const success = document.getElementById("contact-success");
    if(success) success.style.display = "block";
    form.reset();
    if(identity) identity.style.display = "block";
  });
})();

/* Copy buttons on donate */
document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.getAttribute("data-copy");
    navigator.clipboard?.writeText(text).then(() => {
      const old = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(() => btn.textContent = old, 1500);
    }).catch(() => {});
  });
});

/* Init page pieces */
renderQna();
renderActivities();
renderGallery();
renderLiveFeed();
