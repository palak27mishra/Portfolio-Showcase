/* ============================================================
   Neelima Mishra — Portfolio (Vanilla JS)
   ============================================================ */

const DATA = {
  name: "Neelima Mishra",
  roles: [
    "Frontend Developer",
    "AI/ML Enthusiast",
    "Data Science Explorer",
    "BCA Student @ GEU"
  ],
  skills: {
    "Frontend": ["HTML5", "CSS3", "JavaScript (ES6)", "Bootstrap", "Responsive Design", "DOM Manipulation"],
    "Programming": ["Python", "C", "C++", "Java"],
    "Data Science": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "EDA"],
    "AI/ML Concepts": ["Regression", "Classification", "Feature Engineering", "Data Preprocessing", "Model Evaluation"],
    "Tools": ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"]
  },
  projects: [
    {
      title: "Personal Portfolio Website",
      category: "Frontend",
      tags: ["HTML5", "CSS3", "JavaScript"],
      description: "Fully responsive portfolio with smooth scroll, dark/light theme toggle, mobile-first design, and SEO-optimized structure. Hosted live on GitHub Pages.",
      links: { live: "#", github: "#" },
      color: "#A78BFA"
    },
    {
      title: "House Price Prediction — ML Model",
      category: "ML/AI",
      tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      description: "ML regression model predicting house prices using Linear Regression, Ridge, and Random Forest. Achieved R² score of ~0.87. Includes EDA, feature engineering, and data visualizations.",
      links: { github: "#" },
      badge: "R² Score: 0.87",
      color: "#22D3EE"
    },
    {
      title: "AI Code Reviewer",
      category: "Tools",
      tags: ["JavaScript", "DOM", "API Integration"],
      description: "Web-based AI tool that analyzes source code and gives quality feedback. Uses async JavaScript and real-time API integration for instant code analysis.",
      links: { live: "#", github: "#" },
      color: "#F472B6"
    },
    {
      title: "Dynamic Process Scheduling Webpage",
      category: "Frontend",
      tags: ["HTML5", "CSS3", "JavaScript"],
      description: "Interactive OS process scheduling algorithm simulator with real-time input handling and live output rendering. Hosted on GitHub Pages.",
      links: { live: "#", github: "#" },
      color: "#F59E0B"
    },
    {
      title: "Responsive Websites Collection",
      category: "Frontend",
      tags: ["HTML5", "CSS3", "JavaScript"],
      description: "Multiple responsive websites with clean UI, cross-browser compatibility, and beginner-level API integration, following component-based development practices.",
      links: { github: "#" },
      color: "#10B981"
    }
  ],
  certifications: [
    { title: "AWS Solutions Architecture Job Simulation", issuer: "Forage", topic: "Cloud Hosting Architecture Design" },
    { title: "GenAI Powered Data Analytics Simulation", issuer: "Tata Group (Forage)", topic: "AI Predictions & Data Storytelling" },
    { title: "Cybersecurity Analyst Job Simulation", issuer: "Tata Group (Forage)", topic: "IAM Fundamentals & Strategy" },
    { title: "Software Engineering Job Simulation", issuer: "Quantium (Forage)", topic: "Data Processing, Dashboard & Test Automation" },
    { title: "UX Design Introduction Simulation", issuer: "Lloyds Banking Group (Forage)", topic: "User Research & Design Principles" }
  ],
  education: [
    { degree: "Bachelor of Computer Applications (BCA)", institution: "Graphic Era University, Dehradun", period: "2023 – 2026 (Ongoing)", relevant: "Web Dev, Data Structures, DBMS, AI/ML fundamentals" },
    { degree: "Senior Secondary (12th) — Commerce", institution: "Shri Guru Ram Rai, Dehradun", period: "2023", relevant: "" },
    { degree: "Secondary (10th)", institution: "Raksha Anusandhan Vidyalaya", period: "2021", relevant: "" }
  ]
};

