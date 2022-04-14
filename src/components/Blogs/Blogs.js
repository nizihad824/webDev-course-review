import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='text-center p-5'>
            <div>
                <Row>
                    <h1>Welcome to Question and Answer Blog</h1>
                    <ListGroup className='list-group'>
                       <ListGroup.Item>
                           <div>
                           <h3>What is context API?</h3>
                        <p>The Context API is about to share data with multiple components, without having props drill to pass data.manually.</p>
                           </div>
                        </ListGroup.Item>
                       <ListGroup.Item>
                            <h3>When to use context Api ?</h3>
                            <p>Context Api is used when data needs to be accesable at many components in different nesting levels. </p>

                        <p>.</p>
                        </ListGroup.Item>
                       <ListGroup.Item>
                            <h3>What is semantic tags?</h3>
                        <p>A semantic tag describes about the contents and  it's meaning to the browser and developer</p>
                        </ListGroup.Item>

                    </ListGroup>

                </Row>
            </div>
           
        </div>
    );
};

export default Blogs;