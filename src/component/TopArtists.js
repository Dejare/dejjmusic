import React from 'react'
import { RiUserSmileFill } from 'react-icons/ri'

const TopArtists = () => {
    return (
        <div className='flex flex-row justify-between text-gray-200 items-center'>
            <div className='flex flex-row '>
                <RiUserSmileFill className='text-4xl' />
                <div className='ml-2'>
                    <h1>Davidoo</h1>
                    <p className='text-gray-500'>4 Albums</p>
                </div>
            </div>
            <p className='text-gray-500 text-lg'>01</p>
        </div>
    )
}

export default TopArtists