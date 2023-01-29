import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const DoctorCard = (props) => {
  const doctor = props.doctor;

  return (
    <div className="doctor-card">
      <div className="desc">
        <h1>
          <strong>{doctor.name}</strong>
        </h1>
        <h3>
          <strong>{doctor.specialty}</strong>
        </h3>
        {/* <h2>
          <Link to={`/show-doctor/${doctor._id}`}>{doctor.name}</Link>
        </h2> */}
        <div className="reviewbutton">
          <Link to={`/show-doctor/${doctor._id}`}>
            {" "}
            <h2><strong>View/Rate Doctor</strong> </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
