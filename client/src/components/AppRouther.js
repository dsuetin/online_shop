import React, { Component, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes as aR, publicRoutes as pR } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AppRouther = () => {
  const { user } = useContext(Context);
  console.log('user in approuter', user);
  return (
    <Routes>
      { user.getIsAuth()
      && aR.map(({ path: p, Component: Cp }) => {
        return <Route key={p} path={p} element={<Cp />} exact />;
      })}
      { pR.map(({ path: p, Component: Cp }) => {
        return <Route key={p} path={p} element={<Cp />} exact />;
      })}
      {/* <Route path="*" element={<Navigate to={SHOP_ROUTE} />} /> */}
    </Routes>
  );
};

export default AppRouther;
