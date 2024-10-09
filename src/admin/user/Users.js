import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";
import Loader from "../../component/ui/loader";
import { Pencil, Trash } from "lucide-react";
import { Pagination } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";


const Users = () => {

    const [data, setData]       = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage]   = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const MySwal = withReactContent(Swal);
        
    const getData = async () =>{
      try{
        const response = await axios.get(`${API_URL}/users`,{
            withCredentials: true, 
        });
        console.log(response.data.data);
        setData(response.data.data);
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

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(data.length / itemsPerPage);

  if(loading){
    return (
      <Loader/>
    )
  }  

  // Delete User.
  const handleDelete = async (id) =>{
        MySwal.fire({
          title: "Are you sure?",
          text: "You want to delete this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
        try{
          const response = await axios.delete(`${API_URL}/users/${id}`, {
              withCredentials: true, 
          });
          toast.success(response.data.message);
          getData();
        }
        catch(error)
        {
          toast.error(error.message);
        }
      }
      });
  }

  // User Status Change
  const handleStatuChange = async (id) => {
       MySwal.fire({
         title: "Are you sure?",
         text: "You want to change this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, change it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
         try{
            const response = await axios.get(`${API_URL}/users/${id}`, {
              withCredentials: true, 
            })
            toast.success(response.data.message);
            getData();
         }
         catch(error)
         {
          toast.error(error.message);
         }
        }
      });
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
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   {currentItems.map((user, index)=>( 
                    <tr key={user._id}>
                      <td>{++index}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                      <td>
                          {user.status == 1 ? (
                            <span className="badge bg-success" onClick={() => handleStatuChange(user._id)}>Active</span>
                          ) : (
                            <span className="badge bg-danger" onClick={() => handleStatuChange(user._id)}>Inactive</span>
                          )}
                      </td>
                      <td>
                        <Link to={`/user/${user._id}`} className="badge bg-primary">
                          <Pencil size={16} />
                        </Link>
                        <Link className="badge bg-danger ms-2" onClick={ ()=>handleDelete(user._id)}><Trash size={16} /></Link>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
                    {/* Pagination */}
                    <Pagination>
                        <Pagination.Prev
                          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                        />
                        {Array.from({ length: totalPages }).map((_, index) => (
                          <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => paginate(index + 1)}
                          >
                            {index + 1}
                          </Pagination.Item>
                        ))}
                        <Pagination.Next
                          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        />
                      </Pagination>
              </div>
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
