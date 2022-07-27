import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {privateRoutes, publicRoutes} from '../routes/routes';

const AppRoutes = () => {
    const isAuth = useSelector(state => state.login.isAuth)

    return (
        <React.Fragment>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map((route, index) => <Route key={index} element={route.element} path={route.path}/>
                    )}
                </Routes>
                :
                <Routes>
                    {publicRoutes.map((route, index) => <Route key={index} element={route.element} path={route.path}/>
                    )}
                </Routes>
            }
        </React.Fragment>
    );
};

export default AppRoutes;
