import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import ApiServices from "./ApiServices";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);

  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    setLoad(true);
    let data = {
      email: email,
      password: password,
    };

    ApiServices.login(data)
      .then((res) => {
        if (res.data.success == true) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", res.data.data.email);
          toast.success(res.data.message);
          setTimeout(() => {
            setLoad(false);
          }, 1000);
          nav("/");
        } else {
          setTimeout(() => {
            setLoad(false);
          }, 1500);
          toast.error("something went wrong");
          console.log("no token found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const obj = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">Login</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Login
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <BeatLoader color="aqua" size={40} cssOverride={obj} loading={load} />
      {/* Login Start */}
      <div className={load === true ? "d-none" : "my-5"}>
        <div className="container">
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.5s ">
            <form
              className="shadow p-4 mx-auto"
              style={{ maxWidth: 569 }}
              onSubmit={handleForm}
              method="post"
            >
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="mb-5 bg-white text-center px-3">Login</h1>
              </div>
              <div className="row g-2">
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <p>
                    <Link to={"/changepassword"}>Forgot password?</Link>
                  </p>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Login
                  </button>
                </div>
                <div className="col-md-6">
                  <Link to="/admin" className="btn btn-outline-primary w-100 py-2 mt-2">
                    Login as Admin
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="/teacher/login" className="btn btn-outline-primary w-100 py-2 mt-2">
                    Login as Teacher
                  </Link>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Login End */}
    </>
  );
}
