import React from "react";
import { likePost, dislikePost } from "../../../Clients/myFaceClients";
import "./Post.scss";


export function Post({ post }) {
    return <div className="post">
        <h2>{post.message}</h2>
        <img src={post.imageUrl} alt={post.message} />
                {
                post.postedby !== undefined
                ? <p>Posted by {post.postedBy.name} on {post.createdAt}</p>
                : <p>Post created on : {post.createdAt}</p>
                }
        <div className="buttons">
            <button onClick={() => likePost(post.id)}>👍</button>
            <button onClick={() => dislikePost(post.id)}>👎</button>
        </div>
    </div>
}