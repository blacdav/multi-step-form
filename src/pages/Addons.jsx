import React from 'react'
import Sidebar from '../components/Sidebar'

const Addons = () => {
  return (
    <div className='flex flex-col md:flex-row h-svh'>
      <Sidebar />
      <div className='w-full md:w-3/4 py-8 -mt-28 md:mt-0 overflow-y-auto'>
        <div className='md:px-36'>
          <form action="/" className='grid gap-3'>
            <div className='bg-white shadow-lg md:shadow-none md:bg-transparent rounded-xl mx-5 md:mx-0 px-5 md:px-0 py-8 grid gap-3'>
              <div className='w-full grid justify-start md:mb-10 md:leading-10 text-left'>
                <h1 className='flex justify-start text-3xl text-primary font-semibold'>Pick add-ons</h1>
                <p className='text-gray'>Add-ons help enhance your gaming experience.</p>
              </div>

              <div className='flex h-20 justify-between items-center px-5 gap-1 border-2 border-secondary hover:cursor-pointer rounded-lg'>
                <div className='flex gap-4 leading-5'>
                  <input type="checkbox" className={`accent-secondary w-4`} />
                  <div className='text-justify'>
                      <p className='text-sm font-bold text-primary'>Online Services</p>
                      <p className='text-xs text-gray'>Access to multiplayers game</p>
                  </div>
                </div>
                <p className='text-xs text-secondary font-bold'>+$1/mo</p>
              </div>
              
              <div className='flex h-20 justify-between items-center px-5 gap-1 border-2 border-secondary hover:cursor-pointer rounded-lg'>
                <div className='flex gap-4 leading-5'>
                  <input type="checkbox" className={`accent-secondary w-4`} />
                  <div className='text-justify'>
                      <p className='text-sm font-bold text-primary'>Larger Storage</p>
                      <p className='text-xs text-gray'>Extra 1TB of cloud save</p>
                  </div>
                </div>
                <p className='text-xs text-secondary font-bold'>+$2/mo</p>
              </div>

              <div className='flex h-20 justify-between items-center px-5 gap-1 border-2 border-secondary hover:cursor-pointer rounded-lg'>
                <div className='flex gap-4 leading-5'>
                  <input type="checkbox" className={`accent-secondary w-4`} />
                  <div className='text-justify'>
                      <p className='text-sm font-bold text-primary'>Customizable Profile</p>
                      <p className='text-xs text-gray'>custom theme on your profile</p>
                  </div>
                </div>
                <p className='text-xs text-secondary font-bold'>+$2/mo</p>
              </div>
            </div>

            <div className='w-full bg-black px-5 md:px-0 md:bg-transparent font-semibold flex justify-between items-baseline p-5 mt-20'>
              <p className='text-gray hover:text-primary hover:cursor-pointer'>Go Back</p>
              <button className='rounded-lg bg-primary text-white w-fit h-12 px-5'>Next step</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addons
