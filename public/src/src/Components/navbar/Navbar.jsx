import React from "react";
import {Link} from "react-router-dom"
import './NavBar.scss'

export function Navbar (){

    return <nav>
        <h4 className='nav-link logo'>MyFace</h4>
        <Link className='nav-link' to = "/home">Home</Link>
        <Link className='nav-link' to = "/posts">Posts</Link>
        <Link className='nav-link' to = "/users">Users</Link>
    </nav>

}