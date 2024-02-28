import styles from "./Cart.module.css"

interface CartProps {
    name: String, 
    artist: String
}

function Cart({name, artist}: CartProps) {
    return (
        <>
            <li className="mb-3">
                <div className={`row ${styles.cart}`}>
                    <div className="col-10">
                        <div>
                            <p>{name}</p>
                            <p>{artist}</p>
                        </div>
                    </div>
                <div className={`col-2 ${styles.center}`}>
                    <button
                        aria-label="Remove thought"
                        className={styles.icon}>
                        <i className="bi bi-plus"></i>
                    </button>
                </div>
                </div>
            </li>
        </>
    )
}

export default Cart;