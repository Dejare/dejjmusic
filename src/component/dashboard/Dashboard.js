import React from 'react'
import Center from './Center'
import Left from './Left'
import Right from './Right'

const Dashboard = () => {

    return (
        <div className='flex flex-col md:flex-row md:max-w-screen'>
            <Left />
            <Center />
            <Right />
        </div>
    )
}

export default Dashboard