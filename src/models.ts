export interface Song {
    name: string;
    artist: string;
}

export interface CardProperties {
    song: Song;
    callbackFunction: (song: Song) => void;
}

export interface ListProperties {
    songs: Song[];
    callbackFunction: (song: Song) => void;
}