import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import RandomAnimation from "../components/RandomAnimation";

function RandomAnimationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-5">
                <h1 className="text-3xl font-bold mb-5">Random Animation</h1>
                <RandomAnimation />
            </main>
            <Footer />
        </div>
    );
}

export default RandomAnimationPage;