import "./index.css";
import CanUserSubscribe from "../../aplication/useCases/canUserSubscribe/index";

export default function ClientCard() {
    
const youCan = (<h4>Felicidades, puedes formar parte de la revolución de los tejados!</h4>)
const youCanNot = (<h4>Lo sentimos, de momento no cumples los requisitos.</h4>)

// console.log(CanUserSubscribe)
    return (
      <div>
        {/* <h3>Hola {clientsData[2].full_name},</h3> */}
        <h4>{CanUserSubscribe ? youCan : youCanNot}</h4>
      </div>
    );
  }