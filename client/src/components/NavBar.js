import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
// import Shop from "../pages/Shop";
import { Button, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

import { Context } from '../index';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  console.log(user);
  console.log(user.getIsAuth());
  const navigation = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand>Gedonism</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <NavLink
          style={{ color: 'white' }}
          to={SHOP_ROUTE}
        >
          Bike Shop
        </NavLink>

        {user.getIsAuth()
          ? (
            <Nav
              className="ml-auto"
              style={{ color: 'white' }}
            >
              <Col>
                <Button
                  variant="outline-light"
                  onClick={() => navigation(ADMIN_ROUTE)}
                >
                  Admin panel
                </Button>
                {' '}
                <Button
                  variant="outline-light"
                  onClick={() => logOut()}
                  className="ml-2"
                >
                  Exit
                </Button>
              </Col>

              {/* <div
                className="
                // col-lg-1
                "
              >
                {' '}
              </div> */}
              {/* <div
                className="
                // col-sm-1
                // col-xs-1
                // col-md-1
                // col-lg-1
                "
              >
                {' '}
              </div> */}

            </Nav>
          )
          : (
            <Nav
              className="ml-auto"
              style={{ color: 'white' }}
            >
              <Button
                variant="outline-light"
                onClick={() => navigation(LOGIN_ROUTE)}
              >
                Authorization
              </Button>
            </Nav>
          )}
        {/* <Navbar.Collapse id="responsive-navbar-nav">

        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
});

export default NavBar;
