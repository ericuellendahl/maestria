import "./App.css";

import { useState, useEffect } from "react";

const url = "https://localhost:3002/products";

function App() {
  const [products, setProducts] = useState([]);

  // useEffect(async () => {
  //   const res = await fetch(url);

  //   const data = await res.json();

  //   setProducts(data);

  // },[]);

  useEffect(() => {
    fetch('http://localhost:3002/products')
      .then(response => {
        console.log('Resposta bruta:', response);
        return response.json();
      })
      .then(data => {
        console.log('Dados dos produtos:', data);
        setProducts(data);
      })
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);
  

  //console.log(products);

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
      </div>
    </>
  );
}

export default App;
