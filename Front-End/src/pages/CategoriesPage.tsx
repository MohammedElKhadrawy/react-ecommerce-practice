import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { actGetCategories } from '@store/categories/categoriesSlice';
import { Container, Row, Col } from 'react-bootstrap';
import { Category } from '@components/eCommerce';

const CategoriesPage = () => {
  const dispatch = useAppDispatch();
  const {
    records,
    // loading, error
  } = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  const categoriesList =
    // we have to check by length and not just "records" for validity
    // cuz the initial value for records is an empty array [] which is a valid value!
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={6}
            key={record.id}
            md={3}
            className='d-flex justify-content-center mb-5 mt-2'
          >
            <Category {...record} />
          </Col>
        ))
      : 'There are no categories';

  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  );
};

export default CategoriesPage;
