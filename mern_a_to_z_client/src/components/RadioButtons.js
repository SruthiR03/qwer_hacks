import React from "react";
import "../App.css";

export default function Radio(book, setBook) {


  return (
    <div className="rating-inputs">
      <form>
        Rate the following out of five:
        <fieldset>
          <br />
          <label>
            Professionalism: &nbsp; 1 &nbsp;
            <input
              type="radio"
              name="professionalism"
              value="1"
              // onChange={changeColor}
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
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            3 &nbsp;
            <input
              type="radio"
              name="professionalism"
              value="3"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            4 &nbsp;
            <input
              type="radio"
              name="professionalism"
              value="4"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            5 &nbsp;
            <input
              type="radio"
              name="professionalism"
              value="5"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
        </fieldset>
        <fieldset>
          <br />
          <label>
            Racial Inclusivity: &nbsp; 1 &nbsp;
            <input
              type="radio"
              name="race"
              value="1"
              // onChange={changeColor}
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
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            3 &nbsp;
            <input
              type="radio"
              name="race"
              value="3"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            4 &nbsp;
            <input
              type="radio"
              name="race"
              value="4"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            5 &nbsp;
            <input
              type="radio"
              name="race"
              value="5"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
        </fieldset>
        <fieldset>
          <br />
          <label>
            LGBTQ+ Friendliness: &nbsp; 1 &nbsp;
            <input
              type="radio"
              name="lgbtq"
              value="1"
              // onChange={changeColor}
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
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            3 &nbsp;
            <input
              type="radio"
              name="lgbtq"
              value="3"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            4 &nbsp;
            <input
              type="radio"
              name="lgbtq"
              value="4"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            5 &nbsp;
            <input
              type="radio"
              name="lgbtq"
              value="5"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
        </fieldset>
        <fieldset>
          <br />
          <label>
            Cleanliness: &nbsp; 1 &nbsp;
            <input
              type="radio"
              name="clean"
              value="1"
              // onChange={changeColor}
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
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            3 &nbsp;
            <input
              type="radio"
              name="clean"
              value="3"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            4 &nbsp;
            <input
              type="radio"
              name="clean"
              value="4"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            5 &nbsp;
            <input
              type="radio"
              name="clean"
              value="5"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
        </fieldset>
        <fieldset>
          <br />
          <label>
            Attentiveness: &nbsp; 1 &nbsp;
            <input
              type="radio"
              name="help"
              value="1"
              // onChange={changeColor}
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
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            3 &nbsp;
            <input
              type="radio"
              name="help"
              value="3"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            4 &nbsp;
            <input
              type="radio"
              name="help"
              value="4"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
          <label>
            5 &nbsp;
            <input
              type="radio"
              name="help"
              value="5"
              // onChange={changeColor}
            />
            &nbsp;&nbsp;
          </label>
        </fieldset>
      </form>
    </div>
  );
}
