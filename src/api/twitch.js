import headers from '@/headers'

let getStreamers = (query, limit) => {
    return fetch(`https://api.twitch.tv/kraken/search/channels?query=${query}&limit=${limit}`, {
        method: 'GET',
        headers: headers,
        cache: 'default'
    })
}

export default {
    getStreamers
}