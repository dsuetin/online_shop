import React from 'react';
import { Card, Col, Form, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  // console.log(navigate)
  console.log('66666666666666', device.img);
  const myUrl = new URL(device.img, import.meta.url);
  console.log('lalalalala', `${DEVICE_ROUTE}/${device.id}`);
  console.log('kkkkkkkkkk', device.img);
  console.log('oooooooooo', star);

  return (
    // <Col md={3} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
    // <Col md={3} className="mt-3" onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
    <Col md={3} className="mt-3" onClick={() => navigate(`/device/${device.id}`)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border="light">
        <Image width={150} height={150} src={device.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>SAd</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1"> </div>
            <Image src={star} width={15} height={15} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
