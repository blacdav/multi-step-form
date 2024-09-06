import React from 'react'
import Sidebar from '../components/Sidebar'

const YourInfo = () => {
  return (
    <div className='flex h-svh'>
        <Sidebar />
        <div className='w-3/4 pt-16'>
            <div className='px-36'>
                <div className='w-full grid justify-start mb-10 leading-10'>
                    <h1 className='flex justify-start text-3xl font-semibold'>Personal Info</h1>
                    <p>Please provide your name, email, and phone number.</p>
                </div>

                <form action="/" className='grid gap-5 w-3/'>
                    <div className='grid gap-1'>
                        <div className='flex justify-between'>
                            <p>Name</p>
                            <small>error</small>
                        </div>
                        <input type="text" placeholder='e.g David, David' className='rounded-lg h-12 px-3 w-full border-2' />
                    </div>

                    <div className='grid gap-1'>
                        <div className='flex justify-between'>
                            <p>Email Address</p>
                            <small>error</small>
                        </div>
                        <input type="email" placeholder='e.g daviddavid@lorem.com' className='rounded-lg h-12 px-3 w-full border-2' />
                    </div>

                    <div className='grid gap-1'>
                        <div className='flex justify-between'>
                            <p>Phone Number</p>
                            <small>error</small>
                        </div>
                        <input type="tel" placeholder='e.g +2348888889980' className='rounded-lg h-12 px-3 w-full border-2' />
                    </div>

                    <div className='w-full flex justify-end'>
                        <button className='rounded-lg bg-blue-800 w-fit h-12 px-5 mt-20'>Next step</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default YourInfo
