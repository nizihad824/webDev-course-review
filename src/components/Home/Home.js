import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';

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
                    <div>
                        <Row className="p-5 pt-0 text-center w-100 mt-5">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h1 className="text-secondary">Learn Web DEvelopement with Programming Hero</h1>
                                    <p>Anytime and anywhere: Learn German online and with our proven quality. No matter whether you are a beginner or an advanced .</p>
                                </div>

                                <img className="img-fluid mb-3" src="https://media.istockphoto.com/photos/developing-programming-and-coding-technologies-with-website-design-in-picture-id1364358321?b=1&k=20&m=1364358321&s=170667a&w=0&h=PpEXtpe9YpTdAORO2BgW1cKe6I2ZrNr9Sx_lcsPX_XI=" alt="" />

                            </div>
                        </Row>
                        <Row md={2} xs={1} className="p-5 pt-0 gy-4 w-100">
                            {/* Showing offer dynamically */}
                            {
                                reviews?.map(offer => <Reviews
                                    key={offer.id} course={offer}>
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