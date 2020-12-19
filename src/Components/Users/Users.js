import React from 'react';
import './Users.css'
import img from '../../images/profile-img (12).jpg'

const Users = (props) => { 
    return (
        <div className='cart'>
            <img className='img' src={props.img} alt=""/>
            <h5>{props.name}</h5> 
            <h5>{props.occupation}</h5>
            <hr/>
            <h5>{props.email}</h5>
            <h5>+88{props.phone}</h5>
            <h5>{props.address}</h5>
            <h5>Salary: ${props.salary} (moth)</h5> 
            <button onClick={()=>{props.click(props.users)}}>Haire Me</button>
        </div>
    );
};

export default Users;