import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header() {
    const token = localStorage.getItem("token")
    const nav = useNavigate()
    const logout=()=>{
       localStorage.clear()
       toast.success("Logout Successfully")
       nav("/teacher/login")
    }
  return (
      <>
    {/* Navbar Start */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a
    href="index.html"
    className="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
    <h2 className="m-0 text-primary">
        <i className="fa fa-book me-3" />
        eLEARNING
    </h2>
    </a>
    <button
    type="button"
    className="navbar-toggler me-4"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
    >
    <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to={"/teacher"} className="nav-item nav-link">
                Home
                </Link>
                <Link to={"/teacher/about"} className="nav-item nav-link">
                About
                </Link>
    
                    <div className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        Classes
                    </Link>
                    <div className="dropdown-menu fade-down m-0">
                            <li className="nav-item">
                            <Link to={"/teacher/addmeeting"} className="dropdown-item">
                            Add Class Meeting Link
                            </Link>
                            </li>

                            <li className="nav-item">
                            <Link to={"/teacher/viewassign"} className="dropdown-item">
                            View Assigned Class
                            </Link>
                            </li>
                    </div>
                    </div>

                    <div className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        Material
                    </Link>
                    <div className="dropdown-menu fade-down m-0">
                            <li className="nav-item">
                            <Link to={"/teacher/addmaterial"} className="dropdown-item">
                            Add Material
                            </Link>
                            </li>

                            <li className="nav-item">
                            <Link to={"/teacher/managematerial"} className="dropdown-item">
                            Manage Material
                            </Link>
                            </li>
                    </div>
                    </div>


                    <div className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        Assignments
                    </Link>
                    <div className="dropdown-menu fade-down m-0">
                    <li className="nav-item">
                            <Link to={"/teacher/addassignment"} className="dropdown-item">
                            Add Assignments
                            </Link>
                            </li>

                            <li className="nav-item">
                            <Link to={"/teacher/manageassignment"} className="dropdown-item">
                            Manage Assignments
                            </Link>
                            </li>
                    </div>
                    </div>


        <Link to={"/teacher/answers"} className="nav-item nav-link">
        Answers
        </Link>            
        
        
        <Link to={"/teacher/announce"} className="nav-item nav-link">
        Announcements
        </Link>
        
    </div>
    {!token ?
    <Link to={"/teacher/login"} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
        Login
        <i className="fas fa-sign-in-alt ms-3" />
    </Link> :
    <button className="btn btn-primary py-4 px-lg-5 d-none d-lg-block" onClick={logout}>
        Logout<i className="fas fa-sign-out-alt ms-3" />
    </button>
    }
    </div>
</nav>
{/* Navbar End */}
    </>
  )
}