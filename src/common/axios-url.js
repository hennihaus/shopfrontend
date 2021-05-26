import axios from "axios";

const backendHostname = process.env.REACT_APP_BACKEND_HOST || 'Localhost';
const backendPort = process.env.REACT_APP_BACKEND_PORT || 3005;

const instance = axios.create({
    baseURL: `http://${backendHostname}:${backendPort}/`
});

export default instance;
