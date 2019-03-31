import headers from '@/headers'

// Get streamers based in a limit and query
let getStreamers = (query, limit) => {
    return fetch(`https://api.twitch.tv/kraken/search/channels?query=${query}&limit=${limit}`, {
        method: 'GET',
        headers: headers,
        cache: 'default'
    })
}

// Get clips from a specified channel name
let getClips = (channel) => {
    return fetch(`https://api.twitch.tv/kraken/clips/top?channel=${channel}`, {
        method: 'GET',
        headers: headers,
        cache: 'default'
    })
}

export default {
    getStreamers,
    getClips
}