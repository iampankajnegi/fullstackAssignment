import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./contactform.css"; // Import the CSS file

const ContactDetailsForm = () => {
  const [contactData, setContact] = useState({
    phoneNumber: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setContact({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const personalDetails = JSON.parse(localStorage.getItem("personalDetails"));
      const finalData = { ...personalDetails, ...contactData };

      const response = await axios.post("http://localhost:8000/result", finalData);

      alert(response.data.message || "Data submitted successfully!");
      localStorage.removeItem("personalDetails");
      navigate("/");
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Submission failed.");
    }
  };

  return (
    <div className="contact-form-container">
      <h2> Enter Contact Details</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          placeholder="Enter your email address"
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter your phone number"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactDetailsForm;
