import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from '@store/products/productsSlice';
import { Container } from 'react-bootstrap';
import { Product } from '@components/eCommerce';
import { Loading } from '@components/feedback';
import { GridList } from '@components/common';
import { TProduct } from '@customTypes/product';

const ProductsPage = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    // we can safely use "type assertion" as string cuz we already made a guard for the route
    // the guard makes sure the prefix is a string
    dispatch(actGetProductsByCatPrefix(prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};
export default ProductsPage;
