// highlight nav links while scrolling
const sections = [...document.querySelectorAll("section")];
const navLinks = [...document.querySelectorAll("nav a")];

window.addEventListener("scroll", () => {
  const pos = window.scrollY + 80;
  sections.forEach(sec => {
    if (sec.offsetTop <= pos && sec.offsetTop + sec.offsetHeight > pos) {
      navLinks.forEach(l => l.classList.remove("active"));
      const active = document.querySelector(`nav a[href="#${sec.id}"]`);
      active && active.classList.add("active");
    }
  });
});

// auto‑update year
document.getElementById("year").textContent = new Date().getFullYear();
