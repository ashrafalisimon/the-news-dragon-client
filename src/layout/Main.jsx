import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';
import Leftnav from '../pages/Shared/LeftNav/Leftnav';
import RightNav from '../pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <>
            <Header />
            {/* main section home page */}
            <Container>
                <Row>
                    <Col lg={3}><Leftnav/></Col>
                    <Col lg={6}>All News </Col>
                    <Col lg={3}><RightNav/></Col>
                </Row>
            </Container>
        </>
    );
};

export default Main;