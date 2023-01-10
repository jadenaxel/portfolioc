import type { FC } from "react";

import { Link } from "react-router-dom";

import "../styles/Nav.scss";

const Nav: FC = (): JSX.Element => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About Me</Link>
                </li>
                <li>
                    <Link to={"/skills"}>Skills</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact Me</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Nav;
