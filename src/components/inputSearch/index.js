import "./index.css";
import { useRef } from "react";


export default function InputSearch() {
    
    const inputCUPS = useRef(null);
    
    function handleSearch(){
        console.log(inputCUPS.current.value);
    }


    return(
        <div className="searchCard"> 
        <fieldset>
            <h1>¿Quieres formar parte de la revolución de los tejados?</h1>
    
            <form className="search" method="post" name="calculadora descuentos" >
                <label>Introduce aquí tu numero CUPS: </label>
                <input
                    ref={inputCUPS}
                    type="text"
                    name="nombre"
                    label="Name"
                    id="CUPS"
                    placeholder="XXXX"
                    className="input"
                    />
                
                <button onClick={handleSearch} className="button">Iniciar revolución</button>

            </form>
        </fieldset>
        </div>
    )
}