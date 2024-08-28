export type TProduct = {
  id: number;
  title: string;
  price: string;
  cat_prefix: string;
  img: string;
  quantity?: number; // we make this optional cuz we will need it only in cart's productFullInfo
};
