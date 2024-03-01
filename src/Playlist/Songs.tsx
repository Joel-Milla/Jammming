// External libraries
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
// Components
import styles from "./Songs.module.css";
import Card from "./SongCard";
// Types
import { ListProperties } from '../models'; 

function Songs(properties: ListProperties) {
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
                        {songs.map((song, index) => 
                        <Card song={song}
                            callbackFunction={callbackFunction}
                            key={`${song.name}-${song.artist}-${index}`} />)}
                    </ListGroup>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size='lg'>
                        Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Songs;