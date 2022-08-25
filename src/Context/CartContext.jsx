import { createContext, useEffect, useState } from "react";
import Api from '../Commom/Api'
import { useQuery } from 'react-query'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    let amount = 0
    //const [products, setProducts] = useState([]);

    const { data: products, status } = useQuery("products", () =>
        Api.get('/products')
    );


    const [cartItems, setCartItems] = useState([])




    const addItemToCart = (product) => {
        const inCart = cartItems.find((productInCart) => productInCart.id === product.id)

        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: productInCart.amount + 1 };

                    } else return productInCart;
                })

            )
        } else {
            setCartItems([...cartItems, { ...product, amount: 1 }])
        }

    }

    const deleteItemCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productInCart) => productInCart.id !== product.id)
            );
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: inCart.amount - 1 }
                    } else return productInCart;
                }))
        }
    }

    /*   const editItemToCart = async (id, query, amount) => {
          if (query === "del" && amount === 1) {
              await axios
                  .delete(`http://localhost:3000/products-cart/${id}`)
                  .then(({ data }) => console.log(data));
          } else {
              await axios
                  .put(`http://localhost:3000/products-cart/${id}?query=${query}`, {
                      amount,
                  })
                  .then(({ data }) => console.log(data));
          }
  
          getProducts();
          getProductsCart();
      }; */


    return (
        <CartContext.Provider value={{ cartItems, products, addItemToCart, deleteItemCart }}>
            {children}
        </CartContext.Provider>
    )


}
export default CartContext;

