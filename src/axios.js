import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-2f37e/us-central1/api' // API url
});

export default instance;