import type { FC } from "react";

import { useState } from "react";

import { Nav } from "../components";

import "../styles/Home.scss";

const Home: FC = (): JSX.Element => {
    const [menu, setMenu] = useState<boolean>(false);

    const setStyles = () => setMenu(!menu);

    const menuContent = menu ? { left: 0 } : { left: "-250px" };
    const burgerMenu = menu ? { marginLeft: 270 } : { marginLeft: 10 };

    return (
        <div className="page">
            <div className="navigation" style={menuContent}>
                <Nav />
            </div>
            <div className="burgerMenu" onClick={setStyles} style={burgerMenu}>
                <img src="/assets/menu.png" />
            </div>
            <div className="main">
                <div className="home">
                    <div className="home-presentation">
                        <h1>
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
