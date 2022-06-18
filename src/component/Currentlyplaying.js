import React from 'react'
import image from '../IMG_20220617_113016.jpg'
import './dashboard/dashboard.scss'
import { TiArrowRepeat, TiArrowShuffle } from 'react-icons/ti'
import { MdSkipNext, MdSkipPrevious, MdPlayCircleFilled } from 'react-icons/md'
const Currentlyplaying = () => {

    return (
        <div className='p-12 pt-0'>
            <img src={image} alt="Currently playing" className='w-3/4 m-auto flex rounded-2xl' />
            {/* info */}
            <div className='flex flex-col text-center my-4'>
                <h1 className='text-2xl'>Holy Ground</h1>
                <p className='circular text-sm text-gray-500'>Davido ft Nicki Minaj</p>
            </div>
            {/* control */}
            <div className='current h-20 flex flex-row items-center justify-between p-4 text-2xl'>
                <TiArrowRepeat />
                <div className='flex flex-row items-center'>
                    <MdSkipPrevious className='mr-2' />
                    <MdPlayCircleFilled className='text-4xl' />
                    <MdSkipNext className='ml-2' />
                </div>
                <TiArrowShuffle />
            </div>
        </div>
    )
}

export default Currentlyplaying