import type { FC } from "react";

import { useState } from "react";

import { Nav } from "../components";

import "../styles/Portfolio.scss";

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
                <img src="/assets/menu.png" />
            </div>
            <div className="main">
                <div className="portfolio">
                    <h1>Portfolio</h1>
                    <div className="portfolio_content">
                        <h2>Pagina en construcción</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Portfolio;
