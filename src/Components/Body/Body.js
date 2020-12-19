import React from 'react';
import './Body.css'
import {useState} from 'react'
import User from '../Users/Users';
import Cart from '../Cart/Cart'
import img1 from '../../images/profile-img (1).jpg';
import img2 from '../../images/profile-img (2).jpg';
import img3 from '../../images/profile-img (3).jpg';
import img4 from '../../images/profile-img (4).jpg';
import img5 from '../../images/profile-img (5).jpg';
import img6 from '../../images/profile-img (6).jpg';
import img7 from '../../images/profile-img (7).jpg';
import img8 from '../../images/profile-img (8).jpg';
import img9 from '../../images/profile-img (9).jpg';
import img10 from '../../images/profile-img (10).jpg';
import img11 from '../../images/profile-img (11).jpg';
import img12 from '../../images/profile-img (12).jpg';
import img13 from '../../images/profile-img (13).jpg';
import img14 from '../../images/profile-img (14).jpg';
import img15 from '../../images/profile-img (15).jpg';

const Body = () => {
    const Users=[
        {name:'Md Sakil Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/6D0PDJy',id:'1',imgg:img1},
        {name:'Md Mominul Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/PrztnS0',id:'2',imgg:img2},
        {name:'Md Hasan Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/bbnrCdZ',id:'3',imgg:img3},
        {name:'Md Priya Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/SJRd5zD',id:'4',imgg:img4},
        {name:'Md Nijhum Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/28LTJv0',id:'5',imgg:img5},
        {name:'Md Rakhi Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/94fk2NJ',id:'6',imgg:img6},
        {name:'Md Sumpa Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/TrZfZNh',id:'7',imgg:img7},
        {name:'Md Tamanna Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/qsX6H5s',id:'8',imgg:img8},
        {name:'Md Pavel Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/vZCwM1g',id:'9',imgg:img9},
        {name:'Md Mehedi Hasan', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/YX2YVSR',id:'10',imgg:img10},
        {name:'Md Hafizul Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/MMH3Bh3',id:'11',imgg:img11},
        {name:'Md Parvin Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/9v7dvwq',id:'12',imgg:img12},
        {name:'Md Noyon Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/bQyjKXW',id:'13',imgg:img13},
        {name:'Md Sumaiya Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/mvFNVCb',id:'14',imgg:img14},
        {name:'Md Sanjida Islam', email:'mddsohidulislam@gmail.com',occupation:'Full Stack web developer',phone:'01303501469',address:'Rajshahi-Bangladesh',salary:'3000', img:'https://ibb.co/s2p5WP3',id:'15',imgg:img15}
    ];
    const [user,setUsers]=useState([]);
    const handleClick=(para)=>{ 
        const newArr=[...user,para];
        setUsers(newArr) 
    }; 

        return (
        <div className='body'>
            <div className="users-container">
                {
                     Users.map(res=><User users={res} key={res.id} click={handleClick} name={res.name} email={res.email} occupation={res.occupation} phone={res.phone} img={res.imgg} address={res.address} salary={res.salary}></User>)
                }
            </div>
            <div className="cart-container">
                <Cart users={user}></Cart>
            </div>
        </div>
    );
};

export default Body;