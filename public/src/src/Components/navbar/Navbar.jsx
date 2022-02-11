import React, { useState } from "react";
import {Link} from "react-router-dom"
import './NavBar.scss'

export function Navbar (){
const [clicked, setClick] = useState(false);

function toggleClick(){
    setClick(!clicked)
}

let className = clicked ? 'side-nav clicked' : 'side-nav'


    return <div className="head">
        <h4 className='nav-link logo'>MyFace</h4>
        <button onClick={toggleClick}>☰</button>
        <nav className={className}>
            <Link className='nav-link' to="/home">Home</Link>
            <Link className='nav-link' to="/posts">Posts</Link>
            <Link className='nav-link' to="/users">Users</Link>
            <Link className='nav-link' to="/users/create">+ New User</Link>
            <Link className='nav-link' to="/posts/create">+ New Post</Link>
        </nav>
    </div>

}