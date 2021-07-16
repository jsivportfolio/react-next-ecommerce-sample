import Image from 'next/image';
// Importing hooks from react-redux
import { useSelector, useDispatch } from 'react-redux';
// Importing actions from  cart.slice.js
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    removeAllFromCart,
  } from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';
import {Button, Modal} from 'react-bootstrap/Button';
import ModalCheckout from '../components/ModalCheckout';

const CartPage = () => {

  // Extracting cart state from redux store.js 
  const cart = useSelector((state) => state.cart);

  // Reference to the dispatch function from redux store.js
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price, 0);
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1 id='messageCart'>Your Cart is Empty!</h1>
        
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.imageUrl} height={90} width={90} />
              </div>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.quantity_CartControl}>
                <button className={styles.qty__Action} onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <button className={styles.qty__Action} onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                <button className={styles.qty__Action} onClick={() => dispatch(removeFromCart(item.id))}>x</button>
              </div>
              <p className={styles.item__TotalPrice}>${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
          <h2>Cart Total: ${getTotalPrice().toFixed(2)}</h2>
          {/* <button id='buttonCheckout' className={styles.button__Checkout} onClick={() => dispatch(removeAllFromCart(cart.item))}>Checkout</button> */}
          <ModalCheckout></ModalCheckout>
        </>
      )}
    </div>
  );
};

export default CartPage;