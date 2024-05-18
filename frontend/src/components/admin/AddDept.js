import { useState } from "react";
import { toast } from "react-toastify"
import ApiServices from "../auth/ApiServices"

export default function AddDept() {
    const [name, setName] = useState("");

    const handleForm = (e) => {
        e.preventDefault();

        let data = {
            departmentName: name
        };

        ApiServices.addDepartment(data)
            .then((res) => {
                console.log("response is ", res);
                if(res.data.success==true){
                    toast.success(res.data.message)
                    setName("")
                }
                else{
                    toast.error(res.data.errors[0])
                }
            }
        ).catch((err)=>{
            console.log("error is ", err);
            toast.error("something went wrong")
        })
    };

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
                    Add Departments
                </li>
                </ol>
            </nav>
            </div>
        </div>
        </div>
    </div>

    {/* Add departments Start */}
    <div>
    <div className="container">
    <div className="row g-4 wow fadeInUp" data-wow-delay="0.5s ">
        <form onSubmit={handleForm} method="post" className="shadow p-4 mx-auto" style={{ maxWidth: 1000, marginBottom: '50px' }}>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="mb-4 bg-white text-center px-3">Add Departments</h3>
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
    {/* Add departments End */}
</>
                    
  )
}
