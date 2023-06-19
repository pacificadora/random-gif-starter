import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const Random = () => {
    const {gif, loading, fetchData} = useGif();
  return (
    <div className='w-1/2 bg-green-500 rounded-lg border-black flex flex-col items-center gap-y-5 my-[15px] '>
        <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random Gif</h1>
        {
            loading? (<Spinner></Spinner>): (<img src={gif} width="450px"/> )
        }
        <button onClick={()=>{fetchData()}}
        className='w-10/12 mb-[20px] bg-white text-lg py-2 rounded-lg'> Generate </button>
    </div>
  )
}

export default Random
