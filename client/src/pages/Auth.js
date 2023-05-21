// import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

// import Container from 'react-bootstrap/esm/Container';
import { Container, Card, Form, Row, Button } from 'react-bootstrap';
// import { Form } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';
// // import { Context } from '../index';

// import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
// // const email = '';
// // const { user } = useContext(Context);
// const location = useLocation();
// const navigation = useNavigate();
// const isLogin = true; // = location.pathname === LOGIN_ROUTE
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const { pathname } = useLocation();

const location = () => {
  const { pathname } = useLocation();
  return (pathname);
};

const isLogin = () => (location() === LOGIN_ROUTE);

const click = async () => {
  if (isLogin) {
    const responce = await login();
  } else {
    const responce = await registration();
    console.log('efrgtrhwg5y', responce);
  }
};

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const [diviceVisible, setDeviceVisible] = useState(false);

const Auth = () => (
  // const [brandVisible, setBrandVisible] = useState(false);
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
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          className="mt-3"
          placeholder="Введите ваш пароль"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          // type="password"
        />
        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
          {isLogin()
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
            // onClick={click}
          >
            {isLogin() ? 'Войти' : 'Регистрация'}
          </Button>
        </Row>

      </Form>
    </Card>
  </Container>
);

export default Auth;
