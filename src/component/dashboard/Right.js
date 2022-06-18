// PROFILE
// TOP ARTISTS
// CURRENT MUSIC CONTROL

import React from 'react'
import { RiNotification4Fill, RiUserSmileFill } from 'react-icons/ri'
import Currentlyplaying from '../Currentlyplaying'
import TopArtists from '../TopArtists'

import './dashboard.scss'

const Right = () => {
    return (
        <div className='right h-screen md:min-h-screen text-white'>
            {/* profile */}
            <div className="profile flex flex-row justify-between items-center p-8">
                <div className='flex flex-row items-center'>
                    <RiUserSmileFill className="text-5xl" />
                    <div className='items-center ml-2'>
                        <h1 className='text-2xl'>Guest User</h1>
                        <p className='text-sm'>Guest</p>
                    </div>
                </div>
                <RiNotification4Fill className="text-2xl" />
            </div>
            <hr className='w-3/4 m-auto border-gray-500' />
            <div className='mainCards m-8'>
                <div className='flex flex-row justify-between items-center '>
                    <h1 className='text-2xl mb-4 medium'><span className='text-sm'>Top</span><br />Artist</h1>
                    <p className='text-gray-500'>See all</p>
                </div>
                <TopArtists />
            </div>
            {/* CURRENTLY PLAYING */}

            <div>
                <Currentlyplaying />
            </div>
        </div>
    )
}

export default Right