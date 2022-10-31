import React from "react";
import "./index.css";


export default function ClientCard(props) {
    return (
      <div>
       <h3>Hola {props.full_name}</h3>
       <h4>{props.CanUserSubscribe}</h4> 
      </div>
    );
  }