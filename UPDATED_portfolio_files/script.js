// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Active nav link on scroll
const ids = ["home","about","skills","projects","contact"];
const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
const links = Array.from(document.querySelectorAll(".nav-link"));

function setActiveNav(){
  const pos = window.scrollY + 140;
  let current = "home";
  for (const s of sections){
    if (s.offsetTop <= pos) current = s.id;
  }
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
}
window.addEventListener("scroll", setActiveNav);
setActiveNav();
