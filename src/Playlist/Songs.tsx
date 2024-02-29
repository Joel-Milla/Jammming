// External libraries
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
// Components
import songs from './mockDataPlst';
import styles from "./Songs.module.css";
import Card from "./SongCard";

function Songs() {
    return (
        <div className='col-12 col-md-5 mb-5'>
            <div className={`col-12 col-md-5 ${styles.container_songs}`}>
                <Form className='mb-4'>
                    <Form.Control
                        type="text"
                        placeholder="Name of Playlist"
                        className="mb-4"/>
                    <ListGroup className='mb-4'>
                        {songs.map((song) => <Card name={song.name} artist={song.artist} />)}
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