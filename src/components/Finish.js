import React, {useContext, useEffect, useState} from "react";
import { Link, Outlet } from "react-router-dom";
import UserContext from '../context/AllContext'

const Finish = () => {
  const { setCurPage, timePlan, plan, onlineAdd, storageAdd, profileAdd } = useContext(UserContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let t = 0
    if (timePlan === 'Monthly') {
      if (plan === 'Arcade') {
        t += 9
      } else if (plan === 'Advanced') {
        t += 12
      } else if (plan === 'Pro') {
        t += 15
      }
      if (onlineAdd) {
        t += 1
      }
      if (storageAdd) {
        t += 2
      }
      if (profileAdd) {
        t += 2
      }
    } else {
      if (plan === 'Arcade') {
        t += 90
      } else if (plan === 'Advanced') {
        t += 120
      } else if (plan === 'Pro') {
        t += 150
      }
      if (onlineAdd) {
        t += 10
      }
      if (storageAdd) {
        t += 20
      }
      if (profileAdd) {
        t += 20
      }
    }
    setTotal(t)
  }, [])
  

  return (
    <>
      <div className="bg-white w-[90vw] md:w-full md:max-w-2xl mx-auto rounded-xl px-6 py-8 shadow-lg md:shadow-none md:h-full md:relative">
        <h1 className="text-3xl font-bold text-Marine-blue mb-2">
          Finishing up
        </h1>

        <h2 className="my-2 md:mb-10 text-lg text-Cool-gray">
          Double-check everything looks OK before confirming.
              </h2>
              
        <div className="bg-Magnolia p-4 rounded-md md:p-6 md:rounded-lg">
            <p className="text-blue-900 font-bold text-sm">{plan} ({timePlan})</p>
          <div className="flex justify-between">
            <Link to="/plan">
                    <p className="text-base underline text-Cool-gray hover:text-Purplish-blue hover:cursor-pointer">Change</p>
              </Link>        
            {plan === 'Arcade' && <p className="font-bold text-blue-900">${timePlan === 'Monthly' ? '9/mo' : '90/yr'}</p>}
            {plan === 'Advanced' && <p className="font-bold text-blue-900">${timePlan === 'Monthly' ? '12/mo' : '120/yr'}</p>}
            { plan === 'Pro' && <p className="font-bold text-blue-900">${timePlan === 'Monthly' ? '15/mo' : '150/yr'}</p>}
                  </div> 
                  <hr className="my-3 md:mt-6" />
                  { onlineAdd && <div className="flex justify-between md:mt-6">
                  <p className="text-base text-Cool-gray">Online service</p>
                      <p className=" text-blue-900">+${ timePlan==='Monthly'? '1/mo': '10/yr' }</p>
                  </div>  }   
                  { storageAdd && <div className="flex justify-between md:mt-6">
                  <p className="text-base text-Cool-gray">Larger storage</p>
                      <p className=" text-blue-900">+${ timePlan==='Monthly'? '2/mo': '20/yr' }</p>
          </div>}  
          { profileAdd && <div className="flex justify-between md:mt-6">
                  <p className="text-base text-Cool-gray">Customizable profile</p>
                      <p className=" text-blue-900">+${ timePlan==='Monthly'? '2/mo': '20/yr' }</p>
                  </div> } 
              </div>
              
              <div className="flex justify-between px-4 mt-6">
                  <p className="text-base text-Cool-gray">Total (per {timePlan})</p>
          <p className="font-bold text-lg text-Purplish-blue">+${total}{ timePlan==='Monthly'? '/mo': '/yr' }</p>
              </div>

        <Link
          to="/thank"
          className="hidden px-4 py-2 bg-Purplish-blue font-normal rounded-md hover:bg-blue-800 text-white mx-4 md:block absolute bottom-0 right-0 hover:cursor-pointer hover:bg-Purplish-blue/90"
        >
          Confirm
        </Link>

        <Link
          className="hidden px-4 py-2 font-medium text-Cool-gray md:block absolute bottom-0 left-0 hover:text-Marine-blue"
          to="/addons"
          onClick={() => {setCurPage(3)}}
        >
          Go Back
        </Link>
      </div>
      {/* Next Button */}
      <div className="fixed md:hidden flex justify-between items-center w-full bottom-0  bg-white  py-4">
        <Link className="px-4 py-2  font-medium rounded-md  text-Cool-gray" to="/addons" onClick={() => {setCurPage(3)}}>
          Go Back
        </Link>
        <Link className="px-4 py-2 bg-Purplish-blue font-medium rounded-md hover:bg-blue-800 text-white mx-4 hover:cursor-pointer hover:bg-Purplish-blue/90" to="/thank">
          Confirm
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Finish;
