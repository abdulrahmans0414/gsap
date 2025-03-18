import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import RotatingBox from "../components/RotatingBox";

function RotatingBoxPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-5">
                <h1 className="text-3xl font-bold mb-5">Rotating Box Animation</h1>
                <RotatingBox />
            </main>
            <Footer />
        </div>
    );
}

export default RotatingBoxPage;