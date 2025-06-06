import axios from "axios";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ADD_TO_CART} from "../context/actionTypes";
import { useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";




const ProductList = () => {
    const [products, setProducts] = useState([])
    const {state,dispatch}=useContext(CartContext)
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setProducts(res.data))
       .catch((err)=>console.log(err))
    }, [])
    // const handleCart = () => {
    //     <link
    // }

   

    return (
        <div >
            <div className="grid h-20 grid-cols-2 place-content-between gap-4 bg-blue-400 p-4" >
                <p
                className="text-4xl font-bold text-center"
                >PRODUCTS</p>
                <Link to="/cart"><button
                    className="border border-black rounded-lg p-2  bg-yellow-500 w-20"
                >Cart</button></Link>
            </div>

            <div className=" grid grid-cols-3 grid-rows-3 gap-4">
            {products && products.map((product,index) => {
                return (
                    
                    <div
                        className="border border-2 border-black rounded-lg p-4 bg-gray-200"
                        key={product.id|| index}
                    >
                        <h1
                        className="text-2xl font-bold text-center"
                        >{product.title}</h1>    
                        <img
                            className="border border-black rounded-lg p-2 w-48 h-48 mx-auto"
                            src={product.image} />
                        <p>Price: {product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Rate: {product.rating.rate}</p>
                        <p> Count: {product.rating.count}</p>

                        <p>{product.description}</p>

                        
                        <button
                            onClick={() => {
                                dispatch({ type: ADD_TO_CART, payload: product })
                                alert("Product Added to Cart")
                            }}
                                className="border border-black rounded-lg p-2 bg-yellow-500 "
                            >Add To Cart</button>
                        
                      

                    </div>
                )
            })}

            </div>
        </div>
    )
}
export default ProductList