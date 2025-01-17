import React, { useEffect, useState } from "react";
import { User } from "../user/User";
import { Post } from "../../posts/post/Post";
import { PostList } from "../../posts/postList/PostList"
import { useParams } from "react-router-dom";
import "./UserDetailsPage.scss"

export function UserDetailsPage() {
    const params = useParams();
    const [user, setUser] = useState();

    useEffect(
        function() {
            fetch(`http://localhost:3001/users/${params.userId}`)
                .then(response => response.json())
                .then(userJson => setUser(userJson));
        },
        [params.userId]
    );
    
    let userPageContent;

    if(user !== undefined){
    userPageContent = <>
    <img className="coverPic" src={user.coverImageUrl} alt={user.name} />  
    <User profileClass="userDetailProfile" user = {user}/>
    <h3> {user.name}'s posts </h3>
    <PostList postList = {user.posts} user = {user}/> 
    
    <h3> {user.name}'s Likes </h3>
    <PostList postList={user.likes}/>
    <h3> {user.name}'s Dislikes </h3>
    <PostList postList={user.dislikes}/>
    </>
    } else {
    userPageContent = <p>Loading user</p>
    }

    return <main>
        <h1>MyFace - User Page</h1>
     
        {userPageContent } 
    </main>
}