import React from "react";
import "./index.css";


export default function ClientCard(props) {
    return (
      <div className="clientCard">
       <h3>Hola {props.full_name}</h3>
       <p>{props.canUserSubscribe}</p>
       <p>{props.discount}</p>
      </div>
    );
  }