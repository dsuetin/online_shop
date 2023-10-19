import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ListGroup from 'react-bootstrap/ListGroup';

import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '../../index';
import { fetchUsers, fetchUser } from '../../http/userAPI';
import { fetchRoleUsers, fetchRoles } from '../../http/roleAPI';

const GetUsers = observer(({ show, onHide }) => {
  const { user, device, role } = useContext(Context);
  const [fetchedUser, setFetchedUser] = useState('');
  useEffect(() => {
    fetchUsers().then((usersData) => { return user.setUsers(usersData); });
    // fetchUser(selectedUser).then((usersData) => { return user.setSelectedUser(usersData); });
    // fetchUser(selectedUser).then((usersData) => {
    //  console.log('4', usersData); return user.setSelectedUser(usersData); });
    // fetchRoleUsers().then((users) => { console.log('fetchRoleUsers4rfvfr4', fetchRoleUsers); });
    // user.setSelectedUser(selectedUser);
    fetchRoles().then((rolesData) => { return role.setRoles(rolesData); });
  }, []);
  const addRole = () => {
    const rolesArray = user.getSelectedUser().user_roles.map((userRole) => {
      return { userRole };
    });

    console.log('Role in add role', user.getSelectedUser().user_roles[0], rolesArray);

    // eslint-disable-next-line array-callback-return, no-unused-expressions, max-len
    const isRoleBelongToUser = rolesArray.some((value) => { return value.userRole === role.getSelectedRole().name; });
    console.log('checkRole', isRoleBelongToUser);
  };
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
          Добавить/удалить новую роль
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Выберите пользователя:
        <Form.Select
          aria-label="Default select example"
          // eslint-disable-next-line max-len
          defaultValue={fetchUsers().then((usersInDefault) => { user.setSelectedUser(usersInDefault[0]); })}
          onChange={(e) => {
            // eslint-disable-next-line max-len
            fetchUser(e.target.value).then((fetcheduser) => { setFetchedUser(fetcheduser); user.setSelectedUser(fetcheduser); });
          }}
        >

          {user.getUsers().map((userData) => {
            return (
              <option
                key={userData.id}
              >
                {userData.email}
              </option>
            );
          })}

        </Form.Select>

        Роли пользователя:
        {/* {user.getSelectedUser()} */}
        {/* <hr /> */}
        <ListGroup>
          {user.getSelectedUser().user_roles.map((userRole) => {
          // {selectedUser.user_roles.map((userData) => {
            return (
              <ListGroup.Item>
                {userRole}
              </ListGroup.Item>
            );
          })}
        </ListGroup>

        Выберите роль:
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
        Selected role:
        {' '}
        {role.getSelectedRole().name}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addRole}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default GetUsers;
