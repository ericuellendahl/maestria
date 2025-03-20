import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handlename = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário");

    console.log(name, email, bio, role);

    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handlename}
            value={name}
          />
        </div>

        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        <label>
          <span>Função do Sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="">Selecione uma opção</option>
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
            <option value="viewer">Visualizador</option>
          </select>        
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
