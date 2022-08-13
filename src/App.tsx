import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {enter} from './redux/loginPage';
import AppRoutes from './components/AppRoutes.tsx';
import './App.scss';
import {loginRedux} from './types/types';

function App() {

    const {profilesArr} = useSelector((state:loginRedux) => state.login)
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
        <div className='App'>
            <AppRoutes />
        </div>
    );
}

export default App;
