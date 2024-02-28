// External libraries
import ListGroup from 'react-bootstrap/ListGroup';
// Own styles
import styles from "./Card.module.css"

interface CartProps {
    name: String,
    artist: String
}

function Card({ name, artist }: CartProps) {
    return (
        <>
            <ListGroup.Item
                as="li"
                className={`d-flex  ${styles.listItem}`}
                action variant='light'>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{name}</div>
                    {artist}
                </div>
                <button
                    aria-label="SelectSong"
                    className={styles.icon}>
                    <i className="bi bi-plus"></i>
                </button>
            </ListGroup.Item>
        </>
    )
}

export default Card;