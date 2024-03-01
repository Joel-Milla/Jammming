// External libaries
import { useState } from 'react';
// Components
import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';
import Results from '../SearchResults/SearchResults';
import Songs from '../Playlist/Playlist';
// Types
import { Song } from '../models';

import SONGS from './mockData';

function Dashboard() {
    const [selectedSongs, setSelectedSongs] = useState<Song[]>([]);

    const isSongSelected = (song: Song) => {
      return selectedSongs.some(selectedSong => selectedSong.name === song.name && selectedSong.artist === song.artist);
    }

    const selectSong = (song: Song) => {
      if (!isSongSelected(song)) {
        setSelectedSongs( (prev) => {
          return [song, ...prev];
        });
      }
    }

    const removeSong = (song: Song) => {
      setSelectedSongs( (prev) => 
        prev.filter((selectedSong) => selectedSong.artist !== song.artist && selectSong.name !== song.name)
      );
  }

  return (
    <>
      <Title />
      <div className='container'>
        <SearchBar />
        <div className='row gx-4'>
          <Results songs={SONGS} callbackFunction={selectSong}/>
          <Songs songs={selectedSongs} callbackFunction={removeSong}/>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
