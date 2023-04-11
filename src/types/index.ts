export interface Props{
    cep: CepProps;
    buscar: Function;
}

export interface CepProps {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string; 
    siafi: string;
}