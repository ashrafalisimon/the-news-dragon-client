import React from 'react';
import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className='bg-light d-flex py-2 mt-2'>
            <span className='bg-danger text-white py-1 px-3 mx-2 '>Latest</span>
            <Marquee>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as it haappende
            </Marquee>
        </div>
    );
};

export default Marque;