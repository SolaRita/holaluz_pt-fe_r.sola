import "./index.css";
import ClientCard from "../clientCard";
import ClientsRepository from "../../infraestructure/repository/clients.json";
import "./index.css"

export default function Grid(props) {
  const inputClient = ClientsRepository[0];
  const clientName = inputClient.full_name;
  const ClientType = inputClient.building_type;
  const ClientDiscount = 12;

//CanYou message
  const youCan = ('Felicidades, puedes formar parte de la revolución de los tejados!')
  const youCanNot = ('Lo sentimos, de momento no cumples los requisitos');  

//Discount message
//const discount5 =('Además tienes un descuento básico del 5%');
const discount12 =('Además tienes un descuento especial del 12%');


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