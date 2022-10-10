import '../css/CartMenu.css'
import { BasketIcon } from '../components-svg/Icons';

const CartMenu = ({amount, onRemove}) => {

    
    return (  
        <div className="cart-menu">
            <div>
                <h3  ><b >Cart</b></h3>
                <hr style={{padding:0, width: '100%'}}/>
                {
                    amount > 0 ? 
                    (<div className="items-info">
                        <div className="item-info__first-row">
                            <img src={process.env.PUBLIC_URL + '/image-product-1-thumbnail.jpg'} alt="" />
                            <div className="text-info">
                                <p>Autumn Limited Edition...</p>
                                <p>$125.00 x {amount} <b>{'$' + (125.00 * amount).toFixed(2)}</b></p>
                            </div>
                            <div className="remove-icon">
                                <button onClick={() => onRemove()}><BasketIcon /></button>
                                
                            </div>
                        </div>
                        <button className="checkout-btn">Checkout</button>
                    </div>) :
                    <div className='items-info'> 
                        <p className='cart-empty'>Cart Empty</p>
                    </div>
                }
                
            </div>
        </div>
    );
}
 
export default CartMenu;