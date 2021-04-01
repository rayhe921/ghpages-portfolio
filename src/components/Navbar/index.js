import React from "react";
import "./style.css";

function Navbar(props) {

  return (
    <div id="content">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="align-content-center">
            <button type="button" className="btn btn-secondary"
              onClick={props.onClick}
              data-toggle={props.dataToggle}
              data-target={props.dataTargetID}>
                <img src={props.icon} alt={props.alt}></img>
                </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
