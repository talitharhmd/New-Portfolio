/* ==========================================================================
   script.js — logika interaktif portofolio
   (tema, bahasa, hero, filter proyek, modal, lightbox sertifikat, form kontak)
   Konten ada di data.js.
   ========================================================================== */
(() => {
  "use strict";

  /* ---------- Util ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* diabaikan */ } }
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const plain = (s) => String(s).replace(/\*\*/g, "");
  // proyek di "More projects": istilah penting untuk role data otomatis dibuat tebal (yang sudah **tebal** dilewati)
  const DATA_TERMS = [
    "Exploratory Data Analysis", "Analisis eksploratif", "Exploratory analysis", "Linear Support Vector Machine", "Support Vector Machine",
    "Multinomial Naïve Bayes", "Naïve Bayes", "Naive Bayes", "Automated Essay Scoring", "Silhouette Score", "Elbow Method", "Cosine Similarity",
    "Looker Studio", "Power BI", "Data Warehouse", "Kimball", "Pentaho", "ETL", "EDA", "SVM", "TF-IDF", "Word2Vec", "FastText", "IndoBERT", "K-Means",
    "sentiment classification", "sentiment analysis", "klasifikasi sentimen", "analisis sentimen", "clustering", "classifiers", "model klasifikasi",
    "data cleaning", "data preprocessing", "text preprocessing", "preprocessing", "web scraping", "REST API", "Flask", "MLOps", "outliers", "outlier",
    "data integration", "data quality", "kualitas data", "data visualization", "visualisasi data", "trend analysis", "analisis tren",
    "recommendation system", "recommender", "sistem rekomendasi", "data-driven", "berbasis data", "data modeling", "feature extraction"
  ].sort((a, b) => b.length - a.length);
  const DATA_RE = new RegExp("(^|[^\\w-])(" + DATA_TERMS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")(?![\\w-])", "gi");
  const boldData = (s) => String(s).split(/(\*\*.+?\*\*)/g).map((x) => (/^\*\*.+\*\*$/.test(x) ? x : x.replace(DATA_RE, "$1**$2**"))).join("");
  const icon = (id) => `<svg class="ic" aria-hidden="true"><use href="#i-${id}"/></svg>`;

  /* ---------- Bahasa ---------- */
  let lang = (() => {
    const saved = store.get("lang", "");
    if (saved === "en" || saved === "id") return saved;
    return (navigator.language || "en").toLowerCase().startsWith("id") ? "id" : "en";
  })();
  const isL = (v) => v && typeof v === "object" && !Array.isArray(v) && "en" in v;
  const T = (v) => (isL(v) ? (v[lang] !== undefined ? v[lang] : v.en) : v);
  const ui = (k) => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;
  const TITLES = {
    en: "Talitha Rahmadewati Witanto | Data Analyst & Data Science Portfolio",
    id: "Talitha Rahmadewati Witanto | Portofolio Data Analyst & Data Science"
  };

  /* ---------- Gambar dengan fallback ---------- */
  const EXTS = ["png", "jpg", "jpeg", "webp"];
  function srcList(path) {
    if (!path) return [];
    const m = path.match(/^(.*)\.(png|jpe?g|webp)$/i);
    const base = m ? m[1] : path;
    const out = m ? [path] : [];
    EXTS.forEach((e) => { const c = `${base}.${e}`; if (!out.includes(c)) out.push(c); });
    return out;
  }
  function loadImg(img, path, onFail) {
    const list = srcList(path);
    let i = 0;
    if (!list.length) { if (onFail) onFail(); return; }
    img.addEventListener("error", () => {
      i += 1;
      if (i < list.length) img.src = list[i];
      else if (onFail) onFail();
    });
    img.src = list[0];
  }

  const PH = {
    dashboard: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="48" height="44" rx="8"/><path d="M20 44V32M32 44V22M44 44V28"/></svg>',
    viz: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="22"/><path d="M32 10v22h22M32 32L16.5 47.5"/></svg>',
    ml: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="14" r="5"/><circle cx="14" cy="50" r="5"/><circle cx="50" cy="32" r="5"/><circle cx="32" cy="32" r="5"/><path d="M18 17l10 12M18 47l10-12M37 32h8"/></svg>',
    cert: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="26" r="14"/><path d="M24 38l-4 18 12-7 12 7-4-18"/></svg>'
  };
  const kindOf = (p) => (p.cats.includes("viz") ? "viz" : p.cats.includes("ml") && !p.cats.includes("dashboard") ? "ml" : "dashboard");

  const probe = (src) => new Promise((res) => { const im = new Image(); im.onload = () => res(src); im.onerror = () => res(""); im.src = src; });
  async function findPages(path) {
    const m = String(path || "").match(/^(.*?)(?:\.(png|jpe?g|webp))?$/i), base = m[1];
    const out = [];
    for (let n = 1; n <= 8; n++) {
      const b = n === 1 ? base : `${base}-${n}`;
      const hit = await resolveSrc(b);
      if (!hit) { if (n === 1) continue; break; }
      out.push(hit);
    }
    return out;
  }
  // cari file gambar yang benar-benar ada (png/jpg/jpeg/webp), kembalikan "" bila tidak ada
  async function resolveSrc(path) {
    for (const src of srcList(path)) { const hit = await probe(src); if (hit) return hit; }
    return "";
  }
  // dashboard / proyek dengan lebih dari satu halaman (lihat "pages" di data.js)
  // tanpa tanda titik tengah (·) di kartu: pemisah diganti koma
  const noDots = (v) => String(v || "").replace(/\s*·\s*/g, ", ");
  // logo organisasi / penyelenggara project (jika file belum ada, tampil inisial)
  const logoHTML = (p) => `<span class="orglogo orglogo--sm" data-logo="${esc(p.logo || "")}"><img alt="" decoding="async"><span aria-hidden="true">${esc(p.mono || (/\s/.test(p.org.trim()) ? initials(p.org) : p.org.slice(0, 4).toUpperCase()))}</span></span>`;
  // baris di sebelah logo: nama instansi (tidak tebal) + keterangan kecil di bawahnya (acara / periode / hasil)
  const cardSub = (p) => (p.sub ? T(p.sub) : [p.ctx ? T(p.ctx) : "", p.period ? T(p.period) : ""].filter(Boolean).join(" | "));
  const whoLine = (p) => `<div class="who">${logoHTML(p)}<div class="who__t"><span class="who__org">${esc(p.org)}</span>${cardSub(p) ? `<span class="who__sub">${esc(cardSub(p))}</span>` : ""}</div></div>`;
  // "PT PAL Indonesia | Sep 2025 – Jan 2026"
  const metaLine = (p) => [p.org, p.ctx ? T(p.ctx) : "", p.period ? T(p.period) : ""].filter(Boolean).join(" | ");
  function hydrateLogos(root) {
    $$(".orglogo[data-logo]", root).forEach((el) => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      const path = el.dataset.logo;
      if (!path) { el.classList.add("no-img"); return; }
      loadImg($("img", el), path, () => el.classList.add("no-img"));
    });
  }
  const hasPages = (p) => Array.isArray(p.pages) && p.pages.length > 1;
  const coverOf = (p) => (p.pages && p.pages[0] ? p.pages[0].src : p.img || "");
  const viewLabel = (p) => (hasPages(p) ? ui("btn.viewpages").replace("{n}", p.pages.length) : ui("btn.viewproj"));
  const pagesTag = (p) => (hasPages(p) ? `<span class="pgbadge">${icon("layers")}${p.pages.length} ${esc(ui("m.pages"))}</span>` : "");
  const linkBtn = (url, label, ic, cls = "btn--ghost btn--sm", activeOnly) => {
    if (url) return `<a class="btn ${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${icon(ic)}${esc(label)}</a>`;
    return CONFIG.showEmptyLinks && !activeOnly ? `<span class="btn ${cls} is-off" aria-disabled="true" title="${esc(ui("btn.soon"))}">${icon(ic)}${esc(label)}</span>` : "";
  };
  const zoomTag = (key, txt) => `<span class="cert__zoom">${icon("zoom")}${esc(txt || ui(key))}</span>`;
  const DOC_TYPES = { slides: ["btn.slides", "external"], github: ["btn.github", "github"], linkedin: ["btn.linkedin", "linkedin"] };
  function docBtn(p, cls, activeOnly) {
    const l = p.links || {};
    const k = (p.doc && p.doc.type) || Object.keys(DOC_TYPES).find((x) => l[x]) || "";
    const url = (p.doc && p.doc.url) || (k && l[k]) || "";
    return linkBtn(url, k ? ui(DOC_TYPES[k][0]) : ui("m.docs"), k ? DOC_TYPES[k][1] : "external", cls || "btn--ghost btn--sm", activeOnly);
  }
  const initialsOf = (n) => String(n).trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase();
  const teamSize = (t) => t.size || ((t.members || []).length ? t.members.length + 1 : 0);
  const teamTag = (p) => (p.team ? `<span class="tag tag--team">${icon("users")}${esc(ui("team.tag"))}</span>` : "");
  function teamLine(p) {
    if (!p.team) return "";
    const ms = p.team.members || [], size = teamSize(p.team);
    return `<div class="teamline">${ms.length ? `<span class="avs" aria-hidden="true">${ms.slice(0, 4).map((m) => `<i>${esc(initialsOf(m.n))}</i>`).join("")}</span>` : icon("users")}<span>${size ? esc(ui("team.of").replace("{n}", size)) : esc(ui("team.tag"))}</span></div>`;
  }
  function teamPanel(p) {
    if (!p.team) return "";
    const t = p.team, ms = t.members || [], size = teamSize(t);
    return `<section class="team">
      <div class="team__head"><span class="team__ic">${icon("users")}</span><div><h3>${esc(ui("team.title"))}${size ? `<small>${esc(ui("team.of").replace("{n}", size))}</small>` : ""}</h3><p>${esc(ui("team.intro"))}</p></div></div>
      ${t.role ? `<p class="team__role"><strong>${esc(ui("team.role"))}:</strong> ${rich(T(t.role))}</p>` : ""}
      ${ms.length ? `<ul class="team__m" aria-label="${esc(ui("team.members"))}">${ms.map((m) => {
        const inner = `<i>${esc(initialsOf(m.n))}</i><span>${esc(m.n)}${m.r ? `<small>${esc(T(m.r))}</small>` : ""}</span>`;
        return `<li>${m.u ? `<a href="${esc(m.u)}" target="_blank" rel="noopener noreferrer">${inner}</a>` : `<span class="team__p">${inner}</span>`}</li>`;
      }).join("")}</ul>` : ""}
    </section>`;
  }

  function coverHTML(path, kind, alt, extra) {
    return `<div class="cover" data-img="${esc(path || "")}">
      <img alt="${esc(alt)}" loading="lazy" decoding="async">
      <div class="cover__ph">${PH[kind] || PH.dashboard}<span>${esc(alt)}</span></div>
      ${extra || ""}
    </div>`;
  }
  function hydrate(root) {
    $$(".cover[data-img]", root).forEach((c) => {
      if (c.dataset.done) return;
      c.dataset.done = "1";
      loadImg($("img", c), c.dataset.img, () => c.classList.add("is-fallback"));
    });
  }

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-on"), 2200);
  }

  /* ---------- Tema ---------- */
  function setTheme(t, animate) {
    const root = document.documentElement;
    if (animate) { root.classList.add("theming"); setTimeout(() => root.classList.remove("theming"), 450); }
    root.setAttribute("data-theme", t);
    store.set("theme", t);
    const m = $('meta[name="theme-color"]');
    if (m) m.setAttribute("content", t === "light" ? "#f6f8fe" : "#0a0e17");
  }
  $("#themeBtn").addEventListener("click", () => {
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
  });

  /* ---------- i18n statis ---------- */
  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = TITLES[lang];
    $$("[data-i18n]").forEach((el) => { el.innerHTML = rich(ui(el.dataset.i18n)); });
    $$("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":");
        if (attr && key) el.setAttribute(attr.trim(), ui(key.trim()));
      });
    });
    $$(".seg [data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  }

  /* ---------- Hero ---------- */
  function setupHero() {
    // foto
    const portrait = $(".portrait");
    loadImg($("#photo"), CONFIG.photo, () => portrait.classList.add("no-img"));

    // logo kampus (fallback: monogram)
    const logo = $("#eduLogo");
    loadImg($("#eduLogoImg"), CONFIG.campusLogo, () => logo.classList.add("no-img"));

    // jumlah dinamis
    $("#cntProjects").dataset.count = String(PROJECTS.length);
    $("#cntCerts").dataset.count = String(CERTS.length);

    // tombol unduh (disembunyikan bila file belum ada di server)
    [["#dlCv", CONFIG.files.cv], ["#dlPf", CONFIG.files.portfolio]].forEach(([sel, href]) => {
      const a = $(sel);
      if (!href) { a.hidden = true; return; }
      a.href = href;
      if (/^https?:/.test(location.protocol)) {
        fetch(href, { method: "HEAD" }).then((r) => { if (!r.ok) a.hidden = true; }).catch(() => {});
      }
    });

    // efek mengetik
    const el = $("#typed");
    const roles = CONFIG.roles;
    if (reduceMotion) { el.textContent = roles.join(" · "); return; }
    let ri = 0, ci = 0, del = false;
    (function tick() {
      const word = roles[ri];
      if (!del) {
        ci += 1;
        el.textContent = word.slice(0, ci);
        if (ci === word.length) { del = true; return setTimeout(tick, 1700); }
        return setTimeout(tick, 70);
      }
      ci -= 1;
      el.textContent = word.slice(0, ci);
      if (ci === 0) { del = false; ri = (ri + 1) % roles.length; return setTimeout(tick, 320); }
      return setTimeout(tick, 34);
    })();
  }

  function fmtNum(v, dec) {
    const s = dec ? v.toFixed(dec) : String(Math.round(v));
    return lang === "id" ? s.replace(".", ",") : s;
  }
  function runCounters() {
    const els = $$("[data-count]");
    const play = (el) => {
      if (el.id === "eduGpa") { const bar = $("#gpaBar"); if (bar) bar.style.width = (parseFloat(el.dataset.count) / 4 * 100) + "%"; }
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.dec || "0", 10);
      if (reduceMotion) { el.textContent = fmtNum(target, dec); return; }
      const t0 = performance.now(), dur = 1100;
      (function step(now) {
        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmtNum(target * e, dec);
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    };
    if (!("IntersectionObserver" in window)) { els.forEach((el) => { el.textContent = fmtNum(parseFloat(el.dataset.count), parseInt(el.dataset.dec || "0", 10)); }); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { play(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.6 });
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Sosial ---------- */
  const SOCIALS = [
    ["linkedin", "LinkedIn"], ["github", "GitHub"], ["medium", "Medium"], ["instagram", "Instagram"]
  ];
  function renderSocial() {
    const html = SOCIALS.filter(([k]) => CONFIG.social[k]).map(([k, label]) =>
      `<li><a href="${esc(CONFIG.social[k])}" target="_blank" rel="noopener noreferrer" aria-label="${label}">${icon(k)}</a></li>`).join("");
    $("#heroSocial").innerHTML = html;
    $("#contactSocial").innerHTML = html;
  }

  /* ---------- Pendidikan ---------- */
  function renderEdu() {
    $("#eduSchool").textContent = EDUCATION.school;
    $("#eduDegree").textContent = T(EDUCATION.degree);
    $("#eduYears").textContent = EDUCATION.years;
    $("#eduPlace").textContent = T(CONFIG.location);
    $("#eduCourses").innerHTML = EDUCATION.courses.map((c) => `<li class="chip">${esc(T(c))}</li>`).join("");
    $("#eduHl").innerHTML = EDUCATION.highlights.map((h) => `<li><strong>${esc(T(h.t))}.</strong> ${rich(T(h.d))}</li>`).join("");
  }

  /* ---------- Tools & skills ---------- */
  let activeTool = null;
  const mono = (n, c) => `<span class="mono" style="background:#${c}">${esc(n.replace(/[^A-Za-z]/g, "").slice(0, 2))}</span>`;

  function renderTools() {
    $("#tools").innerHTML = TOOLS.map((g) => `
      <div class="tgroup">
        <h3>${esc(T(g.group))}</h3>
        <div class="ticons">${g.items.map((t) => `
          <button class="tool${activeTool === t.n ? " is-on" : ""}" type="button" data-tool="${esc(t.n)}" aria-pressed="${activeTool === t.n}">
            <img src="https://cdn.simpleicons.org/${t.slug}/${t.c}" alt="" width="30" height="30" loading="lazy" data-n="${esc(t.n)}" data-c="${t.c}">
            <span class="n">${esc(t.n)}</span>
          </button>`).join("")}</div>
      </div>`).join("");
    $$(".tool img", $("#tools")).forEach((img) => {
      img.addEventListener("error", () => {
        const tmp = document.createElement("div");
        tmp.innerHTML = mono(img.dataset.n, img.dataset.c);
        img.replaceWith(tmp.firstChild);
      }, { once: true });
    });
    $("#hardSkills").innerHTML = HARD_SKILLS.map((s) => `<li class="chip">${esc(T(s))}</li>`).join("");
    $("#softSkills").innerHTML = SOFT_SKILLS.map((s) => `<li class="chip">${esc(T(s))}</li>`).join("");
    renderUsedIn();
  }

  function renderUsedIn() {
    const box = $("#usedIn");
    if (!activeTool) { box.hidden = true; return; }
    let names = [activeTool];
    TOOLS.forEach((g) => g.items.forEach((t) => { if (t.n === activeTool && t.k) names = names.concat(t.k); }));
    const hits = PROJECTS.filter((p) => p.tools.some((t) => names.includes(t)));
    box.hidden = false;
    box.innerHTML = hits.length
      ? `<strong>${esc(activeTool)}: ${esc(ui("skills.usedin"))}</strong>${hits.map((p) =>
          `<button class="chip chip--btn" type="button" data-open="${p.id}">${esc(T(p.title))}</button>`).join("")}`
      : `<strong>${esc(activeTool)}</strong><span>${esc(ui("skills.none"))}</span>`;
  }

  $("#tools").addEventListener("click", (e) => {
    const b = e.target.closest(".tool");
    if (!b) return;
    activeTool = activeTool === b.dataset.tool ? null : b.dataset.tool;
    $$(".tool", $("#tools")).forEach((x) => {
      const on = x.dataset.tool === activeTool;
      x.classList.toggle("is-on", on);
      x.setAttribute("aria-pressed", String(on));
    });
    renderUsedIn();
  });

  /* ---------- Pengalaman ---------- */
  let expTab = "professional";
  const initials = (n) => String(n).split(/\s+/).filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const metricsHTML = (ms) => (ms && ms.length)
    ? `<div class="metrics">${ms.map((m) => `<div class="metric"><strong>${esc(m.v)}</strong><span>${esc(T(m.l))}</span></div>`).join("")}</div>` : "";

  // dokumentasi tiap pengalaman: "photos" boleh berisi path saja atau { src, cap }
  const docsOf = (x) => (x.photos || []).map((d) => (typeof d === "string" ? { src: d } : d));
  function docsHTML(x, i) {
    const docs = docsOf(x);
    return `<div class="tl__docs" data-i="${i}">
            <p class="docs__head">${icon("image")}<span>${esc(ui("exp.docs"))}</span><small>${docs.length}</small></p>
            <div class="docs__grid">${docs.map((d, k) => `
              <button class="doc${k === 0 ? " doc--lead" : ""}" type="button" data-k="${k}" aria-label="${esc(ui("exp.docs.open"))}: ${esc(T(x.role))}${d.cap ? " – " + esc(T(d.cap)) : ""}">
                <img alt="" loading="lazy" decoding="async"${d.pos ? ` style="object-position:${esc(d.pos)}"` : ""}>
                <span class="shot__ph">${PH.viz}<small>${esc(d.cap ? T(d.cap) : ui("exp.nophoto"))}</small></span>
                ${d.cap ? `<span class="doc__cap">${esc(T(d.cap))}</span>` : ""}
                <span class="doc__zoom">${icon("zoom")}</span>
              </button>`).join("")}</div>
          </div>`;
  }
  function renderExperience() {
    const list = EXPERIENCE[expTab];
    $("#timeline").innerHTML = list.map((x, i) => {
      const doc = x.doc || CONFIG.social.linkedin;
      return `
      <li class="tl">
        <div class="tl__card${x.photos ? " has-photos" : ""}">
          <div class="tl__main">
            <div class="tl__head">
              <div class="orglogo" data-logo="${esc(x.logo || "")}"><img alt="${esc(x.org)}" decoding="async"><span aria-hidden="true">${esc(x.mono || initials(x.org))}</span></div>
              <div class="tl__id">
                <div class="tl__top">
                  <h3 class="tl__role">${esc(T(x.role))}</h3>
                  <span class="tl__period">${esc(T(x.period))}</span>
                </div>
                <div class="tl__orgrow">
                  <p class="tl__org">${esc(x.org)}</p>
                  ${x.loc ? `<span class="tl__loc">${icon("pin")}${esc(T(x.loc))}</span>` : ""}
                </div>
                ${x.unit ? `<p class="tl__unit">${esc(T(x.unit))}</p>` : ""}
                ${x.kind ? `<div class="tl__tags"><span class="tag tag--gold">${esc(T(x.kind))}</span></div>` : ""}
              </div>
            </div>
            ${metricsHTML(x.metrics)}
            <ul class="bul">${T(x.bullets).map((b) => `<li>${rich(b)}</li>`).join("")}</ul>
            ${x.projects ? `<div class="tl__rel"><span>${esc(ui("exp.related"))}:</span>${x.projects.map((id) => byId(id)).filter(Boolean).map((p) => `<button class="chip chip--btn" type="button" data-open="${p.id}">${esc(T(p.title))}</button>`).join("")}</div>` : ""}
            ${doc ? `<a class="doclink" href="${esc(doc)}" target="_blank" rel="noopener noreferrer">${icon("linkedin")}<span>${esc(ui("exp.doc"))}</span>${icon("external")}</a>` : ""}
          </div>
          ${docsOf(x).length ? docsHTML(x, i) : ""}
        </div>
      </li>`;
    }).join("");

    hydrateLogos($("#timeline"));
    $$(".tl__docs", $("#timeline")).forEach((box) => {
      const docs = docsOf(list[+box.dataset.i]);
      $$(".doc", box).forEach((btn, k) => {
        const img = $("img", btn);
        img.addEventListener("load", () => btn.classList.add("is-ok"));
        loadImg(img, docs[k].src, () => btn.classList.add("is-empty"));
      });
    });
  }

  // klik dokumentasi: buka penampil, bisa digeser antar gambar yang ada
  $("#timeline").addEventListener("click", (e) => {
    const btn = e.target.closest(".doc.is-ok");
    if (!btn) return;
    const box = btn.closest(".tl__docs");
    const x = EXPERIENCE[expTab][+box.dataset.i], docs = docsOf(x);
    const live = $$(".doc.is-ok", box);
    const doc = x.doc || CONFIG.social.linkedin;
    const acts = doc ? linkBtn(doc, ui("btn.linkedin"), "linkedin", "btn--dark btn--sm", true) : "";
    openViewer(live.map((b) => {
      const d = docs[+b.dataset.k], im = $("img", b);
      return { src: im.currentSrc || im.src, kicker: `${x.org}, ${T(x.period)}`, title: T(x.role), caption: d.cap ? T(d.cap) : "", acts, thumbs: live.length > 1 };
    }), Math.max(0, live.indexOf(btn)));
  });

  $$(".tab").forEach((b) => b.addEventListener("click", () => {
    expTab = b.dataset.exp;
    $$(".tab").forEach((t) => { const on = t === b; t.classList.toggle("is-on", on); t.setAttribute("aria-selected", String(on)); });
    renderExperience();
  }));

  /* ---------- Proyek ---------- */
  const byId = (id) => PROJECTS.find((p) => p.id === id);
  const toolChips = (arr, max) => arr.slice(0, max || arr.length).map((t) => `<li class="chip">${esc(t)}</li>`).join("");

  function renderFeatured() {
    $("#featured").innerHTML = PROJECTS.filter((p) => p.featured).map((p) => `
      <article class="feat">
        <button class="feat__media proj__img" type="button" data-view="${p.id}" aria-label="${esc(ui("btn.viewproj"))}: ${esc(T(p.title))}">
          ${coverHTML(coverOf(p), kindOf(p), T(p.title), pagesTag(p) + teamTag(p))}${zoomTag("btn.viewproj", viewLabel(p))}
        </button>
        <div>
          <div class="feat__meta">
            <span class="tag tag--blue">${esc(T(p.type))}</span>
            <span>${esc(metaLine(p))}</span>
            ${logoHTML(p)}
          </div>
          <h3>${esc(T(p.title))}</h3>
          <p>${rich(T(p.summary))}</p>
          ${metricsHTML(p.metrics)}
          ${teamLine(p)}
          <ul class="chips">${toolChips(p.tools)}</ul>
          <div class="feat__act">
            <button class="btn btn--primary btn--sm" type="button" data-open="${p.id}">${esc(ui("btn.details"))}</button>
            ${docBtn(p)}
            ${p.links.live ? `<a class="btn btn--ghost btn--sm" href="${esc(p.links.live)}" target="_blank" rel="noopener noreferrer">${icon("external")}${esc(ui("btn.live"))}</a>` : ""}
            ${p.confidential ? `<span class="tag tag--red">${icon("lock")}${esc(ui("conf"))}</span>` : ""}
          </div>
        </div>
      </article>`).join("");
    hydrate($("#featured"));
    hydrateLogos($("#featured"));
  }

  /* ---------- Pager (gaya portofolio contoh) ---------- */
  const PAGE_SIZE = 6;
  function pagerHTML(page, pages, from, to, total) {
    const nums = Array.from({ length: pages }, (_, i) => i + 1).map((n) => `<button type="button" class="pg${n === page ? " is-on" : ""}" data-page="${n}" aria-label="${n}"${n === page ? ' aria-current="page"' : ""}>${n}</button>`).join("");
    return `<span class="pager__info">${esc(ui("showing").replace("{a}", from).replace("{b}", to).replace("{t}", total))}</span>
      ${pages > 1 ? `<button type="button" class="pg pg--arrow" data-step="-1" aria-label="${esc(ui("pg.prev"))}"${page === 1 ? " disabled" : ""}>${icon("left")}</button>${nums}<button type="button" class="pg pg--arrow pg--next" data-step="1" aria-label="${esc(ui("pg.next"))}"${page === pages ? " disabled" : ""}>${icon("left")}</button>` : ""}`;
  }
  const pageSlice = (arr, page) => arr.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pageCount = (n) => Math.max(1, Math.ceil(n / PAGE_SIZE));

  let projFilter = "all", projPage = 1;
  const PROJ_FILTERS = ["all", "dashboard", "viz", "ml"];
  const morePool = () => PROJECTS.filter((p) => !p.featured);

  function renderProjects() {
    const pool = morePool();
    $("#projFilters").innerHTML = PROJ_FILTERS.map((f) => {
      const n = f === "all" ? pool.length : pool.filter((p) => p.cats.includes(f)).length;
      return `<button class="fchip${projFilter === f ? " is-on" : ""}" type="button" data-f="${f}" aria-pressed="${projFilter === f}">${esc(ui("f." + f))}<small>${n}</small></button>`;
    }).join("");

    const list = projFilter === "all" ? pool : pool.filter((p) => p.cats.includes(projFilter));
    const pages = pageCount(list.length);
    projPage = Math.min(projPage, pages);
    const shown = pageSlice(list, projPage);
    $("#projPager").innerHTML = pagerHTML(projPage, pages, list.length ? (projPage - 1) * PAGE_SIZE + 1 : 0, (projPage - 1) * PAGE_SIZE + shown.length, list.length);
    $("#projGrid").innerHTML = shown.map((p, i) => `
      <article class="card" style="animation-delay:${Math.min(i, 8) * 40}ms">
        <button class="proj__img" type="button" data-view="${p.id}" aria-label="${esc(ui("btn.viewproj"))}: ${esc(T(p.title))}">
          ${coverHTML(coverOf(p), kindOf(p), T(p.title), `<span class="tag tag--gold">${esc(T(p.type))}</span>${pagesTag(p)}${teamTag(p)}`)}${zoomTag("btn.viewproj", viewLabel(p))}
        </button>
        <div class="card__body">
          ${whoLine(p)}
          <h3><button class="card__hit" type="button" data-open="${p.id}">${esc(T(p.title))}</button></h3>
          <p class="card__sum">${rich(boldData(T(p.summary)))}</p>
          ${teamLine(p)}
          <ul class="chips">${toolChips(p.tools, 4)}</ul>
          <div class="card__acts">
            <button class="btn btn--primary btn--sm card__more" type="button" data-open="${p.id}">${esc(ui("btn.details"))}${icon("chevron")}</button>
            ${docBtn(p)}
          </div>
        </div>
      </article>`).join("");
    hydrate($("#projGrid"));
    hydrateLogos($("#projGrid"));
  }

  $("#projFilters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-f]");
    if (!b) return;
    projFilter = b.dataset.f; projPage = 1;
    renderProjects();
  });
  $("#projPager").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b || b.disabled) return;
    if (b.dataset.page) projPage = +b.dataset.page; else if (b.dataset.step) projPage += +b.dataset.step; else return;
    renderProjects();
  });

  /* ---------- Sertifikat ---------- */
  let certFilter = "all", certPage = 1;
  const CERT_FILTERS = ["all", "license", "award", "activity"];
  const CERT_ORDER = { license: 0, award: 1, activity: 2 };
  const CERTS_SORTED = CERTS.map((c, i) => [c, i]).sort((a, b) => (CERT_ORDER[a[0].cat] - CERT_ORDER[b[0].cat]) || (a[1] - b[1])).map((x) => x[0]);
  const certList = () => (certFilter === "all" ? CERTS_SORTED : CERTS_SORTED.filter((c) => c.cat === certFilter));
  const certTag = (c) => ({ award: "tag--gold", activity: "tag--blue", license: "tag--red" }[c.cat]);
  // sertifikat dengan beberapa gambar (pages): cover = gambar pertama + badge jumlah
  const certCover = (c) => (c.pages && c.pages[0] ? c.pages[0].src : "img/certs/" + c.id);
  const certBadge = (c) => (c.pages && c.pages.length > 1 ? `<span class="pgbadge pgbadge--r">${icon("layers")}${c.pages.length} ${esc(ui("cert.n"))}</span>` : "");

  function renderCerts() {
    $("#certFilters").innerHTML = CERT_FILTERS.map((f) => {
      const n = f === "all" ? CERTS.length : CERTS.filter((c) => c.cat === f).length;
      return `<button class="fchip${certFilter === f ? " is-on" : ""}" type="button" data-f="${f}" aria-pressed="${certFilter === f}">${esc(ui("f." + f))}<small>${n}</small></button>`;
    }).join("");

    const all = certList();
    const pages = pageCount(all.length);
    certPage = Math.min(certPage, pages);
    const shown = pageSlice(all, certPage);
    $("#certPager").innerHTML = pagerHTML(certPage, pages, all.length ? (certPage - 1) * PAGE_SIZE + 1 : 0, (certPage - 1) * PAGE_SIZE + shown.length, all.length);
    $("#certGrid").innerHTML = shown.map((c, i) => `
      <article class="card card--cert" style="animation-delay:${Math.min(i, 8) * 40}ms">
        <button class="proj__img cert__img" type="button" data-cert="${c.id}" aria-label="${esc(ui("btn.inspect"))}: ${esc(T(c.title))}">
          ${coverHTML(certCover(c), "cert", T(c.title), `<span class="tag ${certTag(c)}">${esc(ui("f." + c.cat))}</span>${c.field ? `<span class="field-badge">${esc(T(c.field))}</span>` : ""}${certBadge(c)}`)}${zoomTag("btn.inspect")}
        </button>
        <div class="card__body">
          <p class="issuer">${esc(noDots(c.issuer))}</p>
          <h3><button class="card__hit" type="button" data-cert="${c.id}">${esc(T(c.title))}</button></h3>
          ${c.date ? `<div class="card__meta"><span>${esc(ui("cert.done"))}: ${esc(T(c.date))}</span></div>` : ""}
          <button class="btn btn--dark btn--sm card__btn" type="button" data-cert="${c.id}">${icon("external")}${esc(ui("btn.viewcert"))}</button>
        </div>
      </article>`).join("");
    hydrate($("#certGrid"));
    $$("#certGrid .cover img").forEach((img) => img.addEventListener("load", () => {
      if (img.naturalHeight > img.naturalWidth * 1.1) img.closest(".cover").classList.add("is-portrait");
    }));
  }

  $("#certFilters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-f]");
    if (!b) return;
    certFilter = b.dataset.f; certPage = 1;
    renderCerts();
  });
  $("#certPager").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b || b.disabled) return;
    if (b.dataset.page) certPage = +b.dataset.page; else if (b.dataset.step) certPage += +b.dataset.step; else return;
    renderCerts();
  });

  /* ---------- Blog ---------- */
  function postHTML(b) {
    const url = b.url || "";
    const tag = url ? "a" : "div";
    const attrs = url ? `href="${esc(url)}" target="_blank" rel="noopener noreferrer"` : "";
    if (b.soon) {
      return `<div class="post post--soon">
        <div class="post__art no-img"><span aria-hidden="true">${icon("clock")}</span></div>
        <div class="post__body">
          <span class="tag tag--gold">${esc(ui("blog.comingsoon"))}</span>
          <h3>${esc(T(b.title))}</h3>
          <p class="post__desc">${esc(T(b.desc))}</p>
        </div>
      </div>`;
    }
    const chips = (b.tags || []).map((t) => `<li class="chip">${esc(t)}</li>`).join("");
    const meta = [T(b.date), b.mins ? `${b.mins} ${ui("blog.mins")}` : ""].filter(Boolean).join(" · ");
    return `<${tag} class="post${b.feat ? " post--feat" : ""}" ${attrs}>
      <div class="post__art" data-img="${esc(b.img || "")}"><img alt="" loading="lazy" decoding="async"><span aria-hidden="true">${b.n ? "#" + b.n : "New"}</span>
        ${b.feat ? `<i class="tag tag--gold post__flag">${esc(ui("blog.latest"))}</i>` : b.n ? `<i class="tag post__flag">${esc(ui("blog.series"))} #${b.n}</i>` : ""}
      </div>
      <div class="post__body">
        <p class="post__date">${esc(meta)}</p>
        <h3>${esc(T(b.title))}</h3>
        <p class="post__desc">${rich(T(b.desc))}</p>
        ${chips ? `<ul class="chips">${chips}</ul>` : ""}
        ${url ? `<span class="post__go">${icon("medium")}${esc(ui("blog.read"))}${icon("external")}</span>` : ""}
      </div>
    </${tag}>`;
  }
  function renderBlog() {
    const real = BLOG.filter((b) => !b.soon && b.url).length;
    $("#posts").innerHTML = BLOG.map(postHTML).join("");
    $$(".post__art", $("#posts")).forEach((el) => {
      if (!el.dataset.img) { el.classList.add("no-img"); return; }
      loadImg($("img", el), el.dataset.img, () => el.classList.add("no-img"));
    });
    let strip = $("#postsStat");
    if (!strip) { strip = document.createElement("ul"); strip.id = "postsStat"; strip.className = "wstat"; $("#posts").before(strip); }
    strip.innerHTML = `<li><b>${real}</b><span>${esc(ui("blog.count"))}</span></li>
      <li><b>${icon("medium")}Medium</b><span>${esc(ui("blog.platform"))}</span></li>
      <li><b class="wstat__t">${esc(ui("blog.topics.v"))}</b><span>${esc(ui("blog.topics"))}</span></li>`;
    let all = $("#postsAll");
    if (!all) { all = document.createElement("div"); all.id = "postsAll"; all.className = "center center--gap"; $("#posts").after(all); }
    all.innerHTML = [
      CONFIG.social.medium ? `<a class="btn btn--dark" href="${esc(CONFIG.social.medium)}" target="_blank" rel="noopener noreferrer">${icon("medium")}${esc(ui("blog.all"))}</a>` : "",
      CONFIG.social.instagram ? `<a class="btn btn--ghost" href="${esc(CONFIG.social.instagram)}" target="_blank" rel="noopener noreferrer">${icon("instagram")}${esc(ui("blog.follow"))}</a>` : ""
    ].join("");
  }
  /* ---------- Kontak ---------- */
  function renderContact() {
    const a = $("#mailLink");
    a.href = `mailto:${CONFIG.email}`;
    a.textContent = CONFIG.email;
    $("#locText").textContent = T(CONFIG.location);
    $("#availText").textContent = T(CONFIG.availability);
  }

  $("#copyMail").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(CONFIG.email); }
    catch (e) {
      const ta = document.createElement("textarea");
      ta.value = CONFIG.email; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (err) { /* diabaikan */ }
      ta.remove();
    }
    toast(ui("contact.copied"));
  });

  const msgEl = $("#fMsg");
  msgEl.addEventListener("input", () => { $("#msgCount").textContent = `${msgEl.value.length}/2000`; });

  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#fName").value.trim();
    const email = $("#fEmail").value.trim();
    const subject = $("#fSubject").value.trim();
    const msg = msgEl.value.trim();
    const bad = (field, errEl, text) => { field.closest(".field").classList.toggle("is-bad", !!text); errEl.textContent = text || ""; return !!text; };
    const e1 = bad($("#fName"), $("#eName"), name ? "" : ui("form.err.name"));
    const e2 = bad($("#fEmail"), $("#eEmail"), /^\S+@\S+\.\S+$/.test(email) ? "" : ui("form.err.email"));
    const e3 = bad(msgEl, $("#eMsg"), msg ? "" : ui("form.err.msg"));
    if (e1 || e2 || e3) { const first = $(".field.is-bad input, .field.is-bad textarea"); if (first) first.focus(); return; }
    const subj = subject || `Portfolio inquiry from ${name}`;
    const body = `${msg}\n\n${name}\n${email}`;
    window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  });

  /* ---------- Modal & lightbox ---------- */
  let lastFocus = null;
  let openLayer = null;

  function focusables(root) {
    return $$('a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])', root).filter((el) => !el.hidden && el.offsetParent !== null);
  }
  function openLayerEl(el, focusTarget) {
    lastFocus = document.activeElement;
    openLayer = el;
    el.hidden = false;
    document.body.classList.add("is-locked");
    (focusTarget || el).focus({ preventScroll: true });
  }
  let viewerReturn = null; // viewer dibuka dari galeri modal: saat ditutup, kembali ke modal proyek itu
  function closeLayer() {
    if (!openLayer) return;
    const backTo = openLayer.id === "lightbox" ? viewerReturn : null;
    openLayer.hidden = true;
    openLayer = null;
    document.body.classList.remove("is-locked");
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    if (backTo) {
      viewerReturn = null;
      openProject(backTo.id);
      const g = $(".mgal", $("#modalBody"));
      if (g) setGallery(g, lbIdx);
    }
  }

  // beberapa gambar: galeri kecil di atas modal (preview utama + strip thumbnail, panah kiri/kanan)
  function galleryHTML(p) {
    const pg = p.pages[0];
    const thumbs = p.pages.map((x, i) => `
        <button class="mgal__thumb${i === 0 ? " is-on" : ""}" type="button" data-mgal-i="${i}" aria-label="${esc(ui("m.page"))} ${i + 1}${x.cap ? ": " + esc(T(x.cap)) : ""}">
          ${coverHTML(x.src, kindOf(p), x.cap ? T(x.cap) : T(p.title))}
          <span class="mgal__label">${esc(x.cap ? T(x.cap) : ui("m.page") + " " + (i + 1))}</span>
        </button>`).join("");
    return `<div class="mgal" data-mgal="${p.id}">
      <div class="mgal__stage">
        <button class="mgal__main" type="button" data-view="${p.id}" data-page="0" aria-label="${esc(ui("m.fullview"))}">
          <span class="mgal__img">${coverHTML(pg.src, kindOf(p), pg.cap ? T(pg.cap) : T(p.title))}</span>
          <span class="mgal__zoom">${icon("zoom")}${esc(ui("m.fullview"))}</span>
          <span class="mgal__bar"><b>${esc(pg.cap ? T(pg.cap) : T(p.title))}</b><i>${esc(ui("m.page"))} 1 / ${p.pages.length}</i></span>
        </button>
        <button class="icon-btn mgal__arrow mgal__arrow--prev" type="button" data-mgal-step="-1" aria-label="${esc(ui("lb.prev"))}">${icon("left")}</button>
        <button class="icon-btn mgal__arrow mgal__arrow--next" type="button" data-mgal-step="1" aria-label="${esc(ui("lb.next"))}">${icon("chevron")}</button>
      </div>
      <div class="mgal__thumbs">${thumbs}</div>
    </div>`;
  }
  function setGallery(root, to) {
    const p = byId(root.dataset.mgal);
    const n = p.pages.length;
    const i = ((to % n) + n) % n;
    const pg = p.pages[i];
    const main = $(".mgal__main", root);
    main.dataset.page = i;
    $(".mgal__img", root).innerHTML = coverHTML(pg.src, kindOf(p), pg.cap ? T(pg.cap) : T(p.title));
    hydrate(root);
    $(".mgal__bar b", root).textContent = pg.cap ? T(pg.cap) : T(p.title);
    $(".mgal__bar i", root).textContent = `${ui("m.page")} ${i + 1} / ${n}`;
    const strip = $(".mgal__thumbs", root);
    $$(".mgal__thumb", root).forEach((t, k) => {
      t.classList.toggle("is-on", k === i);
      if (k === i) strip.scrollTo({ left: t.offsetLeft - (strip.clientWidth - t.offsetWidth) / 2, behavior: "smooth" });
    });
  }
  const galleryIdx = (root) => +$(".mgal__main", root).dataset.page || 0;

  function openProject(id) {
    const p = byId(id);
    if (!p) return;
    const bd = (x) => rich(p.featured ? x : boldData(x));
    const carousel = hasPages(p);
    const links = [`<button class="btn btn--dark" type="button" data-view="${p.id}">${icon("zoom")}${esc(viewLabel(p))}</button>`, docBtn(p, "btn--ghost")].filter(Boolean);
    if (p.links.live) links.push(`<a class="btn btn--primary" href="${esc(p.links.live)}" target="_blank" rel="noopener noreferrer">${icon("external")}${esc(ui("btn.live"))}</a>`);
    if (p.links.detail) links.push(`<a class="btn btn--ghost" href="${esc(p.links.detail)}" target="_blank" rel="noopener noreferrer">${icon("external")}${esc(ui("btn.more"))}</a>`);
    const outcome = T(p.outcome);
    $("#modalBody").innerHTML = `
      ${carousel ? galleryHTML(p) : coverHTML(coverOf(p), kindOf(p), T(p.title), pagesTag(p))}
      <div class="mb">
        <div class="mb__meta">
          <span class="tag tag--blue">${esc(T(p.type))}</span>
          <span>${esc(metaLine(p))}</span>
          ${logoHTML(p)}
        </div>
        <h2 id="mTitle">${esc(T(p.title))}</h2>
        <p class="mb__sum">${bd(T(p.summary))}</p>
        ${metricsHTML(p.metrics)}
        <div class="mb__cols">
          <div>
            <h3>${esc(ui("m.did"))}</h3>
            <ul class="bul">${T(p.did).map((d) => `<li>${bd(d)}</li>`).join("")}</ul>
          </div>
          <div>
            <h3>${esc(ui("m.skills"))}</h3>
            <ul class="chips">${p.skills.map((s) => `<li class="chip">${esc(s)}</li>`).join("")}</ul>
            <h3>${esc(ui("m.tools"))}</h3>
            <ul class="chips">${p.tools.map((s) => `<li class="chip chip--tool">${esc(s)}</li>`).join("")}</ul>
          </div>
        </div>
        ${teamPanel(p)}
        ${outcome ? `<p class="mb__out"><strong>${esc(ui("m.results"))}:</strong> ${rich(outcome)}</p>` : ""}
        ${p.confidential ? `<p class="mb__note">${icon("lock")}${esc(ui("conf"))}</p>` : ""}
        ${links.length ? `<div class="mb__act">${links.join("")}</div>` : ""}
      </div>`;
    hydrate($("#modalBody"));
    hydrateLogos($("#modalBody"));
    const modal = $("#modal");
    openLayerEl(modal, $(".modal__panel", modal));
    $(".modal__panel", modal).scrollTop = 0;
  }

  let lbList = [];
  let lbIdx = 0;
  function openViewer(items, idx) {
    lbList = items; lbIdx = idx || 0;
    renderLightbox();
    openLayerEl($("#lightbox"), $("#lightbox .lb__x"));
  }
  // sertifikat: bisa digeser ke sertifikat berikutnya (sesuai filter yang aktif)
  const certItem = (c, pg, i, n) => {
    const notes = [c.desc ? T(c.desc) : "", c.note ? T(c.note) : ""].filter(Boolean);
    const row = (k, v, cls) => `<div><span>${esc(ui(k))}</span><b${cls ? ` class="${cls}"` : ""}>${esc(v)}</b></div>`;
    const date = pg && pg.date ? pg.date : c.date;
    const cred = pg && pg.cred ? pg.cred : c.cred;
    return {
      cid: c.id,
      path: pg ? pg.src : "img/certs/" + c.id,
      kicker: noDots(c.issuer), title: T(c.title),
      badge: pg ? `${ui("cert.item")} ${i + 1} / ${n}` : "",
      caption: pg && pg.cap ? T(pg.cap) : "",
      acts: linkBtn(c.url, ui("btn.verifyOnline"), "external", "btn--dark btn--sm"),
      // panel kanan: ringkasan + deskripsi (gambar sertifikat tetap dominan)
      side: `<span class="tag ${certTag(c)}">${esc(ui("f." + c.cat))}</span>
        <div class="lb__facts">
          ${row("lb.issuer", noDots(c.issuer))}
          ${date ? row("lb.issued", T(date)) : ""}
          ${c.field ? row("lb.field", T(c.field)) : ""}
          ${cred ? row("lb.cred", cred, "mono") : ""}
        </div>
        ${notes.length ? `<div class="lb__about"><h4>${esc(ui("lb.about"))}</h4>${notes.map((x) => `<p>${rich(x)}</p>`).join("")}</div>` : ""}`
    };
  };
  // satu sertifikat bisa punya beberapa gambar: tiap gambar jadi satu slide di viewer
  const certSlides = (list) => list.flatMap((c) => (Array.isArray(c.pages) && c.pages.length ? c.pages.map((pg, i) => certItem(c, pg, i, c.pages.length)) : [certItem(c)]));
  function openCert(id) {
    const slides = certSlides(certList());
    openViewer(slides, Math.max(0, slides.findIndex((x) => x.cid === id)));
  }
  // semua halaman dashboard / gambar sebuah proyek
  function openProjectView(id, start, fromGallery) {
    const p = byId(id);
    if (!p) return;
    viewerReturn = fromGallery ? { id } : null;
    const acts = [p.links.live ? linkBtn(p.links.live, ui("btn.live"), "external", "btn--primary btn--sm", true) : "", docBtn(p, "btn--dark btn--sm", true)].join("");
    const kicker = p.org + (p.ctx ? ", " + T(p.ctx) : "");
    const pages = Array.isArray(p.pages) && p.pages.length ? p.pages : null;
    const found = pages ? Promise.all(pages.map((pg) => resolveSrc(pg.src))) : findPages(coverOf(p) || "img/projects/" + p.id);
    found.then((srcs) => {
      // belum ada gambar sama sekali: buka detail project (bukan viewer kosong)
      if (!fromGallery && (pages ? srcs.every((x) => !x) : !srcs.length)) { if (openLayer) closeLayer(); openProject(id); return; }
      let items;
      if (pages) {
        items = pages.map((pg, i) => ({
          src: srcs[i], empty: srcs[i] ? "" : ui("m.noimg"), kicker, title: T(p.title),
          badge: pages.length > 1 ? `${ui("m.page")} ${i + 1} / ${pages.length}` : "",
          caption: pg.cap ? T(pg.cap) : "", acts, thumbs: pages.length > 1
        }));
      } else if (srcs.length) {
        items = srcs.map((src, i) => ({
          src, kicker, title: T(p.title),
          badge: srcs.length > 1 ? `${ui("m.page")} ${i + 1} / ${srcs.length}` : "", acts, thumbs: srcs.length > 1
        }));
      } else {
        items = [{ empty: ui("m.noimg"), kicker, title: T(p.title), acts }];
      }
      items.forEach((x) => { x.logoP = p; });
      if (openLayer) closeLayer();
      openViewer(items, Math.min(start || 0, items.length - 1));
    });
  }
  function renderLightbox(dir) {
    const it = lbList[lbIdx];
    const fig = $("#lbFig");
    fig.dataset.dir = dir || "";
    fig.innerHTML = `<img alt="${esc(it.title)}" decoding="async">`;
    const img = $("img", fig);
    // klik gambar: perbesar sesuai lebar layar (bisa digulir) / kembalikan
    fig.classList.remove("is-zoom");
    img.title = ui("lb.zoom");
    img.addEventListener("click", () => fig.classList.toggle("is-zoom"));
    const fail = () => { fig.innerHTML = `<div class="lb__empty">${PH.cert}<span>${esc(it.empty || ui("lb.noimg"))}</span></div>`; };
    if (it.empty) fail();
    else if (it.src) { img.addEventListener("error", fail); img.src = it.src; }
    else loadImg(img, it.path, fail);

    // judul di bar atas, tombol (Verify online dll.) di kanan atas
    $("#lbHead").innerHTML = `${it.kicker ? `<p class="lb__kicker">${esc(it.kicker)}</p>` : ""}<h3 class="lb__title" id="lbTitle">${esc(it.title)}</h3>`;
    $("#lbLogo").innerHTML = it.logoP ? logoHTML(it.logoP) : "";
    hydrateLogos($("#lbLogo"));
    $("#lbActs").innerHTML = it.acts || "";

    // keterangan di bawah gambar (halaman ke-n + penjelasan singkat)
    const line = [it.badge ? `<strong>${esc(it.badge)}</strong>` : "", it.caption ? esc(it.caption) : ""].filter(Boolean).join(" · ");
    const capHTML = `${line ? `<p class="lb__line">${line}</p>` : ""}${(it.notes || (it.note ? [it.note] : [])).map((n) => `<p>${rich(n)}</p>`).join("")}${it.foot ? `<p class="mono">${esc(it.foot)}</p>` : ""}`;
    const cap = $("#lbCap");
    cap.innerHTML = capHTML;
    cap.hidden = !capHTML;
    const side = $("#lbSide");
    side.hidden = !it.side;
    side.innerHTML = it.side || "";
    $("#lbStage").classList.toggle("has-side", !!it.side);
    $(".lightbox__panel").classList.toggle("has-side", !!it.side);

    const multi = lbList.length > 1;
    const count = $("#lbCount");
    count.hidden = !multi;
    count.textContent = `${lbIdx + 1} / ${lbList.length}`;
    $("#lbPrev").hidden = !multi;
    $("#lbNext").hidden = !multi;

    const th = $("#lbThumbs"), withThumbs = !!lbList[0].thumbs;
    $(".lightbox__panel").classList.toggle("has-thumbs", withThumbs);
    if (withThumbs) {
      th.hidden = false;
      th.innerHTML = lbList.map((x, k) => `<button type="button" class="lb__t${k === lbIdx ? " is-on" : ""}" data-k="${k}" aria-label="${esc(ui("m.page"))} ${k + 1}">${x.src ? `<img alt="" src="${esc(x.src)}">` : `<span class="lb__tph">${PH.cert}</span>`}<small>${k + 1}</small></button>`).join("");
      const on = $(".is-on", th);
      if (on && on.scrollIntoView) on.scrollIntoView({ block: "nearest", inline: "center" });
    } else { th.hidden = true; th.innerHTML = ""; }

    // muat gambar tetangga lebih dulu supaya geseran terasa mulus
    if (multi) [1, -1].forEach((d) => { const n = lbList[(lbIdx + d + lbList.length) % lbList.length]; if (n && n.src) new Image().src = n.src; });
  }
  $("#lbThumbs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-k]");
    if (!b) return;
    const k = +b.dataset.k;
    if (k === lbIdx) return;
    const dir = k > lbIdx ? "next" : "prev";
    lbIdx = k; renderLightbox(dir);
  });
  const lbStep = (d) => {
    if (lbList.length < 2) return;
    lbIdx = (lbIdx + d + lbList.length) % lbList.length;
    renderLightbox(d > 0 ? "next" : "prev");
  };
  $("#lbPrev").addEventListener("click", () => lbStep(-1));
  $("#lbNext").addEventListener("click", () => lbStep(1));
  // geser (swipe) kiri/kanan di layar sentuh; klik area kosong menutup
  (() => {
    const stage = $("#lbStage");
    let sx = 0, sy = 0;
    stage.addEventListener("touchstart", (e) => { const t = e.changedTouches[0]; sx = t.clientX; sy = t.clientY; }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) lbStep(dx < 0 ? 1 : -1);
    }, { passive: true });
    stage.addEventListener("click", (e) => { if (e.target === stage || e.target.id === "lbFig") closeLayer(); });
  })();

  document.addEventListener("click", (e) => {
    const open = e.target.closest("[data-open]");
    if (open) { if (openLayer) closeLayer(); openProject(open.dataset.open); return; }
    const gThumb = e.target.closest("[data-mgal-i]");
    if (gThumb) { setGallery(gThumb.closest(".mgal"), +gThumb.dataset.mgalI); return; }
    const gStep = e.target.closest("[data-mgal-step]");
    if (gStep) { const g = gStep.closest(".mgal"); setGallery(g, galleryIdx(g) + +gStep.dataset.mgalStep); return; }
    const view = e.target.closest("[data-view]");
    if (view) { openProjectView(view.dataset.view, +view.dataset.page || 0, !!view.closest(".mgal")); return; }
    const cert = e.target.closest("[data-cert]");
    if (cert) { openCert(cert.dataset.cert); return; }
    if (e.target.closest("[data-close]")) closeLayer();
  });

  document.addEventListener("keydown", (e) => {
    if (!openLayer) return;
    if (e.key === "Escape") { closeLayer(); return; }
    if (openLayer.id === "modal") {
      const g = $(".mgal", openLayer);
      if (g && (e.key === "ArrowLeft" || e.key === "ArrowRight") && !/^(INPUT|TEXTAREA)$/.test((document.activeElement || {}).tagName)) { setGallery(g, galleryIdx(g) + (e.key === "ArrowRight" ? 1 : -1)); return; }
    }
    if (openLayer.id === "lightbox") {
      if (e.key === "ArrowLeft") lbStep(-1);
      if (e.key === "ArrowRight") lbStep(1);
    }
    if (e.key === "Tab") {
      const f = focusables(openLayer);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Navigasi: progress, spy, menu ---------- */
  function setupNav() {
    const nav = $("#nav"), bar = $("#progress"), menu = $("#menu"), burger = $("#burger");
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, h.scrollTop / max) : 0})`;
      nav.classList.toggle("is-stuck", h.scrollTop > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const links = $$("[data-spy]", menu);
    const setActive = (id) => links.forEach((a) => a.classList.toggle("is-active", a.dataset.spy === id));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id === "more" ? "projects" : en.target.id); });
      }, { rootMargin: "-45% 0px -50% 0px" });
      $$("main section[id]").forEach((s) => io.observe(s));
    }

    const shut = () => { menu.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); };
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) shut(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !openLayer) shut(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 980) shut(); });
  }

  /* ---------- Render semua ---------- */
  function renderAll() {
    renderSocial();
    renderEdu();
    renderTools();
    renderExperience();
    renderFeatured();
    renderProjects();
    renderCerts();
    renderBlog();
    renderContact();
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    store.set("lang", lang);
    applyStatic();
    renderAll();
    $$("[data-count]").forEach((el) => { el.textContent = fmtNum(parseFloat(el.dataset.count), parseInt(el.dataset.dec || "0", 10)); });
    if (openLayer && openLayer.id === "lightbox") renderLightbox();
    else if (openLayer) closeLayer();
  }
  $$(".seg [data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------- Mulai ---------- */
  applyStatic();
  renderAll();
  setupHero();
  setupNav();
  runCounters();
})();

