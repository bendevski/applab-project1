import React,{useState} from 'react';
import styled from 'styled-components';
import '../App.css'
const Wrapper = styled.div`
    display: flex;
    position:center;
    flex-direction:column;
    align-items:center;
    width:40%;
`
export default function(props){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")

    function input(e){
        if(e.target.name==='content') setContent(e.target.value)
        else setTitle(e.target.value);
        console.log(title)
    }
    function enter(e){
        if (e.key==="Enter") {
            console.log(title)
            if (title.length && content.length){
                props.sendUp({content:content, title:title,comments:[],likes:0 });
                setTitle("");
                setContent("");
            }
        }

    }
    return(
        <Wrapper>
            <h2>What's your problem?</h2>
            <h3>Problem</h3>
            <input  type='text' name="title" value={title} onChange={input} onKeyDown={enter}/>
            <h3>Description</h3>
            <input type='text' name="content" value={content} onChange={input} onKeyDown={enter}/>
        </Wrapper>
    )
}