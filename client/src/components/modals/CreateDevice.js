import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateDevice = ({show, onHide}) => {
    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
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
                            placeholder={"Введите название устройства"}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                    <Button variant={"outline-success"} onClick={onHide}>Добавть</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateDevice;