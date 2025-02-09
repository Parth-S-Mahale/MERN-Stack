/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { data, useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Parth-S-Mahale')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} width={300} alt="" />
    </div>
    <div className='flex justify-center items-center m-4 bg-orange-600 text-white p-4 text-3xl h-screen'>Content</div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Parth-S-Mahale')
    return response.json()
}