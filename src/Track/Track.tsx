// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
// Own styles
import styles from "./Track.module.css"
// Types
import { TrackProperties } from '../models'; 

function Card(properties: TrackProperties) {
    const {song, callbackFunction, icon} = properties;

    const handleClick = () => {
        callbackFunction(song);
    }

    return (
        <>
            <ListGroup.Item
                as="li"
                className={`d-flex  ${styles.listItem}`}
                action variant='light'>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{song.name}</div>
                    {song.artist}
                </div>
                <button
                    aria-label="SelectSong"
                    className={styles.icon}
                    onClick={handleClick} >
                    <i className={`bi ${icon}`}></i>
                </button>
            </ListGroup.Item>
        </>
    )
}

export default Card;