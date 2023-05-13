import React from 'react';
import { Col, Container, Image, Row, Form, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

const device = { id: 2, name: 'bike blue', brand: 2, type: 2, price: 3500, rating: 4.5, img: '/bike_blue.jpg' };
const description = [
  { id: 1, title: 'Рама', description: '5кг сталь' },
  { id: 2, title: 'Седло', description: 'Пластик профиисеональное' },
  { id: 3, title: 'Колеса', description: 'Круглые 28см' },
  { id: 4, title: 'Руль', description: 'Спортивный' },
  { id: 5, title: 'Педали', description: 'Сталь 300г' },
];

const DevicePage = () => (
  <Container>
    <Row
      className="d-flex flex-row align-items-center justify-content-around"
      // style={{ width: 300, height: 300, fontSize: 40, border: '5px solid' }}
    >
      <Col
        md={4}
        className="d-flex flex-column align-items-center justify-content-around"
        // style={{ width: 310, height: 300, fontSize: 40, border: '5px solid' }}
      >
        <Image width={300} height={300} src={device.img} alt="device" />
      </Col>
      <Col
        md={4}
        className="d-flex flex-column align-items-center justify-content-around"
        style={{ width: 300, height: 300, fontSize: 40 }}
      >
        <h2
          className="d-flex flex-column align-items-center"
        >
          {device.name}
        </h2>
        <div
          className="d-flex vertical-align-botton-baseline align-items-center justify-content-center"
          style={{ background: `url(${bigStar}) no-repeat center center`,
            width: 250,
            hight: 250,
            minHeight: '82%',
            backgroundSize: 'cover',
            fontSize: 36,
            textAling: 'center',
          }}
        >
          <p className="vertical-align-middle">{device.rating}</p>
        </div>
      </Col>
      <Col md={4}>
        <Card
          className="d-flex flex-column align-items-center justify-content-around"
          style={{ width: 300, height: 300, fontSize: 40, border: '5px solid ligth' }}
        >
          <h3
            className="d-flex flex-column align-items-center justify-content-around"
            // style={{ width: 300, height: 300, fontSize: 40, border: '5px solid' }}
          >
            От:
            {' '}
            {device.price}
            руб.
          </h3>
          <Button variant="outline-dark">
            Добавить в корзину
          </Button>
        </Card>
      </Col>
    </Row>
    <Row сlassName="d-flex flex-column m-3">
      <h1>Характеристики</h1>
      {description.map((info, index) => (
        <Row
          key={info.id}
          style={{ background: index % 2 === 0 ? 'lightgray' : 'tranparent', padding: 10 }}
        >
          {info.title}
          :
          {' '}
          {info.description}
        </Row>
      ))}
    </Row>
  </Container>
);
export default DevicePage;
