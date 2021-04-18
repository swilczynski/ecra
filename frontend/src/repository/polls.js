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

function insert(poll) {
    return axios.post(`${apiUrl}/${endpoint}`, poll);
}

function update(poll) {
    return axios.put(`${apiUrl}/${endpoint}`, poll);
}

function remove(id) {
    return axios.delete(`${apiUrl}/${endpoint}/${id}`);
}

export {
    getAll,
    getById,
    insert,
    update,
    remove,
};
