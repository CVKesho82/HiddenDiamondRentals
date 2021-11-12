import React from 'react';
import {Route, Link, useRouteMatch } from 'react-router-dom';
import Post from './Post';
    const Posts = [
        {
            title: 'Our go to rental',
            content: 'We always stay with HDR when we visit Atlanta. They have THE BEST locations. The houses are always emmaculate and the add on services are top notch.'
        },
        {
            title: '5 star experience',
            content: 'We had a 5 star stay from booking to checking out. The property manager was so responsive. We will visit again.'
        },
        {
            title: 'Everything you need',
            content: 'They have a towel warmer in the bathroom. I mean talk about attention to detail. We will be back!'
        },
        {
            title: 'Tried out something new',
            content: 'The house in Buckhead is our favorite, but it was booked. We stayed in East Atlanta instead. The house was nice, but we prefer Buckhead.'
        }
    ];
        
    export default (props) => {
        const {path,url} = useRouteMatch();
        return (
            <>
                <h1>Here is what our guests have to say about us.</h1>
                <h3>Select the testimonial you would like to read.</h3>
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
            
        </Route>
        <Route path = {`${url}/:id`}>
            <Post posts = {Posts}/>
        </Route>
        </>
        );
    };
