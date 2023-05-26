import React from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

// import DeviceList from "../components/DeviceList";

const Shop = observer(() => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9} className="mt-2">
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});
export default Shop;
