import react from 'react'
import './auth.css'
import fondo from './fondo.jpg'
const Login = () =>{
  
    return(
        <div className='login'>
           <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <img id="icon" alt="Logo" />
                </div>
                    <form >
                        <input type="text"  className="fadeIn second" name="usuario" placeholder="usuario"/>
                        <input type="password"  className="fadeIn third" name="password" placeholder="contraseña"/>
                        <input type="submit" className="fadeIn fourth" value="ingresar"/>
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Recuperar contraseña</a>
                    </div>
                </div>
                <div className='imgfondo'>
                    <img className='fondo' src={fondo}/>
                </div>
            </div>
           
        </div>
    )
}

export default Login