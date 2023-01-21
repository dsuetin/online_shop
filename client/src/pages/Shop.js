import React from 'react';
// import Container from "react-bootstrap/Container";
import {Form, Container, Col} from "react-bootstrap";
import TypeBar from "../components/TypeBar";

const Shop = () => {
    return (
        <Container>
            <Form className="mt-2">
                <Col md={3} >
                    <TypeBar/>
                </Col>
                <Col md={9}>

                </Col>
            </Form>

        </Container>
    );
};

export default Shop;

