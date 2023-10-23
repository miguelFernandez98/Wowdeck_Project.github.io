gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const container = document.querySelector("#Varanimation");
const cardsContainer = container.querySelector(".cards");
const cards = gsap.utils.toArray(".card");
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const navList = nav.querySelector("ul.nav-list");
const navItems = navList.querySelectorAll("li");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  gsap.fromTo(nav, { x: "100%" }, { x: "0%", duration: 0.3 });
  gsap.fromTo(
    navItems,
    { opacity: 0 },
    { opacity: 1, duration: 0.6, stagger: 0.2 }
  );
  gsap.to(document.body, { overflow: "hidden" });
});

cerrar.addEventListener("click", () => {
  gsap.to(nav, {
    x: "100%",
    duration: 0.3,
    onComplete: () => nav.classList.remove("visible"),
  });
  gsap.to(navItems, {
    opacity: 0,
    duration: 0.0,
    stagger: 0.2,
    onComplete: () => nav.classList.remove("visible"),
  });

  gsap.to(document.body, { overflow: "auto" });
});
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    pin: true,
    pinSpacing: true,
    start: "top top",
    end: "+=100%",
    scrub: true,
  },
});

tl.addLabel("card1");
tl.to(cards[0], {
  xPercent: 0,
  opacity: 1,
});

tl.from(cards[1], {
  xPercent: 75,
  opacity: 0,
});
tl.addLabel("card2");

tl.to(
  cards[0],
  {
    scale: 0.95,
    xPercent: -0.5,
    opacity: 0.5,
  },
  "-=0.3"
);

tl.to(cards[1], {
  xPercent: 0,
  opacity: 1,
});

tl.from(cards[2], {
  xPercent: 75,
  opacity: 0,
});
tl.addLabel("card3");

tl.to(
  cards[1],
  {
    scale: 0.98,
    xPercent: -0.4,
    opacity: 0.6,
  },
  "-=0.3"
);

tl.to(cards[2], {
  xPercent: 0,
  opacity: 1,
});
tl.from(cards[3], {
  xPercent: 75,
  opacity: 0,
});
tl.addLabel("card4");
