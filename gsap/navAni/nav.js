let nav = document.querySelector("nav");
let box1 = document.querySelector(".box1");
nav.addEventListener("mouseenter", () => {
  gsap.to(box1, {
    display: "block",
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });
});

nav.addEventListener("mouseleave", () => {
  gsap.to(box1, {
    display: "none",
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});
