import { useState } from "react";
import A from "./components/A";
import { Provider } from "./contexts/Contexto";
import Cep from "./services/Cep"

function App() {

  return (
    <Provider>
      <A/>
    </Provider>
  );
}

export default App;
