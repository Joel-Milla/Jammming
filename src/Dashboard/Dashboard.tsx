// External libaries
import { useEffect, useState } from 'react';
// Components
import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import LogIn from '../LogIn/LogIn';
// External functions
import responseSongs from '../Fetch/FetchSongs';
// Types
import { Song } from '../Models/models';

function Dashboard() {
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get('access_token');
    const expiresIn = params.get('expires_in') || '0';
    if (accessToken) {
      const expiresAt = Date.now() + Number(expiresIn) * 1000;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('expiresAt', expiresAt.toString());
      setAccessToken(accessToken);
    } else {
      const storedToken = localStorage.getItem('accessToken');
      const storedExpiresAt = localStorage.getItem('expiresAt') || '0';
      const isTokenExpired = Date.now() > parseInt(storedExpiresAt, 10);

      if (storedToken && !isTokenExpired) {
        setAccessToken(storedToken);
      }
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      const expiresAt = Number(localStorage.getItem('expiresAt'));
      const timeoutDuration = expiresAt - Date.now();

      const timeout = setTimeout(() => {
        alert('Access token has expired. Please log in again');
        setAccessToken('');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expiresAt');
      }, timeoutDuration > 0 ? timeoutDuration : 0);

      return () => clearTimeout(timeout);
    }
  }, [accessToken]);

  const [resultSongs, setResultSongs] = useState<Song[]>([]);
  const searchSongs = async (query: string) => {
    try {
      const response = await responseSongs(query, accessToken);
      setResultSongs(response);
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

  if (!accessToken) {
    return (
      <>
        <Title />
        <div className='container'>
          <LogIn />
        </div>
      </>
    )
  } else {
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
}

export default Dashboard;
