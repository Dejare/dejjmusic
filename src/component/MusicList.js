import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
const MusicList = ({ number, songName, artist, time, likes }) => {
    return (
        <div className='flex flex-row items-center justify-between border-b-2 text-white pb-2 mb-4 border-gray-500'>
            <p className='text-gray-600'>01{number}</p>
            <p>Risky{songName}</p>
            <p className='text-gray-600'>Davido {artist}</p>
            <p>3:43{time}</p>
            <p className='flex flex-row items-center text-gray-600'><FaHeart className='mr-2' /> 3M {likes}</p>
            <FiMoreVertical className='text-gray-600' />
        </div>
    )
}

export default MusicList