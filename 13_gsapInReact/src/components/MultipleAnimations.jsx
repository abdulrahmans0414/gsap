import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function MultipleAnimations() {
    const boxRef = useRef();

    useGSAP(() => {
        gsap.to(".multiple-box", {
            rotate: 360,
            x: 200,
            duration: 2,
            ease: "power2.out",
            repeat: -1,
            yoyo: true,
        });

        gsap.from(boxRef.current, {
            y: -200,
            opacity: 0,
            duration: 2,
            ease: "elastic.out(1, 0.5)",
            repeat: -1,
            yoyo: true,
        });
    });

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-8">
            <div className="multiple-box w-32 h-32 bg-purple-500 rounded-lg shadow-lg"></div>
            <div
                ref={boxRef}
                className="w-32 h-32 bg-orange-500 rounded-lg shadow-lg"
            ></div>
        </div>
    );
}

export default MultipleAnimations;