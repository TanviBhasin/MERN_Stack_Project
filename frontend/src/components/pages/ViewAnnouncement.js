import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices from "../auth/ApiServices";

export default function ViewAnnouncement() {
const [data,setData]=useState([])
const [x,setX]=useState(false)

useEffect(() => {
    ApiServices.getAnnouncement({}).then((response) => {
        console.log("Get All API Response:", response);    
        setData(response.data.data);
        toast.success(response.data.message)
      })
      .catch((error) => {
        console.log("Error:", error);
        
      })
  }, [x])

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
                    aria-current="page">Announcements
                </li>
                </ol>
            </nav>
            </div>
        </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row" style={{ marginTop: '50px',  marginBottom: '25px' }}>
        {data?.map(
                (el,index)=>(
        <div className="col-md-8 mx-auto">
          <div className="card bg-primary text-white mb-4" key={index} style={{height: '115px', width:'1000px',borderRadius:'10px'}}>
            <div className="card-body fs-2 text-white">{el?.description}</div>
          </div>
        </div>
        )
      )}
      </div>
    </div>
    </>
    
    
  )
}
