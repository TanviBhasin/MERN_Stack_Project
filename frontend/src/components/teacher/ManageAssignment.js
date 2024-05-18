import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices from "../auth/ApiServices";
import * as qs from "qs"

export default function ManageAssignment() {
  const [data,setData]=useState([])
  const [isChange,setIsChange]=useState(false)
  
  useEffect(() => {
      ApiServices.getAssignment({}).then((response) => {
          console.log("Get All API Response:", response);    
          setData(response.data.data);
          toast.success(response.data.message)
        })
        .catch((error) => {
          console.log("Error:", error);
          
        });
    }, [isChange]);

    const changeStatus=(id,status)=>{
      // console.log(id,!status);
      let data={
          _id:id,
          status:!status
      }
 
      ApiServices.softdeleteAssignment(qs.stringify(data)).then((res)=>{
          toast.success(res.data.message)
          setIsChange(true)
      }).catch((err)=>{
          console.log(err);
      })
      setIsChange(false)
  }  

  return (
    <>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
              <div className="container py-5">
              <div className="row justify-content-center">
                  <div className="col-lg-10 text-center">
                  <h1 className="display-3 text-white animated slideInDown">Assignment</h1>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                          <a className="text-white" href="#">
                          Home
                          </a>
                      </li>
                      <li
                          className="breadcrumb-item text-white active"
                          aria-current="page">
                          Manage Assignments
                      </li>
                      </ol>
                  </nav>
                  </div>
              </div>
              </div>
          </div>
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 mx-auto shadow p-4 mb-5"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h3 className="mb-3 bg-white text-center px-3">Manage Assignment</h3>
                  </div>
              <table className="table table-bordered wow fadeInUp" data-wow-delay="0.1s">
                <thead>
                  <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Department</th>
                    <th scope="col">Course</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Image</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Marks</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                {data?.map((el,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el?.title}</td>
                    <td>{el?.description}</td>
                    <td>{el?.departmentId?.departmentName}</td>
                    <td>{el?.courseId?.courseName}</td>
                    <td>{el?.branchId?.branchName}</td>
                    <td>{el?.subjectId?.subjectName}</td>
                    <td>
                    <img src={"http://localhost:4001/"+el?.assignment}  style={{height:"80px", width:"80px"}}/>
                    </td>
                    <td>{el?.duedate}</td>
                    <td>{el?.marks}</td>

                    <td>
                      <Link to={"/teacher/editassignment/"+el._id} className="text-primary">
                      <i className="fas fa-pen-square"></i>
                      </Link>
                   
                    </td>
                    <td>
                    <i className="fas fa-toggle-on" onClick={()=>{
                                changeStatus(el._id,el.status)
                            }}/><br/>{el.status==true?"Active":"InActive"}
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
  )
}
