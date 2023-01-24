import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const params = useParams()
    return (
        <div>
            <h3>Friend Details</h3>
            <h4>Friend-Id: {params.friendid}</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>

        </div>
    );
};

export default FriendDetail;