import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const DetailService = () => {
  const { detailId } = useParams();
  const [service] = useServiceDetail(detailId);

  return (
    <div>
      <h1 className='mt-4 text-center text-danger'>Your Cart</h1>
      <div className='mt-5 text-center'>
        <img src={service.img} alt="" />
      <h2 className='fw-bold mt-3'>{service.name}</h2>
      <h3 className='fw-bold'>${service.price}</h3>
      <p className='m-2 p-3'>{service.description}</p>
      </div>
      <div className='text-center'>
        <Link to={`/checkout/${detailId}`}>
          <button className='btn btn-danger'>Proceed to Checkout</button>
        </Link>
      </div>

    </div>
  );
};

export default DetailService;