import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import ApiServices from "./ApiServices";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [load,setLoad]=useState(false)
  
  
  const nav=useNavigate()
  const handleForm = (e) => {
    e.preventDefault();
    setLoad(true)
  
  
    let data = {
      oldpassword: oldPassword,
      newpassword: newPassword,
      confirmpassword: confirmPassword,
    };
  
    ApiServices.changePassword(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          setOldPassword("");
          setNewPassword("");
          setConfirmPassword("");
          setTimeout(()=>{
            setLoad(false)
          },1000)
          nav("/teacher/login")
        } else {
            setTimeout(()=>{
                setLoad(false)
              },1500)
            toast.error(res.data.errors[0]);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred. Please try again.");
      });
  };

  const obj={
    display: "flex",
    justifyContent: "center"
  }
  
  return (
    <>
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">Change Password</h1>
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
                            Change Password
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>

            <BeatLoader color="aqua" size={40} cssOverride={obj} loading={load}/>
            <div className={load==true?"d-none":"my-5" }>
            <div className="container">
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.5s ">
                <form onSubmit={handleForm} method="post" className="shadow p-4 mx-auto" style={{ maxWidth: 567 }}>
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h2 className="mb-5 mt-3 bg-white text-center">Change Password</h2>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="currentPassword" className="form-label">
                        Current Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="currentPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                        New Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    </div>
                <button className="btn btn-primary w-100 py-3" type="submit">
                            Submit
                </button>
                </form>
            </div>
            </div>
        </div>
    </>
  );
}
