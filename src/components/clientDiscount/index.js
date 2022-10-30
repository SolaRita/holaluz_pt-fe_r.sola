import "./index.css";
import HaveDiscount from "../../aplication/useCases/haveDiscount";

export default function Discount(){
    
const discount0 = (<h3>Lo sentimos, no dispones de descuento</h3>);
const discount5 =(<h3>Descuento básico 5%</h3>);
const discount12 =(<h3>Descuento especial 12%</h3>);

// const message = (
//     if (<HaveDiscount/> = 5){return discount5}
// if (<HaveDiscount/> = 12){return discount12}
// else {return discount0})

    return(
        <div>
            
            <h2>Esta es la oferta de descuento:</h2>
            {<h4>{discount12}</h4>}
        </div>
    )
}