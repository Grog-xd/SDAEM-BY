import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routes";
import {useSelector} from "react-redux";

const AppRoutes = () => {
    const isAuth = useSelector(state => state.toolkit.isAuth)

    return (
        <React.Fragment>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map((route, index) => <Route key={index} element={route.element} path={route.path}/>
                    )}
                    <Route path='*' element={<Navigate to='404' replace/>}/>
                </Routes>
                :
                <Routes>
                    {publicRoutes.map((route, index) => <Route key={index} element={route.element} path={route.path}/>
                    )}
                    <Route path='*' element={<Navigate to='404' replace/>}/>
                </Routes>
            }
        </React.Fragment>
    );
};

export default AppRoutes;
