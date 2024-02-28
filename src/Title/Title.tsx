import styles from './Title.module.css'

function Title() {
    return (
        <div className={`row ${styles.container_title}`}>
            <h1 className={`title text-center ${styles.title}`}>
                Ja<span className={styles.highlight}>mmm</span>ing
            </h1>
        </div>
    )
}

export default Title;