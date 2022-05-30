import React from 'react';
import useCustomerReview from '../../hooks/useCustomerReview';
import OrderReview from '../OrderReview/OrderReview';
import './Home.css';

const Home = () => {
    const [review, setReview] = useCustomerReview();


    return (
        <>
            <div className='home-container'>
                <div className="topSection">

                </div>
                <div className="bottomSection">
                    <img src='../../watch.png' />
                </div>


            </div>
            <div className="review_container">
                {

                    review.slice(0,3).map(review => <OrderReview key={review._id} review={review}></OrderReview>)
                }

            </div>


        </>



    );
};

export default Home;