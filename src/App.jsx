
import './App.css'
import ProductList from './components/products'
import CartItems from './components/cart'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/cart" element={  <CartItems/>}/>
      <Route path='/' element={<ProductList/>}/>
    </Routes>
   
 )
}

export default App
