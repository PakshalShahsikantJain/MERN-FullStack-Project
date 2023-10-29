import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function Registration() 
{
    const [Name, setName] = useState("");
    const [Date,setDate] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [result,setResult] = useState("");
    
    const submitForm = (e) => {
      /*
      e.preventDefault();

      axios.post("http://localhost:5000/register",{
        Name,
        Date,
        Email,
        Password,
      })
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
    });
    */
  };

  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 background'>
      <div className='form_container p-5 rounded background2'>
        <form onSubmit={submitForm}>
          <h3 className='text-center' style={{color:'white'}}>SIGN UP</h3>
          <div className='mb-2'>
              <label style={{color:'white'}} htmlFor="Name">Name</label>
              <input type="text" placeholder="Enter Name" className='form-control' onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className='mb-2'>
              <label style={{color:'white'}} htmlFor="Date">Date of Birth</label>
              <input type="date" placeholder="Enter User Name" className='form-control' onChange={(e) => setDate(e.target.value)}/>
          </div>
          <div className='mb-2'>
              <label style={{color:'white'}} htmlFor="Email">Email Address</label>
              <input type="text" placeholder="Enter Email Address" className='form-control' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='mb-2'>
              <label style={{color:'white'}} htmlFor="password">Password</label>
              <input type="password" placeholder="Enter Password" className='form-control' onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className='d-grid mt-4'>
            <button className='btn btn-primary'>REGISTER</button>
          </div>
          <p className='text-end mt-2 mb-0' style={{color:'white'}}>
              Already Registered? <Link to="/" href="" style={{color:'white'}} className='ms-2'>Sign in</Link >
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;