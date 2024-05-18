import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices from "../auth/ApiServices";
import Moment from "react-moment";

export default function JoinMeeting() {
  const [data, setData] = useState([])
  const [x, setX] = useState(false)
  
  useEffect(() => {
    ApiServices.getMeeting({})
      .then((response) => {
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
              <h1 className="display-3 text-white animated slideInDown">Meetings</h1>
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
                    Meetings
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Join Meeting Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3 mb-5">
              Join Meeting
            </h6>
          </div>
          <div className="row g-4 justify-content-center">
            {data?.map((el, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="card h-100 border-0 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{el?.departmentId?.departmentName}</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{el?.courseId?.courseName}</h6>
                    <p className="card-text">{el?.branchId?.branchName}</p>
                    <p className="card-text"><Moment format="MMMM Do, YYYY">{el?.classDate}</Moment></p>
                    <p className="card-text">Meeting Time: {el?.classTime}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <Link
                      className="btn btn-primary w-100"
                      style={{ borderRadius: "20px" }}
                      to={el?.meetingLink} target="_blank" rel="noopener noreferrer"
                    >
                      Join Meeting
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Join Meeting End */}
    </>
  )
}
