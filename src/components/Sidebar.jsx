import React from 'react'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    
    const yourinfo = pathname === '/';
    const selectplan = pathname === '/select-plan';
    const addons = pathname === '/add-ons';
    const summary = pathname === '/summary';

  return (
    <div className='w-1/4 hidden md:flex flex-col gap-10 m-5 p-10 bg-blue-70 text-white rounded-xl bg-sidebar'>
      <div className='flex items-center gap-3'>
        <div className={`${yourinfo ? 'bg-blue-100 text-black font-semibold' : ''} w-9 h-9 rounded-full border-2 border-blue-100 flex items-center justify-center`}>1</div>
        <div className='text-justify leading-5'>
            <p className='text-gray'>STEP 1</p>
            <p className='font-bold'>YOUR INFO</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className={`${selectplan ? 'bg-blue-100 text-black font-semibold' : ''} w-9 h-9 rounded-full border-2 border-blue-100 flex items-center justify-center`}>2</div>
        <div className='text-justify leading-5'>
            <p className='text-gray'>STEP 2</p>
            <p className='font-bold'>SELECT PLAN</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className={`${addons ? 'bg-blue-100 text-black font-semibold' : ''} w-9 h-9 rounded-full border-2 border-blue-100 flex items-center justify-center`}>3</div>
        <div className='text-justify leading-5'>
            <p className='text-gray'>STEP 3</p>
            <p className='font-bold'>ADD-ONS</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className={`${summary ? 'bg-blue-100 text-black font-semibold' : ''} w-9 h-9 rounded-full border-2 border-blue-100 flex items-center justify-center`}>4</div>
        <div className='text-justify leading-5'>
            <p className='text-gray'>STEP 4</p>
            <p className='font-bold'>SUMMARY</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
