import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {

    const {userid} = useParams();

  return (
    <div className='bg-cyan-500 text-center text-5xl p-4'>User: {userid}</div>
  )
}

export default User;