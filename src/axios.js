import axios from 'axios'
const instance= axios.create({
    baseURL: 'https://alumni-backend-w4yl.onrender.com'
});

export default instance;