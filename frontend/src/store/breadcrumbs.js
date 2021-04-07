const store = {
    namespaced: true,
    state: {
        items: [],
    },
    mutations: {
        update(state, items) {
            state.items = items;
        },
    },
    getters: {
        items: (state) => state.items,
    },
    actions: {
        update({ commit }, items) {
            commit('update', items);
        },
    },
};

export default store;
