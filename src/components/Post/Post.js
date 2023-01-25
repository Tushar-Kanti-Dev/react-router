import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[postId])
    return (
        <div>
            <h2>....Only Post comPo...</h2>
            <h4>Total Post: {postId}</h4>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;