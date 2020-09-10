import React from 'react';

type PropsType = {
    topicClicked: (topic: string) => void;
};

export const NavBar: React.FC<PropsType> = ({ topicClicked }) => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg">
            <a className="navbar-brand" href="#">
                <img src="duxpanel.png" height={30} className="d-inline-block align-top mr-2" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={e => {
                                e.preventDefault();
                                topicClicked('intro');
                            }}>
                            Welcome
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={e => {
                                e.preventDefault();
                                topicClicked('gettingstarted');
                            }}>
                            Getting Started
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={e => {
                                e.preventDefault();
                                topicClicked('basics');
                            }}>
                            DuxPanel Basics
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup={true}
                            aria-expanded={false}>
                            Learn More
                        </a>
                        <div className="dropdown-menu">
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={e => {
                                    e.preventDefault();
                                    topicClicked('responsive');
                                }}>
                                Responsive Panels
                            </a>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={e => {
                                    e.preventDefault();
                                    topicClicked('animation');
                                }}>
                                Panel Animation
                            </a>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={e => {
                                    e.preventDefault();
                                    topicClicked('dialog');
                                }}>
                                DuxDialog
                            </a>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={e => {
                                    e.preventDefault();
                                    topicClicked('okdialog');
                                }}>
                                Ok Dialog
                            </a>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={e => {
                                    e.preventDefault();
                                    topicClicked('yesnodialog');
                                }}>
                                Yes / No Dialog
                            </a>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={e => {
                                    e.preventDefault();
                                    topicClicked('progressdialog');
                                }}>
                                Progress Dialog
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            onClick={e => {
                                e.preventDefault();
                                topicClicked('reference');
                            }}>
                            Reference
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
