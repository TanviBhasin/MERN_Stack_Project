import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"
import ApiServices from "../auth/ApiServices"

export default function EditMaterial() {
    const param = useParams();
    const id = param.id;
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [departmentId,setDepartmentId]=useState("")
    const [allDepartment,setAllDepartment]=useState([]);
    const [courseId,setCourseId]=useState("")
    const [allCourse,setAllCourse]=useState([]);
    const [branchId,setBranchId]=useState("")
    const [allBranch,setAllBranch]=useState([]);
    const [subjectId,setSubjectId]=useState("")
    const [allSubject,setAllSubject]=useState([]);
    const [image, setImage] = useState({});
    const [imageName, setImageName] = useState("");

    useEffect(()=>{
        let data={
            _id:id
        }
            ApiServices.singleMaterial(data).then((res)=>{
                console.log(res);
                setTitle(res.data.data.title);
                setDescription(res.data.data.description);
                setDepartmentId(res.data.data.departmentId);
                setCourseId(res.data.data.courseId);
                setBranchId(res.data.data.branchId);
                setSubjectId(res.data.data.subjectId);
                setImage(res.data.data.image)
                
            }).catch((err)=>{
                console.log(err);
            })
       },[])

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

    useEffect(()=>{
        ApiServices.getSubject().then((res)=>{
                console.log(res.data.data);
                setAllSubject(res.data.data)
            }
        ).catch(
            (err)=>{
                console.log(err);
            }
        )
    },[])

    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0])
       }

    const handleForm=(e)=>{
    e.preventDefault();
    let data=new FormData()
    data.append("_id",id)
    data.append("title", title);
    data.append("description", description);
    data.append("departmentId", departmentId);
    data.append("courseId", courseId);
    data.append("branchId", branchId);
    data.append("subjectId", subjectId);
    data.append("material", image);

    ApiServices.updateMaterial(data)
        .then((res)=>{
            toast.success(res.data.message)
        })
        .catch((err) => {
            console.log(err);
        })
    }


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
                    aria-current="page">
                    Edit Material
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
        <form method="post" onSubmit={handleForm} className="shadow p-4 mx-auto" style={{ marginBottom: '50px' }}>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="mb-4 bg-white text-center px-3">Edit Material</h3>
            </div>
            <div className="row g-3">
            <div className="col-12">
                <div className="form-group mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter Title"
                value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea type="text" className="form-control" id="description" placeholder="Enter Description"
                value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
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

                <div className="form-group mb-3">
                <label htmlFor="branch" className="form-label">Branches</label>
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
               <select className="form-control" value={subjectId} onChange={(e)=>{setSubjectId(e.target.value)}}>
                <option value="" disabled>Select</option>
                {allSubject?.map(
                    (el,index)=>(
                <option key={el._id} value={el._id}>{el.subjectName}</option>
                    )
                )}
               </select>
                </div>

                <div class="form-group mb-3">
                <label htmlFor="formFile" className="form-label">Image</label>
                <input className="form-control" type="file" value={imageName}
                    onChange={changeImage} id="formFile"/>
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
