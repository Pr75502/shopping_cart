
import { useContext} from "react"
import { CartContext } from "../context/cartContext"
import { Link } from "react-router-dom"

import { CLEAR_CART,REMOVE_FROM_CART } from "../context/actionTypes"

const CartItems = () => {
    const { state, dispatch } = useContext(CartContext)
    
 
    

    return (
        <div>
            <div className=" grid grid-cols-3 p-4 gap-2 bg-blue-400">
                <span
                    className="text-4xl font-bold text-center"
                >CART</span>
            
            <Link to="/">
                <button
                        className="border border-black rounded-lg p-2 bg-yellow-400 hover:bg-yellow-600 "
                    >Back to Product</button></Link>
            
            <button
                    className="border border-black rounded-lg p-2 bg-red-400 hover:bg-red-600  "
            onClick={()=>{dispatch({type:CLEAR_CART,payload:[]})}}
                >Clear Cart</button>
            </div>
            

            {state.cart  && state.cart.map((item,index) => {
                return (
                 
                    <div key={item.id||index}
                            className="border border-black rounded-lg p-4 bg-gray-200 grid grid-cols-2 place-content-center gap-2"
                            >
                            <img
                                className="h-48 w-48  border border-black rounded-lg p-2"
                                src={item.image} />
                        <div >
                        <h3
                        className="m-2"
                            >{item.title}</h3>
                            <h4 className="m-2">Price:{item.price}</h4>
                        <button
                            className="border border-black rounded-lg p-2 bg-yellow-400 m-2 hover:bg-yellow-600"
                                onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item.id })}>Remove</button>
                            <p className="m-2">Quantity:</p>
                        </div>
                        
                        </div>
                  
                )
            })}
               

        </div>
    )
}
export default CartItems