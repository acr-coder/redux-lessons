import React, { useState, useEffect } from 'react'


const Users = () => {
    const [users, setKullanici] = useState([]);

    useEffect(() => {
        fetch("/users/")
        .then(res => res.json())
        .then(jsonRes => setKullanici(jsonRes.usersLists))
    },[])
    console.log(users);
    return (
        <div>
            {users.map((user,index) => <li key={index}>{user}</li>)}
        </div>
    )
}

export default Users;