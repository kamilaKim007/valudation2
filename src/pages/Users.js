import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../components/User'
import * as userActions from '../store/action/user'

const Users = () => {
    const users = useSelector((state) => { return state.users})
    const dispatch = useDispatch()
    const removeUser = () => {dispatch(userActions.removeUser())}
  return (
    <div>
        {users.map((user) => {
            return <User name={user.name} email={user.email} password={user.password}/>
        })}
        <button onClick={removeUser}>remove users</button>
    </div>
  )
}

export default Users