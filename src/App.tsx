import "./App.css";
import MyForm from "./components/5_formulario/MyForm";

function App() {
  return (
    <>
      <div className="App">
        <h2>Forms</h2>
        <MyForm
          user={{
            name: "Eric",
            email: "james.wilson@teste.com",
            bio: "Sou programador",
            role: "admin",
          }}
        ></MyForm>
      </div>
    </>
  );
}

export default App;