/* =====================================================================
   Efek dinamis (reveal, spotlight, jaringan data, marquee, dock, dll)
   ===================================================================== */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const root = document.documentElement;
  const raf = window.requestAnimationFrame.bind(window);

  /* 1. Reveal saat scroll */
  const RV = ".sec-head, .edu, .domains, .about__text, .tgroup, .skillcols > *, .tl__card, .feat, .post, .fbar, .contact > *";
  if (!reduce && "IntersectionObserver" in window) {
    root.classList.add("fx");
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { const t = e.target; t.classList.add("in"); io.unobserve(t); setTimeout(() => t.classList.remove("rv"), 1500); }
    }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    const seen = new WeakSet();
    const scan = (scope) => $$(RV, scope).forEach((el) => {
      if (seen.has(el)) return;
      seen.add(el);
      const sib = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--d", Math.min(sib, 6) * 70 + "ms");
      el.classList.add("rv");
      io.observe(el);
    });
    scan(document);
    new MutationObserver((ms) => ms.forEach((m) => m.addedNodes.forEach((n) => { if (n.nodeType === 1) scan(n.parentElement || document); })))
      .observe($("#main"), { childList: true, subtree: true });
    setTimeout(() => $$(".rv:not(.in)").forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < innerHeight) el.classList.add("in"); }), 1800);
  }

  /* 2. Spotlight mengikuti kursor pada kartu */
  if (fine && !reduce) {
    const SP = ".card, .tl__card, .post, .edu, .domains, .fbar, .glance > div, .form, .info li";
    document.addEventListener("pointermove", (e) => {
      const t = e.target.closest && e.target.closest(SP);
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", e.clientX - r.left + "px");
      t.style.setProperty("--my", e.clientY - r.top + "px");
      t.classList.add("spot");
    }, { passive: true });
  }

  /* 3. Hero: cahaya kursor, tilt foto, jaringan titik data */
  const hero = $("#home"), bg = $(".hero__bg");
  if (hero && fine && !reduce) {
    const ring = $(".portrait__ring");
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      bg.style.setProperty("--hx", e.clientX - r.left + "px");
      bg.style.setProperty("--hy", e.clientY - r.top + "px");
      if (ring) {
        const b = ring.getBoundingClientRect();
        const dx = (e.clientX - (b.left + b.width / 2)) / innerWidth;
        const dy = (e.clientY - (b.top + b.height / 2)) / innerHeight;
        ring.style.transform = `perspective(900px) rotateY(${dx * 14}deg) rotateX(${-dy * 14}deg)`;
      }
    }, { passive: true });
    hero.addEventListener("pointerleave", () => { if (ring) ring.style.transform = ""; });
    // klik area kosong hero: warna cahaya berganti (hanya di Home)
    const GL = ["", "255, 84, 112", "255, 196, 61", "47, 208, 122"];
    let gi = 0;
    hero.addEventListener("click", (e) => {
      if (e.target.closest("a, button, .glance, input, textarea, .portrait")) return;
      gi = (gi + 1) % GL.length;
      if (gi) hero.style.setProperty("--net", GL[gi]); else hero.style.removeProperty("--net");
      hero.dispatchEvent(new Event("glowchange"));
    });
    // tombol "magnetik"
    $$(".cta .btn").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px, ${(e.clientY - r.top - r.height / 2) * 0.2}px)`;
      });
      b.addEventListener("pointerleave", () => { b.style.transform = ""; });
    });
  }

  if (hero && !reduce) {
    const cv = document.createElement("canvas");
    cv.className = "hero__net"; cv.setAttribute("aria-hidden", "true");
    bg.appendChild(cv);
    const ctx = cv.getContext("2d");
    let W = 0, H = 0, dpr = 1, pts = [], on = true, col = "59,140,255", mouse = { x: -999, y: -999 };
    const readCol = () => {
      const v = getComputedStyle(hero).getPropertyValue("--net").trim();
      if (v) col = v;
    };
    const size = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = hero.clientWidth; H = hero.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + "px"; cv.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.max(24, Math.min(60, Math.round(W * H / 22000)));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .8 }));
    };
    size(); readCol();
    hero.addEventListener("glowchange", readCol);
    addEventListener("resize", size);
    new MutationObserver(readCol).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    hero.addEventListener("pointermove", (e) => { const r = hero.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; }, { passive: true });
    hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -999; });
    new IntersectionObserver((es) => { on = es[0].isIntersecting; if (on) raf(tick); }).observe(hero);
    document.addEventListener("visibilitychange", () => { if (!document.hidden && on) raf(tick); });
    function tick() {
      if (!on || document.hidden) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < 14000) { const f = (1 - d2 / 14000) * .6; p.x += dx * f * .04; p.y += dy * f * .04; }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        ctx.fillStyle = `rgba(${col},.55)`;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
          if (d < 15000) { ctx.strokeStyle = `rgba(${col},${(1 - d / 15000) * .28})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const mx = a.x - mouse.x, my = a.y - mouse.y, md = mx * mx + my * my;
        if (md < 22000) { ctx.strokeStyle = `rgba(255,196,61,${(1 - md / 22000) * .5})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      }
      raf(tick);
    }
    raf(tick);
  }

  /* 4. Marquee tools */
  if (typeof TOOLS !== "undefined" && hero) {
    const items = TOOLS.flatMap((g) => g.items);
    const one = items.map((t) => `<span class="mq__i"><img src="https://cdn.simpleicons.org/${t.slug}/${t.c}" alt="" width="22" height="22" loading="lazy" onerror="this.remove()"><b>${t.n.replace(/</g, "")}</b></span>`).join("");
    const m = document.createElement("div");
    m.className = "mq"; m.setAttribute("aria-hidden", "true");
    m.innerHTML = `<div class="mq__track">${one}${one}</div>`;
    hero.after(m);
  }

  /* 5. Garis timeline terisi + dock (progress scroll) */
  const dock = $("#dock"), prog = $("#dockProg");
  const C = 2 * Math.PI * 19;
  if (prog) { prog.style.strokeDasharray = C; prog.style.strokeDashoffset = C; }
  let tick2 = false;
  function onScroll() {
    tick2 = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    const y = scrollY;
    if (dock) dock.classList.toggle("is-on", y > 640);
    if (prog && max > 0) prog.style.strokeDashoffset = C * (1 - Math.min(1, y / max));
    const tl = $(".timeline");
    if (tl) {
      const r = tl.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (innerHeight * 0.6 - r.top) / r.height));
      tl.style.setProperty("--tp", p.toFixed(3));
    }
  }
  addEventListener("scroll", () => { if (!tick2) { tick2 = true; raf(onScroll); } }, { passive: true });
  onScroll();
  const up = $("#dockUp");
  if (up) up.addEventListener("click", () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));
})();
