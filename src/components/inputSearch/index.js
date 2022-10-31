import "./index.css";
import { useRef } from "react";


export default function InputSearch() {
    
    const inputCUPS = useRef(null);
    
 


    return(
        <div className="searchCard"> 
        <fieldset>
            <h1>¿Quieres formar parte de la revolución de los tejados?</h1>
    
            <form onSubmit={ev => {
                ev.preventDefault(); 
                console.log(ev.target.cups.value)}}
                className="search" method="post" name="calculadora descuentos" >

                <label>Introduce aquí tu numero CUPS: </label>
                <input
                    ref={inputCUPS}
                    autocompleate = 'off'
                    type="text"
                    name="cups"
                    label="Name"
                    id="CUPS"
                    placeholder="XXXX"
                    className="input"
                    />
                
                <button className="button" type='submit'>Iniciar revolución</button>

            </form>
        </fieldset>
        </div>
    )
}