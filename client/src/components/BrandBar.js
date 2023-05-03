import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Context } from '../index';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  console.log('device', device.getBrands()[0].id, device.getBrands()[0].name);
  return (
    <Row className="d-flex">
      {(device.getBrands().map((brand) => (
        <Card>
          { brand.name }
        </Card>
        // 'lalal'
      )))}
    </Row>
  );
});

export default BrandBar;
