
const main = document.querySelector("#main")
const cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", (dets) => {
    // console.log(dets.x);
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })


})
