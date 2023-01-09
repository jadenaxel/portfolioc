import type { FC } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages";

const App: FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
