import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices from "../auth/ApiServices";

export default function FeedbackView() {
const [data,setData]=useState([])
const [x,setX]=useState(false)

useEffect(() => {
    ApiServices.getFeedback({}).then((response) => {
        console.log("Feedback Get All API Response:", response);    
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
              <div className="container py-3">
              <div className="row justify-content-center">
                  <div className="col-lg-10 text-center">
                  <h1 className="display-3 text-white animated slideInDown">Feedback</h1>
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
                          Feedback
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
              className="col-md-10 mx-auto shadow p-4 mb-5"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h3 className="mb-3 bg-white text-center px-3">View Feedback</h3>
                  </div>
              <table className="table table-bordered wow fadeInUp" data-wow-delay="0.1s">
                <thead>
                  <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
                {data?.map((el,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el?.name}</td>
                    <td>{el?.email}</td>
                    <td>{el?.subject}</td>
                    <td>{el?.message}</td> 
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
