import { CepProps } from "../types";
import api from "./api";

class Cep{
    async get(cep:string):Promise<CepProps>{
        const {data} = await api.get(`/${cep}/json`);
        return data;
    }
}

const cep = new Cep();
export default cep;