import React from "react";
import { useLinkClickHandler } from "react-router-dom";
import { Link } from "react-router-dom";

export function User({ user }) {
    return <div>
    <Link to = {`/users/${user.id}`}> <h2>{user.username}</h2> </Link>
    <Link to = {`/users/${user.id}`}> <img src={user.profileImageUrl} alt={user.name} /> </Link>


       
        <p>Number of posts: {user.posts.length} </p>
        
    </div>
}