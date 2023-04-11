import { createContext, useState } from "react";
import { CepProps, Props } from "../types";
import Cep from "../services/Cep";

const Contexto = createContext({} as Props);


function Provider({ children }: any) {
    const [cep, setCep] = useState({} as CepProps);

    const buscar = (entrada:string) => {
        Cep.get(entrada)
            .then(r => {
                setCep(r);
                console.log(r);
            }
        );
    }

    return (
        <Contexto.Provider value={{ cep, buscar }}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };