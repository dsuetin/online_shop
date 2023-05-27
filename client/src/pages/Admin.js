import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [diviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => { return setTypeVisible(true); }}
      >
        Добавить тип
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => { return setBrandVisible(true); }}
      >
        Добавить бренд
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => { return setDeviceVisible(true); }}
      >
        Добавить устройство
      </Button>
      <CreateType show={typeVisible} onHide={() => { return setTypeVisible(false); }} />
      <CreateBrand show={brandVisible} onHide={() => { return setBrandVisible(false); }} />
      <CreateDevice show={diviceVisible} onHide={() => { return setDeviceVisible(false); }} />
    </Container>
  );
};

export default Admin;
