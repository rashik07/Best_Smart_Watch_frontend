import React from 'react';
import useCustomerReview from '../../hooks/useCustomerReview';
import OrderReview from '../OrderReview/OrderReview';
import './Home.css';
import 'antd/dist/antd.css';
import { Image, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
const Home = () => {
    const [review, setReview] = useCustomerReview();


    return (
        <>
            <div className='home-container'>
                <Space align="center">
                    <div className="topSection">

                        <h1 style={{ color: "blue", fontWeight: "bold" }}>
                            Best Smart Watch
                        </h1>
                        <p style={{ fontWeight: "bold" }}>
                            Celebrate all year long with Pride Edition watch and faces
                        </p>

                    </div>
                    <div className="bottomSection">

                        <Image
                            width={400}
                            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                            preview={false}
                        />
                    </div>
                </Space>


            </div>
            <h1 style={{ fontWeight: "bold" }}>
                Customer Review (3)
            </h1>
            <div className="review_container">

                {

                    review.slice(0, 3).map(review => <OrderReview key={review._id} review={review}></OrderReview>)
                }

            </div>
            <Link to="/reviewPage">
                <Button style={{ marginBottom: "20px" }} type="primary">See All Reviews</Button>
            </Link>



        </>



    );
};

export default Home;