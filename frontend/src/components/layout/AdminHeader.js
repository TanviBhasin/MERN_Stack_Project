import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminHeader(){
    const token = localStorage.getItem("token")
    const nav = useNavigate()
    const logout=()=>{
       localStorage.clear()
       nav("/admin/login")
        toast.success("Logout Successfully")
    }
    return(
        <>
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-0">
    <div className="container-fluid">
        <Link to={"/admin"} className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary">
                <i className="fa fa-book me-3" />
                eLEARNING
            </h2>
        </Link>
        <button
            className="navbar-toggler me-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Departments
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <Link to={"/admin/adddept"} className="dropdown-item">
                                Add Departments
                            </Link>
                        </li>
                        <li>
                            <Link to={"/admin/managedept"} className="dropdown-item">
                                Manage Departments
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* Add other navbar items similarly */}
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    {!token ? (
                        <Link to={"/admin/login"} className="nav-link">
                            <span className="fa fa-user" /> Login
                        </Link>
                    ) : (
                        <button className="nav-link" onClick={logout} style={{ border: 'none', background: 'none' }}>
                            <span className="fa fa-user" /> Logout
                        </button>
                    )}
                </li>
            </ul>
        </div>
    </div>
</nav>

        {/* Navbar End */}
        
        </>
    )
}
