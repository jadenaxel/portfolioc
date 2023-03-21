import type { FC } from "react";

import { useState } from "react";

import { Nav } from "../components";

import "../styles/Contact.scss";

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
                <img src="/assets/menu.png" />
            </div>
            <div className="main">
                <div className="contact">
                    <h1>Contact</h1>
                    <div className="contact_content">
                        <p>Tel: 829-450-5297</p>
                        <p>Email: jondydiaz@hotmail.com</p>
                        <p>
                            GitHub:{" "}
                            <a href="//github.com/jadenaxel">
                                github.com/jadenaxel
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
