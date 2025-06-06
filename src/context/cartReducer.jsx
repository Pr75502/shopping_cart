import React from 'react'
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './actionTypes'

const CartReducer = (state,action) => {
    if (action.type == ADD_TO_CART) {
        return (
            {
                ...state, 
               cart: [...state.cart, action.payload]

            }

        )
    } else if (action.type == REMOVE_FROM_CART) {
        return {
           ...state,
            cart: state.cart.filter((item) => item.id !== action.payload)
        }
    } else if (action.type == CLEAR_CART) {
        return {
            ...state,
            cart: []
        }
    }
return state
  
}
export default CartReducer