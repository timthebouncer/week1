import React, {useState} from 'react'
import './App.css';
import { Route, Switch,  withRouter} from 'react-router-dom'
import LoginPage from './pages/views/LoginPage/loginPage'
import Register from "./pages/views/RegisterPage/registerPage";
import Message from "./component/alert/message";
import IndexPage from "./pages/views/IndexPage/indexPage";
import Verify from "./component/verify";

function App() {

  const [modal, showModal] = useState(false)
  const [verify, showVerify] = useState(false)
  const [verifyType, setVerifyType] = useState('')
  const [pass, setPass] = useState(false)

  return (
    <div className="app">
      {
        modal?<Message modal={modal} />:''
      }
      {
        verify === true ? <Verify showVerify={showVerify} setPass={setPass} />:''
      }
      <Switch>
        <Route path='/' exact component={()=>
          <LoginPage showModal={showModal} verify={verify} showVerify={showVerify} verifyType={verifyType} setVerifyType={setVerifyType}
                     pass={pass}
          />}
        />
        <Route path='/register' exact component={ Register } />
        <Route path='/index' exact component={ IndexPage } />
      </Switch>
    </div>
  );
}

export default withRouter(App);
