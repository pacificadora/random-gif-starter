import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const Tag = () => {
    const [tag, setTag] = useState('');
    const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border-black flex flex-col items-center gap-y-5 my-[15px] '>
        <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>Random {tag} Gif</h1>
        {
            loading? (<Spinner></Spinner>): (<img src={gif} width="450px"/> )
        }

        <input
        className='w-10/12 bg-white text-lg py-2 rounded-lg mt-[3px] text-center'
        onChange={(event)=> setTag(event.target.value)}
        value={tag}
        />

        <button onClick={()=>{fetchData(tag)}}
        className='w-10/12 mb-[20px] bg-white text-lg py-2 rounded-lg'> Generate </button>
    </div>
  )
}

export default Tag
