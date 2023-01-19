import React, {useContext} from 'react';
import {Context} from "../index";
// import {Container, Nav} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";
import Shop from "../pages/Shop";
import {SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite"
const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"white"}} to={SHOP_ROUTE}> Bike Shop </NavLink>
                {user.isAuth ?
                <Nav className="m-lg-auto" style={{color:"white"}}>
                    <Button variant={"outline-light"}>  Exit </Button>
                    <Button variant={"outline-light"}>  Admin panel </Button>
                </Nav>
                    :
                <Nav className="m-lg-auto" style={{color:"white"}}>
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>  Authorization </Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;