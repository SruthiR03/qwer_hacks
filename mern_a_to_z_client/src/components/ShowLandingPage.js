import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


function ShowLandingPage() {

    const navigate = useNavigate();
    const [zipCode, setZipcode] = useState({
        zipCode: '',
      });


    const onSubmit = (e) => {
        e.preventDefault();

        var zipcode = document.getElementById('zipcode').value;
        var distance = document.getElementById('distance').value;
        var state = document.getElementById('state').value;
        
        console.log("on submit");

        

        console.log(zipcode);
        console.log(distance);
        console.log(state);

        
      };

  return (

    <div>
    <h2 className='display-4 text-center'>Landing Page</h2>

    <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Zipcode'
                  id='zipcode'
                  className='form-control'
                   // value={book.name}
                  //onChange={onChange}
                />
              </div>

              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='state'
                  id='state'
                  className='form-control'
                   // value={book.name}
                  //onChange={onChange}
                />
              </div>

              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Distance (in miles)'
                  id='distance'
                  className='form-control'
                   // value={book.name}
                  //onChange={onChange}
                />
              </div>

              <br />

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
     </form>
     </div>
    
  );
}

export default ShowLandingPage;
