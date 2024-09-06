import React from 'react'
import Sidebar from '../components/Sidebar'

const Selectplan = () => {
  return (
    <div className='flex h-svh'>
      <Sidebar />
      <div className='w-full md:w-3/4 pt-16'>
        <div className='px-5 md:px-36'>
          <form action="/" className=''>
            <div className='bg-slate-500 md:bg-transparent rounded-xl px-5 py-8 grid gap-5 text-left'>
              <div className='w-full grid justify-start md:mb-10 md:leading-10'>
                <h1 className='flex justify-start text-3xl text-primary font-semibold'>Select your plan</h1>
                <p className='text-gray'>You have the option of monthly or yearly billing.</p>
              </div>
                
              <div className='flex flex-col md:flex-row gap-5 *:h-24 *:md:h-48'>
                <div className='flex flex-row md:flex-col justify-between items-center md:items-start gap-4 w-full md:w-1/4 border-2 border-secondary rounded-lg p-3'>
                  <img src="/images/icon-arcade.svg" alt="arcade icon" width={40} />
                  <div className='grid'>
                    <p className='font-semibold text-primary'>Arcade</p>
                    <small className='text-gray'>$9/mo</small>
                  </div>
                </div>
                
                <div className='flex flex-row md:flex-col items-center justify-between md:items-start gap-4 w-full md:w-1/4 border-2 border-secondary rounded-lg p-3'>
                  <img src="/images/icon-advanced.svg" alt="arcade icon" width={40} />
                  <div className='grid justify-between'>
                    <p className='font-semibold text-primary'>Advanced</p>
                    <small className='text-gray'>$9/mo</small>
                  </div>
                </div>
                
                <div className='flex flex-row md:flex-col items-center justify-between md:items-start gap-4 w-full md:w-1/4 border-2 border-gray rounded-lg p-3'>
                  <img src="/images/icon-pro.svg" alt="arcade icon" width={40} />
                  <div className='grid justify-between'>
                    <p className='font-semibold text-primary'>Pro</p>
                    <small className='text-gray'>$9/mo</small>
                  </div>
                </div>
              </div>

              <div className='w-full rounded-lg bg-gray h-12 grid items-center justify-center'>
                <div className='flex gap-3 items-center '>
                  <p>Monthly</p>
                  <div className='h-4 w-8 bg-slate-800 flex items-center px-1 rounded-full'>
                    <div className='h-3 w-3 rounded-full bg-white hover:cursor-pointer transform duration-1000 translate-x-3'></div>
                  </div>
                  <p>Yearly</p>
                </div>
              </div>
            </div>

            <div className='w-full flex font-semibold justify-between items-baseline'>
              <p className='font-semibold text-gray hover:text-primary cursor-pointer'>Go Back</p>
              <button className='rounded-lg bg-secondary text-white w-fit h-12 px-5 mt-20'>Next step</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Selectplan
