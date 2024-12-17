import React from 'react'
import Sidebar from '../components/Sidebar'
import { useForm } from '../context/FormManagement';
import { useNavigate } from 'react-router-dom';

const Summary = () => {
  const { step, setStep, toggle, state: { plan, addons } } = useForm();
  const first = Number(plan.mcost);
  const second = Number(addons.mcost);
  const third = Number(addons.mcost);

  const total = first + second + third;

  const navigate = useNavigate()

  return (
    <div className='flex flex-col md:flex-row h-svh'>
      <Sidebar />
      <div className='w-full md:w-3/4 py-8 -mt-28 md:mt-0 overflow-y-auto'>
        <div className='md:px-36'>
          <form action="/submitted" className='grid gap-3'>
            <div className='bg-white shadow-lg md:shadow-none md:bg-transparent rounded-xl mx-5 md:mx-0 px-5 md:px-0 py-8 grid gap-3'>
              <div className='w-full grid justify-start md:mb-10 md:leading-10 text-left'>
                <h1 className='flex justify-start text-3xl text-primary font-semibold'>Finishing up</h1>
                <p className='text-gray'>Double-check everything looks OK before confirming</p>
              </div>

              <div>
                <div className='bg-slate-200 p-5 rounded-lg'>
                    <div className='flex items-center justify-between pb-5 border-b border-gray'>
                        <div className=''>
                            <p className='font-semibold text-primary'>{plan.name} ({plan.type})</p>
                            <small onClick={() => navigate('/select-plan')} className='text-gray underline hover:cursor-pointer'>Change</small>
                        </div>
                        <small className='text-primary font-semibold'>${plan.cost}/{toggle === true ? 'yr' : 'mo'}</small>
                    </div>
                    <div className='grid gap-2 pt-3'>
                        <div className='flex justify-between'>
                            <small className='text-gray'>{addons.name}</small>
                            <small className='text-primary font-semibold'>+$1/{toggle === true ? 'yr' : 'mo'}</small>
                        </div>
                        <div className='flex justify-between'>
                            <small className='text-gray'>{addons.name}</small>
                            <small className='text-primary font-semibold'>+$2/{toggle === true ? 'yr' : 'mo'}</small>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center px-5 pt-5'>
                    <small className='text-gray'>Total (per {toggle === true ? 'year' : 'month'})</small>
                    <p className='text-secondary font-bold'>+${total}/{toggle === true ? 'yr' : 'mo'}</p>
                </div>
              </div>
            </div>

            <div className='w-full bg-black px-5 md:px-0 md:bg-transparent font-semibold flex justify-between items-baseline p-5 mt-5 absolute bottom-0 md:relative md:bottom-auto'>
              <p onClick={() => navigate(-1)} className='text-gray hover:text-primary hover:cursor-pointer'>Go Back</p>
              <button className='rounded-lg bg-secondary text-white w-fit h-12 px-5'>Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Summary
