import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header() {
    const token = localStorage.getItem("token")
    const nav = useNavigate()
    const logout=()=>{
       localStorage.clear()
        nav("/login")
        toast.success("Logout Successfully")
    }
  return (
      <>
    {/* Navbar Start */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <Link
    to={"/"}
    className="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
    <h2 className="m-0 text-primary">
        <i className="fa fa-book me-3" />
        eLEARNING
    </h2>
    </Link>
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
        <Link to={"/"} className="nav-item nav-link">Home</Link>
        <Link to={"/about"} className="nav-item nav-link">About</Link>
    
        <Link to={"/material"} className="nav-item nav-link">Material</Link>

        <div className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        Assignments
                    </Link>
                    <div className="dropdown-menu fade-down m-0">
                        <li className="nav-item">
                            <Link to={"/assignments"} className="dropdown-item">
                            View Assignment
                            </Link>
                            </li>

                            <li className="nav-item">
                            <Link to={"/viewmarks"} className="dropdown-item">View Marks
                            </Link>
                            </li>
                    </div>
                    </div>

        <Link to={"/join"} className="nav-item nav-link">Meetings</Link>
        
        <Link to={"/announcements"} className="nav-item nav-link">Announcements</Link>
        
        <Link to={"/contact"} className="nav-item nav-link">
        Contact
        </Link>
        
    </div>
    {!token ?
    <Link to={"/login"} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
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