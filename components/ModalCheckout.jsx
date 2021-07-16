import React, { useState } from 'react';
// Importing hooks from react-bootstrap
import { Button,Modal } from 'react-bootstrap';
// Importing hooks from react-redux
import { useSelector, useDispatch } from 'react-redux';
// Importing actions from  cart.slice.js
import { removeAllFromCart } from '../redux/cart.slice';
// Importing Styles from ModalCheckout
import styles from '../styles/ModalCheckout.module.css';

  const ModalCheckout = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Extracting cart state from redux store.js 
  const cart = useSelector((state) => state.cart);

  // Reference to the dispatch function from redux store.js
  const dispatch = useDispatch();

    return (
        <div>
        <Button className={styles.modal__CheckoutButton}  variant="primary" onClick={handleShow}>Checkout</Button>

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Body className={styles.modal__body}>Thank you for your purchase!</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => dispatch(removeAllFromCart(cart.item))}>
                    Complete Order
                </Button>
            </Modal.Footer>
        </Modal>
            
        </div>
    );
};

export default ModalCheckout;
