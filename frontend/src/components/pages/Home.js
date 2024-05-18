import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import ApiServices, { BASE_URL } from "../auth/ApiServices";
import Moment from "react-moment"

export default function Home() {
  const [data,setData]=useState([])
  const [x,setX]=useState(false)
  const [staffdata,setStaffData]=useState([])
  
  useEffect(() => {
      ApiServices.getPagination({}).then((response) => {
          console.log("Get All API Response:", response);    
          setData(response.data.data);
        })
        .catch((error) => {
          console.log("Error:", error);
          
        });
    }, [x])

    useEffect(() => {
      ApiServices.getStaff({}).then((response) => {
          console.log("Get All API Response:", response);    
          setStaffData(response.data.data);
        })
        .catch((error) => {
          console.log("Error:", error);
          
        });
    }, [x])
  return (
    <>
  {/* Carousel Start */}
<div className="container-fluid p-0 mb-5">
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ maxHeight: '600px' }}>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src="/assets/img/carousel-1.jpg" className="d-block w-100" alt="Best Online Courses" style={{ maxHeight: '620px', objectFit: 'cover' }} />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
          <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
          <p className="fs-5 text-white mb-4 pb-2">
          Dive into a world of knowledge with our curated collection of online courses. Elevate your skills, advance your career, and unleash your potential from anywhere, anytime.
          </p>
          <Link to={"/"} className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</Link>
          <Link to={"/about"} className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</Link>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="/assets/img/carousel-2.jpg" className="d-block w-100" alt="Get Educated Online From Your Home" style={{ maxHeight: '620px', objectFit: 'cover' }} />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
          <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Home</h1>
          <p className="fs-5 text-white mb-4 pb-2">
          Experience the freedom of learning from the comfort of your home. With our diverse range of courses, you can acquire new skills, pursue your passions, and shape your future.
          </p>
          <Link to={"/"} className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</Link>
          <Link to={"/about"} className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</Link>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
{/* Carousel End */}

  
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
  {/* Categories Start */}
  <div className="container-xxl py-5 category">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Categories
        </h6>
        <h1 className="mb-5">Courses Categories</h1>
      </div>
      <div className="row g-3">
        <div className="col-lg-7 col-md-6">
          <div className="row g-3">
            <div
              className="col-lg-12 col-md-12 wow zoomIn"
              data-wow-delay="0.1s"
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src="/assets/img/cat-1.jpg" alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">Web Design</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </a>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.3s"
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src="/assets/img/cat-2.jpg" alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">Graphic Design</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </a>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src="/assets/img/cat-3.jpg" alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">Video Editing</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.7s"
          style={{ minHeight: 350 }}
        >
          <a
            className="position-relative d-block h-100 overflow-hidden"
            href=""
          >
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="/assets/img/cat-4.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div
              className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
              style={{ margin: 1 }}
            >
              <h5 className="m-0">Online Marketing</h5>
              <small className="text-primary">49 Courses</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Categories Start */}
  {/* Material Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Materials
        </h6>
        <h1 className="mb-5">Popular Materials</h1>
      </div>
      <div className="row g-4 justify-content-center">
      {data?.map(
                (el,index)=>(
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
          <div className="course-item bg-light">
            <div className="position-relative overflow-hidden">
            <img className="img-fluid" src={BASE_URL+el?.material} alt="" />
              <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                <Link
                  to={"/detail/"+el._id}
                  className="btn btn-sm btn-primary px-3"
                  style={{ borderRadius: "30px 30px" }}
                >
                    View More
                </Link>
                
              </div>
            </div>
            <div className="text-center p-4 pb-0">
              <div className="mb-3">
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
              </div>
              <h5 className="mb-4">
              {el?.title}
              </h5>
            </div>
            <div className="d-flex border-top">
              <small className="flex-fill text-center border-end py-2">
                <i className="far fa-calendar-alt text-primary me-2" />
                Added on <Moment format="MMMM Do, YYYY">{el?.createdAt}</Moment>
              </small>
            </div>
          </div>
        </div>
                ))}

      </div>
    </div>
  </div>
  {/* Material End */}
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
      {staffdata?.map(
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
