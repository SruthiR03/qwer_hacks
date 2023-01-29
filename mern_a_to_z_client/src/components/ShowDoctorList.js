import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DoctorCard from './DoctorCard';
import NavBar from "./NavBar";

function ShowDoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/doctors')
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowDoctorList');
      });
  }, []);

  const doctorList =
    doctors.length === 0
      ? 'there is no doctor record!'
      : doctors.map((doctor, k) => <DoctorCard doctor={doctor} key={k} />);

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
    
            
            <div className="search-flex">
          <div className="search-image"></div>

          <input
            type="text"
            placeholder="search by speciality"
            className={"searchSpeciality"}
          />
        </div>
          </div>
          <NavBar />

          <div className='col-md-11'>
          <Link
              to='/create-doctor'
              className='btn btn-outline-warning float-right'
            >
              + Add New Doctor
            </Link>
        
            <br />
            <br />
         
          </div>
        </div>

        <div className='list'>{doctorList}</div>
      </div>
    </div>
  );
}

export default ShowDoctorList;
