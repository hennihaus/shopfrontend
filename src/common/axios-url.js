import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:4201/`
});

export default instance;
