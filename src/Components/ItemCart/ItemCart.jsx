import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext';

const ItemCart = ({ item }) => {

    const { addItemToCart, deleteItemCart } = useContext(CartContext);
    return (
        <div className="cartItem">
            <img src={item.image} alt={item.name} />
            <div className="dataContainer">
                <div className="left">
                    <p>{item.name}</p>
                    <div className="buttons">
                        <button onClick={() => addItemToCart(item)}>AGREGAR</button>
                        <button onClick={() => deleteItemCart(item)}>SACAR</button>
                    </div>
                </div>
                <div className="right">
                    <div>{item.amount}</div>
                    <p>Total: ${item.amount * item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCart