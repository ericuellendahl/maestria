import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(10);

  console.log(number);

  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15)}>Mudar variável</button>
      <div>
        <p>Valor: {number}</p>
        <button onClick={()=> setNumber(25)}>Mudar variével</button>
      </div>
    </div>
  );
};

export default ManageData;
