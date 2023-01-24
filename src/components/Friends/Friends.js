import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h2>Wellcome Friends compo.....!!</h2>
            <p><small>Info: Lorem ipsum dolor sit.</small></p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ipsam?</p>
            <h4>Total Friend: {friends.length}</h4>
            {
                friends.map(friend => <Friend 
                key = {friend.id}
                friend = {friend}
                ></Friend>)
            }

        </div>
    );
};

export default Friends;