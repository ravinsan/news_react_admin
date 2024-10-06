import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProfile, setToken } from "../redux/profileReducer";
import Loader from "./ui/loader";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({email: '', password: ''});
  const {email, password} = formData; 
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
    
  }

  const validateForm = () =>{
    let errors = {};
    if(!password){
      errors.password = "Password is required";
    }
    else if(password.length < 8)
    {
      errors.password = "Password Length must be 8 or more than 8";
    }

    if(!email){
      errors.email = "Email is required";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address'
    }

    return errors;
  }

  const handleSubmit = async ()=>{
    const errors = validateForm();
    if(Object.keys(errors).length > 0)
    {
      setErrors(errors);
    }
    else
    {
      try{
          setLoading(true);
          const response = await axios.post(`${API_URL}/signin`, formData,{withCredentials: true});
          console.log(response.data);
          if(response.data.success === true)
          {
            // localStorage.setItem("token",response.data.token);
            
            dispatch(setToken(response.data.token));
            dispatch(setProfile(response.data.user));

            toast.success(response.data.message);
            navigate("/dashboard");
          }
      }
      catch(error)
      {
        setLoading(false);
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
  }

  if(loading){
    return (
      <Loader/>
    )
  }  

  return (
    <>
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-lg-5">
              <div
                className="position-relative rounded-3 overflow-hidden"
                style={{
                  backgroundImage: "url(assets/images/flowers/img-3.png)",
                  backgroundPosition: "top right",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="card bg-transparent mb-0">
                  {/* Logo*/}
                  <div className="auth-brand">
                    <a href="index.html" className="logo-light">
                      <img
                        src="assets/images/logo.png"
                        alt="logo"
                        height={22}
                      />
                    </a>
                    <a href="index.html" className="logo-dark">
                      <img
                        src="assets/images/logo-dark.png"
                        alt="dark logo"
                        height={22}
                      />
                    </a>
                  </div>
                  <div className="card-body p-4">
                    <div className="w-50">
                      <h4 className="pb-0 fw-bold">Sign In</h4>
                      <p className="fw-semibold mb-4">
                        Enter your email address and password to access admin
                        panel.
                      </p>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="emailaddress" className="form-label">
                          Email address
                        </label>
                        <input className={`form-control ${errors.email ? "is-invalid" : ""}`} type="email" name="email" value={email} onChange={(e)=>handleChange(e)} id="emailaddress" placeholder="Enter your email" autoComplete="off"/>
                        <span className="text text-danger">{errors.email}</span>
                      </div>
                      <div className="mb-3">
                        <a href="auth-recoverpw.html" className="float-end fs-12">
                          Forgot your password?
                        </a>
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group input-group-merge">
                          <input type="password" id="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} name="password" value={password} onChange={(e)=>handleChange(e)} placeholder="Enter your password" autoComplete="off" />
                          <div
                            className="input-group-text"
                            data-password="false"
                            >
                            <span className="password-eye" />
                          </div>
                        </div>
                            <span className="text text-danger">{errors.password}</span>
                      </div>
                      <div className="mb-3 mb-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkbox-signin"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-signin"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="mb-3 mb-0 text-center">
                        <button className="btn btn-primary w-100" type="button" onClick={handleSubmit}>
                          Log In
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* end card-body */}
                </div>
                {/* end card */}
              </div>
              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p className="text-muted bg-body">
                    Don't have an account?{" "}
                    <a
                      href="auth-register.html"
                      className="text-muted ms-1 link-offset-3 text-decoration-underline"
                    >
                      <b>Sign Up</b>
                    </a>
                  </p>
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row */}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
    </>
  );
};

export default Login;
