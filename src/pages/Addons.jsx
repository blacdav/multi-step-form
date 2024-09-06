import React from 'react'
import Sidebar from '../components/Sidebar'

const Addons = () => {
  return (
    <div className='flex h-svh'>
      <Sidebar />
      <div className='w-3/4 pt-16'>
        <div className='px-36'>
          <div className='w-full grid justify-start mb-10 leading-10'>
            <h1 className='flex justify-start text-3xl font-semibold'>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
          </div>

          <form action="/" className='grid gap-3 w-3/'>
              <div className='flex h-20 justify-between items-center px-5 gap-1 border-2 rounded-lg'>
                <div className='flex gap-3 leading-5'>
                  <input type="checkbox" placeholder='e.g David, David' className='' />
                  <div className='text-justify'>
                      <p className='text-sm font-semibold'>Online Services</p>
                      <p className='text-xs'>Access to multiplayers game</p>
                  </div>
                </div>
                <p className='text-xs'>+$1/mo</p>
              </div>
              
              <div className='flex h-20 justify-between items-center px-5 gap-1 border-2 rounded-lg'>
                <div className='flex gap-3 leading-5'>
                  <input type="checkbox" placeholder='e.g David, David' className='' />
                  <div className='text-justify'>
                      <p className='text-sm font-semibold'>Larger Storage</p>
                      <p className='text-xs'>Extra 1TB of cloud save</p>
                  </div>
                </div>
                <p className='text-xs'>+$2/mo</p>
              </div>

              <div className='flex h-20 justify-between items-center px-5 gap-1 border-2 rounded-lg'>
                <div className='flex gap-3 leading-5'>
                  <input type="checkbox" placeholder='e.g David, David' className='' />
                  <div className='text-justify'>
                      <p className='text-sm font-semibold'>Customizable Profile</p>
                      <p className='text-xs'>custom theme on your profile</p>
                  </div>
                </div>
                <p className='text-xs'>+$2/mo</p>
              </div>

              <div className='w-full flex justify-between items-baseline'>
                <p>Go Back</p>
                <button className='rounded-lg bg-blue-800 w-fit h-12 px-5 mt-20'>Next step</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addons
