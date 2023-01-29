import React from "react";
import "../App.css";
import ReviewCard from "./ReviewCard";

export default function View(book,setBook) {

   console.log(book.book.reviews);

   const reviewList = 
   book.book.reviews.length === 0
   ? "there are no reviews. add a new review"
   : book.book.reviews.map((review,k) => <ReviewCard reviews={review} key={k}/>);

    return (
         <div className={"viewReviewsbg"}>
            
    {/* //         <br></br>
    //         <h1>
    //            <strong>View Other Reviews</strong> 
    //         </h1>
    //         <div className={"viewReviewsbg2"}>
    //         <br></br>
    //         <h2>Reason For Visit</h2>
            
    //         <div className={'review-box'}>
    //         <text className="center">reason</text>
    //         </div>
    //         <h2>Gender Identity</h2>
            
    //         <div className={'review-box'}>
    //         <text className="center">identity</text>
    //         </div>
    //         <h2>Sexual Orientation</h2>
    //         <div className={'review-box'}>
    //         <text className="center">orientation</text>
    //         </div>
    //         <h2>Race</h2>
    //         <div className={'review-box'}>
    //         <text className="center">race</text>
    //         </div>
    //         <h2>Review</h2>
    //         <div className={'review-box-big'}>
    //         <text className="center">review</text>
    //         </div>
           
    //         </div> */}
            
            
         

         <div>
    {/* //<div className="row"> */}
    <div >{reviewList}</div>
    </div>
    <br />

</div>
    );
}