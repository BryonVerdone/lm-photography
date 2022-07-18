import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo/LMP-logo.png';
const Navigation = () => {
  return (
    <Navbar sticky='top' expand='lg'>
      <Container className='Navbar'>
        <Navbar.Brand>
          {' '}
          <img className='logo' src={Logo} alt='' />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-end'>
          <Nav style={{ gap: '10px' }} className='me-auto'>
            <Nav.Link>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>{' '}
            </Nav.Link>
            <Nav.Link>
              <NavLink className='nav-link' to='portfolio'>
                Portfolio
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink className='nav-link' to='prices'>
                Prices
              </NavLink>{' '}
            </Nav.Link>
            <Nav.Link>
              <NavLink className='nav-link' to='contact'>
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
