import type { FC } from "react";

import { Nav } from "../components";

import "../styles/About.scss";

const About: FC = (): JSX.Element => {
    return (
        <div className="page">
            <div className="navigation">
                <Nav />
            </div>
            <div className="main">
                <div className="about">
                    <h1 className="about-title">About me</h1>
                    <div className="about-desc">
                        <p>
                            Hi, my name is Yonderi Diaz. I am a Full-Stack
                            developer with 2 years of experience in the field.
                        </p>
                        <p>
                            During my career, I have acquired a wide range of
                            skills in backend and frontend technologies such as
                            Node.js, JavaScript, Express, React, React Native,
                            Next.js, and Docker.
                        </p>
                        <p>
                            I also have experience working with a variety of
                            database engines such as SQL Server, MySQL, and
                            MongoDB. I have worked on both individual and team
                            projects and have had the opportunity to develop
                            applications for external clients or companies on a
                            freelance basis.
                        </p>
                        <p>
                            I consider myself a highly skilled professional and
                            am always looking for new challenges and
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
