import React from 'react';
import { Card } from 'react-bootstrap';
import { FaCalendar } from 'react-icons/fa6';
import blogsImg1 from '../../../assets/1.png';
import blogsImg2 from '../../../assets/2.png';
import blogsImg3 from '../../../assets/3.png';

const Blogs = () => {
    const blogs = [{
        id: 1,
        image: blogsImg1,
        title: 'Bayern Slams Authorities Over Flight Delay to Club World Cup',
        category: 'Sports',
        date: 'Jan 4, 2022'
    }, {
        id: 2,
        image: blogsImg2,
        title: 'Bayern Slams Authorities Over Flight Delay to Club World Cup',
        category: 'Sports',
        date: 'Jan 4, 2022'
    }, {
        id: 3,
        image: blogsImg3,
        title: 'Bayern Slams Authorities Over Flight Delay to Club World Cup',
        category: 'Sports',
        date: 'Jan 4, 2022'
    },
    ]


    return (
        <div>
            {
                blogs.map(blog =>
                    <Card className='my-2' key={blog.id}>
                        <Card.Img variant="top" src={blog.image} />
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text className='d-flex align-items-center'>
                                <span >{blog.category}</span>
                                <span className='ms-5 d-flex align-items-center'> <FaCalendar /> <span className='mx-2'> {blog.date}</span> </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }



        </div>
    );
};

export default Blogs;