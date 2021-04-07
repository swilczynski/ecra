import axios from 'axios';

const apiUrl = () => 'http://localhost:3100';

const store = {
    namespaced: true,
    state: {
        votes: [],
    },
    mutations: {
        fetchAll(state, votes) {
            state.votes = votes;
        },
    },
    getters: {
        votes: (state) => state.votes,
    },
    actions: {
        async fetchAll({ commit }) {
            const votes = await axios.get(`${apiUrl()}/votes`);
            commit('fetchAll', votes.data);
        },
    },
};

export default store;
