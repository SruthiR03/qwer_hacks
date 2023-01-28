import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateBook = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [book, setBook] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    cleanliness: '',
    racial_inclusivity: '',
    helpfulness: '',
    pronouns: '',
    professionalism: '',
  });

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/books', book)
      .then((res) => {
        setBook({
          name: '',
          address: '',
          city: '',
          state: '',
          zipcode: '',
          cleanliness: '',
          racial_inclusivity: '',
          helpfulness: '',
          pronouns: '',
          professionalism: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
      });
  };

  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Hospital List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Hospital</h1>
            <p className='lead text-center'>Create new hospital</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the Hospital'
                  name='name'
                  className='form-control'
                  value={book.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='address'
                  name='address'
                  className='form-control'
                  value={book.address}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='City'
                  name='city'
                  className='form-control'
                  value={book.city}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='State'
                  name='state'
                  className='form-control'
                  value={book.state}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='zipcode'
                  name='zipcode'
                  className='form-control'
                  value={book.zipcode}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='cleanliness'
                  name='cleanliness'
                  className='form-control'
                  value={book.cleanliness}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='racial_inclusivity'
                  name='racial_inclusivity'
                  className='form-control'
                  value={book.racial_inclusivity}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='helpfulness'
                  name='helpfulness'
                  className='form-control'
                  value={book.helpfulness}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Gender Inclusivity'
                  name='pronouns'
                  className='form-control'
                  value={book.pronouns}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='professionalism'
                  name='professionalism'
                  className='form-control'
                  value={book.professionalism}
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

export default CreateBook;
