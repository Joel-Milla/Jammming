// External libaries
import { useState } from 'react';
// Components
import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
// Types
import { Song } from '../models';

import SONGS from '../mockData';

function Dashboard() {
  const [resultSongs, setResultSongs] = useState<Song[]>([]);
  const searchSongs = (query: string) => {
    const makeRequest = () => {
      return (SONGS);
    }
    setResultSongs(makeRequest());
  }

  const [selectedSongs, setSelectedSongs] = useState<Song[]>([]);
  const isSongSelected = (song: Song) => {
    return selectedSongs.some(selectedSong => selectedSong.id === song.id);
  }

  const selectSong = (song: Song) => {
    if (!isSongSelected(song)) {
      setSelectedSongs((prev) => {
        return [song, ...prev];
      });
    }
  }

  const removeSong = (song: Song) => {
    setSelectedSongs((prev) =>
      prev.filter((selectedSong) => selectedSong.id !== song.id)
    );
  }

  const savePlaylist = (playlistName: string) => {
    console.log(playlistName);
    console.log(selectedSongs);
    setSelectedSongs([]);
  }

  return (
    <>
      <Title />
      <div className='container'>
        <SearchBar searchFunction={searchSongs}/>
        <div className='row gx-4'>
          <SearchResults songs={resultSongs} trackAction={selectSong} />
          <Playlist songs={selectedSongs} trackAction={removeSong} buttonAction={savePlaylist}/>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
