import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Graph from "./BarGraph";
import DoctorForm from "./ReviewDoctorForm";
import Radio from "./RadioButtons";

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
    specialty: '',
  });

  const onChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(doctor);

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
          specialty: '',
        });

        // Push to /
        //navigate(`/show-doctor/${doctor._id}`);
        navigate('/doctor-list');
      })
      .catch((err) => {
        console.log("Error in CreateDoctor!");
      });
  };

  return (
    <div className="CreateDoctor">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <br />
            <br />
            <br />
            <Link
              to="/doctor-list"
              className="btn btn-outline-warning float-left"
            >
              Show Doctor List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1>
              {" "}
              <strong>Add Doctor</strong>{" "}
            </h1>
            {/* <p className="lead text-center">Create new doctor</p> */}

            <form noValidate onSubmit={onSubmit}>
              <div className="forms2">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name of the Doctor"
                    name="name"
                    className="form-control"
                    value={doctor.name}
                    onChange={onChange}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Specialty of the Doctor"
                    name="specialty"
                    className="form-control"
                    value={doctor.specialty}
                    onChange={onChange}
                  />
                </div>
                <br />
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
