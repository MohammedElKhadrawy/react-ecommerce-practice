import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

// this is an optimization to avoid unnecessary fires
// cuz "ALL redux selectors fire even if no change happened here in this specific state slice"
// redux later compares the changes and decides if a re-render should take effect for the listening components
const getTotalCartQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return totalQuantity;
  }
);

export { getTotalCartQuantitySelector };
