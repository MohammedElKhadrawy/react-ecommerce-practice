// Important: we have to use ?react AND add "types": ["vite-plugin-svgr/client"] in tsconfig.app.json
import Cart from '@assets/svg/cart.svg?react';
import { useAppSelector } from '@store/hooks';
import { getTotalCartQuantitySelector } from '@store/cart/selectors';

import classes from './HeaderBasket.module.css';
const { basketContainer, basketQuantity } = classes;

const HeaderBasket = () => {
  // advanced approach: we leverage the createSelector, and pass the callback function to useAppSelector
  const totalQuantity = useAppSelector(getTotalCartQuantitySelector);

  // beginner's approach :D
  // const totalQuantity = Object.values(items).reduce(
  //   (acc, currentValue) => acc + currentValue,
  //   0
  // );

  return (
    <div className={basketContainer}>
      <Cart title='basket icon' />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
};
export default HeaderBasket;
