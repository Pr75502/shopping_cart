import { createContext } from "react";
import CartReducer from "./cartReducer";
import { useReducer } from "react";

export const CartContext = createContext(CartReducer)
const initialState = {
    cart: []
    
}
export const CartProvider = ({children}) => {
    
const [state,dispatch]=useReducer(CartReducer,initialState)

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}