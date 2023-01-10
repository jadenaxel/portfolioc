import type { FC } from "react";

import { Nav } from "../components";

import "../styles/Home.scss";

const Home: FC = (): JSX.Element => {
    return (
        <div className="page">
            <div className="navigation">
                <Nav />
            </div>
            <div className="main">
                <h1>Home</h1>
            </div>
        </div>
    );
};
export default Home;
