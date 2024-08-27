import { Button } from 'react-bootstrap';
import { TProduct } from '@customTypes/product';

import classes from './Product.module.css';
const { product, productImg } = classes;

const Product = ({ img, title, price }: TProduct) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant='info' style={{ color: 'white' }}>
        Add to cart
      </Button>
    </div>
  );
};
export default Product;
