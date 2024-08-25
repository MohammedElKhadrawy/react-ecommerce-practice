// Vite supports "tree shaking", so we can use named imports (final bundle will include only the used components)!
import { Badge, Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { HeaderBasket } from '../../eCommerce';

import classes from './Header.module.css';
const { headerContainer, headerLogo } = classes;

const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <div className={headerLogo}>
          <h1 className={headerLogo}>
            <span>our</span> <Badge bg='info'>Ecom</Badge>
          </h1>
        </div>

        <HeaderBasket />
      </div>
      <Navbar expand='lg' className='bg-dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={NavLink} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to='categories'>
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to='about-us'>
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to='login'>
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to='register'>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
