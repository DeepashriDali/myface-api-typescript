import React from "react";
import { Post } from "../post/Post";

export function PostList({ postList, user }) {
    return <ol>
        {postList.map((post, index) => (
            <li key={index}>
                <Post post={post} user = {user} />
            </li>
        ))}
    </ol>
}