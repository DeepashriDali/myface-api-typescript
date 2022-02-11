import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../../Clients/myFaceClients';
import './CreateUserForm.scss';

export function CreateUserForm(){
    const [user, setUser] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [coverImageUrl, setCoverImage] = useState();
    const [profileImageUrl, setImage] = useState();
    const navigate = useNavigate();

    return <form className="create-user-form" onSubmit={e => {
        e.preventDefault();
        createUser(user, username, email, profileImageUrl, coverImageUrl);
        navigate('/users', {replace: true});
        
    }} action="">
        <label htmlFor="name">Name</label>
        <input 
            type="text"
            id='name'
            name='name'
            onChange={e => setUser(e.target.value)}
            />

        
        <label htmlFor="username">username</label>
        <input 
            type="text" 
            id='username'
            name='username'
            onChange={e => setUsername(e.target.value)}/>

        <label htmlFor="email">email</label>
        <input 
            type="text" 
            id='email'
            name='email'
            onChange={e => setEmail(e.target.value)}/>

        <label htmlFor="profileImage">profile Image</label>
        <input 
            type="text" 
            id='profileImage'
            name='profileImage'
            onChange={e => setImage(e.target.value)}/>

        <label htmlFor="coverImageUrl">coverImageUrl</label>
        <input 
            type="text" 
            id='coverImageUrl'
            name='coverImageUrl'
            onChange={e => setCoverImage(e.target.value)}/>

        <input type="submit" value="Submit"/>
    </form>
}