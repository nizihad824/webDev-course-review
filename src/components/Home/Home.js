import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [])
    return (
        <div className="d-flex justify-content-center">
            {/* Showing spinner when reviews are loading */}

            {
                reviews.length === 0 ? <div className='m-5 p-5'>
                    <Spinner animation="border" variant="secondary" />
                </div> :
                    <div className='body'>
                        <Row className="p-5 pt-0 text-center w-100 mt-5">
                            <div className="d-flex justify-content-between">
                                <div className='text-white'>
                                    <h1 className="text-white header-text">Learn Web Developement with P<span className='orange'>Hero</span></h1>
                                    <p>Anytime and anywhere: Learn Wev-Dev online and with our proven quality. <br /> No matter whether you are a beginner or an advanced .</p>
                                    <Button className='fw-500'>Explore Us</Button>
                                </div>

                                <img className="img-fluid header-img ms-3  mb-3" src="https://t3.ftcdn.net/jpg/02/11/09/58/240_F_211095871_r74aavHAmiLk8xeCuL3SBfnOivgsj0ZQ.jpg" alt="" />

                            </div>
                        </Row>
                        <div>
                            <h1 className='d-flex justify-content-center py-5 header-text'>Student's FeedBack</h1>
                        </div>
                        <Row md={4} xs={1} className="m-5 p-5 pt-0 gy-4 w-100">
                            {/* Showing offer dynamically */}
                            {
                                reviews?.map(review => <Reviews
                                    key={reviews.id} course={review}>
                                    {/* <button onClick={handleOffer} className="btn btn-outline-secondary">View Offer</button> */}
                                </Reviews>

                                )
                            }
                        </Row>
                    </div>
            }
        </div>
    );
};

export default Home;