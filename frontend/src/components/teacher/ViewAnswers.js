import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../auth/ApiServices";
import { Link, useParams } from "react-router-dom";

export default function ViewAnswers() {
  const [data, setData] = useState([]);
  const [x,setX]=useState(false)
    
    useEffect(()=>{
          ApiServices.getUploadAssignment({}).then((res)=>{
              console.log(res);
              setData(res.data.data);
              toast.success("Data Loaded");
              
          }).catch((err)=>{
              console.log(err);
          })
     },[x])



  return (
    <>
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
            <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                <h1 className="display-3 text-white animated slideInDown">Answers / Marks</h1>
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
                        Answers / Marks
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
                <h3 className="mb-3 bg-white text-center px-3">View Answers</h3>
                </div>
            <table className="table table-bordered wow fadeInUp" data-wow-delay="0.1s">
              <thead>
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">Students Name</th>
                  <th scope="col">Assignment Title</th>
                  <th scope="col">Answer File</th>
                  <th scope="col">Total Marks</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((el, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el?.studentId?.name}</td>
                    <td>{el?.assignmentId?.title}</td>
                    <td>
                      <img src={BASE_URL + el?.answer} style={{ height: "50px", width: "50px" }} />
                    </td>
                    <td>{el?.assignmentId?.marks}</td>
                    <td>
                      <Link to={"/teacher/addmarks/" + el._id} className="text-primary">
                        <i className="fas fa-pen-square"></i>
                      </Link>
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
