import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fir-login-c2e2d.firebaseio.com/'
});

export default instance;