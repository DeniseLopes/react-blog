import React from 'react'
import './style.css'


const LoginTela = () => (
    <div className="wrapper fadeInDown">
        <div id="formContent">
            <div className="">
                <i className="material-icons  first">account_circle</i>
            </div>
            <form>
                <input type="text" id="" className="fadeIn second" name="login" placeholder="login" />
                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>
            <div id="formFooter">
                <a className="underlineHover" href="/login">Forgot Password?</a>
            </div>
        </div>
    </div>

);

export default LoginTela;