export interface Song {
    name: string;
    artist: string;
}

export interface TrackProperties {
    song: Song;
    callbackFunction: (song: Song) => void;
    icon: string;
}

export interface ListProperties {
    songs: Song[];
    callbackFunction: (song: Song) => void;
}