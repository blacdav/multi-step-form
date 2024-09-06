import React from 'react'
import Sidebar from '../components/Sidebar'

const Summary = () => {
  return (
    <div className='flex h-svh'>
        <Sidebar />
        <div className='w-3/4 pt-16'>
            <div className='px-36'>
                <div className='w-full grid justify-start mb-10 leading-10'>
                    <h1 className='flex justify-start text-3xl font-semibold'>Finishing up</h1>
                    <p>Double-check everything looks OK before confirming.</p>
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

                    <div className='w-full flex justify-between items-baseline'>
                        <p>Go Back</p>
                        <button className='rounded-lg bg-blue-800 text-white w-fit h-12 px-5 mt-20'>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Summary
