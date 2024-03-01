export interface Song {
    id: number;
    name: string;
    artist: string;
    album: string;
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