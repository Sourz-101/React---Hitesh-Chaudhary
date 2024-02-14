import React, { useContext } from 'react'
import UserContext from '../context/userContext';

const Profile = () => {

  const {user} = useContext(UserContext);
  
  if(!user) return <div>Login First</div>

  return <div>Welcome {user.username} <br/> Password: {user.password}</div>

}

export default Profile;