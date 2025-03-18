import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function RandomAnimation() {
    const boxRef = useRef();
    const [randomX, setRandomX] = useState(0);
    const [randomRotate, setRandomRotate] = useState(0);

    useGSAP(() => {
        gsap.to(boxRef.current, {
            x: randomX,
            rotate: randomRotate,
            duration: 1,
            ease: "power2.out",
        });
    }, [randomX, randomRotate]);

    const animateRandomly = () => {
        setRandomX(gsap.utils.random(-700, 700));
        setRandomRotate(gsap.utils.random(-180, 180));
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-8">
            <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
                onClick={animateRandomly}
            >
                Random Animate
            </button>
            <div
                ref={boxRef}
                className="w-32 h-32 bg-yellow-500 rounded-lg shadow-lg"
            ></div>
        </div>
    );
}

export default RandomAnimation;