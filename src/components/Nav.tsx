import type { FC } from "react";

import { Link } from "react-router-dom";

import "../styles/Nav.scss";

const menu: any = [
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

const Nav: FC = (): JSX.Element => {
    return (
        <nav>
            <ul>
                {menu.map((item: any, i: number) => {
                    return (
                        <li key={i}>
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
export default Nav;
