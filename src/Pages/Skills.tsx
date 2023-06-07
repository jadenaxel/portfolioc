import type { FC } from "react";

import { useState } from "react";

import { Nav } from "../components";

import "../styles/Skills.scss";

const Skills: FC = (): JSX.Element => {
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
                <div className="skills">
                    <h1>Skills</h1>

                    <div className="skills-frontend">
                        <h2>Frontend</h2>
                        <ul>
                            <li>HTML5</li>
                            <li>PUG</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                            <li>JavaScript</li>
                            <li>NextJS</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="skills-backend">
                        <h2>Backend</h2>
                        <ul>
                            <li>NodeJS</li>
                            <li>DenoJS</li>
                            <li>TypeScript</li>
                            <li>Express</li>
                            <li>NestJS</li>
                            <li>GRAPHQL</li>
                            <li>API Rest</li>
                            <li>Docker</li>
                            <li>SQL Server</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="skills-mobile">
                        <h2>Mobile</h2>
                        <ul>
                            <li>React Native</li>
                            <li>Expo</li>
                        </ul>
                    </div>
                    <ul></ul>
                </div>
            </div>
        </div>
    );
};
export default Skills;
