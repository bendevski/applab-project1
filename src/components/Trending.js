import React from 'react';
import Post from './Post';

export default function(props){
    const hold = props.posts.slice(0).sort((a,b)=>parseInt(a.comments.length)>parseInt(b.comments.length)? -1:1).map((post)=><Post key={post.id} comments={post.comments} content={post.content} title={post.title}/>);
    return(
        <div>
            {hold}
        </div>
    )
}