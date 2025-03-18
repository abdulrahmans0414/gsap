import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RotatingBoxPage from "./pages/RotatingBoxPage";
import RefBasedAnimationPage from "./pages/RefBasedAnimationPage";
import MultipleAnimationsPage from "./pages/MultipleAnimationsPage";
import InteractiveAnimationPage from "./pages/InteractiveAnimationPage";
import RandomAnimationPage from "./pages/RandomAnimationPage";
import ContextSafeAnimationPage from "./pages/ContextSafeAnimationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rotating-box" element={<RotatingBoxPage />} />
        <Route path="/ref-based-animation" element={<RefBasedAnimationPage />} />
        <Route path="/multiple-animations" element={<MultipleAnimationsPage />} />
        <Route path="/interactive-animation" element={<InteractiveAnimationPage />} />
        <Route path="/random-animation" element={<RandomAnimationPage />} />
        <Route path="/context-safe-animation" element={<ContextSafeAnimationPage />} />
      </Routes>
    </Router>
  );
}

export default App;