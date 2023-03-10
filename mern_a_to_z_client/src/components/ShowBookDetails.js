import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Graph from "./BarGraph";
import Radio from "./RadioButtons";
import Form from "./ReviewForm";
import logo from "../whiteHeart.png";
import NavBar from "./NavBar";
import View from "./ViewReviews";
import { set } from "mongoose";
function ShowBookDetails(props) {
  const [book, setBook] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    cleanliness: "",
    racial_inclusivity: "",
    helpfulness: "",
    pronouns: "",
    professionalism: "",
    reviews: [],
  });

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

  // const BookItem = (
  //   <div>
  //     <table className="table table-hover table-dark">
  //       <tbody>
  //         <tr>
  //           <th scope="row">1</th>
  //           <td>Name</td>
  //           <td>{book.name}</td>
  //         </tr>
  //         <tr>
  //           <th scope="row">2</th>
  //           <td>Address</td>
  //           <td>{book.address}</td>
  //         </tr>
  //         <tr>
  //           <th scope="row">3</th>
  //           <td>City</td>
  //           <td>{book.city}</td>
  //         </tr>
  //         <tr>
  //           <th scope="row">4</th>
  //           <td>State</td>
  //           <td>{book.state}</td>
  //         </tr>
  //         <tr>
  //           <th scope="row">5</th>
  //           <td>Zipcode</td>
  //           <td>{book.zipcode}</td>
  //         </tr>
  //         <tr>
  //           <th scope="row">6</th>
  //           <td>Cleanliness</td>
  //           <td>{book.cleanliness}</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>
  // );

  return (
    <div className="ShowBookDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
            <br /> <br />
          
            
          </div>
          <br />
          <NavBar />
          <div className="col-md-8 m-auto">
            <h1>
              {" "}
              <strong> Rate {book.name}</strong>{" "}
            </h1>

            {/* <p className="lead text-center">View Hospital's Info</p> */}

            {/* <br /> */}
            <div className="split-screen">
              <div>
                <Radio book={book} setBook={setBook}/>
              </div>
              <Graph m1={book.cleanliness} m2={book.racial_inclusivity} m3={book.helpfulness} m4={book.pronouns}  m5={book.professionalism}/>
            </div>
          </div>
          <div>
            {/* <h1 className="display-6 text-center">Write A Review</h1> */}
          <br></br>
            <h1>
              {" "}
              <strong> Write A Review</strong>
            </h1>
            <Form book={book} setBook={setBook} />

            {/* <Form />
            <div className="submit-button">
        <button className={"submitButton"}>
          
          Submit</button> */}

<br></br>
          <br></br>
          <br></br>
         
              <h1>
            <strong>View Other Reviews</strong>
          </h1>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
       

     
          <View book={book} setBook={setBook} />
        </div>

        {/* <div className="col-md-10 m-auto">{BookItem}</div> */}

        <br />
      </div>
    </div>
    // </div>
  );
}

export default ShowBookDetails;
