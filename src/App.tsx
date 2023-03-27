import { useState } from "react";
import A from "./components/A";
import Contexto from "./contexts/Contexto";

function App() {
  const [nome,setNome] = useState("");
  const [idade,setIdade] = useState("");

  return (
    <div>
      <div>
        <label>Nome</label>
        <input value={nome} onChange={(e)=>setNome(e.target.value)} />
      </div>
      <div>
        <label>Idade</label>
        <input value={idade} onChange={(e)=>setIdade(e.target.value)} />
      </div>
      <Contexto.Provider value={{nome,idade}}>
        <A />
      </Contexto.Provider>
    </div>
  );
}

export default App;
