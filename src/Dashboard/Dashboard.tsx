// External libaries
import { useState } from 'react';
// Components
import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
// External functions
import responseSongs from '../Fetch/FetchSongs';
// Types
import { Song } from '../Models/models';

import SONGS from '../mockData';

function Dashboard() {
  const [resultSongs, setResultSongs] = useState<Song[]>([]);
  const searchSongs = async (query: string) => {
    try {
      const response = await responseSongs(query);
      setResultSongs(response);
      console.log(resultSongs);
    } catch (error) {
      console.log('Error while fetching songs: ', error);
    }
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
        <SearchBar searchFunction={searchSongs} />
        <div className='row gx-4'>
          <SearchResults songs={resultSongs} trackAction={selectSong} />
          <Playlist songs={selectedSongs} trackAction={removeSong} buttonAction={savePlaylist} />
        </div>
      </div>
    </>
  )
}

export default Dashboard;
