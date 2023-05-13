import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateType = (show, onHide) => (
  <Modal
    onHide={onHide}
    show={show}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Добавить новый тип
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Control
          placeholder="Введите название типа"
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

export default CreateType;
