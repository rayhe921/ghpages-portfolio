import React from "react";
import "./style.css";

function VertCard(props) {
  return (
    <div className="card vcard">
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title title-style">{props.title}</h5>
        <p className="card-text">{props.summary}</p>
        <div className="button-ori">
        <a href={props.githubLink} className="btn btn-primary">Github Link</a>
        <a href={props.projectLink} className="btn btn-primary">Project Link</a>
        </div>
      </div>
    </div>

  );
}

export default VertCard;
