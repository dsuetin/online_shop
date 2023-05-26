import React, { useContext, useEffect } from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { Context } from '../index';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI';

// import DeviceList from "../components/DeviceList";

const Shop = observer(() => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((typesData) => { return device.setTypes(typesData); });
    fetchBrands().then((brandsData) => { return device.setBrands(brandsData); });
    fetchDevices().then((devicesData) => { return device.setDeivces(devicesData.rows); });
  }, []);
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
