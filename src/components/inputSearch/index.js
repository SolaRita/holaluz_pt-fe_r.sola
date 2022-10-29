import "./index.css";

import "./index.css"


export default function Form() {
    return(
        <div> 
        <fieldset>
            <h1>¿Quieres formar parte de la revolución de los tejados?</h1>
    
            <form className="search"action="#" method="post" name="calculadora descuentos" >
                <label>Introduce aquí tu numero CUPS: </label>
                <input
                    type="text"
                    name="nombre"
                    label="Name"
                    id="CUPS"
                    value="XXXXXX"
                    className="input"
                    />
                
                <button className="button">Iniciar revolución</button>
            </form>
        </fieldset>
        </div>
    )
}