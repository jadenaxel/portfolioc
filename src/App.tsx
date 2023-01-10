import type { FC } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Skills, Portfolio, Contact } from "./Pages";

const App: FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
