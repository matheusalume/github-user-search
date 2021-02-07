import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

export const makeRequest = (username: string) => {
    return axios({method: 'GET', url: `${BASE_URL}${username}`});
}