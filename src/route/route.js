import React, {lazy, Suspense} from "react";
import {UserContext} from "../store/useContext";
import {Switch, Route} from "react-router-dom";
import {Redirect} from 'react-router'
const LoginPage = lazy(()=>import('../pages/views/LoginPage/loginPage'))
const Register = lazy(()=>import('../pages/views/RegisterPage/registerPage'))
const IndexPage = lazy(()=>import('../pages/views/IndexPage/indexPage'))
const NewsPage = lazy(()=>import('../pages/views/NewsPage/newsPage'))
const NotFound = lazy(()=>import('../pages/views/404NotFound'))


const Routes=props=>{

    const {setUserInfo, showVerify, showModal, setAlertMessage, auth} = props

return(
        <Switch>
            <Redirect path="/" to={'/login'} exact/>
            <UserContext.Provider>
                <Suspense fallback={<h1>111</h1>}>
                        <Route path='/login' exact component={()=><LoginPage setUserInfo={setUserInfo} showVerify={showVerify}/>} />
                        <Route path='/register' exact component={()=><Register showModal={showModal} setAlertMessage={setAlertMessage} />} />
                        <Route path='/404' component={()=> <NotFound/>}/>
                </Suspense>

                {
                    auth?
                        <Suspense fallback={<h1>111</h1>}>
                            <Route path='/index' component={()=> <IndexPage/> } />
                            <Route path='/news' component={()=> <NewsPage/> } />
                        </Suspense>:''
                        // <Suspense fallback={<h1>111</h1>}><NotFound/></Suspense>
                }
            </UserContext.Provider>
        </Switch>
)

}

export default Routes