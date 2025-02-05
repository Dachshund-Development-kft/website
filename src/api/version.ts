import axios from 'axios';

const getVerison = async () => {
    const response = await axios.get('https://papi.dachats.online/api/news');
    const data = {
        build: response.data.data[0].sha,
        version: response.data.data[0].commit.author.date,
        author: response.data.data[0].commit.author.name,
    };

    return data;
}

export default getVerison;