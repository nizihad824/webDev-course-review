import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

import './Home.css'

const Home = () => {
    /* load data from  custom hooks */
    const [reviewsA, setReviewsA] = useReviews([]);
    const [reviews, setReviews] = useState([]);
    const navigate =useNavigate();
    
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))


    }, []);
    // handle button
    const handleReviews =()=>{
    navigate('/reviews')
    }
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
                        {reviews.length===2 ? <>
                        
                            <Row md={4} xs={1} className=" p-3 pt-0 gy-4 w-100 d-flex justify-content-center">
                            {/* Showing offer dynamically */}
                            {
                                reviews?.map(review => <Review
                                    key={review.id} review={review}>
                                   
                                    
                                    
                                </Review>
                                

                                )
                            }
                             <Button onClick={handleReviews} className=''>Show More</Button>
                        </Row>


                        </> :
                        <Row md={4} xs={1} className=" p-3 pt-0 gy-4 w-100 d-flex justify-content-center">
                            {/* Showing offer dynamically */}
                            {
                                reviewsA?.map(review => <Review
                                    key={review.id} review={review}>
                                   
                                    
                                    
                                </Review>
                                

                                )
                            }
                             <Button onClick={handleReviews} className=''>Show More</Button>
                        </Row>
}
                       
                    </div>
            }
        </div>
    );
};

export default Home;