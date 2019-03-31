import headers from '@/headers'

// Get streamers based in a limit and query
let getStreamers = (query, limit) => {
    return fetch(`https://api.twitch.tv/kraken/search/channels?query=${query}&limit=${limit}`, {
        method: 'GET',
        headers: headers,
        cache: 'default'
    })
}

// Get videos from a specified streamer ID
let getVideos = (id) => {
    return fetch(`https://api.twitch.tv/kraken/channels/${id}/videos`), {
        method: 'GET',
        headers: headers,
        cache: 'default'
    }
}

export default {
    getStreamers,
    getVideos
}