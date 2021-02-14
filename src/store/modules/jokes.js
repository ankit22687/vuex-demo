import joke from "@/api/joke";

export default {
    namespaced: true,

    state: {
        items: [],
    },

    getters: {
        getLocalStorageJokes(state) {
            if (localStorage.getItem('jokes')) {
                state.items = JSON.parse(localStorage.getItem('jokes'));
            }
        }
    },

    mutations: {
        PUSH_JOKE(state, joke) {
            state.items.push(joke);
            localStorage.setItem('jokes', JSON.stringify(state.items));
        }
    },

    actions: {

        fetchJoke({ commit }) {
            joke.fetchJoke(joke => {
                commit('PUSH_JOKE', joke)
            })
        },

        removeAllJokes({ state }) {
            window.localStorage.removeItem('vuex');
            state.items = [];
        },
    }
}
