import React, {useState,useEffect, useContext} from 'react'
import './App.css';
import { Router, Switch,  withRouter} from 'react-router-dom'
import LoginPage from './pages/views/LoginPage/loginPage'
import Register from "./pages/views/RegisterPage/registerPage";
import Message from "./component/alert/message";
import IndexPage from "./pages/views/IndexPage/indexPage";
import Verify from "./component/verify";
import HeaderPage from "./component/header/header";
import axios from 'axios'
import NewsPage from "./pages/views/NewsPage/newsPage";
import NotFound from "./pages/views/404NotFound";
import {UserContext} from "./store/useContext";
import Routes from "./route/route";

function App() {

  const [modal, showModal] = useState(false)
  const [verify, showVerify] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [alertMessage, setAlertMessage] = useState('')
  const [login, setLogin] = useState(false)
  const [auth, setAuth] = useState(false)



  useEffect(()=>{
    if(login){
      setTimeout(()=>{
        let token = localStorage.getItem('tokensss')
        axios.get('/api/authentication', {
          headers: {
            'AUTHENTICATION_TOKEN': token
          },
        })
          .then(()=>{
            setAuth(true)
          })
          .catch(()=>{
            setAuth(false)
          })
      },1000)
    }
  },[login])


  return (
    <div>
      {
        auth?<HeaderPage />:''
      }
      <div className="app">
        {
          modal?<Message modal={modal} message={alertMessage} />:''
        }
        {
          verify === true ? <Verify showVerify={showVerify} userInfo={userInfo} showModal={showModal} setAlertMessage={setAlertMessage}
                                    setLogin={setLogin}
          />:''
        }
        <Routes setUserInfo={setUserInfo} showVerify={showVerify} showModal={showModal} setAlertMessage={setAlertMessage}
          auth={auth}
        />
        {/*<Switch>*/}
        {/*  <UserContext.Provider value={test}>*/}
        {/*    <Route path='/' exact component={()=>*/}
        {/*        <LoginPage setUserInfo={setUserInfo} verify={verify} showVerify={showVerify}/>}*/}
        {/*    />*/}
        {/*    <Route path='/register' component={()=> <Register showModal={showModal} setAlertMessage={setAlertMessage} />} />*/}
        {/*    <Route path='/index' component={ IndexPage } />*/}
        {/*    <Route path='/news' component={ NewsPage } />*/}
        {/*    <Route path='/123' component={ NotFound } />*/}
        {/*  </UserContext.Provider>*/}
        {/*</Switch>*/}
      </div>
    </div>
  );
}

export default App;
