import React, { useEffect, useState } from "react";
import { User } from "../user/User";
import { PostList } from "../../posts/postList/PostList"
import { useParams } from "react-router-dom";

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
    <User user = {user}/>
    <h2> {user.name}'s posts </h2>
    <PostList postList = {user.posts} user = {user}/> 
    </>
    } else {
    userPageContent = <p>Loading user</p>
    }

    return <main>
        <h1>MyFace - User Page</h1>
        {userPageContent } 
    </main>
}