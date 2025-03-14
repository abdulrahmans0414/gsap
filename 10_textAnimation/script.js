
function splitText() {

    var myH1 = document.querySelector("h1");
    var myH1Text = myH1.textContent;

    var splittedText = myH1Text.split("");
    var halfValue = Math.floor(splittedText.length / 2);

    var clutter = "";

    splittedText.forEach(function (element, index) {
        // console.log(element, index);
        // clutter += `<span >${element}</span>`;

        if (index < halfValue) {
            clutter += `<span class="first-half-char">${element}</span>`;
        } else {
            clutter += `<span class="second-half-char">${element}</span>`
        }

    })

    myH1.innerHTML = clutter;
}

splitText();


// gsap.from("h1 span ", {
//     duration: 0.8,
//     y: 70,
//     opacity: 0,
//     stagger: 0.1,
//     delay: 0.2,
//     ease: "elastic.out(1, 1)",
//     repeat: -1,
//     yoyo: true,
// })

gsap.from("h1 .first-half-char", {
    y: 70,
    duration: 0.8,
    delay: 0.2,
    opacity: 0,
    stagger: 0.1,
    ease: "elastic.out(1, 1)",

})

gsap.from("h1 .second-half-char", {
    y: 70,
    duration: 0.8,
    opacity: 0,
    delay: 0.2,
    stagger: -0.15,
    ease: "elastic.out(1, 1)",

})
