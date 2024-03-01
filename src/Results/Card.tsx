// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
// Own styles
import styles from "./Card.module.css"
// Types
import { CardProperties } from '../models'; 

function Card(properties: CardProperties) {
    const {song, callbackFunction} = properties;

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
                    <i className="bi bi-plus"></i>
                </button>
            </ListGroup.Item>
        </>
    )
}

export default Card;