import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-400">GSAP Animations</h1>
                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
                {/* Navigation Menu */}
                <nav className={`md:flex ${isMenuOpen ? "block" : "hidden"} md:space-x-6`}>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                        <li>
                            <Link to="/" className="hover:text-blue-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/rotating-box" className="hover:text-blue-400 transition-colors">
                                Rotating Box
                            </Link>
                        </li>
                        <li>
                            <Link to="/ref-based-animation" className="hover:text-blue-400 transition-colors">
                                Ref Animation
                            </Link>
                        </li>
                        <li>
                            <Link to="/multiple-animations" className="hover:text-blue-400 transition-colors">
                                Multiple Animations
                            </Link>
                        </li>
                        <li>
                            <Link to="/interactive-animation" className="hover:text-blue-400 transition-colors">
                                Interactive
                            </Link>
                        </li>
                        <li>
                            <Link to="/random-animation" className="hover:text-blue-400 transition-colors">
                                Random Animation
                            </Link>
                        </li>
                        <li>
                            <Link to="/context-safe-animation" className="hover:text-blue-400 transition-colors">
                                Context Safe
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;