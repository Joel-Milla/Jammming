import styles from './Title.module.css'

function Title() {
    return (
        <div className={styles.container}>
            <h1 className={`text-center ${styles.title}`}>
                Ja<span className={styles.highlight}>mmm</span>ing
            </h1>
        </div>
    )
}

export default Title;