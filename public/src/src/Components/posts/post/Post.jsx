import React from "react";
import { Link } from "react-router-dom";
export function Post({ post}) {
    return <div>
        <h2>{post.message}</h2>
        <img src={post.imageUrl} alt={post.message} />
   
        <p>Post created on {post.createdAt}</p>
        {/* <Link to = {`/users/${post.userId}`}><p>Posted by {user.name}  on {post.createdAt}  </p>   */}
  
      
    </div>
}