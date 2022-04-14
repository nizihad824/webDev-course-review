import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    
    // load data
    useEffect(() => {
        fetch('./allReviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))


    }, []);
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
                        {/*  <Button onClick={handleReviews} className=''>Show More</Button> */}
                    </Row>
                   
                </div>
        }
    </div>
    );
};

export default Reviews;