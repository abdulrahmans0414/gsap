
document.addEventListener("DOMContentLoaded", function () {

    // Navigation Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const isExpanded = navLinks.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isExpanded);
    });

    gsap.from(".navbar .logo,.nav-links a", {
        opacity: 0,
        y: -20, // Moves links up
        duration: 0.8,
        delay: 0.5,
        stagger: 0.2, // Adds delay between each link animation
        ease: "power2.out"
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Common Hero Section Animation (for all pages)
    animateHeroSection();

    // Check the current page and run the appropriate animations
    const body = document.body;

    if (body.classList.contains("home-page")) {
        animateHomePage();
    } else if (body.classList.contains("about-page")) {
        animateAboutPage();
    } else if (body.classList.contains("services-page")) {
        animateServicesPage();
    } else if (body.classList.contains("contact-page")) {
        animateContactPage();
    }

    // Reusable Animation Functions
    function animateHeroSection() {
        gsap.from(".hero-content h2", {
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
        });

        gsap.from(".hero-content h1", {
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 1,
            ease: "power2.out",
        });

        gsap.from(".hero-content p", {
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 1.5,
            ease: "power2.out",
        });

        gsap.from(".hero-content .get-start", {
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 2,
            ease: "power2.out",
        });

        // Add a colorful background animation
        gsap.to(".hero-background", {
            background: "linear-gradient(45deg, #6a11cb, #2575fc, #6a11cb)",
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "linear",
        });
    }

    function animateHomePage() {
        // Areas of Expertise Animation
        gsap.from(".area-container h1", {
            scrollTrigger: {
                trigger: ".area-container",
                start: "top 80%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(".area-container p", {
            scrollTrigger: {
                trigger: ".area-container",
                start: "top 70%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
        });

        gsap.from(".card", {
            scrollTrigger: {
                trigger: ".area-container",
                start: "top 70%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
            onComplete: () => {
                gsap.set(".card", { opacity: 1, y: 0 });
            },
        });

        // Add colorful hover effects to cards
        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    background: "linear-gradient(45deg,rgb(113, 25, 207),rgb(45, 121, 253))",
                    color: "#fff",
                    duration: 0.5,
                    ease: "power2.out",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    background: "#fff",
                    color: "#333",
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        });

        // Tagline Section Animation
        gsap.from(".logo-tagline h1", {
            scrollTrigger: {
                trigger: ".tag-container",
                start: "top 80%",
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(".tagline", {
            scrollTrigger: {
                trigger: ".tag-container",
                start: "top 70%",
            },
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
        });

        gsap.from(".buttons", {
            scrollTrigger: {
                trigger: ".tag-container",
                start: "top 60%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            ease: "power2.out",
        });

        // Testimonials Animation
        gsap.from(".testimonials h2", {
            scrollTrigger: {
                trigger: ".testimonials",
                start: "top 80%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(".testimonial-cards", {
            scrollTrigger: {
                trigger: ".testimonials",
                start: "top 70%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
        });
    }

    function animateAboutPage() {
        // Purpose Section Animation
        gsap.from(".purpose-container h1", {
            scrollTrigger: {
                trigger: ".purpose-container",
                start: "top 80%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(".purpose-container h2", {
            scrollTrigger: {
                trigger: ".purpose-container",
                start: "top 70%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
        });

        gsap.from(".purpose-container img", {
            scrollTrigger: {
                trigger: ".purpose-container",
                start: "top 60%",
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(".purpose-container .quote", {
            scrollTrigger: {
                trigger: ".purpose-container",
                start: "top 60%",
            },
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
        });

        // Timeline Section Animation
        gsap.from(".timeline-container h1", {
            scrollTrigger: {
                trigger: ".timeline-container",
                start: "top 80%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(".timeline-item", {
            scrollTrigger: {
                trigger: ".timeline-container",
                start: "top 70%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
        });

        // Call to Action Animation
        gsap.from(".cta h2", {
            scrollTrigger: {
                trigger: ".cta",
                start: "top 80%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(".cta p", {
            scrollTrigger: {
                trigger: ".cta",
                start: "top 70%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
        });

        gsap.from(".cta-button", {
            scrollTrigger: {
                trigger: ".cta",
                start: "top 60%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            ease: "power2.out",
        });
    }

    function animateContactPage() {
        // Contact Form Animation
        gsap.from(".contact-form-container h1", {
            scrollTrigger: {
                trigger: ".contact-form-container",
                start: "top 80%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(".form-group", {
            scrollTrigger: {
                trigger: ".contact-form-container",
                start: "top 70%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
        });

        gsap.from(".submit-button", {
            scrollTrigger: {
                trigger: ".contact-form-container",
                start: "top 60%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            ease: "power2.out",
        });

        // Contact Info Animation
        gsap.from(".info-card", {
            scrollTrigger: {
                trigger: ".contact-info-container",
                start: "top 70%", // Animation starts when the top of the container is 70% in view
                end: "bottom 20%", // Animation ends when the bottom of the container is 20% in view
                markers: false, // Enable markers for debugging (remove in production)
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3, // Stagger effect for each card
            ease: "power2.out",
            onComplete: () => {
                gsap.set(".info-card", { opacity: 1, y: 0 }); // Ensure cards are fully visible after animation
            },
        });

    }

    function animateServicesPage() {
        // Services Grid Section Animation
        gsap.from(".area-container h1", {
            scrollTrigger: {
                trigger: ".area-container",
                start: "top 80%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(".area-container p", {
            scrollTrigger: {
                trigger: ".area-container",
                start: "top 70%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
        });

        // Services Cards Animation
        gsap.from(".card", {
            scrollTrigger: {
                trigger: ".area-container",
                start: "top 70%", // Animation starts when the top of the container is 70% in view
                end: "bottom 20%", // Animation ends when the bottom of the container is 20% in view
                markers: false, // Enable markers for debugging (remove in production)
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3, // Stagger effect for each card
            ease: "power2.out",
            onComplete: () => {
                gsap.set(".card", { opacity: 1, y: 0 }); // Ensure cards are fully visible after animation
            },


        });
        // Add colorful hover effects to cards
        document.querySelectorAll(".card").forEach((cards) => {
            cards.addEventListener("mouseenter", () => {
                gsap.to(cards, {
                    background: "linear-gradient(45deg,rgb(113, 25, 207),rgb(45, 121, 253))",
                    color: "#fff",
                    duration: 0.5,
                    ease: "power2.out",
                });
            });

            cards.addEventListener("mouseleave", () => {
                gsap.to(cards, {
                    background: "#fff",
                    color: "#333",
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        });


        // Call to Action Animation
        gsap.from(".cta h2", {
            scrollTrigger: {
                trigger: ".cta",
                start: "top 80%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(".cta p", {
            scrollTrigger: {
                trigger: ".cta",
                start: "top 70%",
            },
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
        });

        gsap.from(".cta-button", {
            scrollTrigger: {
                trigger: ".cta",
                start: "top 60%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            ease: "power2.out",
        });
    }
});