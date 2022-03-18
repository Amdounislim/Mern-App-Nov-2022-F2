import React, { useEffect } from 'react'
import './App.css';
import { Button } from "react-bootstrap"
import { Routes, Route, Link } from 'react-router-dom';
import AddUser from './Components/AddUser';
import UserCard from './Components/UserCard';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, toggleFalse } from './JS/actions/actionUser';

function App() {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const getAllUsers = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="App">
      <Link to="/Users_List">
        <Button variant="outline-primary button">Users List</Button>
      </Link>
      <Link to="/Add_user" >
        <Button variant="primary button" onClick={()=>dispatch(toggleFalse())}>Add User</Button>
      </Link>

      <Routes>
        <Route path="/Users_List" element={<div className="contact-list">
          {users.map(el => <UserCard user={el} key={el._id} />)}
        </div>} />
        <Route path="/Add_user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
