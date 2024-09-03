import React, { useState } from "react";
import axios from "axios";

const ResetForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/request-reset", // Ensure this matches your backend URL
        { email }
      );
      alert(response.data.message); // Notify user
    } catch (error) {
      console.log("Error requesting password reset:", error);
      alert("Failed to request password reset");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center">Password Reset</h2>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email" className="mb-3">
                    Email address
                  </label>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                  <button className="btn btn-primary btn-block" type="submit">
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetForm;
