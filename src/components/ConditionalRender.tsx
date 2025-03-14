import { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(true);
    const[name, setName] = useState("Teste");
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p> }
        {!x && <p>Agora x é falso</p> }
        {name == "Eric"? (
            <div>
                <p>O nome é {name}</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={()=> setName("Eric")}>Clique aqui!</button>
    </div>
  )
}

export default ConditionalRender