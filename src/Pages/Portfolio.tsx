import type { FC } from "react";

import { Nav } from "../components";

import "../styles/Portfolio.scss";

const Portfolio: FC = (): JSX.Element => {
    return (
        <div className="page">
            <div className="navigation">
                <Nav />
            </div>
            <div className="main">
                <h1>Portfolio</h1>
            </div>
        </div>
    );
};
export default Portfolio;
