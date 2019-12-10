import React from 'react';
import Post from './Post';
import Wrapper from '../flexing';
export default function(props){
    console.log(props.posts)
    const hold = props.posts.slice(0).sort((a,b)=>parseInt(a.likes)>parseInt(b.likes)? -1:1).map((post)=><Post key={post.id} comments={post.comments} content={post.content} title={post.title}/>);
    return(
        <Wrapper>
            {hold}
        </Wrapper>
    )
}