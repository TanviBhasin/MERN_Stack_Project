import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import ApiServices from "../auth/ApiServices"

export default function AddMeeting() {
    const [userId, setUserId]=useState("")
    const [departmentId,setDepartmentId]=useState("")
    const [allDepartment,setAllDepartment]=useState([]);
    const [courseId,setCourseId]=useState("")
    const [allCourse,setAllCourse]=useState([]);
    const [branchId,setBranchId]=useState("")
    const [allBranch,setAllBranch]=useState([]);
    const [meetingDate,setMeetingDate]=useState("")
    const [meetingTime,setMeetingTime]=useState("")
    const [meetingLink,setMeetingLink]=useState("")
   

    useEffect(()=>{
        ApiServices.getDepartment().then((res)=>{
                console.log(res.data.data);
                setAllDepartment(res.data.data)
            }
        ).catch(
            (err)=>{
                console.log(err);
            }
        )
    },[])


    useEffect(()=>{
        ApiServices.getCourse().then((res)=>{
                console.log(res.data.data);
                setAllCourse(res.data.data)
            }
        ).catch(
            (err)=>{
                console.log(err);
            }
        )
    },[])

    useEffect(()=>{
        ApiServices.getBranch().then((res)=>{
                console.log(res.data.data);
                setAllBranch(res.data.data)
            }
        ).catch(
            (err)=>{
                console.log(err);
            }
        )
    },[])

    const handleForm=(e)=>{
        e.preventDefault()

        let data = {
            staffId: userId,
            departmentId : departmentId,
            courseId : courseId,
            branchId: branchId,
            classDate: meetingDate,
            classTime: meetingTime,
            meetingLink: meetingLink
        };

        ApiServices.addMeetingLink(data).then((res)=>{
            console.log(res);
            if(res.data.success==true){
                toast.success(res.data.message)
                setDepartmentId("");
                setCourseId("");
                setBranchId("");
                setMeetingDate("");
                setMeetingTime("");
                setMeetingLink("");
            }
            else{
                toast.error(res.data.message)
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <> 
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown">Meeting Link</h1>
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
                    Add Meeting Link
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
        <form method="post" onSubmit={handleForm} className="shadow p-4 mx-auto" style={{ maxWidth: 890,  marginBottom: '50px' }}>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="mb-4 bg-white text-center px-3">Add Class Meeting</h3>
            </div>
            <div className="row g-3">
            <div className="col-12">  

            <div className="form-group mb-3">
            <label className="form-label">Department</label>
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
                <label className="form-label">Courses</label>
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
                <label className="form-label">Branches</label>
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
                <label htmlFor="date" className="form-label">Class Meeting Date</label>
                <input type="date" className="form-control" id="date" placeholder="Enter Class Meeting Date"
                value={meetingDate} onChange={(e)=>{setMeetingDate(e.target.value)}}/>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="time" className="form-label">Class Meeting Time</label>
                <input type="time" className="form-control" id="time" placeholder="Enter Class Meeting Time"
                value={meetingTime} onChange={(e)=>{setMeetingTime(e.target.value)}}/>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="link" className="form-label">Class Meeting Link</label>
                <input type="text" className="form-control" id="link" placeholder="Enter Class Meeting Link"
                value={meetingLink} onChange={(e)=>{setMeetingLink(e.target.value)}}/>
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
