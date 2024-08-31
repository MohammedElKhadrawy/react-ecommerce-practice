import { memo, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { TProduct } from '@customTypes/product';
import { useAppDispatch } from '@store/hooks';
import { addToCart } from '@store/cart/cartSlice';

import classes from './Product.module.css';
const { product, productImg, maximumNotice } = classes;

// We used memo here to cache product props
// cuz when we add an item to cart, that triggers the selector in the parent with the new cart.items
// then productsFullInfo gets re-evaluated effectively which is then passed to GridList as a prop
// so, a re-render cycle for the GridList and all its children (each product gets rendered again!)
// use console.log("fire") here in the component to check!
const Product = memo(
  ({ id, img, title, price, max, quantityInCart }: TProduct) => {
    // console.log("fire"); // to check for unnecessary re-renders
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

    const currentRemainingQuantity = max - (quantityInCart ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

    return (
      <div className={product}>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <h2 title={title}>{title}</h2>
        <h3>{price} EGP</h3>
        <p
          className={maximumNotice}
          style={{ color: quantityReachedToMax ? 'red' : 'black' }}
        >
          {quantityReachedToMax
            ? 'You have reached the limit'
            : `You can add ${currentRemainingQuantity} item(s)`}
        </p>
        <Button
          variant='info'
          style={{ color: 'white' }}
          onClick={addToCartHandler}
          disabled={isBtnClicked || quantityReachedToMax}
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
  }
);

export default Product;
