import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiServices from "../auth/ApiServices";

export default function Dashboard() {
  const [data, setData] = useState({
    totaldepartment: 0,
    totalcourse: 0,
    totalbranch: 0,
    totalsubject: 0,
    totalstaff: 0,
    totalstudent: 0,
    totalfeedback: 0,
  });

  useEffect(() => {
    ApiServices.dashboard().then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error in fetching data!", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Dashboard</h1>

      <div className="row mt-2">
        <div className="col-xl-3 col-md-6">
          <div className="card text-white h-100 rounded-3" style={{ backgroundColor: "#82B1FF" }}>
            <div className="card-body d-flex flex-column justify-content-center">
              <i className="fas fa-building fs-2"></i>
              <h5 className="card-title fs-3 mt-2">Departments</h5>
              <p className="card-text fs-3">{data.totaldepartment}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center rounded-0">
              <Link className="btn btn-light btn-sm" to={"/admin/managedept"}>
                View Details
              </Link>
              <i className="fas fa-angle-right text-light"></i>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card text-white h-100 rounded-3" style={{ backgroundColor: "#FFB74D" }}>
            <div className="card-body d-flex flex-column justify-content-center">
              <i className="fas fa-book-open fs-2"></i>
              <h5 className="card-title fs-3 mt-2">Courses</h5>
              <p className="card-text fs-3">{data.totalcourse}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center rounded-0">
              <Link className="btn btn-light btn-sm" to={"/admin/managecourses"}>
                View Details
              </Link>
              <i className="fas fa-angle-right text-light"></i>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card text-white h-100 rounded-3" style={{ backgroundColor: "#FF8A65" }}>
            <div className="card-body d-flex flex-column justify-content-center">
              <i className="fas fa-code-branch fs-2"></i>
              <h5 className="card-title fs-3 mt-2">Branch</h5>
              <p className="card-text fs-3">{data.totalbranch}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center rounded-0">
              <Link className="btn btn-light btn-sm" to={"/admin/managebranch"}>
                View Details
              </Link>
              <i className="fas fa-angle-right text-light"></i>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card text-white h-100 rounded-3" style={{ backgroundColor: "#64B5F6" }}>
            <div className="card-body d-flex flex-column justify-content-center">
              <i className="fas fa-book fs-2"></i>
              <h5 className="card-title fs-3 mt-2">Subjects</h5>
              <p className="card-text fs-3">{data.totalsubject}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center rounded-0">
              <Link className="btn btn-light btn-sm" to={"/admin/managesubject"}>
                View Details
              </Link>
              <i className="fas fa-angle-right text-light"></i>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card text-white h-100 rounded-3 mt-3" style={{ backgroundColor: "#FFA07A" }}>
            <div className="card-body d-flex flex-column justify-content-center">
              <i className="fas fa-chalkboard-teacher fs-2"></i>
              <h5 className="card-title fs-3 mt-2">Teachers</h5>
              <p className="card-text fs-3">{data.totalstaff}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center rounded-0">
              <Link className="btn btn-light btn-sm" to={"/admin/managestaff"}>
                View Details
              </Link>
              <i className="fas fa-angle-right text-light"></i>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card text-white h-100 rounded-3 mt-3" style={{ backgroundColor: "#A5D6A7" }}>
            <div className="card-body d-flex flex-column justify-content-center">
              <i className="fas fa-user-graduate fs-2"></i>
              <h5 className="card-title fs-3 mt-2">Students</h5>
              <p className="card-text fs-3">{data.totalstudent}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center rounded-0">
              <Link className="btn btn-light btn-sm" to={"/admin/managestudent"}>
                View Details
              </Link>
              <i className="fas fa-angle-right text-light"></i>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card text-white h-100 rounded-3 mt-3" style={{ backgroundColor: "#87CEEB" }}>
            <div className="card-body d-flex flex-column justify-content-center">
              <i className="fas fa-comment-dots fs-2"></i>
              <h5 className="card-title fs-3 mt-2">Feedback</h5>
              <p className="card-text fs-3">{data.totalfeedback}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center rounded-0">
              <Link className="btn btn-light btn-sm" to={"/admin/feedback"}>
                View Details
              </Link>
              <i className="fas fa-angle-right text-light"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
