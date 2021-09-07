import React, {lazy, Suspense} from "react";
import {UserContext} from "../store/useContext";
import {Switch, Route} from "react-router-dom";
import {Redirect} from 'react-router'
import NotFound from "../pages/views/404NotFound";
const LoginPage = lazy(()=>import('../pages/views/LoginPage/loginPage'))
const Register = lazy(()=>import('../pages/views/RegisterPage/registerPage'))
const IndexPage = lazy(()=>import('../pages/views/IndexPage/indexPage'))
const NewsPage = lazy(()=>import('../pages/views/NewsPage/newsPage'))


const Routes=props=>{

    const {setUserInfo, showVerify, showModal, setAlertMessage, auth} = props

return(
  <Suspense fallback={<h1>111</h1>}>
        <Switch>
            <Redirect path="/" to={'/login'} exact/>
            {/*<UserContext.Provider>*/}
                        <Route path='/login' exact component={()=>
                          <LoginPage setUserInfo={setUserInfo} showVerify={showVerify} showModal={showModal} setAlertMessage={setAlertMessage}/>}
                        />
                        <Route path='/register' exact component={()=><Register showModal={showModal} setAlertMessage={setAlertMessage} />} />
                        <Route component={NotFound}/>
            {/*</UserContext.Provider>*/}
          {
            auth?
              <Suspense fallback={<h1>111</h1>}>
                <Route path='/index' component={()=> <IndexPage/> } />
                <Route path='/news' component={()=> <NewsPage/> } />
              </Suspense>:''
          }
        </Switch>
  </Suspense>
)

}

export default Routes
