import React from "react";
import { Link } from "react-router-dom";
import "./User.scss"

export function User({ user }) {
    return <div className="user">
   
    <img className="profilePic" src={user.profileImageUrl} alt={user.name} /> 
    <div className="userInfo">
    <Link to = {`/users/${user.id}`}> <h2>{user.name}</h2> </Link>
    <p className="userName">{user.username}</p>
    <p className="email">{user.email} </p>
    </div>
    </div>
}