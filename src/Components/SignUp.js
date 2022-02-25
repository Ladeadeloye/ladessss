import React from "react";
import "./SignUp.css";

const SignUp = () => {
  // const image = require('./image/Official Coinshare Logo.png');
  const imageNg = require('./images/NG.jpg');
    return(
        <div className="container ">
              {/* <img id="logo" src={image}></img> */}
        <div className="row align-items-center">
          <div className="col-md-6 offset-md-4 mt-5 shadow mx-auto">
            <div className="signup-form">
              <h1 className="mt-5 text-center">Create an account</h1>
              <h6  className="text-center">Welcome to the future of Savings. Let's get you</h6>
              <h6 className="text-center">started in 10 minutes</h6>
            <form className="mt-5 p-5" method="POST" action="/">
          <div className="">
          <div className="mb-3 col-md-9 mx-auto">
              <label for="name">First Name </label>
              <input className="form-control" id="firstName" name="fullName" type='text'></input>
          </div>
          <div className="mb-3 col-md-9 mx-auto">
              <label for="name">Last Name </label>
              <input className="form-control" id="lastName" name="fullName" type='text'></input>
          </div>
          <div className="mb-3 col-md-9 mx-auto">
              <label className="mb-2" for="email"> Email Address </label>
              <input className="form-control" id="email" name="email" type='email'></input>
          </div>
          <div className="mb-3 col-md-9 mx-auto">
              <label className="mb-2" for="phoneNumber"> Phone Number </label>
              <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><img src={imageNg}></img></span>
                        <input type="text" class="form-control" placeholder="(+234)" aria-label="Username" aria-describedby="basic-addon1" />
                      </div>          
              </div>
          <div className="mb-3 col-md-9 mx-auto">
              <label className="mb-2" for="password"> Password </label>
              <input className="form-control" id="password" name="password" type='password'></input>
          </div>
          <div className="mb-3 col-md-9 mx-auto">
              <label className="mb-2" for="password"> Confirm Password</label>
              <input className="form-control" id="cpassword" name="cpassword" type='password' />
              {/* </input> */}
          </div>
          <p className="text-center">I have read, understood and I agree to CoinShare<br></br><a href="/">Privacy Policy</a> and <a href="/">Terms and conditions</a></p>
          <div className="col-md-9 mt-4 text-center mx-auto">
              <input className="btn btn-primary btn-lg p-3" type='submit' value="Create account" id="submitButton"/>
          </div>
          </div>
        </form>
        <p className="text-center">Already have a CoinShare account? <a href="#" id="log">Log in</a></p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SignUp;