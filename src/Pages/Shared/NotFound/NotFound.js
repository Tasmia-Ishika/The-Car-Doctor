import React from 'react';
import sleeping from '../../../images/sleeping.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger text-center'>404 Error!! Page not Found</h2>
         <img className='w-100' src={sleeping} alt="" />   
        </div>
    );
};

export default NotFound;