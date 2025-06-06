import { createContext } from "react";
import CartReducer from "./cartReducer";
import { useReducer,useEffect } from "react";

export const CartContext = createContext(CartReducer)

const getLocalCart = () => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
}
const initialState = {
    cart: getLocalCart(),
    
    
}
export const CartProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(CartReducer, initialState)
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart))

    }, [state.cart])

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}