import React from "react";

import "./index.css";
import CanUserSubscribe from "../../aplication/useCases/canUserSubscribe/index";
import ClientsRepository from "../../infraestructure/repository/clientsRepository";


export default function ClientCard(props) {


  const youCan = (<h4>Felicidades, puedes formar parte de la revolución de los tejados!</h4>)
  const youCanNot = (<h4>Lo sentimos, de momento no cumples los requisitos.</h4>);  

  //canUserSubscribe (if (inputClientType === "house") {true} else {false}); 

let subscribeMessage = `${this.props.canSubscribe}`;

// console.log(CanUserSubscribe)

    return (
      <div>
        {/* <h3>Hola {clientsData[2].full_name},</h3> */}
        {/* <h4>{<CanUserSubscribe/> ? youCan : youCanNot}</h4> */}
        <h4>{subscribeMessage}</h4>
       
      </div>
    );
  }