// External libaries
import { useState } from 'react';
// Components
import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';
import Songs from '../Playlist/Songs';
// Types
import { Song } from '../models';

import SONGS from './mockData';

function Dashboard() {
    const [selectedSongs, setSelectedSongs] = useState<Song[]>([]);

    const selectSong = (song: Song) => {
        setSelectedSongs( (prev) => {
            return [song, ...prev];
        })
    }

    const removeSong = (song: Song) => {
      return selectedSongs.filter((selectedSong) => selectedSong.artist !== song.artist && selectSong.name !== song.name)
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
