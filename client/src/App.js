import React, { Component, useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouther from './components/AppRouther';
import NavBar from './components/NavBar';
import { Context } from './index';
import { check } from './http/userAPI';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  console.log('aaauuuthhhhhh', user);
  useEffect(() => {
    console.log('useEffect');
    check().then(() => {
      console.log('check', user);
      user.setUser(user); // в оригинальном коде user.setUser(true);
      // но это бессмыслица какая то, user не булева переменная
      user.setIsAuth(true);
    }).finally(() => setLoading(false));
  }, []); // пустой массив - массив зависимостей

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const navigation = useNavigate();
  // const location = () => {
  //   const { pathname } = useLocation();
  //   return (pathname);
  // };
  // const isLogin = () => (location() === LOGIN_ROUTE);
  return (
    <Router>
      <NavBar />
      <AppRouther />
    </Router>

  );
});
export default App;
