import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;
    const navigate = useNavigate();
    const friendDetails =()=>{
        const path = `/friend/${id}`;
        navigate(path)
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <button onClick={friendDetails}>{username} ID:{id}</button>
        </div>
    );
};

export default Friend;