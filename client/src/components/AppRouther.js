import React, {useContext} from 'react';
// import  {Routes, Route, Navigate} from "react-router-dom";
import {Routes, Route, Outlet, Link, json, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
const AppRouter = (thisArg, ...argArray) => {
    const {user, device} = useContext(Context)
    console.log(user)
    console.log(device)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component.call(undefined, undefined)} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component.call(undefined, undefined)} exact/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
        </Routes>
    );
};


export default AppRouter;