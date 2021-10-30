import React from 'react';
import {Route, Link, useRouteMatch } from 'react-router-dom';
import Post from './Post';
    const Posts = [
        {
            title: 'Blog post #1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'Blog post #2',
            content: 'Maecenas consequat sagittis orci quis accumsan.'
        },
        {
            title: 'Blog post #3',
            content: 'Curabitur fringilla, risus dignissim egestas elementum, leo sapien pretium est, quis imperdiet eros orci et ligula.'
        }
    ];
        
    export default (props) => {
        const {path,url} = useRouteMatch();
        return (
            <>
                <h1>Here is what our guests have to say about us</h1>
                <nav>
                    {
                        Posts.map((post,index) => (
                        <>
                            <Link to={`${url}/${index}`}>
                                {post.title}
                            </Link>
                        <br/>
            </>
                        ))
                    }
        </nav>
        <Route exact path = {path}>
            <h2>Select the testimonial you would like to read.</h2>
        </Route>
        <Route path = {`${url}/:id`}>
            <Post posts = {Posts}/>
        </Route>
        </>
        );
    };
