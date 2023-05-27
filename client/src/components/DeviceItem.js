import React from 'react';
import { Card, Col, Form, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  const myUrl = new URL(device.img, import.meta.url);
  console.log('lalalalala', `${DEVICE_ROUTE}/${device.id}`);
  console.log('device.img', device.img);
  console.log('star', star);
  console.log('ssss', `/device/${device.id}`);
  console.log('llll', `${process.env.REACT_APP_API_URL}/device/${device.id}`);
  return (
    <Col md={3} className="mt-3" onClick={() => { return navigate(`/device/${device.id}`); }}>
      {/* <Col md={3} className="mt-3" onClick={() =>
      { return navigate(`${process.env.REACT_APP_API_URL}/device/${device.id}`); }}> */}
      <Card style={{ width: 150, cursor: 'pointer' }} border="light">
        {/* <Image width={150} height={150} src={device.img} /> */}
        <Image width={150} height={150} src={`${process.env.REACT_APP_API_URL}/${device.img}`} />
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
