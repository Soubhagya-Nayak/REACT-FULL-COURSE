// export const users = [
//     { name: "Soubhagya", age: 20 },
//     { name: "Raj", age: 21 },
//     { name: "Shaym", age: 22 },
//     { name: "Amaresh", age: 21 }
// ]

import { useState } from "react"


export const DerivedState = () => {
    const [users, setUsers] = useState(
        [
            { name: "Soubhagya", age: 25 },
            { name: "Raj", age: 30 },
            { name: "Shaym", age: 35 },
            { name: "Amaresh", age: 15 }
        ]
    );

    console.log(users);
    const totalUsers = users.length;
    const averageUsers = users.reduce((accum, currElem) => accum + currElem.age, 0) / totalUsers;
    
    return (
        <>
            <h1>User List</h1>
            <ul>
                {
                    users.map((currElem, index) => {
                        return (
                            <li key={index}>
                                {currElem.name} - {currElem.age}years old.
                            </li>
                        )
                    })
                }
            </ul>
            <p>Total Users: {totalUsers}</p>
            <p>Average Users: {averageUsers}</p>
        </>
    )
}