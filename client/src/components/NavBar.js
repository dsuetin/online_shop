import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
// import Shop from "../pages/Shop";
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

import { Context } from '../index';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  console.log(user);
  console.log(user.getIsAuth());
  const navigation = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Gedonism</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user.getIsAuth()
            ? (
              <Nav className="mr-auto" style={{ color: 'white' }}>
                <Button variant="outline-light" onClick={() => navigation(ADMIN_ROUTE)}>
                  Admin panel
                </Button>
                <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1"> </div>
                <Button variant="outline-light" className="p-xl-4" onClick={() => navigation(LOGIN_ROUTE)}>
                  Exit
                </Button>
              </Nav>
            )
            : (
              <Nav className="m-lg-auto" style={{ color: 'white' }}>
                <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>  Authorization </Button>
              </Nav>
            )}
        </Navbar.Collapse>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}> Bike Shop </NavLink>
      </Container>
    </Navbar>
  );
});

export default NavBar;
