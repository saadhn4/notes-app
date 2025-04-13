import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h2 className='text-2xl'>Page Not Found!!</h2>
      <Link className='text-blue-500 underline hover:text-blue-700 mt-4' to="/">Back To Home</Link>
    </div>
  )
}

export default Error404