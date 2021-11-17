gsap.registerPlugin(ScrollTrigger);

let proxy = {
    skew: 0
  },
  skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"),
  clamp = gsap.utils.clamp(-20, 20);

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew)
      });
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {
  transformOrigin: "right center",
  force3D: true
});