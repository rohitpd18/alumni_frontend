import React from 'react'
import loginImage from '../Assets/Image/login.svg'

export default function Login() {
  return (
    <div>
        <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src={loginImage}
          className="img-fluid" alt="Phone"/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
            <h1 className="mb-3">Login form</h1>
          {/* Email input  */}
          <div className="form-outline mb-4">
            <input type="email" id="form1Example13" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example13">Email address</label>
          </div>

          {/* Password input  */}
          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example23">Password</label>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
            {/* Checkbox  */}
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label className="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          {/* Submit button  */}
          <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
