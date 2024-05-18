import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ApiServices from "../auth/ApiServices";
import { toast } from "react-toastify";

export default function AddDept() {
    const param=useParams()
    console.log(param);
    const id=param.id 
    const [name,setName]=useState("")
    
    useEffect(()=>{
     let data={
         _id:id
     }
    
    ApiServices.singleDepartment(data).then((res)=>{
             console.log(res);
             setName(res.data.data.departmentName)
         }).catch((err)=>{
             console.log(err);
         })
    },[])
    
    // const nav=useNavigate()
    const handleForm=(e)=>{
     e.preventDefault();
     
     let data = {
        _id: id,
        departmentName: name,
    };

    ApiServices.updateDepartment(data).then((res)=>{
            toast.success(res.data.message)
            console.log(res.data.message)
            // nav("/admin")
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
            <h1 className="display-3 text-white animated slideInDown">Departments</h1>
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
                    Edit Departments
                </li>
                </ol>
            </nav>
            </div>
        </div>
        </div>
    </div>

    {/* Edit departments Start */}
    <div>
    <div className="container">
    <div className="row g-4 wow fadeInUp" data-wow-delay="0.5s ">
        <form onSubmit={handleForm} method="post" className="shadow p-4 mx-auto" style={{ maxWidth: 1000, marginBottom: '50px' }}>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="mb-4 bg-white text-center px-3">Edit Departments</h3>
            </div>
            <div className="row g-3">
            <div className="col-12">
                <div className="form-group">
                <label htmlFor="name" className="form-label">Department Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Department Name"
                value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <button type="submit" className="col-md-12 mt-3 btn btn-primary rounded-1">Submit</button>
            </div>
        
            </div>
        </form>
    </div>
    </div>
</div>
    {/* Edit Departments End */}
</>
                    
  )
}
