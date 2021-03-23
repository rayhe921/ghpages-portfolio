import React from "react";
import "./style.css";


function Sidebar(props) {
    const closeSidebar = props.closeSide ? "active" : "not-active";
    return (
        <div className="wrapper mr0">
            <nav id="sidebar" className={closeSidebar}>
                <div className="sidebar-header">
                    <h3>{props.title}</h3>
                </div>
                <ul className="list-unstyled components">
                    <p>Dummy Heading</p>
                    <li>
                        <a href="/ghpages-portfolio">About</a>
                    </li>
                    <li>
                        <a href="/ghpages-portfolio/portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Contact</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href={props.linkOne}>{props.email}</a>
                            </li>
                            <li>
                                <a href={props.linkTwo}>{props.github}</a>
                            </li>
                            <li>
                                <a href={props.linkThree}>{props.linkedIn}</a>
                            </li>
                            <li>
                                <a href={props.linkFour}>{props.resume}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Sidebar;