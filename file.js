const element = document.getElementById("myElement");

// Use GSAP to create the animation
gsap.to(element, { duration: 2, x: 100, rotation: 360, opacity: 0.5 });
gsap.to(element, { duration: 2, x: 100, y: 50, scaleX: 2, scaleY: 2 });
gsap.to(element, { duration: 1, delay: 0.5, rotation: 180, repeat: 3, yoyo: true });
gsap.from(element, { duration: 1, opacity: 0, x: -100, ease: "power2.out" });
const timeline = gsap.timeline();
timeline.to(element, { duration: 1, x: 100 })
        .to(element, { duration: 0.5, rotation: 180 })
        .to(element, { duration: 0.5, opacity: 0 });