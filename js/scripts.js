const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".logo", { x: "-10%", duration: 1, stagger: 1.25, delay: 0.5 });
tl.to(".links", { x: "-15%", duration: 1, stagger: 1.25 },"-=1");
tl.fromTo(".slogan", { opacity: 0 }, { opacity: 1, duration: 1 });
