import React from 'react';
import { Card, Col} from 'react-bootstrap';
import './Reviews.css'


const Reviews = (props) => {
    const { name, reviews, ratings, img } = props.course;
    return (
        <div className='container-card'>
            <div className='card-style text-white'>
                <div className=' d-flex justify-content-center'>
                <img src={img} alt="" />
                </div>
                <h3 className='name d-flex justify-content-center text-white'>{name}</h3>
                
                <p>{reviews}</p>
            </div>

            {/* <Row xs={1} md={3} className="g-4">
          <Col>
           <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{reviews} </Card.Text>
                </Card.Body>


            </Card>
           </Col>
          </Row> */}


        </div>
    );
};

export default Reviews;