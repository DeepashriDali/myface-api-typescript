import React from "react";
import { Link } from "react-router-dom";
import "./User.scss";

export function User({ user }) {
    return <div className="user">
   
    <Link to = {`/users/${user.id}`}> <img className="profilePic" src={user.profileImageUrl} alt={user.name} /> </Link>
    <Link to = {`/users/${user.id}`}> <h2>{user.name}</h2> </Link>
    <p>{user.username}-{user.email} </p>
   
    </div>
}