import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ApiServices from "../auth/ApiServices";
import { toast } from "react-toastify";

export default function AddBranch() {
    const param = useParams();
    const id = param.id;
    const [name,setName]=useState("")
    const [departmentId,setDepartmentId]=useState("")
    const [allDepartment,setAllDepartment]=useState([]);
    const [courseId,setCourseId]=useState("")
    const [allCourse,setAllCourse]=useState([]);
    const [branchId,setBranchId]=useState("")
    const [allBranch,setAllBranch]=useState([]);
    const [semester,setSemester]=useState("")
    const [subjectCode,setSubjectCode]=useState("")

    useEffect(() => {
        let data={
            _id:id
        }
        
        ApiServices.singleSubject(data)
            .then((res) => {
                setName(res.data.data.subjectName);
                setDepartmentId(res.data.data.departmentId);
                setCourseId(res.data.data.courseId);
                setBranchId(res.data.data.branchId);
                setSemester(res.data.data.semester);
                setSubjectCode(res.data.data.subjectCode);
            })
            .catch((err) => {
                console.log(err);
            });


        ApiServices.getDepartment()
            .then((res) => {
                setAllDepartment(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
        
        ApiServices.getCourse()
            .then((res) => {
                setAllCourse(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });

        ApiServices.getBranch()
            .then((res) => {
                setAllBranch(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });   

    }, [id]);

    const handleForm = (e) => {
        e.preventDefault();

        let data = {
            _id: id,
            courseName: name,
            departmentId: departmentId,
            courseId: courseId
        };

        ApiServices.updateSubject(data)
            .then((res) => {
                toast.success(res.data.message);
            })
            .catch((err) => {
                console.log(err);
            });
    };
  return (
    <> 
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-3">
        <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown">Subjects</h1>
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
                    Edit Subjects
                </li>
                </ol>
            </nav>
            </div>
        </div>
        </div>
    </div>

    
    <div>
    <div className="container">
    <div className="row g-4 wow fadeInUp" data-wow-delay="0.5s ">
        <form method="post" onSubmit={handleForm} className="shadow p-4 mx-auto" style={{ maxWidth: 1000, marginBottom: '50px' }}>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="mb-4 bg-white text-center px-3">Edit Subject</h3>
            </div>
            <div className="row g-3">
            <div className="col-12">
                <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Subject Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Subject Name"
                value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                
                <div className="form-group mb-3">
                <label htmlFor="department" className="form-label">Department</label>
               <select className="form-control" value={departmentId} onChange={(e)=>{setDepartmentId(e.target.value)}}>
                <option value="" disabled>Select</option>
                {allDepartment?.map(
                    (el,index)=>(
                <option key={el._id} value={el._id}>{el.departmentName}</option>
                    )
                )}
               </select>
                </div>
                
                <div className="form-group mb-3">
                <label htmlFor="course" className="form-label">Courses</label>
               <select className="form-control" value={courseId} onChange={(e)=>{setCourseId(e.target.value)}}>
                <option value="" disabled>Select</option>
                {allCourse?.map(
                    (el,index)=>(
                <option key={el._id} value={el._id}>{el.courseName}</option>
                    )
                )}
               </select>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="branch" className="form-label">Branches</label>
               <select className="form-control" value={branchId} onChange={(e)=>{setBranchId(e.target.value)}}>
                <option value="" disabled>Select</option>
                {allBranch?.map(
                    (el,index)=>(
                <option key={el._id} value={el._id}>{el.branchName}</option>
                    )
                )}
               </select>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="semester" className="form-label">Semester</label>
                <input type="text" className="form-control" id="semester" placeholder="Enter Semester"
                value={semester} onChange={(e)=>{setSemester(e.target.value)}}/>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="subjectcode" className="form-label">Subject Code</label>
                <input type="text" className="form-control" id="subjectcode" placeholder="Enter Subject Code"
                value={subjectCode} onChange={(e)=>{setSubjectCode(e.target.value)}}/>
                </div>
                <button type="submit" className="col-md-12 mt-3 btn btn-primary rounded-1">Submit</button>
            </div>
        
            </div>
        </form>
    </div>
    </div>
</div>
   
</>
                    
  )
}
