import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    justify-content: left;
    allign-items:left;
    color:black;
    max-width: 100%;
    background-color: #ff00ff;
    padding: 10px;
    `;

export default function(props){
    return(
    <Wrapper>
        {props.content}
    </Wrapper>
    )
}   