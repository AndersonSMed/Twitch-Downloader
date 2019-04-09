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
let getClips = (channel, limit, cursor) => {
    return fetch(`https://api.twitch.tv/kraken/clips/top?channel=${channel}&limit=${limit}${!!cursor? '&cursor=' + cursor : ''}`, {
        method: 'GET',
        headers: headers,
        cache: 'default'
    })
}

let loadClipData = (slug) => {
    return fetch(`https://clips.twitch.tv/api/v2/clips/${slug}/status`, {
      method: 'GET',
      cache: 'default'
    })
  }

export default {
    getStreamers,
    getClips,
    loadClipData
}