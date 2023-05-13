import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function CreateDevice(show, onHide) {
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Введите название устройства"
          >
            аккаунт
          </Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-succuss" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateDevice;
