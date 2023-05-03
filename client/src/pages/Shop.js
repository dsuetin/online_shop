import React from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
// import DeviceList from "../components/DeviceList";

const Shop = () => (
  <Container>
    <Row className="mt-2">
      <Col md={3}>
        <TypeBar />
      </Col>
      <Col md={9} className="mt-2"> </Col>
    </Row>
  </Container>
);
export default Shop;