/* ---------- Loader ---------- */
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader")?.classList.add("hidden"), 600);
});

/* ---------- Custom cursor ---------- */
(() => {
  const cursor = document.getElementById("cursor");
  const dot = document.getElementById("cursor-dot");
  if (!cursor || !dot) return;
  let mx = 0, my = 0, cx = 0, cy = 0;

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  function loop() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  loop();

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, input, textarea, .magnetic")) cursor.classList.add("hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button, input, textarea, .magnetic")) cursor.classList.remove("hover");
  });
})();

/* ---------- Hero name letter-by-letter ---------- */
(() => {
  const el = document.getElementById("hero-name");
  if (!el) return;
  el.innerHTML = DATA.name.split("").map((c, i) => {
    if (c === " ") return `<span class="space"></span>`;
    return `<span class="char" style="animation-delay:${i * 50}ms">${c}</span>`;
  }).join("");
})();

/* ---------- Typewriter ---------- */
(() => {
  const el = document.getElementById("typewriter");
  if (!el) return;
  const words = DATA.roles;
  let wi = 0, ci = 0, deleting = false;
  function tick() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(tick, deleting ? 50 : 90);
  }
  tick();
})();

/* ---------- Particle field (Canvas 2D fallback for hero) ---------- */
(() => {
  const canvas = document.getElementById("hero-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, particles = [];
  const COLORS = ["#A78BFA", "#22D3EE", "#F472B6"];

  function resize() {
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }
  function init() {
    const count = window.innerWidth < 768 ? 60 : 110;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: (Math.random() * 1.6 + 0.4) * devicePixelRatio,
      c: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }
  function loop() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.fillStyle = p.c;
      ctx.globalAlpha = 0.7;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    // connecting lines
    ctx.globalAlpha = 0.12;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.hypot(dx, dy);
        const max = 120 * devicePixelRatio;
        if (d < max) {
          ctx.strokeStyle = particles[i].c;
          ctx.lineWidth = 0.6 * devicePixelRatio * (1 - d / max);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(loop);
  }
  resize(); init(); loop();
  window.addEventListener("resize", () => { resize(); init(); });
})();

/* ---------- Reveal on scroll ---------- */
(() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();

/* ---------- Navbar scroll & active link ---------- */
(() => {
  const nav = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-link");
  const sections = Array.from(links).map((l) => document.querySelector(l.getAttribute("href")));

  function onScroll() {
    nav?.classList.toggle("scrolled", window.scrollY > 40);
    const y = window.scrollY + 120;
    let activeIdx = 0;
    sections.forEach((sec, i) => { if (sec && sec.offsetTop <= y) activeIdx = i; });
    links.forEach((l, i) => l.classList.toggle("active", i === activeIdx));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ---------- Mobile menu ---------- */
(() => {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  toggle?.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });
  document.querySelectorAll(".nav-link").forEach((l) =>
    l.addEventListener("click", () => {
      toggle?.classList.remove("open");
      links?.classList.remove("open");
    })
  );
})();

/* ---------- Stats counter ---------- */
(() => {
  const nums = document.querySelectorAll(".stat-num");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || "";
      const dur = 1400, start = performance.now();
      function step(t) {
        const p = Math.min((t - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * ease) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach((n) => io.observe(n));
})();

/* ---------- Skills render ---------- */
(() => {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  grid.innerHTML = Object.entries(DATA.skills).map(([title, items]) => `
    <div class="skill-group reveal">
      <h3>${title}</h3>
      <div class="skill-list">
        ${items.map((s) => `<span class="skill-pill">${s}</span>`).join("")}
      </div>
    </div>
  `).join("");

  const allSkills = Object.values(DATA.skills).flat();
  const m1 = document.getElementById("marquee-track-1");
  const m2 = document.getElementById("marquee-track-2");
  const html = (arr, accent = false) => arr.concat(arr).map((s, i) =>
    `<span class="marquee-item ${accent && i % 3 === 0 ? "accent" : ""}">◆ ${s}</span>`
  ).join("");
  if (m1) m1.innerHTML = html(allSkills);
  if (m2) m2.innerHTML = html([...allSkills].reverse(), true);
})();

/* ---------- Projects render & filter ---------- */
(() => {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  function render(filter = "All") {
    grid.innerHTML = DATA.projects.map((p) => `
      <article class="project-card reveal in ${filter !== "All" && p.category !== filter ? "hidden" : ""}" style="--accent-color: ${p.color}">
        <span class="project-category">${p.category}</span>
        <h3 class="project-title">${p.title}</h3>
        ${p.badge ? `<span class="project-badge">${p.badge}</span>` : ""}
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          ${p.links.live ? `<a href="${p.links.live}" class="project-link" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live
          </a>` : ""}
          ${p.links.github ? `<a href="${p.links.github}" class="project-link" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.78-1.34-1.78-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/></svg>
            Code
          </a>` : ""}
        </div>
      </article>
    `).join("");
  }
  render();

  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      render(tab.dataset.filter);
    });
  });
})();

/* ---------- Certifications render ---------- */
(() => {
  const grid = document.getElementById("cert-grid");
  if (!grid) return;
  const trophyIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`;
  grid.innerHTML = DATA.certifications.map((c) => `
    <div class="cert-card reveal">
      <div class="cert-trophy">${trophyIcon}</div>
      <h3 class="cert-title">${c.title}</h3>
      <p class="cert-issuer">${c.issuer}</p>
      <p class="cert-topic">${c.topic}</p>
    </div>
  `).join("");
})();

/* ---------- Education timeline ---------- */
(() => {
  const tl = document.getElementById("timeline");
  if (!tl) return;
  tl.innerHTML = DATA.education.map((e) => `
    <div class="timeline-item reveal">
      <div class="timeline-card">
        <p class="timeline-period">${e.period}</p>
        <h3 class="timeline-degree">${e.degree}</h3>
        <p class="timeline-school">${e.institution}</p>
        ${e.relevant ? `<p class="timeline-relevant">${e.relevant}</p>` : ""}
      </div>
    </div>
  `).join("");
})();

/* ---------- Magnetic buttons ---------- */
(() => {
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
})();

/* ---------- Contact form ---------- */
(() => {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const status = document.getElementById("form-status");
  const btn = document.getElementById("submit-btn");

  function setError(name, msg) {
    const el = form.querySelector(`[data-for="${name}"]`);
    if (el) el.textContent = msg || "";
  }

  function validate(data) {
    let ok = true;
    setError("name", "");
    setError("email", "");
    setError("subject", "");
    setError("message", "");
    if (!data.name || data.name.trim().length < 2) { setError("name", "Please enter your name (min 2 chars)."); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) { setError("email", "Please enter a valid email."); ok = false; }
    if (!data.subject || data.subject.trim().length < 3) { setError("subject", "Subject must be at least 3 chars."); ok = false; }
    if (!data.message || data.message.trim().length < 10) { setError("message", "Message must be at least 10 chars."); ok = false; }
    return ok;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    if (!validate(data)) return;

    btn.setAttribute("disabled", "true");
    btn.querySelector(".btn-label").textContent = "Sending…";
    status.className = "form-status";
    status.textContent = "";

    // Simulated send (no backend in static version) — opens user's email client as fallback.
    try {
      await new Promise((r) => setTimeout(r, 900));
      status.className = "form-status success";
      status.textContent = "Thanks! Your message is queued — opening your email client to confirm.";
      const subject = encodeURIComponent(`[Portfolio] ${data.subject}`);
      const body = encodeURIComponent(`Hi Neelima,\n\n${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:nileemamishra07@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    } catch {
      status.className = "form-status error";
      status.textContent = "Something went wrong. Please email me directly.";
    } finally {
      btn.removeAttribute("disabled");
      btn.querySelector(".btn-label").textContent = "Send Message";
    }
  });
})();

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
