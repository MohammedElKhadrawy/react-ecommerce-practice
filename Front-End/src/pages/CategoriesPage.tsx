import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { actGetCategories } from '@store/categories/categoriesSlice';
import { Container } from 'react-bootstrap';
import { Category } from '@components/eCommerce';
import { Loading } from '@components/feedback';
import { GridList, Heading } from '@components/common';
import { TCategory } from '@customTypes/category';

const CategoriesPage = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Container>
      <Heading>Categories</Heading>
      <Loading status={loading} error={error}>
        {/* we can omit <TCategory> cuz ts is smart and automatically infers from component we will render */}
        <GridList<TCategory>
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default CategoriesPage;
