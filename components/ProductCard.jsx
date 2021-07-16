import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
  return (
    <div className={styles}>
      <Image src={product.imageUrl} height={300} width={300} />
      <h4 className={styles.title}>{product.name}</h4>
      <p>$ {product.price}</p>
      <p>{product.description}</p>
      <button className={styles.button} onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;