import songs from './mockData';
import styles from "./Results.module.css";
import Cart from "./Cart";

function Results() {
    return (
        <div className={`col ${styles.container_results}`}>
            <h2>Results</h2>
            <ul>
                {songs.map((song) =>  <Cart name={song.name} artist={song.artist} />)}
            </ul>
        </div>
    )
}

export default Results;