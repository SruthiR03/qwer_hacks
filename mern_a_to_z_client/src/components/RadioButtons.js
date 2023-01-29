import axios from "axios";
import React from "react";
import "../App.css";
import {useNavigate , useParams} from 'react-router-dom';

export default function Radio(book, setBook) {

  const { id } = useParams();
  const navigate = useNavigate();
  const onClick = (event) => {
    event.preventDefault();
    var avg_rank_prof = book.book.professionalism;
    var avg_rank_race = book.book.racial_inclusivity;
    var avg_rank_lgbtq = book.book.pronouns;
    var avg_rank_clean = book.book.cleanliness;
    var avg_rank_help= book.book.helpfulness;
    var length_reviews = book.book.reviews.length;

    if(event.target.name == "professionalism"){
      avg_rank_prof = (avg_rank_prof * length_reviews + parseInt(event.target.value))/length_reviews;
    }else if(event.target.name == "race"){
      avg_rank_race = (avg_rank_race * length_reviews + parseInt(event.target.value))/length_reviews;
    }else if(event.target.name == "lgbtq"){
      avg_rank_lgbtq = (avg_rank_lgbtq * length_reviews + parseInt(event.target.value))/length_reviews;
    }else if(event.target.name == "clean"){
      avg_rank_clean = (avg_rank_clean * length_reviews + parseInt(event.target.value))/length_reviews;
    }else{
      avg_rank_help = (avg_rank_help * length_reviews + parseInt(event.target.value))/length_reviews;
    }

    const data = {
      name: book.book.name,
      address: book.book.address,
      city: book.book.city,
      state: book.book.state,
      zipcode: book.book.zipcode,
      cleanliness: avg_rank_clean,
      racial_inclusivity: avg_rank_race,
      helpfulness: avg_rank_help,
      pronouns: avg_rank_lgbtq,
      professionalism: avg_rank_prof,
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
    <div className="rating-inputs">
      <form className="m-auto">
        <h3>
          <strong>Rate the following out of five: </strong>
        </h3>

        <fieldset>
          <h2>Gender Affirming Care:</h2>
          <div className="radios">
            <label>
              &nbsp; 1 &nbsp;
              <input
                type="radio"
                name="professionalism"
                value="1"
                onChange={onClick}
                defaultChecked
              />
              &nbsp;&nbsp;
            </label>
            <label>
              2 &nbsp;
              <input
                type="radio"
                name="professionalism"
                value="2"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              3 &nbsp;
              <input
                type="radio"
                name="professionalism"
                value="3"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              4 &nbsp;
              <input
                type="radio"
                name="professionalism"
                value="4"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              5 &nbsp;
              <input
                type="radio"
                name="professionalism"
                value="5"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
          </div>
        </fieldset>
        <fieldset>
          <br />
          <h2>Gender Inclusive Accomodations:</h2>
          <div className="radios">
            <label>
              &nbsp; 1 &nbsp;
              <input
                type="radio"
                name="race"
                value="1"
                onChange={onClick}
                defaultChecked
              />
              &nbsp;&nbsp;
            </label>
            <label>
              2 &nbsp;
              <input
                type="radio"
                name="race"
                value="2"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              3 &nbsp;
              <input
                type="radio"
                name="race"
                value="3"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              4 &nbsp;
              <input
                type="radio"
                name="race"
                value="4"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              5 &nbsp;
              <input
                type="radio"
                name="race"
                value="5"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
          </div>
        </fieldset>
        <fieldset>
          <br />
          <h2>Allyship</h2>
          <div className="radios">
            <label>
              &nbsp; 1 &nbsp;
              <input
                type="radio"
                name="lgbtq"
                value="1"
                onChange={onClick}
                defaultChecked
              />
              &nbsp;&nbsp;
            </label>
            <label>
              2 &nbsp;
              <input
                type="radio"
                name="lgbtq"
                value="2"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              3 &nbsp;
              <input
                type="radio"
                name="lgbtq"
                value="3"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              4 &nbsp;
              <input
                type="radio"
                name="lgbtq"
                value="4"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              5 &nbsp;
              <input
                type="radio"
                name="lgbtq"
                value="5"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
          </div>
        </fieldset>
        <fieldset>
          <br />
          <h2>Accessibility:</h2>
          <div className="radios">
            <label>
              &nbsp; 1 &nbsp;
              <input
                type="radio"
                name="clean"
                value="1"
                onChange={onClick}
                defaultChecked
              />
              &nbsp;&nbsp;
            </label>
            <label>
              2 &nbsp;
              <input
                type="radio"
                name="clean"
                value="2"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              3 &nbsp;
              <input
                type="radio"
                name="clean"
                value="3"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              4 &nbsp;
              <input
                type="radio"
                name="clean"
                value="4"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              5 &nbsp;
              <input
                type="radio"
                name="clean"
                value="5"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
          </div>
        </fieldset>
        <fieldset>
          <br />
          <h2>Professionalism and Attentiveness:</h2>
          <div className="radios">
            <label>
              1 &nbsp;
              <input
                type="radio"
                name="help"
                value="1"
                onChange={onClick}
                defaultChecked
              />
              &nbsp;&nbsp;
            </label>
            <label>
              2 &nbsp;
              <input
                type="radio"
                name="help"
                value="2"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              3 &nbsp;
              <input
                type="radio"
                name="help"
                value="3"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              4 &nbsp;
              <input
                type="radio"
                name="help"
                value="4"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
            <label>
              5 &nbsp;
              <input
                type="radio"
                name="help"
                value="5"
                onChange={onClick}
              />
              &nbsp;&nbsp;
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
