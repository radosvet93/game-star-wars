import axios from 'axios';

const swDomain = 'https://swapi.co/api';

axios.defaults.timeout = 10000;

export const getCharacters = () => axios.get(`${swDomain}/people/`).then(d => d.data).then(r => r.results)
export const getStarships = () => axios.get(`${swDomain}/starships/`).then(d => d.data).then(r => r.results)