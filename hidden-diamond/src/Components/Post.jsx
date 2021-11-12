import React from 'react';
import {useParams} from 'react-router-dom';

export default (props) => {
    const { id } = useParams();
    // Get the "id" (our Array index) from React Router.
    // Use the id to get a specific post from the Array.
    const post = props.posts[id];
    return (
        <testimonial>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </testimonial>
    );
};