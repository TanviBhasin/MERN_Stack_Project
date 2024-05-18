import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy(){
  return (
    <>
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">Privacy Policy</h1>
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
                            Privacy Policy
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm mt-5">
              <div className="card-body">
                <h1 className="mb-4">Privacy Policy</h1>
                <p>
                  Welcome to our e-learning platform's Privacy Policy! This Privacy Policy describes how we collect, use, and handle your personal information when you use our website.
                </p>
                <h2 className="mt-5">Information We Collect</h2>
                <p>
                  We collect various types of information when you use our platform, including:
                </p>
                <ul>
                  <li>Information about your usage of our platform, such as the courses you enroll in and your progress.</li>
                  <li>Payment information when you make purchases on our platform.</li>
                  <li>Information you provide when contacting our support team or participating in surveys.</li>
                </ul>
                <h2 className="mt-5">How We Use Your Information</h2>
                <p>
                  We use the information we collect for various purposes, including:
                </p>
                <ul>
                  <li>Providing and improving our e-learning services.</li>
                  <li>Personalizing your experience and providing tailored content.</li>
                  <li>Processing transactions and providing customer support.</li>
                  <li>Analyzing usage trends and improving our platform's functionality.</li>
                  <li>Communicating with you about our services, promotions, and updates.</li>
                </ul>
                <h2 className="mt-5">Information Sharing and Disclosure</h2>
                <p>
                  We may share your personal information in the following circumstances:
                </p>
                <ul>
                  <li>With service providers and partners who assist us in delivering our services.</li>
                  <li>When required by law or to protect our rights and safety.</li>
                  <li>With your consent or at your direction.</li>
                </ul>
                <h2 className="mt-5">Security</h2>
                <p>
                  We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>
                <h2 className="mt-5">Your Rights</h2>
                <p>
                  You have certain rights regarding your personal information, including the right to access, update, and delete your information. You can exercise these rights by contacting us using the information provided below.
                </p>
                <h2 className="mt-5">Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
                <h2 className="mt-5">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul>
                  <li>Email: info@example.com</li>
                  <li>Phone: +123 456 7890</li>
                  <li>Address: 123 Street, City, Country</li>
                </ul>
                <div className="text-center mt-5">
                  <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
    
  );
};
