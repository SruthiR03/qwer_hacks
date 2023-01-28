import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.name}</Link>
        </h2>
        <h3>{book.address}</h3>
        <p>{book.zipcode}</p>
      </div>
    </div>
  );
};

export default BookCard;
