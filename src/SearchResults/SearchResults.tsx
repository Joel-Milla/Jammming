// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
// Components
import styles from "./SearchResults.module.css";
import Track from "../Track/Track";
// Types
import { ListProperties } from '../models'; 

function SearchResults(properties: ListProperties) {
    const {songs, callbackFunction} = properties;

    return (
        <div className='col-12 col-md-7 mb-5'>
            <div className={styles.container_results}>
                <h2 className='mb-4'>Results</h2>
                <ListGroup className='mb-4'>
                    {songs.map((song, index) => 
                    <Track song={song}
                        callbackFunction={callbackFunction}
                        icon='bi-plus'
                        key={`${song.name}-${song.artist}-${index}`} />)}
                </ListGroup>
            </div>
        </div>
    )
}

export default SearchResults;