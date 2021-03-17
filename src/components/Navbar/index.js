import React from "react";
import "./style.css";

function Navbar(props) {

  return (
    <div id="content">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <div className="align-content-center">
            <button type="button" className="btn btn-dark btn-outline-light"  
            onClick={props.onClick} 
            data-toggle={props.dataToggle} 
            data-target={props.dataTargetID}>
              {props.title}</button>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
