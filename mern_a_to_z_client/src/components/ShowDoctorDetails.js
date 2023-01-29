import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowDoctorDetails(props) {
  const [doctor, setDoctor] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/doctors/${id}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowDoctorDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/doctors/${id}`)
      .then((res) => {
        navigate('/doctor-list');
      })
      .catch((err) => {
        console.log('Error form ShowDoctorsDetails_deleteClick');
      });
  };

  const DoctorItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{doctor.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Medical Expertise</td>
            <td>{doctor.medical_expertise}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Racial Inclusivity</td>
            <td>{doctor.racial_inclusivity}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Timeliness</td>
            <td>{doctor.timeliness}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Gender Inclusive</td>
            <td>{doctor.pronouns}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Patient Consideration</td>
            <td>{doctor.consideration}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBookDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/doctor-list' className='btn btn-outline-warning float-left'>
              Show Doctor List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Doctor's Record</h1>
            <p className='lead text-center'>View Doctor's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{DoctorItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(doctor._id);
              }}
            >
              Delete Doctor
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-doctor/${doctor._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Doctor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDoctorDetails;