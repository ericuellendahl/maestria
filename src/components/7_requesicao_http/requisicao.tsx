import { useState, useEffect } from "react";
import "./requisicao.css";
import { useFetch } from "../../hooks/useFetch";

const url =
  "https://urban-invention-wvxwqjrjg5gc5vwq-3002.app.github.dev/products";

const requisicao = () => {
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price) {
      alert("Preencha todos os campos");
      return;
    }

    const newProduct = { name, price };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newProduct),
    // });
    // const data = await res.json();
    // setProducts((prevProducts) => [...prevProducts, data]);

    httpConfig(newProduct, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
              </li>
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
};

export default requisicao;
