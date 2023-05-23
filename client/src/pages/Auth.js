// import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
// import Container from 'react-bootstrap/esm/Container';
import { Container, Card, Form, Row, Button } from 'react-bootstrap';
// import { Form } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../index';

// import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration, check } from '../http/userAPI';
// // const email = '';
// // const { user } = useContext(Context);
// const location = useLocation();
// const navigation = useNavigate();
// const isLogin = true; // = location.pathname === LOGIN_ROUTE

// const { pathname } = useLocation();

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const [diviceVisible, setDeviceVisible] = useState(false);
const Auth = observer(() => {
  const { user } = useContext(Context);
  console.log('aaauuuthhhhhh', user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const location = () => {
  //   const { pathname } = useLocation();
  //   return (pathname);
  // };
  // const isLogin = () => (location() === LOGIN_ROUTE);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const click = async (email, password) => {
    let UserData;
    console.log('click action');
    if (isLogin) {
      // console.log('click 5', email, password);
      const UserData = await login(email, password);
      console.log('login response', UserData);
      // const response = await login();
      // const response = await check();
    } else {
      const UserData = await registration(email, password);
      console.log('registration response', UserData);
    }
    user.setUser(user);
    user.setIsAuth(true);
    console.log('hahahaha', user.getUser().getIsAuth());
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ heigth: window.innerHeight - 540 }}
      // style={{ heigth: '1000vh' }}
    >
      <Card style={{ outerWidth: 600 }} className="p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin
              ? (
                <div>
                  Нет аккаунта?
                  <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся!</NavLink>
                </div>
              )
              : (
                <div>
                  Есть аккаунт?
                  {' '}
                  <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              )}
            <Button
              variant="outline-success"
              className="mt-3 align-self-end"
              onClick={() => click(email, password)}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>

        </Form>
      </Card>
    </Container>
  );
});
export default Auth;
