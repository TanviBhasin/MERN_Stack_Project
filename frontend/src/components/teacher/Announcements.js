import { useState } from "react"
import { toast } from "react-toastify"
import ApiServices from "../auth/ApiServices"

export default function Announcements() {
    const [description,setDescription]=useState("")

    const handleForm = (e) => {
        e.preventDefault();

        let data = {
            description: description
        };

        ApiServices.addAnnouncement(data)
            .then((res) => {
                console.log("response is ", res);
                if(res.data.success==true){
                    toast.success(res.data.message)
                    setDescription("")
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
        <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown">Announcements</h1>
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
                    Announcements
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
            <h3 className="mb-4 bg-white text-center px-3">Announcements</h3>
            </div>
            <div className="row g-3">
            <div className="col-12">
            <div className="form-group mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea type="text" className="form-control" id="description" placeholder="Enter Description"
                value={description} onChange={(e)=>{setDescription(e.target.value)}} style={{height:'100px'}}/>
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
