import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices from "../auth/ApiServices";

export default function ViewAssignments() {
  const [data,setData]=useState([])
  const [x,setX]=useState(false)
  
  useEffect(() => {
      ApiServices.getAssignment({}).then((response) => {
          console.log("Get All API Response:", response);    
          setData(response.data.data);
          toast.success(response.data.message)
        })
        .catch((error) => {
          console.log("Error:", error);
          
        });
    }, [x]);
  return (
    <>
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">Assignments</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                            <a className="text-white" href="#">
                            Home
                            </a>
                        </li>
                        <li
                            className="breadcrumb-item text-white active"
                            aria-current="page"
                        >View Assignments
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>

      <div className="container-fluid">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3 mb-5">
          View Assignments
        </h6>
      </div>
        <div className="row">
        {data?.map(
                (el,index)=>(
          <div className="col-md-3 float-left">
          <Link to={"/assignmentsdetails/"+el._id}>
            <div className="card bg-primary text-white mb-4" key={index} 
            style={{width: '350px', height: '160px'}}>
              <div className="card-body">
                <p className="fs-5 fw-bold">{el?.title}<br/>
                Due Date: {el?.duedate}<br/>
                Marks: {el?.marks}</p>
                </div>         
            </div>
            </Link>
          </div>
          )
        )}
    
    
        </div>
       
      </div>
    </>
  )
}
