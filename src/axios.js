import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/clone-64fbc/us-central1/api"//The Api (cloud function ) URL
});

export default instance 