import { useContext } from "react";
import useExemplo from "../hooks";

function C(){
    const {cep} = useExemplo();
    return <div>{JSON.stringify(cep)}</div>;
}

export default C;