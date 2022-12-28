import React from 'react'

const User = ({name,email, password }) => {
  return (
    <ul>
        <li>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{password}</p>
        </li>
    </ul>
    )
}

export default User