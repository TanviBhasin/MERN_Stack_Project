import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ApiServices, { BASE_URL } from "../auth/ApiServices";
import { toast } from "react-toastify";

export default function EditStudent() {
    const param = useParams();
    const id = param.id;
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [contact,setContact]=useState("")
    const [rollno,setRollno]=useState("")
    const [address,setAddress]=useState("")
    const [semester,setSemester]=useState("")
    const [departmentId,setDepartmentId]=useState("")
    const [allDepartment,setAllDepartment]=useState([]);
    const [courseId,setCourseId]=useState("")
    const [allCourse,setAllCourse]=useState([]);
    const [branchId,setBranchId]=useState("")
    const [allBranch,setAllBranch]=useState([]);
    const [image, setImage] = useState({});
    const [imageName, setImageName] = useState("");
    const [previousImage,setPreviousImage]=useState("")


    useEffect(() => {
        let data={
            _id:id
        }
        
        ApiServices.singleStudent(data)
            .then((res) => {
                setName(res.data.data.name);
                setEmail(res.data.data.email);
                setPassword(res.data.data.password);
                setContact(res.data.data.contact)
                setAddress(res.data.data.address);
                setSemester(res.data.data.semester)
                setDepartmentId(res.data.data.departmentId);
                setCourseId(res.data.data.courseId);
                setBranchId(res.data.data.branchId);
                setRollno(res.data.data.rno);
                setPreviousImage(res.data.data.image)

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

    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0])
       }

    const handleForm = (e) => {
    e.preventDefault();

    let data=new FormData()
    data.append("_id",id)
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("contact", contact);
    data.append("address", address);
    data.append("rno", rollno);
    data.append("semester", semester);
    data.append("departmentId", departmentId);
    data.append("courseId", courseId);
    data.append("branchId", branchId);
    data.append("image", image);

    ApiServices.updateStudent(data)
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
                <h1 className="display-3 text-white animated slideInDown">Students</h1>
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
                        Edit Student
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
                <h3 className="mb-4 bg-white text-center px-3">Edit Student</h3>
                </div>
                <div className="row g-3">
                <div className="col-12">
                <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Name"
                value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>

                
                <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Email"
                value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" className="form-control" id="password" placeholder="Enter Password"
                value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="contact" className="form-label">Contact</label>
                <input type="number" className="form-control" id="contact" placeholder="Enter Contact Number"
                value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
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
                <label htmlFor="branch" className="form-label">Branch</label>
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
                <label htmlFor="rollno" className="form-label">Roll Number</label>
                <input type="text" className="form-control" id="rollno" placeholder="Enter Roll Number"
                value={rollno} onChange={(e)=>{setRollno(e.target.value)}}/>
                </div>

                <div className="form-group mb-3">
                <label htmlFor="semester" className="form-label">Semester</label>
                <input type="text" className="form-control" id="semester" placeholder="Enter Semester"
                value={semester} onChange={(e)=>{setSemester(e.target.value)}}/>
                </div>

                <div class="form-group mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea className="form-control" id="address" rows="3" placeholder="Enter Address"
                value={address} onChange={(e)=>{setAddress(e.target.value)}}></textarea>
                </div>

                <div class="form-group mb-3">
                <label htmlFor="formFile" className="form-label">Image</label><br/>
                <img src={BASE_URL+previousImage} style={{height:"80px",width:"80px"}}/>
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