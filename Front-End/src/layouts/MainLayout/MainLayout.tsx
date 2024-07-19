import Container from 'react-bootstrap/Container';

import classes from './MainLayout.module.css';
const { container, wrapper } = classes;

const MainLayout = () => {
  return (
    <Container className={container}>
      {/* Header */}
      <div className={wrapper}>test</div>
      {/* Footer */}
    </Container>
  );
};
export default MainLayout;
