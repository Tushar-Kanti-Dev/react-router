import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        // console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data =>setFriend(data))
    },[]);
    console.log(friend)
    return (
        <div>
            <h3>Friend Details</h3>
            <h4>Friend-Id: {friendId}</h4>
            
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h4>Phone: {friend.phone}</h4>
            <h5>Company Name: {friend.company?.name}</h5>
            <address>City:  {friend.address?.city}</address>

        </div>
    );
};

export default FriendDetail;