import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useForm } from '../context/FormManagement'

const YourInfo = () => {
    const { step, setStep, data, setData } = useForm();
    const [error, setError] = useState({});
    // const [success, setSuccess] = useState({});

    const handleInput = (e) => {
        const input = {...data, [e.target.name]: e.target.value};
        setData(input);
        // setError(validation(data));
    }

    console.log(data)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const validate = validation(data);
        setError(validate);
        console.log(error)
        
        if(Object.keys(validate).length === 0) {
            setStep(step + 1);
        }
    }

    const validation = (data) => {
        const err = {};
        // const scs = {};

        if(data.name === '') {
            err.name = 'This field is required';
        }else if(data.name.length < 6){
            err.name = 'name is not complete';
        }
            
        if(data.email === ''){
            err.email = 'This feild is required';
        } else if(!data.email.includes('@' && '.')) {
            err.email = 'Email pattern is not correct';
        }

        if(data.telephone === '') {
            err.telephone = 'This field is required'
        } else if(data.telephone.length < 11 || data.telephone.length > 11) {
            err.telephone = 'Phone number must be 11 digits'
        }

        console.log(error);
        return err;
    }

  return (
    <div className='flex flex-col md:flex-row h-svh'>
        <Sidebar />
        <div className='w-full md:w-3/4 py-8 -mt-28 md:mt-0 overflow-y-auto'>
            <div className='md:px-52'>
                <form onSubmit={handleSubmit} className=''>
                    <div className='bg-white shadow-lg md:shadow-none shadow-gray md:bg-transparent rounded-xl mx-5 md:mx-0 px-5 md:px-0 py-8 grid gap-5'>
                        <div className='w-full grid justify-start md:mb-10 md:leading-10 text-left'>
                            <h1 className='flex justify-start text-3xl text-primary font-semibold'>Personal Info</h1>
                            <p className='text-gray'>Please provide your name, email, and phone number.</p>
                        </div>

                        <div className='grid gap-1'>
                            <div className='flex justify-between'>
                                <p className='text-primary font-semibold'>Name</p>
                                <small className={`text-red-600`}>{error.name}</small>
                            </div>
                            <input type="text" value={data.name} name='name' onChange={handleInput} placeholder='e.g David, David' className={`rounded-lg h-12 px-3 w-full border-2 border-gray outline-none`} />
                        </div>

                        <div className='grid gap-1'>
                            <div className='flex justify-between'>
                                <p className='text-primary font-semibold'>Email Address</p>
                                <small className={`text-red-600`}>{error.email}</small>
                            </div>
                            <input type="email" value={data.email} name='email' onChange={handleInput} placeholder='e.g daviddavid@lorem.com' className={`rounded-lg h-12 px-3 w-full border-2 border-gray outline-none`} />
                        </div>

                        <div className='grid gap-1'>
                            <div className='flex justify-between'>
                                <p className='text-primary font-semibold'>Phone Number</p>
                                <small className={`text-red-600`}>{error.telephone}</small>
                            </div>
                            <input type="tel" value={data.telephone} name='telephone' onChange={handleInput} placeholder='e.g +2348888889980' className={`rounded-lg h-12 px-3 w-full border-2 border-gray outline-none`} />
                        </div>
                    </div>

                    <div className='w-full bg-black md:bg-transparent p-5 md:px-0 flex justify-end mt-5 absolute bottom-0 md:relative md:bottom-auto'>
                        <button className='rounded-lg bg-primary text-white font-semibold w-fit h-12 px-5'>Next step</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default YourInfo
