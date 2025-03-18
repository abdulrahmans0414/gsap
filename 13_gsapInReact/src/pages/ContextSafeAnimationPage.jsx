import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ContextSafeAnimation from "../components/ContextSafeAnimation";

function ContextSafeAnimationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-5">
                <h1 className="text-3xl font-bold mb-5">Context Safe Animation</h1>
                <ContextSafeAnimation />
            </main>
            <Footer />
        </div>
    );
}

export default ContextSafeAnimationPage;