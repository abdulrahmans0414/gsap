var initialPath = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`

const string = document.querySelector("#string")

string.addEventListener("mouseenter", (dets) => {
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 0.3,
        ease: "power3.inOut"
    })

})
string.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.8,
        ease: "elastic.out(1.0.2)"
    })

})


