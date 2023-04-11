import { useState } from "react";
import useExemplo from "../hooks";
import B from "./B";

function A() {
    const { buscar } = useExemplo();
    const [entrada, setEntrada] = useState("");

    return (
        <>
            <label>CEP</label>
            <input value={entrada} onChange={(e) => setEntrada(e.target.value)} />
            <button onClick={() => buscar(entrada)}>Buscar</button>
            <B />
        </>
    )
}

export default A;