import React from 'react'
import Sidebar from '../components/Sidebar'

const Selectplan = () => {
  return (
    <div className='flex h-svh'>
      <Sidebar />
      <div className='w-3/4 pt-16'>
        <div className='px-36'>
          <div className='w-full grid justify-start mb-10 leading-10'>
            <h1 className='flex justify-start text-3xl font-semibold'>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
          </div>

          <form action="/" className='grid gap-5'>
              <div className='flex gap-5 *:h-48'>
                <div className='grid gap-1 w-1/4 border-2 rounded-lg'>
                  {/* <img src="#" alt="arcade icon" /> */}
                  <div>A</div>
                  <div className='grid justify-between'>
                    <p>Arcade</p>
                    <small>$9/mo</small>
                  </div>
                </div>
                
                <div className='grid gap-1 w-1/4 border-2 rounded-lg'>
                  {/* <img src="#" alt="arcade icon" /> */}
                  <div>A</div>
                  <div className='grid justify-between'>
                    <p>Arcade</p>
                    <small>$9/mo</small>
                  </div>
                </div>
                
                <div className='grid gap-1 w-1/4 border-2 rounded-lg'>
                  {/* <img src="#" alt="arcade icon" /> */}
                  <div>A</div>
                  <div className='grid justify-between'>
                    <p>Arcade</p>
                    <small>$9/mo</small>
                  </div>
                </div>
              </div>

              <div className='w-full rounded-lg bg-slate-500 h-12 grid items-center justify-center'>
                <div className='flex gap-3 items-center '>
                  <p>Monthly</p>
                  <div className='h-4 w-8 bg-slate-800 flex items-center px-1 rounded-full'>
                    <div className='h-3 w-3 rounded-full bg-white hover:cursor-pointer transform duration-1000 translate-x-3'></div>
                  </div>
                  <p>Yearly</p>
                </div>
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

export default Selectplan
