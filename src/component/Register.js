// pages/Register.js
import React from "react";

const Register = () => (
  <div className="container mt-5">
    <h2>Registration Page</h2>
    <form className="mt-3">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);

export default Register;