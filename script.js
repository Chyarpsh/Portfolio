// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Nav active state on scroll (simple + clean)
const sections = ["home", "about", "skills", "projects", "contact"].map(id => document.getElementById(id));
const navLinks = Array.from(document.querySelectorAll(".nav-link"));

const setActive = () => {
    const y = window.scrollY + 120;
    let current = "home";
    for (const s of sections) {
        if (s && s.offsetTop <= y) current = s.id;
    }
    navLinks.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
    });
};
window.addEventListener("scroll", setActive);
setActive();

// Subtle parallax for background orbs (micro, not distracting)
const orb1 = document.querySelector(".orb-1");
const orb2 = document.querySelector(".orb-2");
const orb3 = document.querySelector(".orb-3");

window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    if (orb1) orb1.style.transform = `translate3d(${x * 18}px, ${y * 16}px, 0)`;
    if (orb2) orb2.style.transform = `translate3d(${x * -16}px, ${y * 14}px, 0)`;
    if (orb3) orb3.style.transform = `translate3d(${x * 10}px, ${y * -10}px, 0)`;
});

// Lightweight "tilt" hover micro-interaction
const tilts = document.querySelectorAll(".tilt");
tilts.forEach(el => {
    el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (py - 0.5) * -6;  // rotation X
        const ry = (px - 0.5) * 8;   // rotation Y
        el.style.transform = `translateY(-2px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    el.addEventListener("mouseleave", () => {
        el.style.transform = "";
    });
});
