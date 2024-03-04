// Types
import { Song } from '../Models/models';

const getUserID = async (access_token: string) => {
    // Endpoint to reach API
    const endpoint = 'https://api.spotify.com/v1/me';
    // Request information
    const request = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${access_token}`,
        }
    };
    // API call
    try {
        const response = await fetch(endpoint, request);
        if (response.ok) {
            const jsonResponse = await response.json();
            const userID = jsonResponse.display_name;
            return userID;
        }
        throw new Error('Error while fetching the user ID');
    } catch(error) {
        console.log('Error while fetching user ID: ', error);
    }
}

const initializePlaylist = async (access_token: string, name_playlist: string) => {
    // Initial URL
    const url = 'https://api.spotify.com/v1/users';
    // Playlist parameters
    const userID = await getUserID(access_token);
    const playlistParams = '/' + userID + '/playlists';
    // Final endpoint
    const endpoint = url + playlistParams;
    // Data with the information
    const body = {
        'name': name_playlist,
        'description': 'Playlist created by Jammming',
        'public': false
    }
    // Request information
    const request = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
    // Make request
    try {
        const response = await fetch(endpoint, request);
        if (response.ok) {
            const jsonResponse = await response.json();
            const playlistID = jsonResponse.id;
            return playlistID;
        }
        throw new Error('Error while creating playlist');
    } catch(error) {
        console.log('Error while creating the playlist: ', error);
    }
}

const addItemsPlaylist = async (playlistID: string, access_token: string, uris: String[]) => {
    // Initial URL of endpoint
    const url = 'https://api.spotify.com/v1/playlists';
    // Playlist params
    const playlistParams = '/' + playlistID + '/tracks'
    // Final endpoint
    const endpoint = url + playlistParams;
    // Body with information
    const body = {
        'uris': uris,
    }
    // Request information
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
        },
        body: JSON.stringify(body)
    }
    // Make request
    try {
        const response = await fetch(endpoint, request);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Error while adding items to playlist')
    } catch(error) {
        console.log('Error while adding items to playlist: ', error)
    }

}

const createPlaylist = async (access_token: string, name_playlist: string, songs: Song[]) => {
    // Create playlist and obtain its ID
    const playlistID = await initializePlaylist(access_token, name_playlist);
    // Uris of songs to add to playlist
    const uris = songs.map( (song) => song.uri);
    // Add items to playlist
    const snapshot = await addItemsPlaylist(playlistID, access_token, uris);

    return (snapshot == true);
}

export default createPlaylist;


