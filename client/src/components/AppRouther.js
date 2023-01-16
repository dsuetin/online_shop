import React, {Component} from 'react';
// import  {Routes, Route, Navigate} from "react-router-dom";
import {Routes, Route, Outlet, Link, json, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
// import {Barnd} from "../models/";
import Home from "../pages/Home";
const AppRouter = () => {
    const isAuth = false
    // return (
        // <Routes>
        //     {isAuth && authRoutes.map(({path, Component}) =>
        //         <Route key={path} path={path} element={Component} exact/>
        //     )}
        //     {publicRoutes.map(({path, Component}) =>
        //         // <Route key={path} path={path} element={Component} exact/>
        //         // <Route exact path={"/"} />
        //         console.log(8888888, path)
        //     )}
        // </Routes>

    // return res.json()

    // return (
        // <div>
        //
        //     <Routes>
        //         <Route element={<Layout />}>
        //             <Route path="/" element={<PublicPage />} />
        //             <Route path="/login" element={<LoginPage />} />
        //             <Route
        //                 path="/protected"
        //                 element={
        //                     <RequireAuth>
        //                         <ProtectedPage />
        //                     </RequireAuth>
        //                 }
        //             />
        //         </Route>
        //     </Routes>
        // </div>
    return (

        <Routes>
            {publicRoutes.map(({path, Component}) =>
                // console.log('jjjjj')
            // console.log(path)
            //     Component.prototype
                // Component.length
                // Component.arguments
                <Route key={path} path={path} element={Component.name}/>
            )}

            {/*<Route path="/" element={<Layout />}>*/}
            {/*    <Route index element={<Home />} />*/}
            {/*    <Route path="about" element={<About />} />*/}
            {/*    <Route path="dashboard" element={<Dashboard />} />*/}

            {/*    /!* Using path="*"" means "match anything", so this route*/}
            {/*        acts like a catch-all for URLs that we don't have explicit*/}
            {/*        routes for. *!/*/}
            {/*    <Route path="*" element={<NoMatch />} />*/}
            {/*</Route>*/}

            {/*<Route path="/" element={<Layout />}>*/}

            {/*</Route>*/}

            {/*{authRoutes.map(({path, Component}) =>*/}
            {/*    <Route key={path} path={path} element={Component} exact/>*/}
            {/*)}*/}
        </Routes>
    );
    // return (
    //     <div>
    //         workin
    //     </div>
    // )
    // return (
    //     <Routes>
    //         WOrkng
    //         <Route key="lala" path="/" element={<Layout />} />
    //         {isAuth && authRoutes.map(({path, Component}) =>
    //             <Route key={path} path={path} element={Component}/>
    //         )}
    //         {publicRoutes.map(({path, Component}) =>
    //             <Route key={path} path={path} element={Component}/>
    //         )}
    //         <Navigate to={SHOP_ROUTE}/>
    //         {/*<Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />*/}
    //     </Routes>
    // );
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