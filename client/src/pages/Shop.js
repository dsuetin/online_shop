import React, { useContext, useEffect } from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import Pages from '../components/Pages';
import { Context } from '../index';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI';

// import DeviceList from "../components/DeviceList";

const Shop = observer(() => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((typesData) => { return device.setTypes(typesData); });
    fetchBrands().then((brandsData) => { return device.setBrands(brandsData); });
    fetchDevices(null, null, 1, 2).then((devicesData) => {
      console.log('devicesData', devicesData);
      console.log('devicesData.count', devicesData.count);
      device.setTotalCount(devicesData.count);
      console.log('device.setTotalCount', device.getTotalCount());
      console.log('limit', device.getLimit());

      return device.setDeivces(devicesData.rows);
    });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line max-len
    fetchDevices(device.getSelectedType().id, device.getSelectedBrand().id, device.getPage(), device.getLimit())
      .then((devicesData) => {
        console.log('devicesData', devicesData);
        console.log('devicesData.count', devicesData.count);
        device.setTotalCount(devicesData.count);
        console.log('device.setTotalCount', device.getTotalCount());
        console.log('limit', device.getLimit());

        return device.setDeivces(devicesData.rows);
      });
  }, [device.getPage(), device.getSelectedType(), device.getSelectedBrand()]);
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9} className="mt-2">
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});
export default Shop;
