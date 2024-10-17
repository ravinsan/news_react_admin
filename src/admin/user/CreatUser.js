import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import { toast } from "react-toastify";

const CreatUser = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};

    if (!name.trim()) formErrors.name = "Name is required.";
    if (!email.trim()) formErrors.email = "Email is required.";
    else if (!validateEmail(email)) formErrors.email = "Invalid email format.";
    if (!password.trim()) formErrors.password = "Password is required.";
    else if (password.length < 6) formErrors.password = "Password must be at least 6 characters.";
    if (!mobile.trim()) formErrors.mobile = "Mobile number is required.";
    if (!status) formErrors.status = "Status is required.";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const storeUser = async () => {

    if (!validateForm()) {
      return;
    }

    const payload = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      status: status,
    };

    try{
          const response = await axios.post(`${API_URL}/users-store`, payload, {
              withCredentials: true
          });
         console.log("1 = ", response);
         if(response.data.sucess === true)
         {
           toast.success(response.data.message);
           navigate("/users");
         }
         else{
          console.log("2 = ", response.data);
           toast.error(response.message);
         }
    }
    catch(error)
    {
      console.log("3 = ", error);
      toast.error(error.response.data.message);
    }
  };


  return (
    <>
      <div className="content">
        {/* Start Content*/}
        <div className="container-fluid">
          {/* start page title */}
          <div className="row">
            <div className="col-12">
              <div className="bg-flower">
                <img src="http://cms.indiasuperfast.com/admin/assets/images/flowers/img-3.png" />
              </div>
              <div className="bg-flower-2">
                <img src="http://cms.indiasuperfast.com/admin/assets/images/flowers/img-1.png" />
              </div>
              <div className="page-title-box mb-4">
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="http://cms.indiasuperfast.com/dashboard">
                        Dashbord
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/users">
                        User
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Create User</li>
                  </ol>
                </div>
                <Link to="/users">
                  <button className="btn btn-primary mt-3">
                    <i className="bi bi-arrow-90deg-left" /> Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* end page title */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card overflow-hidden">
                <div className="card-body">
                  <h4 className="header-title mb-3"> Create User</h4>
                  <form>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                          name="name"
                          value={name} onChange={(e)=>{setName(e.target.value)}}
                        />
                        {errors.name && <span className="error-text text-danger">{errors.name}</span>}
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="email"
                          name="email"
                          value={email} onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        {errors.email && <span className="error-text text-danger">{errors.email}</span>}
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          name="password"
                          onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        {errors.password && <span className="error-text text-danger">{errors.password}</span>}
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label htmlFor="mobile">Mobile</label>
                        <input
                          type="number"
                          name="mobile"
                          id="mobile"
                          className="form-control"
                          value={mobile} onChange={(e)=>{setMobile(e.target.value)}}
                        />
                        {errors.mobile && <span className="error-text text-danger">{errors.mobile}</span>}
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label htmlFor="status">Status</label>
                        <select className="form-control" name="status" value={status}
                          onChange={(e) => setStatus(e.target.value)}>
                           <option value="">-- Select Status --</option>
                           <option value="1">Active</option>
                           <option value="0">Inactive</option>
                        </select>
                        {errors.status && <span className="error-text text-danger">{errors.status}</span>}
                      </div>
                      <div className="col-lg-12 mt-3">
                        <button className="btn btn-primary" type="button" onClick={storeUser}>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end card-body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
      </div>
    </>
  );
};

export default CreatUser;
