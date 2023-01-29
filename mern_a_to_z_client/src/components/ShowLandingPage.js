import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import logo from "../rainbowHeart.png";
import FB from "../Facebook.png";
import Twit from "../Twitter.png";
import Insta from "../Instagram.png";
import "../App.css";
import axios from "axios";

function ShowLandingPage() {
  const navigate = useNavigate();
  const [zipCode, setZipcode] = useState({
    zipCode: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    var zipcode = document.getElementById("zipcode").value;
    var distance = document.getElementById("distance").value;
    var state = document.getElementById("state").value;

    console.log("on submit");

    console.log(zipcode);
    console.log(distance);
    console.log(state);
  };

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <h2 className="display-4 text-center">Landing Page</h2> */}
      <div className="text-center">
        <img
          src={logo}
          alt="Rainbow Cross Logo"
          style={{
            height: "210px",
            width: "285px",
          }}
        />
      </div>
      <div className="forms">
        <form noValidate onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="number"
              placeholder="Zipcode"
              id="zipcode"
              className="form-control"
              // value={book.name}
              //onChange={onChange}
            />
          </div>

          <br />

          <div className="form-group">
            <input
              type="text"
              placeholder="State"
              id="state"
              className="form-control"
              // value={book.name}
              //onChange={onChange}
            />
          </div>

          <br />
          <div className="radius">
            Within &nbsp; &nbsp;
            <div className="form-group">
              <input
                type="number"
                placeholder="Distance (in miles)"
                id="distance"
                className="form-control"
                // value={book.name}
                //onChange={onChange}
              />
            </div>
            &nbsp; &nbsp; miles
          </div>
          <br />

          <input
            type="submit"
            className="btn btn-outline-warning btn-block mt-4"
          />
        </form>
      </div>
      <br />
      <br />
      <br />
      <div className="mission-page">
        <h1>Our Mission</h1>
        <br />
        <br />
        <br />
        <div className="mission-statement">Hello</div>
      </div>
      <div className="resources">
        <h1>Resources</h1>
        <div className="split-resources">
          <br />
          <br />
          <br />
          <div className="resource-box">
            <br />
            <h1>LGBTQ+ Hotlines</h1>
            <br />
            <h3>LGBT National Help Center</h3>
            <br />
            <h3>LGBT National Youth Talkline</h3>
            <br />
            <h3>LGBT Domestic Abuse Hotline</h3>
            <br />
            <h3>The Trevor Project: Reach A Counselor</h3>
          </div>
          <div className="resource-box">
            <br />
            <h1>Referrals</h1>
            <br />
            <h3>AGLP - Association of Gay and Lesbian Psychiatrists</h3>
            <br />
            <h3>GLMA - Health Professionals Advancing LGBTQ Equality</h3>
            <br />
            <h3>Los Angeles LGBTQ Center</h3>
            <br />
            <h3>Pride Counseling</h3>
          </div>
        </div>
        <div className="other-resources">
          <h3>Other Resources</h3>
        </div>
      </div>
      <div>
        <br />
        <h2>Fill Out Our Feedback Form</h2>
        <div className="socials">
          <a href="/">
            <img
              src={FB}
              alt="Facebook Logo"
              style={{
                height: "100%",
                width: "50px",
              }}
            />
          </a>
          <a href="/">
            <img
              src={Twit}
              alt="Twitter Logo"
              style={{
                height: "100%",
                width: "50px",
              }}
            />
          </a>
          <a href="/">
            <img
              src={Insta}
              alt="Instagram Logo"
              style={{
                height: "100%",
                width: "50px",
              }}
            />
          </a>
        </div>
        <br />
      </div>
    </div>
  );
}

export default ShowLandingPage;
