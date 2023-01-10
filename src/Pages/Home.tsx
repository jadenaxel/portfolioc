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
                <div className="home">
                    <div className="home-presentation">
                        <h1 className="">
                            Yonderi
                            <span>Diaz</span>
                            <span>Rivera</span>
                        </h1>
                        <img src="/assets/profile.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
