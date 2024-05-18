import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../auth/ApiServices";
import { useParams } from "react-router-dom";

export default function AddMarks() {
  const param = useParams();
  const id = param.id;

  const [isChange, setIsChange] = useState(false);
  const [obtainedMarks, setObtainedMarks] = useState("");
  const [assignmentId, setAssignmentId] = useState("")
  const [answer, setAnswer] = useState("")

    
  useEffect(() => {
    ApiServices.singleUploadAssignment({ _id: id })
        .then((res) => {
            console.log(res);
            setAssignmentId(res.data.data.id);
            setAnswer(res.data.data.answer);
            setObtainedMarks(res.data.data.obtainedMarks);
        })
        .catch((err) => {
            console.log(err);
        });
}, [id]);


    const handleForm=(e)=>{
      e.preventDefault()

        let data = {
          assignmentId: id,
          obtainedMarks: obtainedMarks,
          isChecked: isChange,
          answer:answer
        };


        ApiServices.addMarks(data).then((res)=>{
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
                <h1 className="display-3 text-white animated slideInDown">Answers / Marks</h1>
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
                        Answers / Marks
                    </li>
                    </ol>
                </nav>
                </div>
            </div>
            </div>
        </div>
      <div className="container">
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.5s ">
        
        <form method="post" onSubmit={handleForm}  className="shadow p-4 mx-auto" style={{ maxWidth: 1270,marginBottom: '50px' }}>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="mb-4 bg-white text-center px-3 fs-2">Add Marks</h3>
                        
            </div>
            <div className="row g-3">
            <div className="col-12">
                
              <div class="row">
                  <div class="col-md-2">
                      <div class="card mb-3">
                      <div class="card-body">
                        

                      <div className="form-group mb-3">
                      <label htmlFor="answer" className="form-label">Answer File</label>
                      <br/>
                      <img src={BASE_URL + answer} id="answer" alt="Assignment" style={{ maxHeight: "100px" }} />
                      </div>

                      </div>
                      </div>
                  </div>
                  </div>
      
                
                <div class="form-group mb-3">
                <label htmlFor="marks" className="form-label">Obtained Marks</label>
                <input type="text" className="form-control" id="marks" placeholder="Enter Marks" 
                value={obtainedMarks}
                 onChange={(e) => setObtainedMarks(e.target.value)} />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="statusSelect" className="form-label">Status</label>
                  <select
                      className="form-control"
                      id="statusSelect"
                      value={isChange ? "true" : "false"}
                      onChange={(e) => setIsChange(e.target.value === "true")}>
                      <option value="">Select</option>
                      <option value="true">Checked</option>
                      <option value="false">Unchecked</option>
                  </select>
                </div>

                <button type="submit" className="col-md-12 mt-3 btn btn-primary rounded-1">Submit</button>
            </div>
        
            </div>
        </form>
    </div>
    </div>
    </>
  )
}
