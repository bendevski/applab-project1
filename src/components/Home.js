import React from 'react';
import Post from './Post';
import Wrapper from '../flexing';


export default function (props){
    const posts = props.posts.slice(0).reverse().map((post)=><Post key={post.id} likes={post.likes} comments={post.comments} content={post.content} title={post.title}/>)
    return(
        <Wrapper>

            {posts}    
        </Wrapper>
    )
}