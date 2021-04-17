import axios from 'axios';

import config from '../config';

const { apiUrl } = config;
const endpoint = 'polls';

function getAll() {
    return axios.get(`${apiUrl}/${endpoint}`);
}

function getById(id) {
    return axios.get(`${apiUrl}/${endpoint}/${id}`);
}

function save(poll) {
    return axios.put(`${apiUrl}/${endpoint}`, poll);
}

export {
    getAll,
    getById,
    save,
};
