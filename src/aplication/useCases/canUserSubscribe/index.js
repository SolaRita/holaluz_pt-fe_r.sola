
// const clientsData = require("../../../infraestructure/repository/clients.json");
// const inputClient = clientsData[2];
// const inputClientType = clientsData[2].building_type;
// console.log(inputClient);

import ClientCard from "../../../components/clientCard";
const youCan = (<h4>Felicidades, puedes formar parte de la revolución de los tejados!</h4>)
const youCanNot = (<h4>Lo sentimos, de momento no cumples los requisitos.</h4>); 


export default function CanUserSubscribe (){
    const clientsData = require("../../infraestructure/repository/clients.json");
  const inputClient = clientsData[2];
  const inputClientType = clientsData[2].building_type;
  console.log(inputClient); 
  {if (inputClientType === "house") {true} else {false}};

return(
    <div>
        <ClientCard CanUserSubscribe = youCan/>
    </div>
)
} 


   
    

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       inputClientType:"house",
    //       authorized: false
    //     };
    //     this.authorize = this.authorize.bind(this);
    //   };
    
    //   authorize(e) {
    //     const inputClientType = e.target.querySelector(
    //       'input[type="inputClientType"]').value;
    //     const auth = inputClientType === this.state.inputClientType;
    //     this.setState({
    //       authorized: auth
    //     });
    //   }
    

