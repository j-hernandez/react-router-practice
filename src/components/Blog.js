import React from 'react';

import {
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';

import Post from './Post';

const blogPosts = [
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
    // Now we have some room to deal with business logic

    const { url, path } = useRouteMatch();

    console.log(useRouteMatch());

    return (
        <>
            <h1>Hello World from my blog</h1>
        
        <nav>
            {
                blogPosts.map((post, index) => (
                    <>
                        <Link to={`${url}/${index}`}>
                            {post.title}
                        </Link>
                    </>
                ))
            }
        </nav>
        <Route exact path={path}>
            <h2>Click on a blog post</h2>
        </Route>
        <Route path={`${url}/:id`}>
           <Post posts={blogPosts} /> 
        </Route>
        </>
    )
}