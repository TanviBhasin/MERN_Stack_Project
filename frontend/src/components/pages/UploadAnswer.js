import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"
import ApiServices, { BASE_URL }  from "../auth/ApiServices"
import { Link } from "react-router-dom";

export default function UploadAnswer() {
  const param = useParams();
  const id = param.id;
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [departmentId,setDepartmentId]=useState("")
  const [courseId,setCourseId]=useState("")
  const [branchId,setBranchId]=useState("")
  const [subjectId,setSubjectId]=useState("")
  const [duedate,setDueDate]=useState("")
  const [marks,setMarks]=useState("")
  const [image, setImage] = useState({});
  const [imageName, setImageName] = useState("");
  const [previousImage,setPreviousImage]=useState("")
  const [name,setName]=useState("")
  const [assignmentId,setAssignmentId]=useState("")
  const [allAssignment,setAllAssignment]=useState([]);
  const [allStudent,setAllStudent]=useState([]);


  useEffect(()=>{
      let data={
          _id:id
      }
          ApiServices.singleAssignment(data).then((res)=>{
              console.log(res);
              setTitle(res.data.data.title)
              setDescription(res.data.data.description)
              setDepartmentId(res.data.data.departmentId);
              setCourseId(res.data.data.courseId);
              setBranchId(res.data.data.branchId);
              setSubjectId(res.data.data.subjectId);
              setDueDate(res.data.data.duedate);
              setMarks(res.data.data.marks);
              setPreviousImage(res.data.data.assignment);
              
          }).catch((err)=>{
              console.log(err);
          })
     },[])

     const changeImage = (e) => {
      setImageName(e.target.value);
      setImage(e.target.files[0]);
  };


    const handleForm=(e)=>{
    e.preventDefault()

    let data = new FormData();
    data.append("assignmentId", id);
    data.append("studentId", name);
    data.append("answer", image);


    ApiServices.uploadedAssignment(data).then((res)=>{
        console.log(res);
        if(res.data.success==true){
            toast.success(res.data.message)
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
                    aria-current="page">Upload Answer Sheet
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
        
        <form method="post" onSubmit={handleForm} className="shadow p-4 mx-auto" style={{ maxWidth: 1270,marginBottom: '50px' }}>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="mb-4 bg-white text-center px-3">Upload Assignment</h3>
                        
            <div className="d-flex flex-row-reverse mb-4">
                <Link
                  className="btn btn-sm btn-primary p-3"
                >
                  Due Date:
                  <input type="text" id="duedate" value={duedate}/>
                </Link>

                <Link
                  className="btn btn-sm btn-primary p-3 mx-3"
                >
                  Total Marks:
                  <input type="text" id="marks" value={marks}/>
                </Link>
                
              </div>
            </div>
            <div className="row g-3">
            <div className="col-12">
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="card mb-3">
                        <div class="card-body">
                           

                        <div className="form-group mb-3">
                        <label htmlFor="title" className="form-label">Assignment Title</label>
                        <br/>
                        <input type="text" className="form-control" id="title" value={title} 
                        onChange={(e) => { setTitle(e.target.value) }} />
                        </div>

                        </div>
                        </div>
                    </div>
                    </div>
      
                
                <div class="form-group mb-3">
                <label htmlFor="formFile" className="form-label">Upload File</label>
                <input className="form-control" type="file" id="formFile" value={imageName}
                    onChange={changeImage}/>
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
