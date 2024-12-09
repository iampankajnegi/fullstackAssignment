import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userform.css"; // Make sure to import the CSS file

const PersonalDetailsForm = () => {
  const [personal, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPersonalData({ ...personal, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    localStorage.setItem("personalDetails", JSON.stringify(personal));
    navigate("/contact");
  };

  return (
    <div className="personal-form-container">
      <h2>Personal Details</h2>

      <form className="personal-form">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          value={personal.firstName}
          name="firstName"
          placeholder="First name"
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          value={personal.lastName}
          name="lastName"
          placeholder="Last name"
          onChange={handleChange}
        />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          value={personal.dateOfBirth}
          name="dateOfBirth"
          onChange={handleChange}
        />

        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
