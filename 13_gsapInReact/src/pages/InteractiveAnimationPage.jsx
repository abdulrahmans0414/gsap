import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import InteractiveAnimation from "../components/InteractiveAnimation";

function InteractiveAnimationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-5">
                <h1 className="text-3xl font-bold mb-5">Interactive Animation</h1>
                <InteractiveAnimation />
            </main>
            <Footer />
        </div>
    );
}

export default InteractiveAnimationPage;