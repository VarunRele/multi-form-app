import React from 'react'
import thankyou from '../images/icon-thank-you.svg'

const Thank = () => {
  return (
    <div className="bg-white w-[90vw] md:w-full md:max-w-2xl mx-auto rounded-xl px-6 py-8 shadow-lg md:shadow-none md:h-full md:relative md:flex md:items-center">
          <div className='flex flex-col items-center px-4 my-14 md:px-8'>
              <img src={thankyou} alt="thankyou" className='w-14 h-14 md:w-16 md:h-16' />
              <h1 className='font-extrabold text-Marine-blue text-2xl md:text-3xl my-4'>Thank you!</h1>
              <p className='text-center text-Cool-gray'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    </div>
  )
}

export default Thank