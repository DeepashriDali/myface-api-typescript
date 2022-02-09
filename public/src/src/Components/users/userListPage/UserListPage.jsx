import React, { useEffect, useState } from "react";
import { UserList } from "../userList/UserList";
import { useParams } from "react-router-dom";

export function UserListPage() {
    const param = useParams();
    const [userList, setUserList] = useState();

    useEffect(
        function() {
            fetch(`http://localhost:3001/users?page=${param.pageNumber}`)
                .then(response => response.json())
                .then(userListJson => setUserList(userListJson.results));
           
        },
        [param.userList]
    );


 

    return <main>
        <h1>MyFace - Users</h1>
        {
            userList !== undefined
                ? <UserList userList={userList} />
                : <p>Loading users...</p>
        }
        
    </main>
}