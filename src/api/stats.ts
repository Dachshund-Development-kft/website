import axios from 'axios';

const getStats = async () => {
    const response = await axios.get('https://papi.dachats.online/api/stats');

    return response.data;
}

export default getStats;