import React, { useState } from 'react'
import styles from '../styles/ProductPage.module.css';
import classes from '../styles/ProductPage.module.css';
import { useDispatch } from 'react-redux';
import { addProductToCart, addQuantityToCart } from '../redux/cart.slice';


const ProductPage = ({ product }) => {

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const addQuantityCart = () => {
        dispatch(addQuantityToCart({...product, quantity}));
        return;
    }

    const increaseQuantity = () => {
        const count = document.getElementById('countQuantityValue');
        // if (count.value > 1) return;
        const productQuantity = count.valueAsNumber + 1;
        setQuantity(productQuantity)
    }

    const decreaseQuantity = () => {
        const count = document.getElementById('countQuantityValue')
        if (count.valueAsNumber <= 1) return;
        const productQuantity = count.valueAsNumber - 1;
        setQuantity(productQuantity)

    }

    return (
        <div className={styles.productPage__container}>
            <div className={styles.title}>Sample {product.name}</div>
            <div className={styles.imageAndDescriptionContainer}>
                <div className={styles.image}>
                    <img src={product.imageUrl} alt="product"/>
                </div>
                <div className={styles.description}>{product.description}</div>
            </div>
            <div className={styles.price}>${product.price}</div>
            <div className={styles.quantityText}>
            </div>
            <div className={styles.quantity_Control}>
                <span className={styles.qty__Action} onClick={decreaseQuantity}>-</span>

                <input type="number" id='countQuantityValue' className={styles.quantity__Value} value={quantity} readOnly />

                <span className={styles.qty__Action} onClick={increaseQuantity}>+</span>
            </div>
            <button type="button" id="cart_btn" className={styles.button__AddQuantityToCart} onClick={addQuantityCart}>Add to Cart</button>
        </div>
    );
}

export default ProductPage;