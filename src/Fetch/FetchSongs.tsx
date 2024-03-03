// Types
import { Song } from "../Models/models";

const responseSongs = async (query: string, access_token: string) => {
    let songs: Song[] = [];
    const response = await searchSong(query, access_token).then((response) => response);
    response.tracks.items.forEach((item: any) => {
        const song: Song = {
            id: item.id,
            name: item.name,
            artist: item.album.name,
            album: item.artists['0'].name,
            uri: item.uri,
        }
        songs.push(song);
    });
    return songs;
}

const searchSong = async (query: string, access_token: string) => {
    // Endpoint to reach the API
    const url = 'https://api.spotify.com/v1';
    // Type of action that interacts with the API and necessary params
    const queryParams = '/search?q=' + query + '&type=track';
    // Final endpoint
    const endpoint = url + queryParams;
    // Request information
    const request = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    }

    try {
        const response = await fetch(endpoint, request);
        if (response.ok) {
            const json = await response.json();
            return json
        }
        throw new Error('Fetch failed!')
    } catch (error) {
        console.log(`There is an error while fetching: ${error}`);
    }
}

export default responseSongs;