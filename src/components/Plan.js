import React, {useContext, useRef} from "react";
import iconArcade from '../images/icon-arcade.svg'
import iconAdvance from '../images/icon-advanced.svg'
import iconPro from '../images/icon-pro.svg'
import { Link, Outlet } from "react-router-dom";
import UserContext from '../context/AllContext'

const Plan = () => {
  const { setCurPage, setPlan, timePlan, setTimePlan } = useContext(UserContext)
  const btn = useRef()

  const SubmitForm = (e) => {
    e.preventDefault();
    setPlan(e.target.plan.value)
    console.log(e.target.plan.value);
    };
  
    const handleClick = (e) => {
        if (e.target.checked) {
            setTimePlan('Yearly')
        }
        else {
            setTimePlan('Monthly')
        }
    }

  const RadioCheck = (e) => {
      const labels = document.getElementsByClassName("plan")
      
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].classList.contains('selected')) {
        labels[i].classList.remove('selected')
      }
    }
    
      if (!e.target.classList.contains('selected')) {
        e.target.classList.add('selected')
      }
      
    }

  return (
    <>
      <div className="bg-white w-[90vw] md:w-full md:max-w-2xl mx-auto rounded-xl px-6 py-8 shadow-lg md:shadow-none md:h-full md:relative">
        <h1 className="text-3xl font-bold text-Marine-blue mb-2">
          Select your plan
        </h1>

        <h2 className="my-2 md:mb-10 text-lg text-Cool-gray">
          You have the option of monthly or yearly billing.
        </h2>

        <form action="" id="myform" onSubmit={SubmitForm}>
          <div className="flex flex-col md:flex-row md:items-center md:-mt-5 md:space-x-4">
          
          <div className="w-full" >
            <input
              type="radio"
              name="plan"
              id="arcade"
              value="Arcade"
              className="hidden"
              required
            />
            <label
              htmlFor="arcade"
              className="border-2 rounded-lg mt-6 w-full flex px-4 py-3 plan md:flex-col md:items-start md:justify-end md:space-y-12 hover:border-Purplish-blue hover:cursor-pointer selected"
                onClick={RadioCheck} >
              <img src={iconArcade} alt="" className="md:w-10" />
                    <div className="ml-4 md:flex-1 md:ml-0">
                <p className="text-Marine-blue font-bold">Arcade </p> 
                  <p className="text-Cool-gray">${timePlan === 'Monthly' ? '9/mo' : '90/yr'}</p>
                  {timePlan === 'Yearly' && <p className="text-sm text-Marine-blue">2 months free</p>}
            </div>       
              
            </label>
                  </div>
                  
          <div className="-mt-3 w-full md:mt-0">
          <input
              type="radio"
              name="plan"
              id="Advanced"
              value="Advanced"
              className="hidden"
              
            />
            <label
              htmlFor="Advanced"
              className="border-2 rounded-lg mt-6 w-full flex px-4 py-3 plan md:flex-col md:items-start md:justify-end md:space-y-12 hover:border-Purplish-blue hover:cursor-pointer"
              onClick={RadioCheck}        >
              <img src={iconAdvance} alt="" className="md:w-10" />
                    <div className="ml-4 md:flex-1 md:ml-0">
                <p className="text-Marine-blue font-bold">Advanced</p> 
                  <p className="text-Cool-gray">${timePlan === 'Monthly' ? '12/mo' : '120/yr'}</p>  
                  {timePlan === 'Yearly' && <p className="text-sm text-Marine-blue">2 months free</p>}
            </div>       
              
            </label>
            </div>
                  
            <div className="-mt-3 w-full md:mt-0">
          <input
              type="radio"
              name="plan"
              id="Pro"
              value="Pro"
              className="hidden"
            />
            <label
              htmlFor="Pro"
              className="border-2 mt-6 rounded-lg w-full flex px-4 py-3 plan md:flex-col md:items-start md:justify-end md:space-y-12 hover:border-Purplish-blue hover:cursor-pointer"
              onClick={RadioCheck} >
              <img src={iconPro} alt=""  className="md:w-10"/>
                    <div className="ml-4 md:flex-1 md:ml-0">
                <p className="text-Marine-blue font-bold">Pro</p> 
                  <p className="text-Cool-gray">${timePlan === 'Monthly' ? '15/mo' : '150/yr'}</p>    
                  {timePlan === 'Yearly' && <p className="text-sm text-Marine-blue">2 months free</p>}
            </div>       
              
            </label>
          </div>
          </div>
                  <div className="w-full bg-Magnolia mt-5 rounded-lg flex justify-center p-3 items-center md:mt-10">
                  <span className={`mr-3 ${timePlan==='Monthly'?'text-Marine-blue': 'text-Cool-gray'} font-extrabold text-sm `}>Monthly</span>
                      <label className="inline-flex relative items-center cursor-pointer">
                          
  <input type="checkbox" onChange={handleClick} value="" className="sr-only peer" />
                          <div className="w-11 h-6 bg-Marine-blue rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[7px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-Marine-blue"></div>
                         </label> 
  <span className={`ml-3 ${timePlan==='Yearly'?'text-Marine-blue': 'text-Cool-gray'} font-extrabold text-sm `}>Yearly</span>
                  
          </div> 
         <button type="submit" className="hidden" ref={btn}>h</button>
        </form>

        <Link
          to="/addons"
          className="hidden px-4 py-2 bg-Marine-blue font-normal rounded-md hover:bg-blue-800 text-white mx-4 md:block absolute bottom-0 right-0"
          onClick={() => {
            setCurPage(3);
            btn.current.click()
          }}
        >
          Next Step
        </Link>

        <Link
          className="hidden px-4 py-2 font-medium text-Cool-gray md:block absolute bottom-0 left-0 hover:text-Marine-blue" to="/multi-form-app"
          onClick={() => {setCurPage(1)}}
        >
          Go Back
        </Link>
      </div>
      {/* Next Button */}
      <div className="fixed md:hidden flex justify-between items-center w-full bottom-0  bg-white  py-4">
      <Link
          className="px-4 py-2  font-medium rounded-md  text-Cool-gray  " to="/multi-form-app" onClick={() => {setCurPage(1)}}
        >
          Go Back
        </Link>
        <Link
          className="px-4 py-2 bg-Marine-blue font-medium rounded-md hover:bg-blue-800 text-white mx-4 "
          to="/addons"
          type="submit"
          form="myform"
          onClick={() => {
            setCurPage(3);
            btn.current.click()
          }}
        >
          Next Step
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Plan;
