import React,{useState} from 'react';
import Comment from './Comment';
import LikeButtons from './LikeButton';

import axios from 'axios';

function Post(props){
    const [comments, setComments] = useState(props.comments.map((comment)=><Comment key={comment.id} content={comment}/>));
    const [commentVal, setCommentVal] = useState("")

    function typing(e){
        if (e.key==='Enter'){
            comment()
        }
        setCommentVal(e.target.value);
        
    }
    function isEnter(e){
        if (e.key==="Enter") comment();
    }

    function comment(){
        const newComment = <Comment key={comments.length} content={commentVal}/>;
        setComments([...comments, newComment]);
        //post
        axios.post("http://18.163.121.55/api/comments", {
            post_id:props.id,
            content:commentVal
        }
    ).catch((error)=>console.log(error));
        
        setCommentVal("");
    }
    
    return (
        <div className='post'>
            <h1 className='postTitle'>{props.title}</h1>
            <p className='postContent'>{props.content}</p>
            <LikeButtons id={props.id}/>
            <div className='commentSection'>
                {comments}
                <input type="text" value={commentVal} onSubmit={comment} onChange={typing} onKeyDown={isEnter}/>
            </div>
        </div>
    )
}

export default Post;