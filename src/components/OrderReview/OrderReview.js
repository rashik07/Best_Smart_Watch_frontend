import React from 'react';
import './OrderReview.css';

const OrderReview = (props) => {
    const {reviewer_name,content,rating}=props.review;
    return (
        <div className='customer_review'>
     
           <h3>Name: {reviewer_name}</h3> 
           <p>Comment:{content}</p> 
           <p>Rating {rating}</p>
           
        </div>
    );
};

export default OrderReview;