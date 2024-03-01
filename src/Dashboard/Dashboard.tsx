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
  const [selectedSongs, setSelectedSongs] = useState<Song[]>([]);
  const isSongSelected = (song: Song) => {
    return selectedSongs.some(selectedSong => selectedSong.name === song.name && selectedSong.artist === song.artist);
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
      prev.filter((selectedSong) => selectedSong.artist !== song.artist && selectedSong.name !== song.name)
    );
  }

  const savePlaylist = (playlistName: string) => {
    console.log(playlistName);
    console.log(selectedSongs);
    setSelectedSongs([]);
  }


  const [resultSongs, setResultSongs] = useState<Song[]>(SONGS);

  return (
    <>
      <Title />
      <div className='container'>
        <SearchBar />
        <div className='row gx-4'>
          <SearchResults songs={resultSongs} trackAction={selectSong} />
          <Playlist songs={selectedSongs} trackAction={removeSong} buttonAction={savePlaylist}/>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
