import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/theshreyaduggal')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/theshreyaduggal")

    return response.json()
}
