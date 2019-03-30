import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
    state: {
        loading: false
    },
    mutations: {
        setLoading ({ state }, payload) {
            state.loading = payload
        }
    },
    actions: {

    },
    getters: {
        loading ({ state }) {
            return state.loading
        }
    }
})