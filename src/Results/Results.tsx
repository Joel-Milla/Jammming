import songs from './mockData';
import styles from "./Results.module.css";
import Cart from "./Cart";

function Results() {
    return (
        <div className={`col ${styles.container_results}`}>
            <h2 className={styles.title}>Results</h2>
            <div className='row'>
                <ul className={styles.list}>
                    {songs.map((song) => <Cart name={song.name} artist={song.artist} />)}
                </ul>
            </div>
        </div>
    )
}

export default Results;