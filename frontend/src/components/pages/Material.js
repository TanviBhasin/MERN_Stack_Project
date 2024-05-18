import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../auth/ApiServices";
import Moment from "react-moment"

export default function Material() {
  const [data,setData]=useState([])
  const [x,setX]=useState(false)
  
  useEffect(() => {
      ApiServices.getMaterial({}).then((response) => {
          console.log("Get All API Response:", response);    
          setData(response.data.data);
          toast.success(response.data.message)
        })
        .catch((error) => {
          console.log("Error:", error);
          
        });
    }, [x])

  return (
    <>
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">Material</h1>
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
                        >
                            Material
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
      {/* Courses Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3 mb-5">
          Material
        </h6>
      </div>
      <div className="row g-4 justify-content-center">
      {data?.map(
                (el,index)=>(
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
          <div className="course-item bg-light">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid" src={BASE_URL+el?.material} alt="" />
            </div>
            <div className="text-center p-4 pb-0">
              <h3 className="mb-0">{el?.title}</h3>
              
              <p className="mb-4">
              Material Added on <Moment format="MMMM Do, YYYY">{el?.createdAt}</Moment>
              </p>
            </div>
            <div className="d-flex border-top">
           
                <Link
                  className="flex-shrink-0 btn btn-sm btn-primary px-5 mt-2 mb-2 mx-auto"
                  style={{ borderRadius: "20px" }} to={"/detail/"+el._id}
                >
                  View
                </Link>
            </div>
          </div>
          
        </div> 
      )
    )}
      </div>
    </div>
  </div>
  {/* Courses End */}
    </>
  )
}
