import React,{useState} from 'react';
import axios from 'axios';

export default function(props){
    
    const [clickedPlus,setPlus] = useState(false);
    const [clickedMinus, setMinus] = useState(false);
    
    function click(e){
        let clicked = e.target.name==='+'? clickedPlus:clickedMinus;
        
        if (clicked) return;
        
        if (e.target.name==='+') setPlus(true);
        else setMinus(true);
        
        const url = "http://18.163.121.55/api/like/" + props.id;
        axios.put(url,{
            type:e.target.name
        }
        )
    }

    return(
        <div>
            <button className="like" name='+' type="button" onClick={click}></button>
            <button className="dislike" name='-' type="button" onClick={click}></button>    
        </div>
    )
}