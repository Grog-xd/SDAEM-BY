import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes/routes";

function App() {

  const isAuth = useSelector(state => state.toolkit.isAuth)


  return (
    <div className="App">
        {isAuth
            ?
              <Routes>
                {privateRoutes.map((route, index) =>
                    <Route key={index} element={route.element} path={route.path}/>
                )}
                <Route path='*' element={<Navigate to='404' replace/>}/>
              </Routes>
            :
                <Routes>
                    {publicRoutes.map((route, index) =>
                        <Route key={index} element={route.element} path={route.path}/>
                    )}
                    <Route path='*' element={<Navigate to='404' replace/>}/>
              </Routes>
        }
    </div>
  );
}

export default App;
