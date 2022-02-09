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
        <button onClick={toggleClick}>Menu</button>
        <nav className={className}>
            <Link className='nav-link' to="/home">Home</Link>
            <Link className='nav-link' to="/posts">Posts</Link>
            <Link className='nav-link' to="/users">Users</Link>
            <Link className='nav-link' to="/users">+ New User</Link>
        </nav>
    </div>

}