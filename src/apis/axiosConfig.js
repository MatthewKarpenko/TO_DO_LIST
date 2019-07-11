import axios from 'axios';

export default axios.create({
    baseURL: 'http://159.89.96.181',
    headers: {"Authorization": "Bearer tk25nfhzce216itz16njk1rwyueoroipirot"}
})