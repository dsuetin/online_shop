import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Context } from '../index';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  // console.log('device', device.getBrands()[0].id, device.getBrands()[0].name);
  // console.log('jjjj', device.getSelectedBrand());
  return (
    <Form className="w-100">
      {(device.getBrands().map((brand) => (
        <Card
          md={4}
          style={{ cursor: 'pointer' }}
          key={brand.id}
          className="p-3 mt-2 d-inline-block"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.getSelectedBrand().id ? 'danger' : 'light'}
        >
          { brand.name }
        </Card>
      )))}
    </Form>
  );
});

export default BrandBar;
