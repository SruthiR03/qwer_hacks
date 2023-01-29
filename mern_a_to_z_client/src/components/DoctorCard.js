import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const DoctorCard = (props) => {
  const doctor = props.doctor;

  return (
    <div className='card-container'>
      <div className='desc'>
        <h2>
          <Link to={`/show-doctor/${doctor._id}`}>{doctor.name}</Link>
        </h2>
        <h3>{doctor.address}</h3>
        <p>{doctor.zipcode}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
