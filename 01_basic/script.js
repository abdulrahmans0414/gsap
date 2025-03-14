gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    ease: "elastic.out(1, 1)",
    repeat: -1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%",
    scale: 0.5,
    yoyo: true
})

gsap.from("#box2", {
    x: 500,
    y: 200,
    duration: 2,
    delay: 3,
    ease: "elastic.out(1, 1)",
    repeat: -1,
    rotate: 360,
    backgroundColor: "purple",
    borderRadius: "50%",
    scale: 0.5,
    yoyo: true
})

gsap.from("h1", {
    opacity: 0,
    duration: 2,
    x: 30,
    delay: 1,
    color: "purple",
    stagger: 1,



})

