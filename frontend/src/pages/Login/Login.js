import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { isAuthenticated } from "../../authentication";
export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  
    const navigate = useNavigate()
   function join(){

        if(userName === 'andre' && password === '123'){
          localStorage.setItem('token', 'TOKENTESTMOCK125')
          navigate('/dashboard')
        }else{
          alert('Credentials invalid')
        }
        
    }

  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <div className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                    onChange={e => setUserName(e.target.value)}
                  type="text"
                  className="login__input"
                  placeholder="Digite seu E-mail"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                    onChange={e => setPassword(e.target.value)}
                  type="password"
                  className="login__input"
                  placeholder="Senha"
                />
              </div>
              <button
             onClick={join}  
              className="button login__submit">
                <span className="button__text">Entrar</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
}
