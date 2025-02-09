/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <>
    <div className='bg-blue-800 text-white text-3xl text-center m-4 py-5'>User: {userid}</div>
    <div className='flex justify-center items-center m-4 bg-orange-600 text-white p-4 text-3xl h-screen'>Content</div>
    </>
  )
}

export default User