import axios from 'axios';

const score = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        localStorage.removeItem('token');
        return false;
    }

    try {
        const response = await axios.get('https://papi.dachats.online/api/score', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.data.success) {
            return response.data;
        } else {
            localStorage.removeItem('token');
            return false;
        }
    } catch (error) {
        localStorage.removeItem('token');
        return false;
    }
}

export default score;