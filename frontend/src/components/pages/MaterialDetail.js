import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify"
import ApiServices, { BASE_URL } from "../auth/ApiServices"
import Moment from "react-moment"

export default function MaterialDetail() {
  const param = useParams();
  const id = param.id;
  const [data,setData]=useState([])

  useEffect(()=>{
    let data={
        _id:id
    }
        
    ApiServices.singleMaterial(data).then((res)=>{
            console.log(res);
            setData(res.data.data);
            toast.success(res.data.message);
            
        }).catch((err)=>{
            console.log(err);
        })
   },[id])

  return (
    <>
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">Material Details</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                            <a className="text-white" href="#">
                            Home
                            </a>
                        </li>
                        <li
                            className="breadcrumb-item text-white active"
                            aria-current="page"
                        >
                            Material Details
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>

      <div className="container mt-5">
  <div className="row">
    
    <div className="col-md-12 article-content">
      <div className="mb-5">
        <h2>{data?.title}</h2>
        <span><Moment format="MMMM Do, YYYY">{data?.createdAt}</Moment></span>
      </div>
      
      <img
        src={BASE_URL+data?.material}
        alt="Placeholder Image"
        className="img-fluid" style={{ maxHeight: "600px", maxWidth:"590px" }}
      />
      <p className="mt-4">
      {data?.description}
      </p>
    </div>
  </div>
</div>

    </>
  )
}
