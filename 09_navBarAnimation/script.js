
const menu = document.querySelector("#nav i")
const cross = document.querySelector("#full i")

// I can also write inside timeline as tl.pause() or {pause: true}
let tl = gsap.timeline()

tl.to("#full", {
    right: 0,
    duration: 0.6,

})

tl.from("#full h4", {
    x: 150,
    duration: 0.6,
    stagger: 0.28,
    opacity: 0,

})

tl.from("#full i", {
    opacity: 0,

})

tl.pause()


menu.addEventListener("click", () => {
    tl.play();
});

cross.addEventListener("click", () => {
    tl.reverse();
});