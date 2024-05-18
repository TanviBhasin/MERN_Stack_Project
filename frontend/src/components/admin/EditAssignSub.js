import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ApiServices from "../auth/ApiServices";
import { toast } from "react-toastify";

export default function EditAssignSub() {
    const param = useParams();
    const id = param.id;
    const [staffId,setStaffId]=useState("")
    const [allStaff,setAllStaff]=useState([]);
    const [departmentId,setDepartmentId]=useState("")
    const [allDepartment,setAllDepartment]=useState([]);
    const [courseId,setCourseId]=useState("")
    const [allCourse,setAllCourse]=useState([]);
    const [branchId,setBranchId]=useState("")
    const [allBranch,setAllBranch]=useState([]);
    const [subjectId,setSubjectId]=useState("")
    const [allSubject,setAllSubject]=useState([]);
    const [semester,setSemester]=useState("")

    useEffect(() => {
        let data={
            _id:id
        }
        
        ApiServices.singleAssignSubject(data)
            .then((res) => {
                setStaffId(res.data.data.staffId);
                setDepartmentId(res.data.data.departmentId);
                setCourseId(res.data.data.courseId);
                setBranchId(res.data.data.branchId);
                setSubjectId(res.data.data.subjectId);
                setSemester(res.data.data.semester);
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
            
        ApiServices.getSubject()
            .then((res) => {
                setAllSubject(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
            
        ApiServices.getStaff()
            .then((res) => {
                setAllStaff(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });        

    }, [id]);

    const handleForm = (e) => {
        e.preventDefault();

        let data = {
            _id: id,
            staffId: staffId,
            departmentId : departmentId,
            courseId : courseId,
            branchId: branchId,
            subjectId: subjectId,
            semester: semester,
        };

        ApiServices.updateAssignSubject(data)
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
                    Edit Assigned Subjects
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
            <h3 className="mb-4 bg-white text-center px-3">Edit Assigned Subject</h3>
            </div>
            <div className="row g-3">
            <div className="col-12">
            <div className="form-group mb-3">
                <label className="form-label">Staff</label>
               <select className="form-control" value={staffId} onChange={(e)=>{setStaffId(e.target.value)}}>
                <option value="" disabled>Select</option>
                {allStaff?.map(
                    (el,index)=>(
                <option key={el._id} value={el._id}>{el.name}</option>
                    )
                )}
               </select>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="department" className="form-label">Department</label>
               <select id="department" className="form-control" value={departmentId} onChange={(e)=>{setDepartmentId(e.target.value)}}>
                <option value="" disabled>Select</option>
                {allDepartment?.map(
                    (el,index)=>(
                <option key={el._id} value={el._id}>{el.departmentName}</option>
                    )
                )}
               </select>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="course" className="form-label">Course</label>
               <select id="course" className="form-control" value={courseId} onChange={(e)=>{setCourseId(e.target.value)}}>
                <option value="" disabled>Select</option>
                {allCourse?.map(
                    (el,index)=>(
                <option key={el._id} value={el._id}>{el.courseName}</option>
                    )
                )}
               </select>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="branch" className="form-label">Branch</label>
               <select id="branch" className="form-control" value={branchId} onChange={(e)=>{setBranchId(e.target.value)}}>
                <option value="" disabled>Select</option>
                {allBranch?.map(
                    (el,index)=>(
                <option key={el._id} value={el._id}>{el.branchName}</option>
                    )
                )}
               </select>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
               <select id="subject" className="form-control" value={subjectId} onChange={(e)=>{setSubjectId(e.target.value)}}>
                <option value="" disabled>Select</option>
                {allSubject?.map(
                    (el,index)=>(
                <option key={el._id} value={el._id}>{el.subjectName}</option>
                    )
                )}
               </select>
                </div>
                
                <div className="form-group mb-3">
                <label htmlFor="semester" className="form-label">Semester</label>
                <input type="text" className="form-control" id="semester" placeholder="Enter Semester"
                value={semester} onChange={(e)=>{setSemester(e.target.value)}}/>
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
