// Trending /Top song and playlist
// Global top 50/NigerianTOP50
import React from 'react'
import { RiPlayFill } from 'react-icons/ri';
import MusicList from '../MusicList';
const Center = () => {
    return (
        <div className='center min-h-screen'>

            <div className='mainCards m-8'>
                <div className='flex flex-row justify-between items-center '>
                    <h1 className='text-3xl mb-4 medium text-white'><span className='text-sm text-gray-500'>Top</span><br />Trending</h1>
                    <p className='text-gray-500'>See all</p>
                </div>
                <div className='card bg-black text-white rounded-2xl p-12'>
                    <p className='mb-4 text-gray-500'>Playlist</p>
                    <h1 className='text-3xl medium mb-4'>Top song <br /> of the <br /> week</h1>
                    <div className='flex flex-row'>
                        <button className='flex flex-row rounded-xl mr-5 bg-white items-center text-black px-4 py-2'><RiPlayFill className='mr-2' /> Play</button>
                        <button className='flex flex-row rounded-xl bg-gray-500 text-white items-center px-4 py-2'>View Playlist</button>
                    </div>
                </div>
            </div>

            {/* global */}

            <div className='mainCards m-8'>
                <div className='flex flex-row justify-between items-center '>
                    <h1 className='text-3xl mb-4 medium text-white'><span className='text-sm text-gray-500'>Global</span><br />Top 50</h1>
                    <p className='text-gray-500'>See all</p>
                </div>
                <MusicList />
                <MusicList />
                <MusicList />
            </div>
        </div>
    )
}

export default Center