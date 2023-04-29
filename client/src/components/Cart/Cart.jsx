import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { loadStripe } from '@stripe/stripe-js'

import './Cart.scss';
import { removeFromCart, resetCart } from '../../redux/cartReducer';
import { makeRequest } from '../../makeRequest';

const Cart = () => {
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  const total = () => {
    let sum = 0;
    products.forEach((product) => sum += product.quantity * product.price);
    return sum.toFixed(2);
  };

  const stripePromise = loadStripe('pk_test_51N1qOSAjdl4kSycIBn8KtLhTLJq4c7dcAtflyQko1tQbR9gwQqLEYNleou2mQFTiMNgGVhRL6uNDyqJV26RloFeU00bzzV57fB');

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const response = await makeRequest.post('/orders', {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='cart'>
        {products.map((item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price">{item.quantity} x ${item.price}</div>
                </div>
                <DeleteForeverIcon className='delete' onClick={() => dispatch(removeFromCart(item.id))}/>
            </div>
        ))}

        <div className="total">
            <span>TOTAL</span>
            <span>${total()}</span>
        </div>

        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
        
    </div>
  )
}

export default Cart