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
        videos: [],
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
        setVideos (state, payload) {
            state.videos = payload
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
        loadVideos ({ commit, state }) {
            commit('setLoading', true)
            twitchDao.getVideos(state.streamer._id).then(response => {
                commit('setLoading', false)
                return response.json()
            })
            .then(json => {
                commit('setVideos', json.videos)
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