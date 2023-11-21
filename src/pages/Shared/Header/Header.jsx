import moment from 'moment';
import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../../../assets/logo.png';
import HeaderNav from './HeaderNav';
import Marque from './Marque';

const Header = () => {
    return (
        <Container>
            {/* top header */}
            <div className='text-center mt-5'>
                <img src={logo} alt="" />
                <p className='text-secondary mb-1'>Journalism Without Fear or Favour</p>
                <p className='text-secondary mb-1'>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            {/* marque */}
            <Marque/>
            {/* navbar */}
            <HeaderNav/>
        </Container>
    );
};

export default Header;