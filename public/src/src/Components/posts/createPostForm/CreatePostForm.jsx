import React, { useState } from "react";
import { createPost } from "../../../Clients/myFaceClients";


export function CreatePostForm (){

    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    
    return <form onSubmit={e => {
            e.preventDefault();
            createPost(message, imageUrl);
            }}>


            <label htmlFor="message">Message:</label>
            <input id= "message" type="text" name = "message" onChange={e=> setMessage(e.target.value)}/>
            <label htmlFor="imageUrl">Image Url:</label>
            <input id= "imageUrl" type="text" name = "imageUrl" onChange={e=> setImageUrl(e.target.value)}/>
            <input type= "submit" value= "Submit"/>
            </form>


}