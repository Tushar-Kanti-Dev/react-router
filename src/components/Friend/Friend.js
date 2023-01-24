import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;
    const navigate = useNavigate();
    const friendDetails =()=>{
        const path = '/friend/'+id;
        navigate(path)
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            {/* use link  */}
            <Link to={'/friend/'+id}>Show Details</Link>

            <button onClick={friendDetails}>{username} ID:{id}</button>
        </div>
    );
};

export default Friend;