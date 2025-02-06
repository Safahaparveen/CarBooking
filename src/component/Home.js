import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container text-center mt-5">
    <h1>Welcome to Car Booking</h1>
    <Link to="/register" className="btn btn-primary m-2">Register</Link>
    <button className="btn btn-secondary m-2">Book a Car</button>
    <button className="btn btn-success m-2">View Cars</button>
  </div>
);

export default Home;
