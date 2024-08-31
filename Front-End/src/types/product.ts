export type TProduct = {
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  quantityInCart?: number; // we make this optional cuz we will need it only in cart's productFullInfo
  max: number;
};
