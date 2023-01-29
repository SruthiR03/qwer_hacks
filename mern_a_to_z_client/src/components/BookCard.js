import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import styles from '../App.css';


const BookCard = (props) => {
  const book = props.book;

  return (
    <div className='card-container'>
     
      <div className='desc'>
       
        <h2>
          <strong>
          <Link to={`/show-book/${book._id}`}> {  book.name}</Link>
          </strong>
        </h2>
    
        <h3>{book.address}</h3>
        <p>{book.zipcode}</p>
      </div>
    </div>
  );
};

export default BookCard;
