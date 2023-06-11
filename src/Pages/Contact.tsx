import type { FC } from "react";

import { useState } from "react";

import { Nav } from "../components";

import "../styles/Contact.scss";

const MenuImg = new URL("../../assets/menu.png", import.meta.url).href;

const Contact: FC = (): JSX.Element => {
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
                <div className="contact">
                    <h1>Contact</h1>
                    <div className="contact_content">
                        <p>
                            <span>Tel:</span> 829-450-5297
                        </p>
                        <p>
                            <span>Email:</span> jondydiaz@hotmail.com
                        </p>
                        <p>
                            <span>GitHub:</span>
                            <a href="//github.com/jadenaxel">
                                github.com/jadenaxel
                            </a>
                        </p>
                        <p>
                            <span>LinkedIn:</span>
                            <a href="//www.linkedin.com/in/jadenaxel/">
                                jadenaxel
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
