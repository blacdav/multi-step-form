import React from 'react'
import { useForm } from '../context/FormManagement';

const Sidebar = () => {
    const { step, setStep } = useForm();
    
    const yourinfo = step === 0;
    const selectplan = step === 1;
    const addons = step === 2;
    const summary = step === 3;

  return (
    <div className='w-full md:w-1/4 h-48 md:h-auto flex md:flex-col flex-row items-start justify-center md:justify-normal gap-10 md:m-2 p-10 bg-blue-70 text-white md:rounded-xl bg-sidebar'>
      <div className='flex items-center gap-3'>
        <div className={`${yourinfo ? 'bg-blue-100 text-black font-semibold' : ''} w-9 h-9 rounded-full border-2 border-blue-100 flex items-center justify-center`}>1</div>
        <div className='text-justify hidden md:grid leading-5'>
            <p className='text-gray'>STEP 1</p>
            <p className='font-bold'>YOUR INFO</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className={`${selectplan ? 'bg-blue-100 text-black font-semibold' : ''} w-9 h-9 rounded-full border-2 border-blue-100 flex items-center justify-center`}>2</div>
        <div className='text-justify hidden md:grid leading-5'>
            <p className='text-gray'>STEP 2</p>
            <p className='font-bold'>SELECT PLAN</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className={`${addons ? 'bg-blue-100 text-black font-semibold' : ''} w-9 h-9 rounded-full border-2 border-blue-100 flex items-center justify-center`}>3</div>
        <div className='text-justify hidden md:grid leading-5'>
            <p className='text-gray'>STEP 3</p>
            <p className='font-bold'>ADD-ONS</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className={`${summary ? 'bg-blue-100 text-black font-semibold' : ''} w-9 h-9 rounded-full border-2 border-blue-100 flex items-center justify-center`}>4</div>
        <div className='text-justify hidden md:grid leading-5'>
            <p className='text-gray'>STEP 4</p>
            <p className='font-bold'>SUMMARY</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
