gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    durations: 1,
    rotate: 360,

})

gsap.from("#page2 #box", {
    scale: 0,
    // delay: 1,
    durations: 1,
    rotate: 360,
    // scrollTrigger: "#page2 #box", // for direct add sortway
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 30%",
    }

})

// page2 
gsap.from("#page2 h1", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,

    }

})

gsap.from("#page2 p", {
    opacity: 0,
    duration: 2,
    x: -500,
    scrollTrigger: {
        trigger: "#page2 p",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,

    }

})

gsap.from("#page3 #box", {
    scale: 0,
    delay: 1,
    durations: 1,
    rotate: 360,

})


