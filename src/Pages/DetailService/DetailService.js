import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DetailService = () => {
  const { detailId } = useParams();
  return (
    <div>
      <h1>Welcome to Details: {detailId}</h1>
      <div className='text-center'>
        <Link to="/checkout">
          <button className='btn btn-danger'>Proceed to Checkout</button>
        </Link>
      </div>

    </div>
  );
};

export default DetailService;