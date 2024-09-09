import React from 'react'
import Sidebar from '../components/Sidebar'

const Submitted = () => {
  return (
    <div className='flex flex-col md:flex-row h-svh'>
      <Sidebar />
      <div className='w-full md:h-full md:w-3/4 py-8 -mt-28 md:mt-0 overflow-y-auto'>
        <div className='md:px-36 md:h-full'>
          <form action="/" className='grid gap-3 md:h-full'>
            <div className='bg-white md:h-full shadow-lg md:shadow-none md:bg-transparent rounded-xl mx-5 md:mx-0 px-5 md:px-0 py-20 grid gap-3'>
              <div className='w-full h-full flex flex-col gap-5 justify-center items-center md:mb-10 md:leading-10 text-left'>
                <img src="/images/icon-thank-you.svg" alt="checkmark" width={70} />
                <h1 className='flex justify-center text-3xl text-primary font-semibold'>Thank You!</h1>
                <p className='text-gray text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Submitted
