import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ListGroup from 'react-bootstrap/ListGroup';

import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '../../index';
import { fetchUsers, fetchFirstUser } from '../../http/userAPI';
import { fetchRoleUsers, fetchRoles } from '../../http/roleAPI';

const GetUsers = observer(({ show, onHide }) => {
  const { user, device, role } = useContext(Context);
  const [selectedUser, setSelectedUser] = useState('');
  useEffect(() => {
    fetchUsers().then((usersData) => { return user.setUsers(usersData); });
    // fetchFirstUser().then((firstUsersData) => { return user.setSelectedUser(firstUsersData); });
    // fetchRoleUsers().then((users) => { console.log('fetchRoleUsers4rfvfr4', fetchRoleUsers); });
    fetchRoles().then((rolesData) => { return role.setRoles(rolesData); });
  }, []);
  // console.log('dsdsd', fetchRoles());
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
        <Form.Select
          aria-label="Default select example"
          value={selectedUser}
          onChange={(e) => { setSelectedUser(e.currentTarget.value); }}
        >

          {user.getUsers().map((userData) => {
            return (
              <option
                // onClick={() => { return (user.setSelectedUser(userData)); }}
                key={userData.id}
              >
                {userData.email}
                {/* { } */}
                {/* {user.getSelectedUser().roles[0]} */}
              </option>
            );
          })}

        </Form.Select>

        User roles:
        {/* {user.getSelectedUser()} */}
        {/* <hr /> */}
        <ListGroup>
          {user.getSelectedUser().user_roles.map((userData) => {
            return (
              <ListGroup.Item>
                {/* {userData}
                {' '}
                ID user:
                {' '}
                {user.getSelectedUser().id}
                {' '}
                {user.getSelectedUser().email}
                {' '} */}
                {selectedUser}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <Form.Select aria-label="Default select example">
          {role.getRoles().map((roleData) => {
            return (
              <option
                onClick={() => { return (role.setSelectedRole(roleData)); }}
                key={roleData.id}
              >
                {roleData.name}
              </option>
            );
          })}
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default GetUsers;
