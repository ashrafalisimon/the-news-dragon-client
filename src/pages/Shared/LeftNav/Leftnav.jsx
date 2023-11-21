import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';

const Leftnav = () => {
    const [categories , setCategories] =useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error.message))
    },[])

    return (
        <div className='mt-5 bg-transparent fs-5 '>
             <div className='p-2 w-100'>
                <h4 className='fw-bold fs-4'>All Caterogy {categories.length}</h4>
                {
                  categories.map(category => <NavLink 
                  key={category.id} 
                  to={`category/${category.id}`}
                  className={({ isActive}) =>
                   isActive ? "bg-light w-full ps-4  py-2 text-dark text-decoration-none d-block fs-5 " : "w-full ps-4  py-2 text-secondary text-decoration-none d-block bg-transparent fs-5"
                }
                  >
                    {category.name} 
                  </NavLink>)
                }
            </div>
            <div>
                <Blogs></Blogs>
            </div>
        </div>
    );
};

export default Leftnav;