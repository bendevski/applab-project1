import React from 'react';
import Post from './Post';

export default function (props){
    const posts = props.posts.slice(0).reverse().map((post)=><Post key={post.id} comments={post.comments} content={post.content} title={post.title}/>)
    return(
        <div>
            {posts}    
        </div>
    )
}