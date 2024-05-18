import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsConditions() {
  return (
    <>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">Terms and Conditions</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Terms and Conditions</li>
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
                <h1 className="mb-4">Terms and Conditions</h1>
                <p>
                  Welcome to our e-learning platform! These Terms and Conditions outline the rules and regulations for the use of our website.
                </p>
                <h2 className="mt-5">1. Acceptance of Terms</h2>
                <p>
                  By accessing this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you disagree with any part of these terms, you may not use our website.
                </p>
                <h2 className="mt-5">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.
                </p>
                <h2 className="mt-5">3. User Account</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
                </p>
                <h2 className="mt-5">4. Intellectual Property Rights</h2>
                <p>
                  All materials on our website are protected by copyright and other intellectual property laws. You may not modify, copy, reproduce, republish, upload, post, transmit, or distribute any material without prior written consent.
                </p>
                <h2 className="mt-5">5. Limitations</h2>
                <p>
                  In no event shall we be liable for any damages arising out of the use or inability to use our website, even if we have been notified orally or in writing of the possibility of such damage.
                </p>
                <h2 className="mt-5">6. Governing Law</h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
                </p>
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

