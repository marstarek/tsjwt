import axios from 'axios';
 const ClientAxios = axios.create({
     baseURL: 'https://api.escuelajs.co/api/v1/auth/login',
     timeout: 1000,
     headers: {'X-Custom-Header': 'foobar'}
 });
 export default ClientAxios