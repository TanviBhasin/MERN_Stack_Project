import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ApiServices from "../auth/ApiServices";
import { toast } from "react-toastify";

export default function EditCourses() {
    const param = useParams();
    const id = param.id;
    const [name, setName] = useState("");
    const [departmentId, setDepartmentId] = useState("");
    const [allDepartment, setAllDepartment] = useState([]);

    useEffect(() => {
        let data={
            _id:id
        }
        
        ApiServices.singleCourse(data)
            .then((res) => {
                setName(res.data.data.courseName);
                setDepartmentId(res.data.data.departmentId);
            })
            .catch((err) => {
                console.log(err);
            });

        // Fetch all departments
        ApiServices.getDepartment()
            .then((res) => {
                setAllDepartment(res.data.data);
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
        };

        ApiServices.updateCourse(data)
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
            <h1 className="display-3 text-white animated slideInDown">Courses</h1>
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
                    Edit Courses
                </li>
                </ol>
            </nav>
            </div>
        </div>
        </div>
    </div>

    {/* Edit courses Start */}
    <div>
    <div className="container">
    <div className="row g-4 wow fadeInUp" data-wow-delay="0.5s ">
        <form method="post" onSubmit={handleForm} className="shadow p-4 mx-auto" style={{ maxWidth: 1000, marginBottom: '50px' }}>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="mb-4 bg-white text-center px-3">Edit Courses</h3>
            </div>
            <div className="row g-3">
            <div className="col-12">
                <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Course Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Course Name"
                value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                
                <div className="form-group">
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
                <button type="submit" className="col-md-12 mt-3 btn btn-primary rounded-1">Submit</button>
            </div>
        
            </div>
        </form>
    </div>
    </div>
</div>
    {/* Edit courses End */}
</>
                    
  )
}
