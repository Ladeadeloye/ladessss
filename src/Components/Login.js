import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import coinsharelogo from "./images/coinsharelogo.jpg";
function Login() {
    const{register,handleSubmit, formState:{errors}} = useForm();
    const[error, setError] = useState('')
    const onSubmit = (data)=>{
        if (data.email=== "admin@example.com" && data.password==="1234") {
            localStorage.setItem("authenticated", "true")
            window.location.pathname='/homepage'
        }else{
            setError("Email or password is incorrect")
        }
    }
    
  return (
      <div className="div">
      <div className='coinshare'><img src={coinsharelogo}/></div>
      <div className="login">
       <div className="create">
            <h1>Log in to your account</h1>
            <h2>Please enter the details linked to your Coinshare account</h2>
          <div className="border"></div>

            <form>
                <label>Email Address</label>
                <input 
                type="text"
                {...register("email", {required:true})}
                placeholder='Enter email address'
                />
                <label>Password</label>
                <input type="password" 
                placeholder='Password (min. of 8 characters)'/>
                <h8>Forgot Password? Reset it</h8>
                <button>
                    Log in
                </button>
                <p>Don't have an account yet? Create account</p>
            </form>
        </div>
        </div>
        </div>
     );
}

export default Login;