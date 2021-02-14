// import dependency to handle HTTP request to our back end
import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import jokes from './modules/jokes'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});


//load Vuex
Vue.use(Vuex);

//export store module
export default new Vuex.Store({
    modules: {
        jokes
    },

    state: { // = data

    },

    getters: { // = computed properties

    },

    actions,

    mutations: {

    },
    plugins: [vuexLocal.plugin]
})