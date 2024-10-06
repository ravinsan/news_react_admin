import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";
import Loader from "../../component/ui/loader";

const Users = () => {

    const [data, setData]       = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    const getData = async () =>{
      try{
        const response = await axios.get(`${API_URL}/users`,{
            withCredentials: true, // This is for token in cookies
        });
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      }
      catch(error){
        console.error(error.message);
        setLoading(false);
      } 
    }

    useEffect(() => {
        getData();
    },[]);

  if(loading){
    return (
      <Loader/>
    )
  }  

  return (
    <>
      <div className="content">
        {/* Start Content*/}
        <div className="container-fluid">
          {/* start page title */}
          <div className="row">
            <div className="col-12">
              <div className="bg-flower">
                <img src="assets/images/flowers/img-3.png" />
              </div>
              <div className="bg-flower-2">
                <img src="assets/images/flowers/img-1.png" />
              </div>
              <div className="page-title-box">
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Tables</a>
                    </li>
                    <li className="breadcrumb-item active">Users</li>
                  </ol>
                </div>
                <h4 className="page-title">Users</h4>
              </div>
            </div>
          </div>
          {/* end page title */}
          <div className="row g-4">
            <div className="col-12">
              <div className="mb-4">
                <Link to="#"><button className="btn btn-primary mb-3">Add <i className="bi bi-plus-lg"></i></button></Link>
                <Link to="#"><button className="btn btn-primary ms-2 mb-3"><i className="ri-refresh-line"></i></button></Link>
                <table
                  id="basic-datatable"
                  className="table table-striped dt-responsive nowrap w-100"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </tfoot>
                </table>
              </div>{" "}
              {/* end card */}
            </div>
            {/* end col*/}
          </div>{" "}
          {/* end row*/}
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* content */}
    </>
  );
};

export default Users;
