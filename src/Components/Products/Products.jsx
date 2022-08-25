import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'

const Products = () => {


    const { addItemToCart, products } = useContext(CartContext)



    return (
        <div className='productsContainer'>

            {products &&
                products?.payload?.results.map((product, i) => (

                    <div key={i} className="product" >
                        <img src={product.image} alt={product.name} />
                        <div>
                            <p>
                                {product.name} - ${product.price}
                            </p>
                        </div>
                        {!product.inCart ? (
                            <button onClick={() => addItemToCart(product)}>
                                Add to Cart
                            </button>
                        ) : (
                            <button>En el carrito</button>
                        )}
                    </div>

                ))
            }
        </div>
    )
}

export default Products