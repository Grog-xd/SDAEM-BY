import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {enter} from "./redux/toolkitSlice";
import AppRoutes from "./components/appRoutes";

function App() {

  const profilesArr = useSelector(state => state.toolkit.profilesArr)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.hasOwnProperty('profile')){
      const profile = localStorage.getItem('profile').split(' ')
      for(let i = 0; i<profilesArr.length; i++){
        if(profilesArr[i].name === profile[0] && profilesArr[i].password === profile[1]){
          dispatch(enter(profilesArr[i]))
          break
        }
      }
    }
  }, [])



  return (
    <div className="App">
        <AppRoutes />
    </div>
  );
}

export default App;
