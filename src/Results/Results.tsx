// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
// Components
import songs from './mockData';
import styles from "./Results.module.css";
import Card from "./Card";

function Results() {
    return (
        <div className='col-12 col-md-7 mb-5'>
            <div className={styles.container_results}>
                <h2 className='mb-4'>Results</h2>
                <ListGroup className='mb-4'>
                    {songs.map((song, index) => 
                    <Card name={song.name} 
                        artist={song.artist}
                        key={`${song.name}-${song.artist}-${index}`} />)}
                </ListGroup>
            </div>
        </div>
    )
}

export default Results;