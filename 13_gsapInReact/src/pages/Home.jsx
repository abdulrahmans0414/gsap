import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center p-5">
                <h1 className="text-4xl font-bold mb-5">Welcome to GSAP Animations</h1>
                <p className="text-lg mb-8">Explore different GSAP animations in React.</p>
                <Link to="/rotating-box" className="px-6 py-2 bg-blue-500 text-white rounded-lg">
                    Get Started
                </Link>
            </main>
            <Footer />
        </div>
    );
}

export default Home;