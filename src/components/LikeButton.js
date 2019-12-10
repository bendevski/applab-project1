import React,{useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { updateExpression } from '@babel/types';

const Wrapper = styled.div`
    background-color:red;
`;

const Button = styled.button`

`;
export default function(props){
    
    const [clickedPlus,setPlus] = useState(false);
    const [clickedMinus, setMinus] = useState(false);
    
    function click(e){
        let clicked = e.target.name==='+'? clickedPlus:clickedMinus;
        
        if (clicked) return;
        
        if (e.target.name==='+') {setPlus(true); setMinus(false);}
        else {setMinus(true); setPlus(false);}
        
        const url = "http://18.163.121.55/api/like/" + props.id;
        axios.put(url,{
            type:e.target.name
        }
        )
        if(e.target.name==="+") props.up(1)
        else props.up(-1)
    }

    return(
        <div>
            <button className="like" name='+' type="button" onClick={click}>Yup</button>
            <button className="dislike" name='-' type="button" onClick={click}>Nope</button>    
        </div>
    )
}