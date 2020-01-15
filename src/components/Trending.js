import React from 'react';
import Post from './Post';
import Wrapper from '../flexing';

export default function(props){
    const hold = props.posts.slice(0).sort((a,b)=>parseInt(a.comments.length)>parseInt(b.comments.length)? -1:1).map((post)=><Post key={post.id} id={post.id} likes={post.likes} comments={post.comments} content={post.content} title={post.title}/>);
    return(
        <Wrapper>
            {hold}
        </Wrapper>
    )
}