import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminHeader(){
    const token = localStorage.getItem("token")
    const nav = useNavigate()
    const logout = () => {
        localStorage.clear()
        nav("/admin/login")
        toast.success("Logout Successfully")
    }
    return(
        <>
        {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-0">
                <Link
                    to={"/admin"}
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
                    <ul className="navbar-nav mx-auto p-1">
                        <li className="nav-item">
                            <Link to={"/admin"} className="nav-item nav-link">
                                Home
                            </Link>
                        </li>
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                Departments
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to={"/admin/adddept"} className="dropdown-item">
                                    Add Departments
                                </Link>
                                <Link to={"/admin/managedept"} className="dropdown-item">
                                    Manage Departments
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                Courses
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to={"/admin/addcourses"} className="dropdown-item">
                                    Add Courses
                                </Link>
                                <Link to={"/admin/managecourses"} className="dropdown-item">
                                    Manage Courses
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                Branch
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to={"/admin/addbranch"} className="dropdown-item">
                                    Add Branch
                                </Link>
                                <Link to={"/admin/managebranch"} className="dropdown-item">
                                    Manage Branch
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                Subjects
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to={"/admin/addsubject"} className="dropdown-item">
                                    Add Subject
                                </Link>
                                <Link to={"/admin/managesubject"} className="dropdown-item">
                                    Manage Subject
                                </Link>
                                <Link to={"/admin/assign"} className="dropdown-item">
                                    Assign Subject
                                </Link>
                                <Link to={"/admin/manageassignsub"} className="dropdown-item">
                                    Manage Assigned Subject
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                Staff
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to={"/admin/addstaff"} className="dropdown-item">
                                    Add Staff
                                </Link>
                                <Link to={"/admin/managestaff"} className="dropdown-item">
                                    Manage Staff
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                Students
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to={"/admin/addstudent"} className="dropdown-item">
                                    Add Students
                                </Link>
                                <Link to={"/admin/managestudent"} className="dropdown-item">
                                    Manage Students
                                </Link>
                            </div>
                        </div>
                        <li className="nav-item">
                            <Link to={"/admin/feedback"} className="nav-item nav-link">
                                Feedback
                            </Link>
                        </li>
                        {!token ? (
                            <li className="nav-item">
                                <Link to={"/admin/login"} className="nav-item nav-link">
                                    <span className="fa fa-user" /> Login
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link
                                    to="#"
                                    className="nav-item nav-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        logout();
                                    }}
                                    style={{ border: 'none', background: 'none' }}
                                >
                                    <span className="fa fa-user" /> Logout
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    )
}
