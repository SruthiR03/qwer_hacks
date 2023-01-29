import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateDoctor = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({
    name: '',
    medical_expertise: '',
    racial_inclusivity: '',
    timeliness: '',
    pronouns: '',
    consideration: '',
  });

  const onChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/doctors', doctor)
      .then((res) => {
        setDoctor({
            name: '',
            medical_expertise: '',
            racial_inclusivity: '',
            timeliness: '',
            pronouns: '',
            consideration: '',
        });

        // Push to /
        navigate('/doctor-list');
      })
      .catch((err) => {
        console.log('Error in CreateDoctor!');
      });
  };

  return (
    <div className='CreateDoctor'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/doctor-list' className='btn btn-outline-warning float-left'>
              Show Doctor List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Doctor</h1>
            <p className='lead text-center'>Create new doctor</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the Doctor'
                  name='name'
                  className='form-control'
                  value={doctor.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='medical_expertise'
                  name='medical_expertise'
                  className='form-control'
                  value={doctor.medical_expertise}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='racial_inclusivity'
                  name='racial_inclusivity'
                  className='form-control'
                  value={doctor.racial_inclusivity}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='timeliness'
                  name='timeliness'
                  className='form-control'
                  value={doctor.timeliness}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Gender Inclusivity'
                  name='pronouns'
                  className='form-control'
                  value={doctor.pronouns}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Patient Consideration'
                  name='consideration'
                  className='form-control'
                  value={doctor.consideration}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDoctor;
