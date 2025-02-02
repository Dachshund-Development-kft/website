import axios from 'axios';

const login = async (username: string, password: string) => {
    try {
        const response = await axios.post('https://papi.dachats.online/api/login', {
            username,
            password
        });
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export default login;