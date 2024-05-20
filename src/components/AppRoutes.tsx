import {FC, Fragment} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {privateRoutes, publicRoutes} from '../routes/routes.tsx';
import {loginRedux} from '../types/types';

const AppRoutes:FC = () => {
    const isAuth = useSelector((state:loginRedux) => state.login.isAuth)

    return (
        <Fragment>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map((route, index) => <Route key={index} element={route.element} path={route.path}/>,
                    )}
                </Routes>
                :
                <Routes>
                    {publicRoutes.map((route, index) => <Route key={index} element={route.element} path={route.path}/>,
                    )}
                </Routes>
            }
        </Fragment>
    );
};

export default AppRoutes;
