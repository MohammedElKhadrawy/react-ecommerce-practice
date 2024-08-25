import { Col, Container, Row } from 'react-bootstrap';
import { Product } from '@components/eCommerce';

const ProductsPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Product />
        </Col>
        <Col xs={6} md={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Product />
        </Col>
        <Col xs={6} md={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Product />
        </Col>
        <Col xs={6} md={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Product />
        </Col>
        <Col xs={6} md={3} className='d-flex justify-content-center mb-5 mt-2'>
          <Product />
        </Col>
      </Row>
    </Container>
  );
};
export default ProductsPage;
