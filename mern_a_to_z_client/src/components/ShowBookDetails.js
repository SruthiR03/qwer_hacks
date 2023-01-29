import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Graph from "./BarGraph";
import Radio from "./RadioButtons";
import Form from "./ReviewForm";
function ShowBookDetails(props) {
  const [book, setBook] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick");
      });
  };

  const BookItem = (
    <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{book.name}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Address</td>
            <td>{book.address}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>City</td>
            <td>{book.city}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>State</td>
            <td>{book.state}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Zipcode</td>
            <td>{book.zipcode}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Cleanliness</td>
            <td>{book.cleanliness}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="ShowBookDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
            <Link
              to="/hospital-list"
              className="btn btn-outline-warning float-left"
            >
              Show Hospital List
            </Link>
          </div>
          <br />
          <div className="col-md-8 m-auto">
            <h1 className="display-6 text-center">Rate {book.name}</h1>
            {/* <p className="lead text-center">View Hospital's Info</p> */}
            <hr />
            {/* <br /> */}
            <div className="split-screen">
              <div>
                <Radio />
              </div>
              <Graph m1={book.cleanliness} m2={book.racial_inclusivity} m3={book.helpfulness} m4={book.pronouns}  m5={book.professionalism}/>
            </div>
          </div>
          <div>
            <h1 className="display-6 text-center">Write A Review</h1>
            <hr />
            <Form />
          </div>

          {/* <div className="col-md-10 m-auto">{BookItem}</div> */}

          <br />
        </div>
      </div>
    </div>
  );
}

export default ShowBookDetails;
