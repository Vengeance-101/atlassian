export const whiteBg = () => {
  if (typeof document !== "undefined") {
    const links = document.querySelectorAll(".anchor-links");
    const background = document.querySelector(".white-background");
    setInterval(() => {
      links.forEach((link) => {
        link.addEventListener("mouseenter", (e) => {
          if (e.target.id != "Enterprise") {
            background.style.opacity = 1;
            background.style.pointerEvents = "all";
          }
        });
      });
    }, 1000);
    setTimeout(() => {
      links.forEach((link) => {
        link.addEventListener("mouseleave", () => {
          background.style.opacity = 0;
          background.style.pointerEvents = "none";
        });
      });
    }, 1000);
  }
};
