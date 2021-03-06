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
        streamer: null,
        // Stores a cursor to the next page
        cursor: null,
        // Sets last cursor to reload results of a certain page
        lastCursor: null
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
        },
        setCursor (state, payload) {
            state.cursor = payload
        },
        setLastCursor (state, payload) {
            state.lastCursor = payload
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
        loadClips ({ commit, state }, payload) {
            commit('setLoading', true)
            twitchDao.getClips(state.streamer.display_name, payload.limit, payload.cursor).then(response => {
                commit('setLoading', false)
                return response.json()
            })
            .then(json => {
                commit('setClips', json.clips)
                commit('setLastCursor', state.cursor)
                commit('setCursor', json._cursor)
            })
        },
        reloadClips ({ commit, state }, payload) {
            commit('setLoading', true)
            twitchDao.getClips(state.streamer.display_name, payload, state.lastCursor).then(response => {
                commit('setLoading', false)
                return response.json()
            })
            .then(json => {
                commit('setClips', json.clips)
                commit('setCursor', json._cursor)
            })
        },
        // Selects a streamer and stores it
        selectStreamer ({ commit }, payload) {
            commit('setStreamer', payload)
        },
        clearClips ({ commit }) {
            commit('setClips', null)
            commit('setCursor', null)
            commit('setLastCursor', null)
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
        },
        cursor (state) {
            return state.cursor
        },
        lastCursor (state) {
            return state.lastCursor
        }
    }
})