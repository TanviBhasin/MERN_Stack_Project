import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import ApiServices, { BASE_URL } from "../auth/ApiServices";

export default function About() {
  const [data,setData]=useState([])
  const [x,setX]=useState(false)
  
  useEffect(() => {
      ApiServices.getStaff({}).then((response) => {
          console.log("Get All API Response:", response);    
          setData(response.data.data);
        })
        .catch((error) => {
          console.log("Error:", error);
          
        });
    }, [x])

  return (
    <>
        {/* Header Start */}
        <div className="container-fluid bg-primary py-5 mb-5 page-header">
            <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                    About Us
                </h1>
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
                        About
                    </li>
                    </ol>
                </nav>
                </div>
            </div>
            </div>
        </div>
        {/* Header End */}
        
        {/* Service Start */}
        <div className="container-xxl py-5">
            <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item text-center pt-3">
                    <div className="p-4">
                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                    <h5 className="mb-3">Skilled Instructors</h5>
                    <p>
                    Learn from skilled instructors
                    ensuring you acquire the knowledge and skills needed to succeed.
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item text-center pt-3">
                    <div className="p-4">
                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                    <h5 className="mb-3">Online Classes</h5>
                    <p>
                    Access our online classes from anywhere, at any time, allowing you to
                    learn at your own pace and convenience.
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item text-center pt-3">
                    <div className="p-4">
                    <i className="fa fa-3x fa-home text-primary mb-4" />
                    <h5 className="mb-3">Practical Assignments</h5>
                    <p>
                    Engage in assignments designed to reinforce your learning
                    and develop practical skills for real-world application.
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item text-center pt-3">
                    <div className="p-4">
                    <i className="fa fa-3x fa-book-open text-primary mb-4" />
                    <h5 className="mb-3">Resource Library</h5>
                    <p>
                    Explore our extensive library of educational materials,
                    resources curated to support your learning journey.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Service End */}

        {/* About Start */}
        <div className="container-xxl py-5">
            <div className="container">
            <div className="row g-5">
                <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: 400 }}
                >
                <div className="position-relative h-100">
                    <img
                    className="img-fluid position-absolute w-100 h-100"
                    src="/assets/img/about.jpg"
                    alt=""
                    style={{ objectFit: "cover" }}
                    />
                </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                    About Us
                </h6>
                <h1 className="mb-4">Welcome to eLEARNING</h1>
                <p className="mb-4">
                At eLEARNING, we're dedicated to revolutionizing the way education is delivered.
                Our platform brings together a community of passionate learners and expert instructors
                to create a dynamic and engaging learning experience like no other.
                </p>
                <p className="mb-4">
                Our mission is simple: to make learning accessible, enjoyable, and effective for
                everyone, everywhere. We believe that education is the key to unlocking
                individual potential and driving societal progress. 
                That's why we're committedto providing high-quality educational resources
                that empower learners to reach their goals and beyond.
                </p>
                <div className="row gy-2 gx-4 mb-4">
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />
                        Skilled Instructors
                    </p>
                    </div>
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />
                        Online Classes
                    </p>
                    </div>
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />
                        Community Engagement
                    </p>
                    </div>
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />
                        Continuous Support
                    </p>
                    </div>
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />
                        Lifelong Learning
                    </p>
                    </div>
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />
                        Flexible Learning
                    </p>
                    </div>
                </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href="">
                    Read More
                </a>
                </div>
            </div>
            </div>
        </div>
        {/* About End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
            <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">
                Instructors
                </h6>
                <h1 className="mb-5">Expert Instructors</h1>
            </div>
            <div className="row g-4">
            {data?.map(
                (el,index)=>(
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="team-item bg-light">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src={BASE_URL+el?.image} alt="" />
                    </div>
                    <div
                    className="position-relative d-flex justify-content-center"
                    style={{ marginTop: "-23px" }}
                    >
                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                        <a className="btn btn-sm-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-sm-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter" />
                        </a>
                        <a className="btn btn-sm-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram" />
                        </a>
                    </div>
                    </div>
                    <div className="text-center p-4">
                    <h5 className="mb-0">{el?.name}</h5>
                    <small>{el?.qualification}</small>
                    </div>
                </div>
                </div>
            ))}
            </div>
            </div>
        </div>
        {/* Team End */}
</>
  )
}
