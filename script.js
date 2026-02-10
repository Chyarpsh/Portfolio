document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    setupMobileNav();
    setupNavbarShadow();
    setupScrollReveal();
    setupActiveNav();
    setupParallax();
    setupTiltMicroInteraction();
});

// ================================
// Projects (edit anytime)
// ================================
const projects = [
    {
        phase: "Architecture",
        title: "Multi-Region Application on AWS",
        description:
            "Deployed multi-region architecture to improve availability and latency. Documented failover behavior and regional routing patterns.",
        tech: ["Multi-Region", "High Availability", "CloudFront"],
        link: "https://github.com/Chyarpsh/aws-cloud-engineer-projects"
    },
    {
        phase: "Architecture",
        title: "CloudFront Origin Failover",
        description:
            "Implemented edge-based failover and health-check routing using CloudFront origin groups to maintain service continuity.",
        tech: ["CloudFront", "Failover", "High Availability"],
        link: "https://github.com/Chyarpsh/aws-cloud-engineer-projects"
    },
    {
        phase: "Architecture",
        title: "Multi-Cloud Disaster Recovery (AWS + GCP) with Pulumi",
        description:
            "Built infrastructure-as-code disaster recovery workflows with failover testing and observability dashboards.",
        tech: ["Pulumi", "Multi-Cloud", "Disaster Recovery"],
        link: "https://github.com/Chyarpsh/aws-cloud-engineer-projects"
    },
    {
        phase: "Support",
        title: "Cloud Support Ticketing Simulation",
        description:
            "Simulated real cloud incidents and documented triage, RCA, resolution, and prevention steps.",
        tech: ["Troubleshooting", "Support", "Documentation"],
        link: "https://github.com/Chyarpsh/aws-cloud-engineer-projects"
    },
    {
        phase: "DevOps",
        title: "CI/CD Pipeline on AWS",
        description:
            "Implemented and troubleshot CodeBuild and CodeDeploy pipelines, resolving IAM and deployment failures.",
        tech: ["CodeBuild", "CodeDeploy", "CI/CD"],
        link: "https://github.com/Chyarpsh/aws-cloud-engineer-projects"
    },
    {
        phase: "Networking",
        title: "VPC & EC2 Troubleshooting",
        description:
            "Diagnosed and resolved connectivity issues across subnets, route tables, and security groups in AWS environments.",
        tech: ["VPC", "EC2", "Troubleshooting"],
        link: "https://github.com/Chyarpsh/aws-cloud-engineer-projects"
    },
    {
        phase: "Containers",
        title: "Kubernetes Deployment",
        description:
            "Deployed containerized applications and managed Kubernetes manifests for application rollout.",
        tech: ["Kubernetes", "Docker", "EKS"],
        link: "https://github.com/Chyarpsh/aws-cloud-engineer-projects"
    }
];

// ================================
// Render Projects
// ================================
function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    grid.innerHTML = projects
        .map(
            (p) => `
      <div class="project-card reveal tilt">
        <span class="project-phase">${p.phase}</span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-description">${p.description}</p>

        <div class="project-body">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>

        <a class="project-link" href="${p.link}" target="_blank" rel="noopener">
          <i class="fab fa-github"></i><span>View on GitHub</span>
        </a>
      </div>
    `
        )
        .join("");
}

// ================================
// Mobile nav + smooth scroll
// ================================
function setupMobileNav() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    const links = document.querySelectorAll(".nav-link");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => menu.classList.toggle("active"));

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            menu.classList.remove("active");

            const id = link.getAttribute("href");
            const section = document.querySelector(id);
            if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

// ================================
// Navbar shadow on scroll
// ================================
function setupNavbarShadow() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const onScroll = () => {
        if (window.scrollY > 30) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}

// ================================
// Scroll reveal
// ================================
function setupScrollReveal() {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("show");
                    observer.unobserve(e.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    items.forEach((el) => observer.observe(el));
}

// ================================
// Active nav highlight
// ================================
function setupActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const id = entry.target.getAttribute("id");
                navLinks.forEach((a) => a.classList.remove("active"));

                const active = document.querySelector(`.nav-link[href="#${id}"]`);
                if (active) active.classList.add("active");
            });
        },
        { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => obs.observe(s));
}

// ================================
// Subtle parallax (hero gradient shift)
// ================================
function setupParallax() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Activate shimmer on primary button
    const primaryBtn = document.querySelector(".hero-link-primary");
    if (primaryBtn) primaryBtn.classList.add("shimmer");

    const onScroll = () => {
        const y = window.scrollY;
        const delta = Math.min(1, y / 600); // subtle
        const xPos = 50 + (delta * 6);  // 50 -> 56
        const yPos = 50 + (delta * 10); // 50 -> 60
        hero.style.backgroundPosition = `${xPos}% ${yPos}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}

// ================================
// Micro-interaction tilt (FAANG style)
// ================================
function setupTiltMicroInteraction() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const tiltEls = document.querySelectorAll(".tilt");

    tiltEls.forEach((el) => {
        // optional inner layer for depth
        // if you want deeper effect: wrap content with .tilt-inner (not required)
        const maxTilt = 6;   // degrees
        const scale = 1.01;  // tiny scale

        const onMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const px = (x / rect.width) * 2 - 1;  // -1 to 1
            const py = (y / rect.height) * 2 - 1; // -1 to 1

            const rotY = px * maxTilt;
            const rotX = -py * maxTilt;

            el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
        };

        const onLeave = () => {
            el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
            el.style.transition = "transform .25s ease";
            setTimeout(() => (el.style.transition = ""), 250);
        };

        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
    });
}
