// External libraries
import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
// Components
import styles from "./Playlist.module.css";
import Track from "../Track/Track";
// Types
import { PlaylistProperties } from '../Models/models';

function Playlist(properties: PlaylistProperties) {
    const { songs, trackAction, buttonAction } = properties;

    const [playlistName, setPlaylistName] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPlaylistName(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (playlistName && songs.length > 0){
            buttonAction(playlistName);
            setPlaylistName('');
        } else if (songs.length == 0) {
            alert('Please select a song.');
        } else if (!playlistName) {
            alert('Please input a valid playlist name.');
        }
    }

    return (
        <div className='col-12 col-md-5 mb-5'>
            <div className={`${styles.container_songs}`}>
                <Form className='mb-4' onSubmit={handleSubmit}>
                    <Form.Control
                        onChange={handleChange}
                        value={playlistName}
                        type="text"
                        placeholder="Name of Playlist"
                        className="mb-4" />
                    <ListGroup className='mb-4'>
                        {songs.map((song) =>
                            <Track song={song}
                                callbackFunction={trackAction}
                                icon='bi-dash-lg'
                                key={song.id} />)}
                    </ListGroup>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size='lg'>
                            Save to Spotify
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Playlist;