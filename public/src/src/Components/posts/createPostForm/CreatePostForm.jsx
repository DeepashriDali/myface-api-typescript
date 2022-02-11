import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../Clients/myFaceClients";


export function CreatePostForm (){

    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();
    
    return <form className="create-post-page" onSubmit={e => {
            e.preventDefault();
            createPost(message, imageUrl);
            navigate("/posts", {replace: true});
            }}>


            <label htmlFor="message">Message:</label>
            <input id= "message" type="text" name = "message" onChange={e=> setMessage(e.target.value)}/>
            <label htmlFor="imageUrl">Image Url:</label>
            <input id= "imageUrl" type="text" name = "imageUrl" onChange={e=> setImageUrl(e.target.value)}/>
            <input className='submit' type= "submit" value= "Submit"/>
            </form>


}