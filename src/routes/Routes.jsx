import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';

const route = createBrowserRouter([
    {
        path:'/',
        element: <Main/>
    }
])


export default route;