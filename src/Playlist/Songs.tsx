// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
// Components
import songs from './mockDataPlst';
import styles from "./Songs.module.css";
import Card from "./SongCard";

function Results() {
    return (
        <div className={`col col-md-4 ${styles.container_results}`}>
            <h2 className='mb-4'>Selected Songs</h2>
            <ListGroup className='mb-4'>
                {songs.map((song) => <Card name={song.name} artist={song.artist} />)}
            </ListGroup>
        </div>
    )
}

export default Results;