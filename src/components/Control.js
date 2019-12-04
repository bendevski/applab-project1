import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HoF from './HoF';
import Home from './Home';
import Trending from './Trending';
import NavBar from './NavBar';
import MakePost from './MakePost'
import axios from 'axios';
export default function Control(){
    
    const [hasError, setErrors] = useState(null);
    const [posts, setPosts] = useState();
    function newPost(thing){
        axios.post("http://18.163.121.55/api/posts", thing)
            .catch((error)=>console.log(error));
        console.log(thing);
        setPosts({res:[...posts.res,thing]});
    }
    async function FetchData(){
        const res = await fetch("http://18.163.121.55/api/posts");
    res.json()
    .then(res=>setPosts({res}))
    .catch(err=>setErrors(err))
    }
    useEffect(()=> {
        if (posts){
            return;
        }
        FetchData();
        }
    ,);
    if (hasError){
        console.log(hasError);
    }
    if (!posts){
        return(false);
    }
    return(
        <div>
        
        <Router>
            
        <NavBar/>
        <MakePost sendUp={newPost}/>
            <Route exact path='/'>
                <Home posts={posts.res}/>
            </Route>
            <Route exact path='/Trending'>
                <Trending posts={posts.res}/>
            </Route>
            <Route exact path='/HallOfFame'>
                <HoF posts={posts.res}/>
            </Route>
        </Router>
        </div>
    )
}