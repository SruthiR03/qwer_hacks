import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import styles from "../App.css";

const ReviewCard = (props) => {
    const review = props.reviews;

    console.log(review);

    return (
            <div className={"viewReviewsbg2"}>
            <br></br>
            <h2>Reason For Visit</h2>
            
            <div className={'review-box'}>
            <text className="center">{review[0]}</text>
            </div>
            <h2>Gender Identity</h2>
            
            <div className={'review-box'}>
            <text className="center">{review[1]}</text>
            </div>
            <h2>Sexual Orientation</h2>
            <div className={'review-box'}>
            <text className="center">{review[2]}</text>
            </div>
            <h2>Race</h2>
            <div className={'review-box'}>
            <text className="center">{review[3]}</text>
            </div>
            <h2>Review</h2>
            <div className={'review-box-big'}>
            <text className="center">{review[4]}</text>
            </div>
           
            <br />
            <br />
            </div>

            

            
    );



};

export default ReviewCard;