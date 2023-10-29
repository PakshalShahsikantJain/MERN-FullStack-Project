import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './login.css'
import {Link} from 'react-router-dom'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'
import person_icon from './Assets/person.png'

function Login() 
{
    const [Name, setName] = useState("");
    const [Password,setPassword] = useState("");
    const [result,setResult] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const navigate = useNavigate();
    
    const submitForm = (e) => {
      e.preventDefault();

      axios.post("https://reactmernstack.onrender.com:5000/login",{
        Name,
        Password,
      })
      .then((res) => {
        var data = res.data;
        setLoggedIn(true);
        setUserInfo(data);
    })
      .catch((err) => {
        console.log(err);
    });
    if(Name == "admin" && Password == "123")
    {
        navigate("/userinfo", {
            state: {
                data : userInfo
            },
        });
    }
    else
    {
        setResult("Invalid User Name Or Password");
    }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary background'>
      <div className='form_container p-5 rounded bg-white background2'>
        <form onSubmit={submitForm}>
          <h3 className='text-center' style={{color:'white'}}>SIGN IN</h3>
          <div className='inputs'>
              <div className='input'>
                  <img src={person_icon} alt=""/>
                  <input type="text" placeholder="User Name" className='form-control' onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className='input'>
                <img src={password_icon} alt=""/>
                <input type="password" placeholder="Password" className='form-control' onChange={(e) => setPassword(e.target.value)}/>
              </div>
              
          </div>
          <div className='mb-3'>
              <input type="checkbox" className='custom-control custom-checkbox margin' id="check"/>
              <label htmlFor="Check" style={{color:'white'}} className='custom-input-label ms-2'>
                 Rember me
              </label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>LOGIN</button>
          </div>
          <p className='text-end mt-2'>
            <a href="" style={{color:'white'}}>Forgot Password?</a><Link style={{color:'white'}} to="/register" href="" className='ms-2'>Sign up</Link >
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;