const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>Detalhes para tirar a CNH</h2>
      {user.map((u) => (
        <ul key={u.id}>
          <li>
            {" "}
            <strong>Nome:</strong> {u.name}
          </li>
          <li>Idade: {u.age}</li>
          <li>Profissão: {u.profession}</li>
          {u.age >= 18 ? (
            <li>Você pode tirar</li>
          ) : (
            <li>Você não pode tirar</li>
          )}
        </ul>
      ))}
    </div>
  );
};

export default UserDetails;
