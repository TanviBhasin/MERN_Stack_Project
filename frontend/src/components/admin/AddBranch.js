import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import ApiServices from "../auth/ApiServices"

export default function AddBranch() {
    const [name,setName]=useState("")
    const [courseId,setCourseId]=useState("")
    const [allCourse,setAllCourse]=useState([]);
    const [departmentId,setDepartmentId]=useState("")
    const [allDepartment,setAllDepartment]=useState([]);


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

    const handleForm=(e)=>{
        e.preventDefault()

        let data = {
            branchName: name,
            departmentId : departmentId,
            courseId : courseId
        };

        ApiServices.addBranch(data).then((res)=>{
            console.log(res);
            if(res.data.success==true){
                toast.success(res.data.message)
                setName("")
                setCourseId("");
            }
            else{
                toast.error(res.data.errors[0])
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <> 
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-3">
        <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown">Branch</h1>
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
                    Add Branches
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
        <form method="post" onSubmit={handleForm} className="shadow p-4 mx-auto" style={{ maxWidth: 1000,marginBottom: '50px' }}>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="mb-4 bg-white text-center px-3">Add Branch</h3>
            </div>
            <div className="row g-3">
            <div className="col-md-12">
                <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Branch Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Branch Name"
                value={name} onChange={(e)=>{setName(e.target.value)}}/>
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
                <label htmlFor="course" className="form-label">Courses</label>
               <select id="course" className="form-control" value={courseId} onChange={(e)=>{setCourseId(e.target.value)}}>
                <option value="" disabled>Select</option>
                {allCourse?.map(
                    (el,index)=>(
                <option key={el._id} value={el._id}>{el.courseName}</option>
                    )
                )}
               </select>
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
