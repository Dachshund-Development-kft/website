import axios from 'axios';

const team = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        localStorage.removeItem('token');
        return false;
    }

    try {
        const response = await axios.get('https://papi.dachats.online/api/team', {
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

export default team;