import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify"
import ApiServices, { BASE_URL } from "../auth/ApiServices"

export default function AssignmentDetails() {
    const param = useParams();
    const id = param.id;
    const [assignment, setAssignment] = useState("");


    useEffect(()=>{
        let data={
            _id:id
        }
            
        ApiServices.singleAssignment(data).then((res)=>{
                console.log(res);
                setAssignment(res.data.data);
                toast.success(res.data.message);
                
            }).catch((err)=>{
                console.log(err);
            })
       },[id])
   

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
                                        aria-current="page">
                                        Assignment Details
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">
                                <h4>Assignment Details</h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Title</th>
                                            <td>{assignment?.title}</td>
                                        </tr>
                                        <tr>
                                            <th>Description</th>
                                            <td>{assignment?.description}</td>
                                        </tr>
                                        <tr>
                                            <th>Department</th>
                                            <td>{assignment?.departmentId?.departmentName}</td>
                                        </tr>
                                        <tr>
                                            <th>Course</th>
                                            <td>{assignment?.courseId?.courseName}</td>
                                        </tr>
                                        <tr>
                                            <th>Branch</th>
                                            <td>{assignment?.branchId?.branchName}</td>
                                        </tr>
                                        <tr>
                                            <th>Subject</th>
                                            <td>{assignment?.subjectId?.subjectName}</td>
                                        </tr>
                                        <tr>
                                            <th>Due Date</th>
                                            <td>{assignment?.duedate}</td>
                                        </tr>
                                        <tr>
                                            <th>Marks</th>
                                            <td>{assignment?.marks}</td>
                                        </tr>
                                        <tr>
                                            <th>Image</th>
                                            <td>
                                                <img src={BASE_URL + assignment?.assignment} alt="Assignment" style={{ maxHeight: "100px" }} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                           
                            <div className="card-footer d-flex justify-content-center">
                            <Link to={"/uploadassignment/"+assignment._id}>
                                <button className="btn btn-primary" style={{ padding: "10px 20px",borderRadius: "8px" }}>
                                    Upload Answer
                                </button>
                            </Link>
                            </div>
                               
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
