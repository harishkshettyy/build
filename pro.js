// Fade-in animation for sections
const sections = document.querySelectorAll(".section, .project-card");

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

sections.forEach((sec) => {
  appearOnScroll.observe(sec);
});

console.log("✨ Animations activated successfully!");
function openProject(name) {
  switch (name) {
    case "portfolio":
      window.open("projects/portfolio/index.html", "_blank");
      break;
    case "todo":
      window.open("projects/todo/index.html", "_blank");
      break;
    case "tictactoe":
      window.open("projects/tictactoe/index.html", "_blank");
      break;
    default:
      alert("Project not found!");
  }
}