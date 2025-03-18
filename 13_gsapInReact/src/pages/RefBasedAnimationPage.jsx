import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import RefBasedAnimation from "../components/RefBasedAnimation";

function RefBasedAnimationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-5">
                <h1 className="text-3xl font-bold mb-5">Ref-Based Animation</h1>
                <RefBasedAnimation />
            </main>
            <Footer />
        </div>
    );
}

export default RefBasedAnimationPage;