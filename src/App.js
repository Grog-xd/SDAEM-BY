import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes/routes";

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.toolkit.count)


  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) =>
            <Route key={index} element={route.element} path={route.path}/>
        )}
        <Route path='*' element={<Navigate to='404' replace/>}/>
      </Routes>
    </div>
  );
}

export default App;
