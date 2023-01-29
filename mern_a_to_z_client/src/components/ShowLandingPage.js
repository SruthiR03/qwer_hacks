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

    navigate("/hospital-list");
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
      <div className="welcome"> Welcome To Rainbow Cross</div>
      <br />
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
              className={"searchZipcode"}
              type="number"
              placeholder="Zipcode"
              id="zipcode"

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
              className={"searchState"}
              // value={book.name}
              //onChange={onChange}
            />
          </div>

          <br />
          <div className="radius">
            <h2>Within</h2>&nbsp; &nbsp;
            <div className="form-group">
              <input
                type="number"
                placeholder="Distance (in miles)"
                id="distance"
                className={"searchDistance"}
                // value={book.name}
                //onChange={onChange}
              />
            </div>
            &nbsp; &nbsp; <h2>Miles</h2>
          </div>
          <br />

          <input type="submit" className={"submitbuttonrainbow"} />
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="mission-page">
        <br />
        <br />
        <div className="mission">
          <text>
            <strong>Our Mission</strong>
          </text>
        </div>

        <br />
        <br></br>
        <br></br>

        <div className="mission-statement">
          <br></br>
          <br></br>
          <h5>
            <strong> Promoting Inclusive Care</strong>{" "}
          </h5>
          <br></br>
          <h4>
            Help people in marginalized communities find inclusive, accepting,
            and affirming doctors to address their most pressing medical
            concerns.
          </h4>
          <br></br>
          <h5>
            {" "}
            <strong>Raise Healthcare Standards </strong>
          </h5>
          <br></br>
          <h4>
            {" "}
            Deliver real data to hospital heads to reduce disparities, increase
            accessibility, and improve standard of care.
          </h4>
          <br></br>
          <h5>
            {" "}
            <strong>Rewrite Policy </strong>
          </h5>
          <br></br>
          <h4>
            Provide passionate politicians with real human feedback to create
            more targeted/specific? and effective policies.
          </h4>
        </div>
      </div>

      <div className="resources">
        <br />
        <br />

        <div className="welcome">
          <text> Resources</text>
        </div>

        <br />
        <div className="split-resources">
          <br />

          <br />
          <br />
          <div className="resource-box">
            <br />
            <h1>
              <strong>LGBTQ+ Hotlines</strong>
            </h1>
            <br />
            <a href="https://www.lgbthotline.org/">
              <h4>
                {" "}
                <strong> LGBT National Help Center</strong>
              </h4>
            </a>

            <br />
            <a href="https://www.lgbthotline.org/youth-talkline">
              <h4>
                {" "}
                <strong>LGBT National Youth Talkline </strong>
              </h4>
            </a>

            <br />
            <a href="https://www.thehotline.org/resources/abuse-in-lgbtq-communities/">
              <h4>
                {" "}
                <strong>LGBT Domestic Abuse Hotline </strong>
              </h4>
            </a>

            <br />
            <a href="https://www.thetrevorproject.org/">
              <h4>
                <strong>The Trevor Project: Reach A Counselor</strong>
              </h4>
            </a>

            <br />
          </div>
          <div className="resource-box">
            <br />
            <h1>
              <strong>Referrals </strong>
            </h1>
            <br />
            <a href=" https://aglp.memberclicks.net/aglp-referral">
              <h4>
                {" "}
                <strong>
                  AGLP - Association of Gay and Lesbian Psychiatrists
                </strong>{" "}
              </h4>
            </a>

            <br />
            <a href="https://www.glma.org/index.cfm?fuseaction=Page.viewPage&pageId=939&grandparentID=534&parentID=938">
              <h4>
                <strong>
                  GLMA - Health Professionals Advancing LGBTQ Equality{" "}
                </strong>
              </h4>
            </a>

            <br />
            <a href="https://www.google.com/search?q=lgbtq+health+referrals+resources&rlz=1C5CHFA_enUS917US917&sxsrf=AJOqlzW564m8xeeTtIaGJcrBiUuqgkYpQA%3A1674992968098&ei=SF3WY7rhBdvfkPIPgLmTmAU&oq=lgbtq+health+refferals&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgCMgcIIRCgARAKMgcIIRCgARAKMgcIIRCgARAKOg0IABBHENYEEMkDELADOgoIABBHENYEELADOgQIIxAnOgYIABAWEB46BQgAEIYDOgUILhCABDoFCCEQoAFKBAhBGABKBAhGGABQyAVY6BxgrypoAXABeAGAAVyIAf0HkgECMTSYAQCgAQHIAQjAAQE&sclient=gws-wiz-serp">
              <h4>
                {" "}
                <strong>Los Angeles LGBTQ Center</strong>
              </h4>
            </a>

            <br />
            <a href="https://www.pridecounseling.com/get-started/?utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=pride+counseling_e&utm_content=48994507603&network=g&placement=&target=&matchtype=e&utm_campaign=946242232&ad_type=text&adposition=&kwd_id=kwd-387484007030&gclid=Cj0KCQiAz9ieBhCIARIsACB0oGIt_3mIER9JLuPLVR8vWJ7tTgnuS6h13aFglQkfPYcmkOeyXxpWerQaArvVEALw_wcB&not_found=1&gor=start_go&go=true">
              <h4>
                <strong> Pride Counseling</strong>
              </h4>
            </a>

            <br />
          </div>
        </div>
        <div className="other-resources">
          <a href="https://www.cdc.gov/lgbthealth/index.htm">
            <h2>
              <strong>Other Resources</strong>
            </h2>
          </a>
        </div>
      </div>
      <div>
        <br />
        <h2>Fill Out Our Feedback Form</h2>
        <div className="socials">
          <br></br>
          <a href="https://www.facebook.com">
            <img
              src={FB}
              alt="Facebook Logo"
              style={{
                height: "100%",
                width: "50px",
              }}
            />
          </a>
          <a href="https://www.twitter.com">
            <img
              src={Twit}
              alt="Twitter Logo"
              style={{
                height: "100%",
                width: "50px",
              }}
            />
          </a>
          <a href="https://www.instagram.com">
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
