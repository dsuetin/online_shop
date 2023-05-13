import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Admin = () => (
  <Container
    className="d-flex flex-column"
  >
    <Button
      variant="outline-dark"
      className="mt2"
    >
      Добавить тип
    </Button>
    <Button
      variant="outline-dark"
      className="mt2"
    >
      Добавить бренд
    </Button>
    <Button
      variant="outline-dark"
      className="mt2"
    >
      Добавить устройство
    </Button>
  </Container>
);
export default Admin;
