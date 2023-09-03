import type { FC } from "react";

import { useState } from "react";

import "../styles/menu.scss";

const menuItem: any = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About Me",
        link: "/about",
    },
    {
        name: "Skills",
        link: "/skills",
    },
    {
        name: "Portfolio",
        link: "/portfolio",
    },
    {
        name: "Contact Me",
        link: "/contact",
    },
];

const BurgerMenu: FC = (props: any): JSX.Element => {
    const [menu, setMenu] = useState<boolean>(false);

    const menuClass: any = menu ? { left: 0 } : { left: "-270px" };
    const classButton: any = menu ? { left: "240px" } : { left: 0 };

    return (
        <>
            <nav className="navigation" style={menuClass}>
                <ul>
                    {menuItem.map((item: any, i: number) => {
                        return (
                            <li key={i}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div
                className="burgerMenu"
                onClick={(): void => setMenu((prev: boolean) => !prev)}
                style={classButton}
            >
                {props.children}
                <img src="/menu.png" alt="Burger Menu" />
            </div>
        </>
    );
};

export default BurgerMenu;
