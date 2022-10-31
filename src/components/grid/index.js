import "./index.css";
import ClientCard from "../clientCard";
import ClientsRepository from "../../infraestructure/repository/clients.json";
import "./index.css"

export default function Grid(props) {
  const inputClient = ClientsRepository[1];
  const clientName = inputClient.full_name;
  const inputClientType = inputClient.building_type;

  const youCan = (<h4>Felicidades, puedes formar parte de la revolución de los tejados!</h4>)
  const youCanNot = (<h4>Lo sentimos, de momento no cumples los requisitos.</h4>);  

  console.log(ClientsRepository)
  console.log(inputClientType)
  return (
    <div className="grid">
      <ClientCard 
      full_name= {clientName}
      CanUserSubscribe= {inputClientType==="house"? youCan : youCanNot}
      />
      
      {/* <h4>{CanUserSubscribe? <ClientDiscount/> : null}</h4> */}
    </div>
  );
}