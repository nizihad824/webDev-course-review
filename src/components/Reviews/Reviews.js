import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

    // load data from custom hooks
    const [reviews, setReviews] = useReviews([]);
    
    // load data
   
    return (
        <div className="d-flex justify-content-center">
        {/* Showing spinner when reviews are loading */}

        {
            reviews.length === 0 ? <div className='m-5 p-5'>
                <Spinner animation="border" variant="secondary" />
            </div> :
                <div className='body'>
                    
                    <div>
                        <h1 className='d-flex justify-content-center py-5 header-text'> All Student's FeedBack</h1>
                    </div>
                    <Row md={4} xs={1} className=" p-3 pt-0 gy-4 w-100 d-flex justify-content-center">
                        {/* Showing offer dynamically */}
                        {
                            reviews?.map(review => <Review
                                key={reviews.id} review={review}>
                            </Review>
                            

                            )
                        }
                       
                    </Row>
                   
                </div>
        }
    </div>
    );
};

export default Reviews;