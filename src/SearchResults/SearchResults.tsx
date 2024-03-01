// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
// Components
import styles from "./SearchResults.module.css";
import Track from "../Track/Track";
// Types
import { SearchResultsProperties } from '../Models/models'; 

function SearchResults(properties: SearchResultsProperties) {
    const {songs, trackAction} = properties;

    return (
        <div className='col-12 col-md-7 mb-5'>
            <div className={styles.container_results}>
                <h2 className='mb-4'>Results</h2>
                <ListGroup className='mb-4'>
                    {songs.map((song) => 
                    <Track song={song}
                        callbackFunction={trackAction}
                        icon='bi-plus'
                        key={song.id} />)}
                </ListGroup>
            </div>
        </div>
    )
}

export default SearchResults;