import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import bgBlue from '../../../assets/bg.png';
import Qzone1 from '../../../assets/qZone1.png';
import Qzone2 from '../../../assets/qZone2.png';
import Qzone3 from '../../../assets/qZone3.png';

const RightNav = () => {
    return (
        <div className='mt-5'>
            <div className='p-2 w-100'>
                <h4 className='fw-bold fs-4'>Login With</h4>
                <Button className='w-100 my-2' variant='outline-primary' ><FaGoogle /> Login With Google</Button>
                <Button className='w-100' variant='outline-dark' ><FaGithub /> Login With Github</Button>
            </div>
            <div className='p-2 w-100'>
                <h4 className='fw-bold fs-4'>Find Us On</h4>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item> <FaFacebook className='text-primary' /> <span className='ms-1'>Facebook</span></ListGroup.Item>
                        <ListGroup.Item> <FaTwitter className='text-info' /> <span className='ms-1'>Twitter</span></ListGroup.Item>
                        <ListGroup.Item> <FaInstagram className='text-danger' /> <span className='ms-1'>Instagram</span></ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <div className='p-2 mt-3 bg-light rounded'>
                <h4 className='fw-bold fs-4'>Q-Zone</h4>
                <img className=' w-100 mx-auto p-3' src={Qzone1} alt="" />
                <img className=' w-100 mx-auto p-3' src={Qzone2} alt="" />
                <img className=' w-100 mx-auto p-3' src={Qzone3} alt="" />
            </div>
            <div className='mt-3 position-relative'>
                <img  style={{height: '425px'}} src={bgBlue}  className='w-100' alt="" />
                <div className='position-absolute top-0 mt-5' >
                    <h3 className='text-white text-center fs-1 fw-semibold my-2 mt-5'>Create an Amazing Newspaper</h3>
                    <p className='text-white text-center fs-6'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <div className='text-center'>
                    <span className='bg-danger  text-white py-1 px-3 mx-2 '>Learn More</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;