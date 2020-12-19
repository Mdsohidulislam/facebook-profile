import React from 'react';
import './Cart.css'

const Cart = (props) => { 
    const people=props.users.length;
    let user=props.users;
    let total=0; 
    for(let i=0; i<user.length; i++){
        let userr=user[i];
        let salary=Number(userr.salary)
        total=total+salary;
    }

    return (
        <div className='cartt'> 
            <h5>Total Hire ({people}) people</h5>
            <h5>total: {total}</h5>
        </div>
    );
};

export default Cart;