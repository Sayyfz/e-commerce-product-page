
import './css/App.css';
import Navbar from './components/Navbar.js';
import ProductPage from './components/ProductPage.js';
import { useState } from 'react';
import CartMenu from './components/CartMenu.js';

function App() {

  const [expandCart, setExpandCart] = useState(false)

  const [amount, setAmount] = useState(0)

  const toggleCartMenu = () => {
    setExpandCart(!expandCart)
  }

  const addToCart = (amount) => {
    setAmount(amount)
  }

  const removeItems = () => {
    setAmount(0)
  }

  return (
      <header className='container-fluid p-0'>
        <div className="container-lg p-0 page-wrapper">
          <Navbar onCartClicked={toggleCartMenu}/>
          {
            expandCart === true && <CartMenu amount={amount} onRemove={removeItems} /> 
          }
          <ProductPage onAddToCartClicked= {addToCart}/>
          
        </div>
        
      </header>
  );
}

export default App;
