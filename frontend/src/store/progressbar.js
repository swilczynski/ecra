const store = {
    namespaced: true,
    state: {
        visible: false,
    },
    mutations: {
        show(state) {
            state.visible = true;
        },
        hide(state) {
            state.visible = false;
        },
    },
    getters: {
        visible: (state) => state.visible,
    },
    actions: {
        show({ commit }) {
            commit('show');
        },
        hide({ commit }) {
            commit('hide');
        },
    },
};

export default store;
