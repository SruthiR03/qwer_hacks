import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Form(book, setBook) {

  const navigate = useNavigate();


  const onSubmit = (e) => {
    e.preventDefault();

    var reason = document.getElementById("reason").value;
    var identity = document.getElementById("identity").value;
    var orientation = document.getElementById("orientation").value;
    var race = document.getElementById("race").value;
    var reviewtext = document.getElementById("reviewtext").value;

    var fullreview = [reason,identity,orientation,race,reviewtext];
    
    let newReviewArr = book.book.reviews;
    
    newReviewArr.push(fullreview);

    
    console.log(newReviewArr);
    book.setBook({
      reviews: newReviewArr,

    });

    console.log(book);

    const data = {
      
      name: book.book.name,
      address: book.book.address,
      city: book.book.city,
      state: book.book.state,
      zipcode: book.book.zipcode,
      cleanliness: book.book.cleanliness,
      racial_inclusivity: book.book.racial_inclusivity,
      helpfulness: book.book.helpfulness,
      pronouns: book.book.pronouns,
      professionalism: book.book.professionalism,
      reviews: book.book.reviews,
    };

    
    axios
      .put(`http://localhost:8082/api/books/${book.book._id}`, data)
      .then((res) => {
       //navigate(`/show-book/${book.book._id}`);
       window.location.reload();
      })
      .catch((err) => {
        console.log('Error in UpdateBookInfo!');
      });

    

    // console.log(book.reviews);

  }
  
  return (
    <div className="blue-rectangle text-center">
      <br />
      <input
        className="input-box"
        type="text"
        height="10px"
        placeholder="Reason for visit"
        id="reason"
      />
      <br />
      <br />
      <input
        className="input-box"
        type="text"
        height="10px"
        placeholder="Gender Identity"
        id="identity"
      />
      <br />
      <br />
      <input
        className="input-box"
        type="text"
        height="10px"
        placeholder="Sexual Orientation"
        id="orientation"
      />
      <br />
      <br />
      <input
        className="input-box"
        type="text"
        height="10px"
        placeholder="Race"
        id="race"
      />
      <br />
      <br />
      <textarea
        rows="8"
        cols="40"
        placeholder="Write your review here"
        border="0px"
        id="reviewtext"
      />
      <br />
      <br />
      <form className="submit-button">
        <button onClick={onSubmit}>Submit button</button>
      </form>
    </div>
  );
}
