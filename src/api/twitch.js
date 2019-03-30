import headers from '@/headers'

let getStreamers = (query) => {
    return fetch(`https://api.twitch.tv/kraken/search/channels?query=${query}`, {
        method: 'GET',
        headers: headers,
        cache: 'default'
    })
}

export default {
    getStreamers
}