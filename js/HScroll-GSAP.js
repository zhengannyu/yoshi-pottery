/* 除了需要在 <head> 中引入 JavaScript 資源外，須在 JavaScript 中註冊外掛 */
gsap.registerPlugin(ScrollTrigger);

let scroll_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".classContainer",
      start: "top center",
      scrub: true,
      end: "+=300",
    },
  }),

  classItems = [...document.querySelectorAll(".classItem")];
//移動facts
scroll_tl.to(classItems, {
  xPercent: -85 * (classItems.length - 1),
  scrollTrigger: {
    trigger: ".classContainerSm",
    start: "center center",
    pin: true,
    scrub: 1,
    snap: 1 / (classItems.length - 1),
    end: () => `+=4320`,
  },
});