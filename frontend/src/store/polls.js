import * as repository from '../repository/polls';

const defaults = {
    poll: {
        initialized: false,
        name: '',
        description: '',
        questions: [],
    },
};

const store = {
    namespaced: true,
    state: {
        polls: null,
        poll: defaults.poll,
    },
    mutations: {
        fetchAll(state, polls) {
            state.polls = polls;
        },
        fetchById(state, poll) {
            state.poll = { ...poll };
        },
        update(state, poll) {
            state.poll = { ...poll };
        },
        remove(state, id) {
            state.polls = state.polls.filter((poll) => poll._id !== id);
        },
        reset(state) {
            state.poll = defaults.poll;
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

            const polls = await repository.getAll();

            commit('fetchAll', polls.data);
            commit('progressbar/hide', null, { root: true });
        },
        async fetchById({ commit }, id) {
            commit('progressbar/show', null, { root: true });

            const poll = await repository.getById(id);

            commit('fetchById', poll.data);
            commit('progressbar/hide', null, { root: true });
        },
        async update({ commit }, poll) {
            commit('resetAll');

            commit('progressbar/show', null, { root: true });

            if ('_id' in poll) {
                const updated = await repository.update(poll);
                commit('update', updated.data);
            } else {
                const inserted = await repository.insert(poll);
                commit('update', inserted.data);
            }

            commit('progressbar/hide', null, { root: true });
        },
        async remove({ commit }, id) {
            commit('progressbar/show', null, { root: true });

            await repository.remove(id);
            commit('remove', id);

            commit('progressbar/hide', null, { root: true });
        },
    },
};

export default store;
