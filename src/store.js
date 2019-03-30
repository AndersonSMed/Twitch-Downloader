import Vue from 'vue'
import VueX from 'vuex'
import twitchDao from '@/api/twitch'

Vue.use(VueX)

export default new VueX.Store({
    state: {
        loading: false,
        streamers: []
    },
    mutations: {
        setLoading (state, payload) {
            state.loading = payload
        },
        setStreamers (state, payload) {
            state.streamers = payload
        }
    },
    actions: {
        getStreamers ({ commit }, payload) {
            commit('setLoading', true)
            twitchDao.getStreamers(payload).then(response => {
                return response.json()
            })
            .then(json => {
                commit('setStreamers', json)
            })
        }
    },
    getters: {
        loading (state) {
            return state.loading
        },
        streamers (state) {
            return state.streamers
        }
    }
})