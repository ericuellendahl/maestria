import { useState } from "react";

const listRender = () => {
  const [list] = useState(["Eric", "Pedro", "Josias", "Maria"]);

  const [user, setUser] = useState([
    { id: 1, name: "Eric", age: 10 },
    { id: 2, name: "Pedro", age: 11 },
    { id: 3, name: "Josias", age: 12 },
    { id: 4, name: "Maria", age: 21 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    setUser(user.filter((user) => randomNumber !== user.id));
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div>
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={deleteRandom}>Deletar da lista</button>
      </div>
    </div>
  );
};

export default listRender;
