import React,{useState} from 'react';
import Comment from './Comment';
import LikeButtons from './LikeButton';
import axios from 'axios';
import styled from 'styled-components';
import '../App.css'

const WholeWrapper = styled.div`
    background-color: #6CB2D1; 
    display: flex;
    flex-direction:column;
    flex: 26%;
    justify content: start;
    border-style: solid;
    border-width: 1px;
`

const TitleWrapper = styled.h1`
    text-align: center;
    font-size: 23px;

`

const ContentWrapper = styled.p`
    justify-content: start;
    text-align: left;
`
const LikesWrapper = styled.div`
    box-shadow: 1px 1px 1px;
    display:flex;    
    flex-direction:row;
    justify-content:space-between;
`
const CommentWrapper = styled.div`

`
function Post(props){
    const [comments, setComments] = useState(props.comments.map((comment)=><Comment key={comment.id} content={comment.content}/>));
    const [commentVal, setCommentVal] = useState("")
    const [up, upMe] = useState(props.likes);

    function upper(thing){
        upMe(parseInt(up)+parseInt(thing));
    }

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
        axios.post("/api/comment", {
            post_id:props.id,
            content:commentVal
        }
    ).catch((error)=>console.log(error));
        
        setCommentVal("");
    }
    
    return (
        <WholeWrapper>
            <TitleWrapper>
                {props.title}
            </TitleWrapper>
            <ContentWrapper>
                {props.content}
            </ContentWrapper>
            <LikesWrapper>
                <LikeButtons id={props.id} up={upper}/> 
            Score:{up}
            </LikesWrapper>
            <CommentWrapper>
                {comments}
                <input className='no' type="text" value={commentVal} onSubmit={comment} onChange={typing} onKeyDown={isEnter}/>
            </CommentWrapper>
            
        </WholeWrapper>
    )
}

export default Post;