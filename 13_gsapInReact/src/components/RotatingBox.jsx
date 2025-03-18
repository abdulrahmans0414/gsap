import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function RotatingBox() {
    useGSAP(() => {
        gsap.to(".rotating-box", {
            rotate: 720,
            duration: 2,
            ease: "power2.out",
            repeat: -1,
            yoyo: true,
        });
    });

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="rotating-box w-40 h-40 bg-blue-500 rounded-lg shadow-lg"></div>
        </div>
    );
}

export default RotatingBox;