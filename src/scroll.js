gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = scrollSmoother.create({
  smooth: 2,
  smoothTouch: 0.1,
  effects: true,
});

ScrollTrigger.create({
  trigger: "#section3",
  pin: true,
  start: "center center",
  end: "+=300",
});
