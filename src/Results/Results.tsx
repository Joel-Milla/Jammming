// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
// Components
import songs from './mockData';
import styles from "./Results.module.css";
import Card from "./Card";

function Results() {
    return (
        <div className={`col col-md-7 ${styles.container_results}`}>
            <h2 className='mb-4'>Results</h2>
            <ListGroup className='mb-4'>
                {songs.map((song) => <Card name={song.name} artist={song.artist} />)}
            </ListGroup>
        </div>
    )
}

export default Results;