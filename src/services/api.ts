import axios, { AxiosInstance } from "axios";

const api:AxiosInstance = axios.create({
    baseURL:"https://viacep.com.br/ws", 
    timeout: 1000,
    headers:{
        "Content-Type":"application/json"
    }
});

export default api;