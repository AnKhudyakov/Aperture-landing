gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate__fadeInUp-to", {
  scrollTrigger: {
    trigger: ".animate__fadeInUp-to",
    start: "bottom center",
    end: "top 0%",
    //markers: true,
    scrub: true,
  },
  yPercent: -50,
  duration: 3,
});

const fadeInLeft = [
  ".animate__fadeInLeft-first",
  ".animate__fadeInLeft-second",
  ".animate__fadeInLeft-third",
];

const fadeInRight = [
  ".animate__fadeInRight-first",
  ".animate__fadeInRight-second",
  ".animate__fadeInRight-third",
];

fadeInLeft.forEach((el)=>{
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "5px 100%",
      end: "top 20%",
      //markers: true,
      scrub: true,
    },
    xPercent: -100,
    duration: 1,
  });
})

fadeInRight.forEach((el)=>{
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "5px 100%",
      end: "top 20%",
      //markers: true,
      scrub: true,
    },
    xPercent: 100,
    duration: 1,
  });
})