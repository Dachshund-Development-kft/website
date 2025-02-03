import axios from 'axios';

const getUser = async () => {
    const token = localStorage.getItem('token');

    if (token) {
        const response = await axios.get('https://papi.dachats.online/api/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.data.code === 200) {
            return true;
        } else {
            localStorage.removeItem('token');
            return false;
        }
    } else {
        localStorage.removeItem('token');
        return false;
    }
}

export default getUser;