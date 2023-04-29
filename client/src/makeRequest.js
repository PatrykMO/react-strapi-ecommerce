import axios from "axios";

export const makeRequest = axios.create({
    baseURL: import.meta.env.VITE_STRAPIAPI_URL,
    headers: {
        Authorization: 'bearer ' + import.meta.env.VITE_STRAPIAPI_TOKEN,
    }
});