
const main = document.querySelector("#main")
const cursor = document.querySelector("#cursor")
const imageDiv = document.querySelector("#image")


main.addEventListener("mousemove", (dets) => {
    // console.log(dets.x);
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.6,
        ease: "back.out",

    })
})

image.addEventListener("mouseenter", (dets) => {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#ffffff81"

    })
})
image.addEventListener("mouseleave", (dets) => {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"

    })
})
