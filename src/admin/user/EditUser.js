import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../config";
import { toast } from "react-toastify";

function EditUser() {

    const  { id } = useParams();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [edituser, setEditUser] = useState({ 
        name:"",
        email:"",
        password:"",
        mobile:"",
        status:"",
      });

      const {
        name,
        email,
        password,
        mobile,
        status,
      } = edituser;
      
    /* get user details by id */
    const Mysingleapi = async () => {

        axios.get(`${API_URL}/users/${id}`, {
          
            withCredentials: true,

        }).then((response)=>{
            setEditUser({
              name:response.data.data.name,
              email:response.data.data.email,
              password:response.data.data.password,
              mobile:response.data.data.mobile,
              status: response.data.data.status === true ? "1" : "0",
            });
        })
        .catch((error) => {
          console.error("Error fetching school data:", error);
        });
      }
      // console.log(edituser);
      useEffect(()=>{
        Mysingleapi();
      },[id]);

      const handleChange = (event) => {
        const { name, value } = event.target;
        setEditUser((prevData) => ({
          ...prevData,
          [name]: value || "", 
        }));
      };
    /* end */


    /* Update User */ 

    // Validate email format
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };
  
    const validateMobile = (mobile) => {
      const re = /^[0-9]{10}$/;
      return re.test(mobile);
    };
  
    const validateForm = () => {
      let formErrors = {};
    
      if (!name?.trim()) formErrors.name = "Name is required.";
      
      if (!email?.trim()) formErrors.email = "Email is required.";
      else if (!validateEmail(email)) formErrors.email = "Invalid email format.";
    
       
      if (!mobile?.toString().trim()) formErrors.mobile = "Mobile number is required."; // Convert mobile to string before trimming
      else if (mobile.toString().length !== 10) formErrors.mobile = "Mobile number must be 10 digits."; // Ensure valid length
    
      if (!status) formErrors.status = "Status is required.";
    
      setErrors(formErrors);
    
      return Object.keys(formErrors).length === 0;
    };
    
    

  const updateUser = async () => {

    if (!validateForm()) {
      return;
    }

    const payload = {
      name: name,
      email: email,
      password: password,
      mobile: String(mobile),
      status: parseInt(status),
    };

    try{
          const response = await axios.put(`${API_URL}/users/${id}`, payload, {
              withCredentials: true
          });
         console.log(response.data.success);
         if(response.data.success == true)
         {
           toast.success(response.data.message);
           navigate("/users");
         }
         else{
           toast.error(response.data.message);
         }
    }
    catch(error)
    {
      console.log(error.message);
      toast.error(error.message);
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
                          value={name || ""} onChange={(e)=>{handleChange(e)}}
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
                          value={email || ""} onChange={(e)=>{handleChange(e)}}
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
                          onChange={(e)=>{handleChange(e)}}
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
                          value={mobile || ""} onChange={(e)=>{handleChange(e)}}
                        />
                        {errors.mobile && <span className="error-text text-danger">{errors.mobile}</span>}
                      </div>
                      <div className="col-lg-6 mt-2">
                        <label htmlFor="status">Status</label>
                        <select className="form-control" name="status" value={status} onChange={handleChange}>
                           <option value="">-- Select Status --</option>
                           <option value="1">Active</option>
                           <option value="0">Inactive</option>
                        </select>
                        {errors.status && <span className="error-text text-danger">{errors.status}</span>}
                      </div>
                      <div className="col-lg-12 mt-3">
                        <button className="btn btn-primary" type="button" onClick={updateUser}>
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
  )
}

export default EditUser