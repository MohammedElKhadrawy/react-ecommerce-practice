// Important: we have to use ?react AND add "types": ["vite-plugin-svgr/client"] in tsconfig.app.json
import { useEffect, useState } from 'react';
import Cart from '@assets/svg/cart.svg?react';
import { useAppSelector } from '@store/hooks';
import { getTotalCartQuantitySelector } from '@store/cart/selectors';

import classes from './HeaderBasket.module.css';
const { basketContainer, basketCart, basketQuantity, pump } = classes;

const HeaderBasket = () => {
  const [isPumping, setIsPumping] = useState(false);
  // advanced approach: we leverage the createSelector, and pass the callback function to useAppSelector
  const totalQuantity = useAppSelector(getTotalCartQuantitySelector);

  // beginner's approach :D
  // const totalQuantity = Object.values(items).reduce(
  //   (acc, currentValue) => acc + currentValue,
  //   0
  // );

  useEffect(() => {
    if (!totalQuantity) return;

    setIsPumping(true);

    const debounceHandler = setTimeout(() => {
      setIsPumping(false);
    }, 300);

    return () => clearTimeout(debounceHandler);
  }, [totalQuantity]);

  const totalQuantityStyle = `${basketQuantity} ${isPumping ? pump : ''}`;

  return (
    <div className={basketContainer}>
      <div className={basketCart}>
        <Cart title='basket icon' />
        <div className={totalQuantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
};
export default HeaderBasket;
