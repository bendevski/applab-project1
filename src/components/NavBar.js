import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding:2%;
    display: flex;
    min-height: 40px;
    justify-content: center;
    justify-content: space-around;
`
const Button = styled.button`
    display: flex;
    align-self:stretch;
    background-color: #FCE2C2;
    flex:1;
    border:0.1em solid black;
    text-align:center;
    text-decoration: none;
    padding: 20px 15px;
    min-width:100px;
`


export default function NavBar(){
    return(
    <Wrapper>
            
                <Link to='/' >
                    <Button>
                        Home
                    </Button>
                </Link>
            

                <Link to='/Trending' >
                    <Button>
                        Trending
                    </Button>
                </Link>

                <Link to='/HallOfFame' >
                    <Button>
                        Hall of Fame
                    </Button>
                </Link>
    </Wrapper>
    )
}