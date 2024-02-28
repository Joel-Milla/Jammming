interface CartProps {
    name: String, 
    artist: String
}

function Cart({name, artist}: CartProps) {
    return (
        <>
            <li>
                <div className="row">
                    <div className="col">
                        <p>{name}</p>
                        <p>{artist}</p>
                    </div>
                    <button className="btn"><i className="col bi bi-x-circle"></i></button>
                </div>
            </li>
        </>
    )
}

export default Cart;