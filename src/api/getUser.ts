import axios from 'axios';

const getUser = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        localStorage.removeItem('token');
        return false;
    }

    try {
        const response = await axios.get('https://papi.dachats.online/api/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response.data.success);

        if (response.data.success) {
            return true;
        } else {
            localStorage.removeItem('token');
            return false;
        }
    } catch (error) {
        localStorage.removeItem('token');
        return false;
    }
}

export default getUser;