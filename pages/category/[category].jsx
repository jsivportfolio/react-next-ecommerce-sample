import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import ProductPage from '../../components/ProductPage';
import styles from '../../styles/ShopPage.module.css';
import { getProductsByCategory } from '../api/products/[category]';

const CategoryPage = ({ products }) => {
  console.log(products)
  const router = useRouter();
  
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {products.map((product) => (
            <ProductPage key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(context) {
  const category = context.query.category;
  console.log(category)
  const products = await getProductsByCategory(category);
  console.log(products)

  return { 
      props: { 
          products 
        },
    };
};