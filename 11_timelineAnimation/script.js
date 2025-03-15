// Navigation Toggle for Mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// GSAP Animations
function page1() {
    var tl = gsap.timeline();

    tl.from("nav h1, .nav-links a, .nav-links button", {
        opacity: 0,
        y: -30,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.2,
    });

    tl.from(".hero-content h1", {
        opacity: 0,
        x: -200,
        duration: 0.5,
    });

    tl.from(".hero-content p", {
        opacity: 0,
        x: -100,
        duration: 0.4,
    });

    tl.from(".hero-content button", {
        opacity: 0,
        duration: 0.4,
    });

    tl.from(
        ".hero-image img",
        {
            opacity: 0,
            x: 100,
            duration: 0.5,
        },
        "-=0.3"
    );

    tl.from(".clients img", {
        opacity: 0,
        y: 25,
        duration: 0.6,
        stagger: 0.2,
    });
}
page1();

// Page 2 Animation
gsap.registerPlugin(ScrollTrigger);

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: "top 50%",
        end: "top 0",
        scrub: 2,
        markers: false,
    },
});

tl2.from(".services h2", {
    opacity: 0,
    x: -100,
    duration: 0.5,
});

tl2.from(".services p", {
    opacity: 0,
    x: -100,
    duration: 0.5,
});

tl2.from(".service-item", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.2,
});

// Testimonials Animation
gsap.from(".testimonial-item", {
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 70%",
        end: "top 30%",
        scrub: 1,
    },
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2,
});