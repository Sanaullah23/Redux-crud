import React, { useState } from 'react'
import './update.css';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { createUser } from '../reducers/userReducer';
const CreateUser = () => {
    const dispatch = useDispatch()
    const [id, setId]= useState(null);
    const [name, setName]= useState('');
    const [email, setEmail]= useState('')
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(createUser({id, name, email}))
        navigate("/");
    }
  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
      <h1>Create User</h1>
      <Link to='/'>Home</Link>
      <div className='inputs-container'>
        <input type="number"  value={id} placeholder='Enter user id'
        onChange={(e)=>setId(e.target.value)}/>
        <input type="text" value={name} placeholder='Enter user name'
        onChange={(e)=>setName(e.target.value)} />
        <input type="text"  value={email} placeholder='Enter user email' 
        onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <button type='submit'>Update</button>
    </form>
  </>
  )
}

export default CreateUser