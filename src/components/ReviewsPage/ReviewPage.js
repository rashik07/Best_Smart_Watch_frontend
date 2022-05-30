import React from 'react';
import useCustomerReview from '../../hooks/useCustomerReview';
import OrderReview from '../OrderReview/OrderReview';
import '../Home/Home.css';

const ReviewPage = () => {
    const [review, setReview] = useCustomerReview();

    return (
        <div>
              <div className="review_container">
                {

                    review.map(review => <OrderReview key={review._id} review={review}></OrderReview>)
                }

            </div>
        </div>
    );
};

export default ReviewPage;