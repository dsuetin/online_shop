import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateBrand = (show, onHide) => (
  <Modal
    onHide={onHide}
    show={show}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Добавить новый бренд
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Control
          placeholder="Введите название бренда"
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

export default CreateBrand;
