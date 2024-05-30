import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../reducers/userReducer';

const Update = () => {
  const { id } = useParams();
  const users = useSelector(state => state.users);
  const user = users.find(user => user.id === id);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    id: '',
    name: '',
    email: ''
  });

  useEffect(() => {
    if (user) {
      setUserDetails({
        id: user.id,
        name: user.name,
        email: user.email
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(userDetails));
    navigate('/');
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Update User</h1>
        <Link to="/">Home</Link>
        <div className="inputs-container">
          <input
            type="number"
            name="id"
            value={userDetails.id}
            placeholder="Enter user id"
            onChange={handleChange}
           
          />
          <input
            type="text"
            name="name"
            value={userDetails.name}
            placeholder="Enter user name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={userDetails.email}
            placeholder="Enter user email"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Update;
