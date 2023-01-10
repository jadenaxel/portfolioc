import type { FC } from "react";

import { Nav } from "../components";

import "../styles/Contact.scss";

const Contact: FC = (): JSX.Element => {
    return (
        <div className="page">
            <div className="navigation">
                <Nav />
            </div>
            <div className="main">
                <h1>Contact</h1>
            </div>
        </div>
    );
};
export default Contact;
