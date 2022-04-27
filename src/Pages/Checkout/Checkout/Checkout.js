import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { detailId } = useParams();
    const [service] = useServiceDetail(detailId);
    const [user] = useAuthState(auth);
    /* const [user, setUser] = useState({
         name: 'Ayesha Rinita',
         email: 'ayesha@gmail.com',
         address: 'Elephant road, dhk.',
         phone: '016577773333'
     })
 
     const handleAddressChange = event => {
         console.log(event.target.value);
         const { address, ...rest } = user;
         const newAddress = event.target.value;
         const newUser = { address: newAddress, ...rest };
         console.log(newUser);
         setUser(newUser);
     }*/

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: detailId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        axios.post('https://secret-woodland-47011.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Thank you for placing order. Happy Shopping!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='mt-4 text-danger'>Please confirm your booking</h1>
            <h2 className='mt-3 fw-bold text-center text-info'>{service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' class type="text" value={user?.displayName} name="name" placeholder='Name' required readOnly />
                <br />
                <input className='w-100 mb-2' class type="email" value={user?.email} name="email" placeholder='Email' required readOnly />
                <br />
                <input className='w-100 mb-2' class type="text" value={service.name} name="service" placeholder='Service' required readOnly />
                <br />
                <input className='w-100 mb-2' class type="text" name="address" placeholder='Address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' class type="text" name="phone" placeholder='Phone' autoComplete='off' required />
                <br />
                <input className='btn btn-danger mt-3 fw-bold' type="submit" value="Confirm Order" />

            </form>

        </div>
    );
};

export default Checkout;