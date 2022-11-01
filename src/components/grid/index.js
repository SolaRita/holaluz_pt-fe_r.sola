import "./index.css";
import ClientCard from "../clientCard";
import ClientsRepository from "../../infraestructure/repository/clients.json";
import "./index.css"

export default function Grid(props) {
  const inputClient = ClientsRepository[1];
  const clientName = inputClient.full_name;
  const ClientType = inputClient.building_type;
  const ClientDiscount = 12;

//CanYou message
  const youCan = (<h4>Felicidades, puedes formar parte de la revolución de los tejados!</h4>)
  const youCanNot = (<h4>Lo sentimos, de momento no cumples los requisitos.</h4>);  

  //Discount message
//const discount5 =(<h3>Además tienes un descuento básico del 5%</h3>);
const discount12 =(<h3>Además tienes un descuento especial del 12%</h3>);


  console.log(ClientsRepository)
  console.log(ClientType)

  return (
    <div>
      <ClientCard 
      full_name= {clientName}
      canUserSubscribe= {ClientType ==="house"? youCan : youCanNot}
      discount = {ClientDiscount === 12 ? discount12 : null }
      />
      
      {/* <h4>{CanUserSubscribe? <ClientDiscount/> : null}</h4> */}
    </div>
  );
}