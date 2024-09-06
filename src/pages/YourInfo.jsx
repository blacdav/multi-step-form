import React from 'react'
import Sidebar from '../components/Sidebar'

const YourInfo = () => {
  return (
    <div className='grid md:flex h-svh'>
        <Sidebar />
        <div className='w-full md:w-3/4 pt-16'>
            <div className='px-5 md:px-36'>
                <form action="/" className=''>
                    <div className='bg-primary md:bg-transparent rounded-xl px-5 py-8 grid gap-5'>
                        <div className='w-full grid justify-start md:mb-10 md:leading-10 text-left'>
                            <h1 className='flex justify-start text-3xl text-primary font-semibold'>Personal Info</h1>
                            <p className='text-gray'>Please provide your name, email, and phone number.</p>
                        </div>

                        <div className='grid gap-1'>
                            <div className='flex justify-between'>
                                <p className='text-primary font-semibold'>Name</p>
                                <small className={`hidden text-red-600`}>this field is required</small>
                            </div>
                            <input type="text" placeholder='e.g David, David' className={`rounded-lg h-12 px-3 w-full border-2 border-gray outline-none`} />
                        </div>

                        <div className='grid gap-1'>
                            <div className='flex justify-between'>
                                <p className='text-primary font-semibold'>Email Address</p>
                                <small className={`hidden text-red-600`}>this field is required</small>
                            </div>
                            <input type="email" placeholder='e.g daviddavid@lorem.com' className={`rounded-lg h-12 px-3 w-full border-2 border-gray outline-none`} />
                        </div>

                        <div className='grid gap-1'>
                            <div className='flex justify-between'>
                                <p className='text-primary font-semibold'>Phone Number</p>
                                <small className={`hidden text-red-600`}>this field is required</small>
                            </div>
                            <input type="tel" placeholder='e.g +2348888889980' className={`rounded-lg h-12 px-3 w-full border-2 border-gray outline-none`} />
                        </div>
                    </div>

                    <div className='w-full flex justify-end'>
                        <button className='rounded-lg bg-primary text-white font-semibold w-fit h-12 px-5 mt-20'>Next step</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default YourInfo
