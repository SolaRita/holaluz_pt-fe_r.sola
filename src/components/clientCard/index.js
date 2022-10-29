import "./index.css";

export default function ClientCard() {
    const clientsData = require("../../infraestructure/repository/clients.json");
    const Terry = clientsData[2].full_name
    console.log(Terry);

    

    let canYouSubscribe;

    if (clientsData[2].building_type==="house"){
        canYouSubscribe = 'Felicidades, puedes formar parte de la revolución de los tejados!'
    }
    else {canYouSubscribe = 'Lo sentimos, de momento no cumples los requisitos.'}

    return (
      <div>
        <h3>Hola {clientsData[2].full_name},</h3>
        <h4>{canYouSubscribe}</h4>
      </div>
    );
  }