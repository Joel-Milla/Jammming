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

export interface ListProperties {
    songs: Song[];
    callbackFunction: (song: Song) => void;
}