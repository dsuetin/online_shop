import React, { Component, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouther from './components/AppRouther';
import NavBar from './components/NavBar';
import { Context } from './index';

const App = observer(() => {
  const { user } = useContext(Context);
  console.log('aaauuuthhhhhh', user);
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
