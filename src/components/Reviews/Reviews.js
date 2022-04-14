import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Reviews = (props) => {
    const { name, reviews, ratings, img } = props.course;
    return (
        <div>
            <Col>
            <Card className='h-100'>
            <Card.Img variant="top" src={img} />
            
        

            </Card>
            </Col>
        </div>
    );
};

export default Reviews;