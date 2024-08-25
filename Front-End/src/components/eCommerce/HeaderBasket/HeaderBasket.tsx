// Important: we have to use ?react AND add "types": ["vite-plugin-svgr/client"] in tsconfig.app.json
import Cart from '@assets/svg/cart.svg?react';

import classes from './HeaderBasket.module.css';
const { basketContainer, basketQuantity } = classes;

const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Cart title='basket icon' />
      <div className={basketQuantity}>0</div>
    </div>
  );
};
export default HeaderBasket;
