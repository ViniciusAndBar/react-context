import { useContext } from "react";
import Contexto from "../contexts/Contexto";

function C(){
    const {nome,idade} = useContext(Contexto);
    return <div>Nome: {nome} Idade: {idade} </div>;
}

export default C;