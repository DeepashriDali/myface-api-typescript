import React from "react";
import { Link } from "react-router-dom";

export function User({ user }) {
    return <div>
    <img src={user.coverImageUrl} alt={user.name} /> 
    <Link to = {`/users/${user.id}`}> <img src={user.profileImageUrl} alt={user.name} /> </Link>
    <Link to = {`/users/${user.id}`}> <h2>{user.name}</h2> </Link>
  
    <p>{user.username}-{user.email} </p>
    <p>Number of posts: {user.posts.length} </p>
    </div>
}