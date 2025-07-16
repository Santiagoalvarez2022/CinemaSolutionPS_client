import axios from "axios"

const baseURL = import.meta.env.MODE === "development" ? import.meta.env.VITE_MOCK_API : import.meta.env.VITE_API;

const API = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    }});


export default API

