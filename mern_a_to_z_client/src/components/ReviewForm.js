import React from "react";
import "../App.css";

export default function Form() {
  return (
    <div className="blue-rectangle text-center">
      <br />
      <input
        className="input-box"
        type="text"
        height="10px"
        placeholder="Reason for visit"
      />
      <br />
      <br />
      <input
        className="input-box"
        type="text"
        height="10px"
        placeholder="Gender Identity"
      />
      <br />
      <br />
      <input
        className="input-box"
        type="text"
        height="10px"
        placeholder="Sexual Orientation"
      />
      <br />
      <br />
      <input
        className="input-box"
        type="text"
        height="10px"
        placeholder="Race"
      />
      <br />
      <br />
      <textarea
        rows="8"
        cols="40"
        placeholder="Write your review here"
        border="0px"
      />
      <br />
      <br />
      <div className="submit-button">Submit button</div>
    </div>
  );
}
