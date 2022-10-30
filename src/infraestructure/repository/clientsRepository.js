import Clients from "./clients.json";

export default function ClientsRepository(){
    console.log(Clients)
    const clients = Clients; 
    const listClients = clients.map(client => <li>{}client</li>);
    return(
        <ul>{listClients}</ul>
    )
}