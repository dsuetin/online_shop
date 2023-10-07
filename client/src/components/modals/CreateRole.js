import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createRole } from '../../http/deviceAPI';

const CreateRole = ({ show, onHide }) => {
  const [value, setValue] = useState('');
  const addRole = () => {
    console.log('CreateRole in create role', value);
    createRole({ value }).then((inputRoleData) => { return setValue(''); });
    onHide();
  };
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новую роль
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => { return setValue(e.target.value); }}
            placeholder="Введите название роли"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addRole}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateRole;
