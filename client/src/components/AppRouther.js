import React, {useContext} from 'react';
// import  {Routes, Route, Navigate} from "react-router-dom";
import {Routes, Route, Outlet, Link, json, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
// import {Barnd} from "../models/";
import Home from "../pages/Home";
import {Context} from "../index";
const AppRouter = (thisArg, ...argArray) => {
    // const isAuth = false
    const isAuth = true
    const {user} = useContext(Context)
    // console.log(user)
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

function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </div>
    );


}

// function Home() {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>
//     );
// }

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default AppRouter;