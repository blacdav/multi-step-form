import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom';

const Selectplan = () => {
  const [ toggle, setToggle ] = useState(false);
  const navigate = useNavigate()

  return (
    <div className='flex flex-col md:flex-row h-lvh'>
      <Sidebar />
      <div className='w-full md:w-3/4 py-8 -mt-28 md:mt-0 md:overflow-y-auto'>
        <div className='md:px-52'>
          <form action="/add-ons" className=''>
            <div className='bg-white shadow-lg md:shadow-none shadow-gray md:bg-transparent rounded-xl mx-5 md:mx-0 px-5 md:px-0 py-8 grid gap-5'>
              <div className='w-full grid justify-start md:mb-10 md:leading-10'>
                <h1 className='flex justify-start text-3xl text-primary font-semibold'>Select your plan</h1>
                <p className='text-gray'>You have the option of monthly or yearly billing.</p>
              </div>
                
              <div className='flex flex-col md:flex-row gap-5 *:h-24 *:md:h-48'>
                <div className='flex flex-row md:flex-col justify-normal md:justify-between items-center md:items-start gap-4 w-full md:w-1/3 border-2 border-secondary rounded-lg p-3'>
                  <img src="/images/icon-arcade.svg" alt="arcade icon" width={40} />
                  <div className='grid'>
                    <p className='font-semibold text-primary'>Arcade</p>
                    <small className='text-gray'>$9/mo</small>
                    <small className={`${!toggle ? 'hidden' : ''} text-primary font-semibold`}>2 months free</small>
                  </div>
                </div>
                
                <div className='flex flex-row md:flex-col justify-normal md:justify-between items-center md:items-start gap-4 w-full md:w-1/3 border-2 border-secondary rounded-lg p-3'>
                  <img src="/images/icon-advanced.svg" alt="arcade icon" width={40} />
                  <div className='grid justify-between'>
                    <p className='font-semibold text-primary'>Advanced</p>
                    <small className='text-gray'>$12/mo</small>
                    <small className={`${!toggle ? 'hidden' : ''} text-primary font-semibold`}>2 months free</small>
                  </div>
                </div>
                
                <div className='flex flex-row md:flex-col justify-normal md:justify-between items-center md:items-start gap-4 w-full md:w-1/3 border-2 border-gray rounded-lg p-3'>
                  <img src="/images/icon-pro.svg" alt="arcade icon" width={40} />
                  <div className='grid justify-between'>
                    <p className='font-semibold text-primary'>Pro</p>
                    <small className='text-gray'>$15/mo</small>
                    <small className={`${!toggle ? 'hidden' : ''} text-primary font-semibold`}>2 months free</small>
                  </div>
                </div>
              </div>

              <div className='w-full rounded-lg bg-slate-200 h-12 grid items-center justify-center'>
                <div className='flex gap-3 items-center font-bold'>
                  <p className={`${toggle === false ? 'text-secondary transition duration-100' : 'text-gray'}`}>Monthly</p>
                  <div className='h-4 w-8 bg-primary flex items-center px-1 rounded-full'>
                    <div onClick={() => setToggle(!toggle)} className={`${toggle ? 'translate-x-3' : 'translate-x-0'} h-3 w-3 rounded-full bg-white hover:cursor-pointer transform duration-100`}></div>
                  </div>
                  <p className={`${toggle === true ? 'text-secondary transition duration-100' : 'text-gray'}`}>Yearly</p>
                </div>
              </div>
            </div>

            <div className='w-full h-auto flex bg-black md:bg-transparent p-5 md:px-0 font-semibold justify-between items-baseline mt-5 md:mt-20 absolute bottom-0 md:relative md:bottom-auto'>
              <p onClick={() => navigate(-1)} className='font-semibold text-gray hover:text-primary cursor-pointer'>Go Back</p>
              <button className='rounded-lg bg-primary text-white w-fit h-12 px-5'>Next step</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Selectplan
