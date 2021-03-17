import React from "react";
import "./style.css";

function Collection(props) {
  return (
    <div className="collection with-header">
    <li className="collection-header"><h4>{props.header}</h4></li>
    <a href={props.linkOne} className="collection-item">{props.email}</a>
    <a href={props.linkTwo} target="_blank" rel="noopener noreferrer" className="collection-item">{props.github}</a>
    <a href={props.linkThree} target="_blank" rel="noopener noreferrer" className="collection-item">{props.linkedIn}</a>
    <a href={props.linkFour} target="_blank" rel="noopener noreferrer" className="collection-item">{props.resume}</a>
  </div>
  );
}

export default Collection;
