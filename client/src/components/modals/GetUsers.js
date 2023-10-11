import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ListGroup from 'react-bootstrap/ListGroup';

import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '../../index';
import { fetchUsers } from '../../http/userAPI';

const GetUsers = observer(({ show, onHide }) => {
  const { user, device } = useContext(Context);

  useEffect(() => {
    fetchUsers().then((usersData) => { return user.setUsers(usersData); });
  }, []);

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
        <Form.Select aria-label="Default select example">

          {user.getUsers().map((userData) => {
            return (
              <option
                // onClick={() => { return (device.setSelectedBrand(userData)); }}
                key={userData.id}
              >
                {userData.email}
              </option>
            );
          })}
          <hr />
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        {/* <Button variant="outline-success" onClick={}>Добавить</Button> */}
      </Modal.Footer>
    </Modal>
  );
});

export default GetUsers;
