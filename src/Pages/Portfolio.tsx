import type { FC } from "react";

import { useState } from "react";

import { Nav } from "../components";

import "../styles/Portfolio.scss";

const MenuImg = new URL("../../assets/menu.png", import.meta.url).href;
const Project1 = new URL("../../assets/pages/sellzee.png", import.meta.url)
    .href;
const Project2 = new URL("../../assets/pages/cajita.jpg", import.meta.url).href;

const Portfolio: FC = (): JSX.Element => {
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
                <img src={MenuImg} />
            </div>
            <div className="main">
                <div className="portfolio">
                    <h1>Portfolio</h1>
                    <div className="portfolio_content">
                        <a href="https://sellzee-jaden.netlify.app/">
                            <img src={Project1} alt="Sellzee" />
                        </a>
                        <a href="https://lacajita.tv/">
                            <img src={Project2} alt="La Cajita" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Portfolio;
