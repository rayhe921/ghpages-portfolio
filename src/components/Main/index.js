import React from "react";
import "./style.css";

function Main(props) {
    const toggleMenu = props.toggleMenu ? "collapsed" : "main";
    return (
        <main className={toggleMenu}>
            {props.children}
        </main>
    );
}

export default Main;