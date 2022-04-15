import React from 'react';
import { useParams } from 'react-router-dom';

const DetailService = () => {
    const {detailId}= useParams();
    return (
        <div>
          <h1>Welcome to Details: {detailId}</h1>  
        </div>
    );
};

export default DetailService;