import React, {useContext} from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import UserContext from '../context/AllContext'

const Personal = () => {
    const navigate = useNavigate()
    const {setCurPage} = useContext(UserContext)

    const SubmitForm = (e) => {
        e.preventDefault()
        setCurPage(2)
        navigate('/plan')
    }

    return (
      <>
    <div className='bg-white w-[90vw] md:w-full md:max-w-2xl mx-auto rounded-xl px-6 py-8 shadow-lg md:shadow-none md:h-full md:relative'>
          <h1 className='text-3xl font-bold text-Marine-blue mb-2'>
              Personal info
          </h1>
          
          <h2 className='my-2 md:mb-10 text-lg text-Cool-gray' >
              Please provide your name, email address, and phone number.
                </h2>
                
        <form action="" id='myform' onSubmit={SubmitForm}>
            <div id="name" className='mt-4'>
              <p className='text-sm text-Marine-blue'>Name</p>
                        <input type="text" name='name' placeholder='e.g. Stephen King' required className='px-4 py-2 border-2 font-medium rounded w-full mt-[2px] focus:outline-Purplish-blue hover:cursor-pointer' />
                        
            </div>

            <div id="email" className='mt-4 md:mt-8'>
                <p className='text-sm text-Marine-blue'>Email Address</p>
                        <input type="email" name='email' placeholder='e.g. stephenking@lorem.com' required className='px-4 py-2 border-2 font-medium rounded w-full mt-[2px] focus:outline-Purplish-blue hover:cursor-pointer' />
            </div>

            <div id="phone" className='mt-4 md:mt-8'>
                <p className='text-sm text-Marine-blue'>Phone Number</p>
                <input type="text" name='number' placeholder='e.g. +1 234 567 890' required className='px-4 py-2 border-2 font-medium rounded w-full mt-[2px] focus:outline-Purplish-blue hover:cursor-pointer required:outline-red-500' />
            </div>        
        </form>
                <button type='submit' form='myform' className='hidden px-4 py-2 bg-Marine-blue font-normal rounded-md hover:bg-blue-800 text-white mx-4 md:block absolute bottom-0 right-0'>Next Step</button>
    </div>
        {/* Next Button */}
            <div className='fixed md:hidden flex justify-end items-center w-full bottom-0  bg-white  py-4'>
                  <button type='submit' form='myform' className='px-4 py-2 bg-Marine-blue font-medium rounded-md hover:bg-blue-800 text-white mx-4 '>Next Step</button>  
        
    </div>
    <Outlet />
    </>
  )
}

export default Personal