import React from 'react'
import Nav from '../../nav'
import Footer from '../../footer'
import LoginTela from '../login/login'

class LoginComponent extends React.Component{

    render(){
       return (
            <div className="Login">
              <Nav />
              <LoginTela />
              <Footer />
             
             </div>
             
        )
    }
}
export default LoginComponent;