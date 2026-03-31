import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import Semiconductors from "./pages/Semiconductors";
import Circuits from "./pages/Circuits";
import Embedded from "./pages/Embedded";
import Arduino from "./pages/Arduino";
import STM32 from "./pages/STM32";
import Resources from "./pages/Resources";
import { useEffect, useState } from "react";

function App() {
  

  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/semiconductors" element={<Semiconductors />} />
            <Route path="/circuits" element={<Circuits />} />
            <Route path="/embedded" element={<Embedded />} />
            <Route path="/arduino" element={<Arduino />} />
            <Route path="/stm32" element={<STM32 />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;