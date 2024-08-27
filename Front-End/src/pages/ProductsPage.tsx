import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from '@store/products/productsSlice';
import { Col, Container, Row } from 'react-bootstrap';
import { Product } from '@components/eCommerce';

const ProductsPage = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const {
    records,
    // loading, error
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    // we can safely use "type assertion" as string cuz we already made a guard for the route
    // the guard makes sure the prefix is a string
    dispatch(actGetProductsByCatPrefix(prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  const productsList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={6}
            key={record.id}
            md={3}
            className='d-flex justify-content-center mb-5 mt-2'
          >
            <Product {...record} />
          </Col>
        ))
      : 'There are no products';

  return (
    <Container>
      <Row>{productsList}</Row>
    </Container>
  );
};
export default ProductsPage;
