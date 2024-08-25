import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { Header, Footer } from '@components/common';

import classes from './MainLayout.module.css';
const { container, wrapper } = classes;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};
export default MainLayout;
