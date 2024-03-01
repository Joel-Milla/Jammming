// External libraries
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
// Components
import styles from "./Playlist.module.css";
import Track from "../Track/Track";
// Types
import { ListProperties } from '../models'; 

function Playlist(properties: ListProperties) {
    const {songs, callbackFunction} = properties;

    return (
        <div className='col-12 col-md-5 mb-5'>
            <div className={`${styles.container_songs}`}>
                <Form className='mb-4'>
                    <Form.Control
                        type="text"
                        placeholder="Name of Playlist"
                        className="mb-4"/>
                    <ListGroup className='mb-4'>
                        {songs.map((song) => 
                        <Track song={song}
                            callbackFunction={callbackFunction}
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