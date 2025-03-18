import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function InteractiveAnimation() {
    const [animate, setAnimate] = useState(false);

    useGSAP(() => {
        if (animate) {
            gsap.to(".interactive-box", {
                x: 400,
                rotate: 180,
                duration: 1,
                ease: "power2.out",
            });
        } else {
            gsap.to(".interactive-box", {
                x: 0,
                rotate: 0,
                duration: 1,
                ease: "power2.out",
            });
        }
    }, [animate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-8">
            <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
                onClick={() => setAnimate(!animate)}
            >
                {animate ? "Reset" : "Animate"}
            </button>
            <div className="interactive-box w-32 h-32 bg-red-500 rounded-lg shadow-lg"></div>
        </div>
    );
}

export default InteractiveAnimation;