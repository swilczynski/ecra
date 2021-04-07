import axios from 'axios';

const apiUrl = () => 'http://localhost:3100';

const store = {
    namespaced: true,
    state: {
        polls: [],
        poll: {},
    },
    mutations: {
        fetchAll(state, polls) {
            state.polls = polls;
        },
        fetchById(state, poll) {
            state.poll = { ...poll, loaded: true };
        },
        addQuestion(state, question = {}) {
            const poll = { ...state.poll };

            state.poll = {
                ...poll, questions: [...poll.questions || [], question],
            };
        },
        deleteQuestion(state, index = {}) {
            const poll = { ...state.poll };

            state.poll = {
                ...poll, questions: poll.questions.filter((question, i) => i !== index),
            };
        },
        updateQuestion(state, question) {
            const poll = { ...state.poll };

            poll.questions[question.index] = question;

            state.poll = { ...poll };
        },
        reset(state) {
            state.poll = {};
        },
        resetAll(state) {
            state.polls = [];
        },
    },
    getters: {
        polls: (state) => state.polls,
        poll: (state) => state.poll,
    },
    actions: {
        async fetchAll({ commit }) {
            commit('reset');

            commit('progressbar/show', null, { root: true });

            const polls = await axios.get(`${apiUrl()}/items`);

            commit('fetchAll', polls.data);
            commit('progressbar/hide', null, { root: true });
        },
        async fetchById({ commit }, id) {
            commit('progressbar/show', null, { root: true });

            const poll = await axios.get(`${apiUrl()}/items/${id}`);

            commit('fetchById', poll.data);
            commit('progressbar/hide', null, { root: true });
        },
        async updatePoll({ commit, state }) {
            commit('resetAll');

            commit('progressbar/show', null, { root: true });
            console.log(state.poll);
            await axios.put(`${apiUrl()}/items`, state.poll);

            commit('progressbar/hide', null, { root: true });
        },
        addQuestion({ commit }, question) {
            commit('addQuestion', question);
        },
        deleteQuestion({ commit }, index) {
            commit('deleteQuestion', index);
        },
        updateQuestion({ commit }, question) {
            commit('updateQuestion', question);
        },
    },
};

export default store;
