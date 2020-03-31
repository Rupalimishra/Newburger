import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-bb850.firebaseio.com/'
});

export default instance;