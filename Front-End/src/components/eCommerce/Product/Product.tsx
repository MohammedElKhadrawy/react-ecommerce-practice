import { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { TProduct } from '@customTypes/product';
import { useAppDispatch } from '@store/hooks';
import { addToCart } from '@store/cart/cartSlice';

import classes from './Product.module.css';
const { product, productImg } = classes;

const Product = ({ id, img, title, price }: TProduct) => {
  const [isBtnClicked, setIsButtonClicked] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isBtnClicked) return;

    const debounceHandler = setTimeout(() => {
      setIsButtonClicked(false);
    }, 300);

    return () => clearTimeout(debounceHandler);
  }, [isBtnClicked]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsButtonClicked(true);
  };

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price} EGP</h3>
      <Button
        variant='info'
        style={{ color: 'white' }}
        onClick={addToCartHandler}
        disabled={isBtnClicked}
      >
        {isBtnClicked ? (
          <>
            <Spinner animation='border' size='sm' /> Loading...
          </>
        ) : (
          'Add to cart'
        )}
      </Button>
    </div>
  );
};
export default Product;
