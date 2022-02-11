export async function getPosts(pageNumber, pageSize) {
    const url = `http://localhost:3001/posts?${
        pageNumber
            ? `page=${pageNumber}`
            : ""
    }&${
        pageSize
            ? `pageSize=${pageSize}`
            : ""
    }`

    const response = await fetch(url);
    return await response.json();
}

export async function getUsers(pageNumber, pageSize) {
    const url = `http://localhost:3001/users?${
        pageNumber
            ? `page=${pageNumber}`
            : ""
    }&${
        pageSize
            ? `pageSize=${pageSize}`
            : ""
    }`

    const response = await fetch(url);
    return await response.json();
}

export async function createUser(name, username, email, profileImageUrl, coverImageUrl){
    const url = `http://localhost:3001/users/create`
    const requestBody = {
        name,
        username,
        profileImageUrl,
        email,
        coverImageUrl
    }

    const response = await fetch(
        url,
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
                },
            body: JSON.stringify(requestBody)
        }
    );

    if (!response.ok){
        throw new Error('Could not create user');
    }
}