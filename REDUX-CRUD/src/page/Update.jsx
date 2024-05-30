import React from 'react'
import './update.css';
import {Link} from 'react-router-dom'
const Update = () => {
  return (
    <>
      <form className='form'>
        <h1>Update User</h1>
        <Link to='/'>Home</Link>
        <div className='inputs-container'>
          <input type="number"  placeholder='Enter user id'/>
          <input type="text" placeholder='Enter user name' />
          <input type="text"  placeholder='Enter user email' />
        </div>
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default Update