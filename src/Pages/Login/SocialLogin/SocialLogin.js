import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-3 px-3 fw-bold'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
                <button className='btn btn-danger w-50'>Google Sign Up</button>
            </div>
        </div>
    );
};

export default SocialLogin;