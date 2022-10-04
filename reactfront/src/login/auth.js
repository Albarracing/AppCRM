import react from 'react'
import './auth.css'
const Login = () =>{
  
    return(
        <div>
           <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                </div>
                    <form >
                        <input type="text"  className="fadeIn second" name="usuario" placeholder="usuario"/>
                        <input type="password"  className="fadeIn third" name="password" placeholder="contraseña"/>
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login