export interface Song {
    id: string;
    name: string;
    artist: string;
    album: string;
    uri: string;
}

export interface SearchProperties {
    searchFunction: (query: string) => void;
}

export interface TrackProperties {
    song: Song;
    callbackFunction: (song: Song) => void;
    icon: string;
}

export interface SearchResultsProperties {
    songs: Song[];
    trackAction: (song: Song) => void;
}

export interface PlaylistProperties {
    songs: Song[];
    trackAction: (song: Song) => void;
    buttonAction: (playlistName: string) => void;
}