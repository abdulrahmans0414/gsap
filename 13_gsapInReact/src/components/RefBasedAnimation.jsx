import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function RefBasedAnimation() {
    const boxRef = useRef();

    useGSAP(() => {
        gsap.from(boxRef.current, {
            x: -800,
            opacity: 0,
            duration: 1.5,
            ease: "bounce.out",
            repeat: -1,
            yoyo: true,
        });
    });

    return (
        <div className="flex items-center justify-center h-screen">
            <div
                ref={boxRef}
                className="w-42 h-42 bg-green-500 rounded-lg shadow-lg"
            ></div>
        </div>
    );
}

export default RefBasedAnimation;