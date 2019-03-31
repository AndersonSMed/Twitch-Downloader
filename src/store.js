import Vue from 'vue'
import VueX from 'vuex'
import twitchDao from '@/api/twitch'

Vue.use(VueX)

export default new VueX.Store({
    state: {
        loading: false,
        // Stores all the streamers
        streamers: [],
        // Stores all the videos of a specified streamer
        clips: [],
        // Stores the selected streamer
        streamer: null
    },
    mutations: {
        setLoading (state, payload) {
            state.loading = payload
        },
        setStreamers (state, payload) {
            state.streamers = payload
        },
        setClips (state, payload) {
            state.clips = payload
        },
        setStreamer (state, payload) {
            state.streamer = payload
        }
    },
    actions: {
        // Get all the streamers based in a query and limit
        getStreamers ({ commit }, payload) {
            commit('setLoading', true)
            twitchDao.getStreamers(payload.query, payload.limit).then(response => {
                commit('setLoading', false)
                return response.json()
            })
            .then(json => {
                commit('setStreamers', json.channels)
            })
        },
        // Load videos from a specified streamer
        loadClips ({ commit, state }) {
            commit('setLoading', true)
            twitchDao.getClips(state.streamer.display_name).then(response => {
                commit('setLoading', false)
                return response.json()
            })
            .then(json => {
                commit('setClips', json.clips)
            })
        },
        // Selects a streamer and stores it
        selectStreamer ({ commit }, payload) {
            commit('setStreamer', payload)
        },
        clearClips ({ commit }) {
            commit('setClips', null)
        }
    },
    getters: {
        loading (state) {
            return state.loading
        },
        streamers (state) {
            return state.streamers
        },
        streamer (state) {
            return state.streamer
        },
        clips (state) {
            return state.clips
        }
    }
})