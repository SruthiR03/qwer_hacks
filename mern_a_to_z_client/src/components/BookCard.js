import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import styles from "../App.css";

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className="card-container">
      <div className="desc">
        <h1>
          <strong>{book.name}</strong>
        </h1>

        <h3>
          <strong>{book.address}</strong>
        </h3>
      </div>
      <div className="doctorbutton">
        <Link to={`/doctor-list`}>
          <h2>View Doctors</h2>
        </Link>
      </div>
      <div className="reviewbutton">
       
          <Link to={`/show-book/${book._id}`}>  <h2>View/Rate Hospital </h2></Link>
        
      </div>
    </div>
  );
};

export default BookCard;
