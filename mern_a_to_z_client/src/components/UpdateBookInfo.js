import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateBookInfo(props) {
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
    reviews:[]
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        setBook({
          name: res.data.name,
          address: res.data.address,
          city: res.data.city,
          state: res.data.state,
          zipcode: res.data.zipcode,
          cleanliness: res.data.cleanliness,
          racial_inclusivity: res.data.racial_inclusivity,
          helpfulness: res.data.helpfulness,
          pronouns: res.data.pronouns,
          professionalism: res.data.professionalism,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateBookInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      
      name: book.name,
      address: book.address,
      city: book.city,
      state: book.state,
      zipcode: book.zipcode,
      cleanliness: book.cleanliness,
      racial_inclusivity: book.racial_inclusivity,
      helpfulness: book.helpfulness,
      pronouns: book.pronouns,
      professionalism: book.professionalism,
    };

    axios
      .put(`http://localhost:8082/api/books/${id}`, data)
      .then((res) => {
        navigate(`/show-book/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateBookInfo!');
      });
  };

  return (
    <div className='UpdateBookInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Hospital List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Hospital</h1>
            <p className='lead text-center'>Update Hospital's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
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
              <label htmlFor='address'>Address</label>
              <input
                  type='text'
                  placeholder='address'
                  name='address'
                  className='form-control'
                  value={book.address}
                  onChange={onChange}
                />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='city'>City</label>
              <input
                  type='text'
                  placeholder='City'
                  name='city'
                  className='form-control'
                  value={book.city}
                  onChange={onChange}
                />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='state'>State</label>
              <textarea
                 type='text'
                 placeholder='State'
                 name='state'
                 className='form-control'
                 value={book.state}
                 onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='zipcode'>Zipcode</label>
              <input
                 type='number'
                 placeholder='zipcode'
                 name='zipcode'
                 className='form-control'
                 value={book.zipcode}
                 onChange={onChange}
              />
            </div>
            <br />

            {/* <div className='form-group'>
              <label htmlFor='publisher'>Publisher</label>
              <input
                type='text'
                placeholder='Publisher of the Book'
                name='publisher'
                className='form-control'
                value={book.publisher}
                onChange={onChange}
              />
            </div>
            <br /> */}

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Hospital
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBookInfo;
