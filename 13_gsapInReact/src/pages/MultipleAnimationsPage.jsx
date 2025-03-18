import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MultipleAnimations from "../components/MultipleAnimations";

function MultipleAnimationsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-5">
                <h1 className="text-3xl font-bold mb-5">Multiple Animations</h1>
                <MultipleAnimations />
            </main>
            <Footer />
        </div>
    );
}

export default MultipleAnimationsPage;