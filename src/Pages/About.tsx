import type { FC } from "react";

import { useState } from "react";

import { Nav } from "../components";

import "../styles/About.scss";

const About: FC = (): JSX.Element => {
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
                <div className="about">
                    <h1 className="about-title">About me</h1>
                    <div className="about-desc">
                        <p>
                            Hi, my name is Yonderi Diaz. I am a Full-Stack
                            Developer with 4 years of experience in the field.
                        </p>
                        <p>
                            During my career, I have acquired a wide range of
                            skills in backend and frontend technologies such as
                            Node.js, JavaScript, etc...
                        </p>
                        <p>
                            I also have experience working with a variety of
                            database engines such as SQL Server, MySQL, MongoDB and PostgreSQL. I have worked on both individual and team
                            projects and have had the opportunity to develop
                            applications for external clients or companies on a
                            freelance basis.
                        </p>
                        <p>
                            I consider myself a highly skilled professional and
                            I'm always looking for new challenges and
                            opportunities to continue learning and improving my
                            skills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
