import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ContextSafeAnimation() {
    const boxRef = useRef();
    const { contextSafe } = useGSAP();

    const rotateBox = contextSafe(() => {
        gsap.to(boxRef.current, {
            rotate: 360,
            duration: 2,
            ease: "power2.out",
            repeat: -1,
            yoyo: true,
        });
    });

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-8">
            <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
                onClick={rotateBox}
            >
                Rotate Box
            </button>
            <div
                ref={boxRef}
                className="w-32 h-32 bg-pink-500 rounded-lg shadow-lg"
            ></div>
        </div>
    );
}

export default ContextSafeAnimation;