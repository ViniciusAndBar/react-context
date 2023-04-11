import { useContext } from "react";
import {Contexto} from "../contexts/Contexto";

function useExemplo(){

    return useContext(Contexto);

}
export default useExemplo;
