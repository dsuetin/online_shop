import React from 'react';
// import Container from "react-bootstrap/Container";
import {Form, Container, Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container>


            <Row className="mt-2">
                <Col md={3} >
                    <TypeBar/>
                </Col>
                <Col md={9} className="mt-2">
                    <BrandBar/>
                    <DeviceList/>

                </Col>

            </Row>

            {/*<Row className="mt-2">*/}
            {/*    <Col md={3} >*/}
            {/*        <TypeBar/>*/}
            {/*    </Col>*/}
            {/*    <Col md={9} className="mt-2">*/}
            {/*        <BrandBar/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

        </Container>
    );
};

export default Shop;

