// import React, { useState, useEffect } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
// import axios from 'axios';


function ShowLandingPage() {

    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log("on submit");
        var zipcode = document.getElementById('zipcode').value;

        console.log(zipcode);
        
      };

  return (

    <div>
    <h2 className='display-4 text-center'>Landing Page</h2>

    <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Zipcode'
                  id='zipcode'
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
