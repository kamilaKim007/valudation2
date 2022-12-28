import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as userActions from '../store/action/user'

const Home = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })


  const inputHandler= (event) => {
    const {name, value} = event.target;
    setUser((prevItems) => {
      return {
        ...prevItems,
        [name]: value,
      }
    })
  }


  const dispatch = useDispatch()
  const addUser= ()=> {
    dispatch(userActions.addUser(user))
    setUser({
      name: "",
      email: "",
      password: ""
      
    })
  }


  return (
    <div>
        <h1>Add User</h1>
        <div className='valudation'
        style={{"display": 'flex',
        "flex-direction": 'column'}}>
        <input name='name' 
        placeholder='enter name' 
        onChange={inputHandler} 
        value={user.name}
        style={{
          "border-radius": '8px',
          border: '1.5px solid grey',
          width: '250px',
          height: '30px',
          "margin-top": '15px'
        }}
        />
        <input name='email'
        type='email' 
        placeholder='enter your email...' 
        onChange={inputHandler} 
        value={user.email}
        style={{
          "border-radius": '8px ',
          border: '1.5px solid grey',
          width: '250px',
          height: '30px',
          "margin-top": '15px'
        }}
        /><input name='password' 
        type='password' 
        placeholder='enter password' 
        onChange={inputHandler} 
        value={user.password}
        style={{
          "border-radius": '8px ',
          border: '1.5px solid grey',
          width: '250px',
          height: '30px',
          "margin-top": '15px'
        }}
        />
        <button type='submit' 
        onClick={addUser} 
        style={{
          background: 'purple', 
          color: 'white',
          "border-radius": '6px',
          width: '160px',
          height: '40px',
          border: '1.5px solid purple',
          "margin-top": '15px' }}>
            Add user
        </button>
        <Link to='./users' 
        style={{
          "text-decoration": 'none', 
          cursor: 'pointer',
          "margin-top": '15px'}}>
            User List
        </Link>
        </div>
    </div>
  )
}

export default Home