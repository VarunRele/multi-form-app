import React, {useRef, useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import UserContext from '../context/AllContext'

const Addons = () => {
  const {setCurPage, timePlan, setOnlineAdd, setStorageAdd, setProfileAdd} = useContext(UserContext)

  const SubmitForm = (e) => {
    e.preventDefault();
    setOnlineAdd(e.target.online.checked)
    setStorageAdd(e.target.Storage.checked)
    setProfileAdd(e.target.customizable.checked)
  };

  const online = useRef()
  const storage = useRef()
  const cust = useRef()
  const btn = useRef()

  const selected = (e) => {
    if (e.target.id === 'online') {
      online.current.classList.toggle('selected2')
    } else if (e.target.id === 'Storage') {
      storage.current.classList.toggle('selected2')
    }
    else if (e.target.id === 'customizable') {
      cust.current.classList.toggle('selected2')
    }
  }

  return (
    <>
      <div className="bg-white w-[90vw] md:w-full md:max-w-2xl mx-auto rounded-xl px-6 py-8 shadow-lg md:shadow-none md:h-full md:relative">
        <h1 className="text-3xl font-bold text-Marine-blue mb-2">
          Pick add-ons
        </h1>

        <h2 className="my-2 md:mb-10 text-lg text-Cool-gray">
          Add-ons help enchance your gaming experience.
        </h2>

        <form action="" id="myform" onSubmit={SubmitForm}>
          <ul className="w-full">
            <li className="w-full mt-6">
              <label
                htmlFor="online"
                className="w-full flex items-center justify-between border p-3 rounded-lg hover:cursor-pointer"
                onClick={selected}
                ref={online}
              >
                <div className="px-2">
                  <input
                    type="checkbox"
                    name="online"
                    id="online"
                    className="bg-white border-gray-300 text-Purplish-blue w-5 h-5 rounded focus:ring-0"
                  />
                </div>

                <div className="flex-1 ml-2">
                  <p className="text-Marine-blue font-semibold">
                    Online service
                  </p>
                  <p className="text-Cool-gray text-sm">
                    Access to multiplayer games
                  </p>
                </div>
                <div className="text-Purplish-blue text-sm">+${ timePlan==='Monthly'? '1/mo': '10/yr' }</div>
              </label>
            </li>
            <li className="w-full mt-3">
              <label
                htmlFor="Storage"
                className="w-full flex items-center justify-between border p-3 rounded-lg hover:cursor-pointer"
                onClick={selected}
                ref={storage}
              >
                <div className="px-2">
                  <input
                    type="checkbox"
                    name="Storage"
                    id="Storage"
                    className="bg-white border-gray-300 text-Purplish-blue w-5 h-5 rounded focus:ring-0"
                  />
                </div>

                <div className="flex-1 ml-2">
                  <p className="text-Marine-blue font-semibold">
                    Larger storage
                  </p>
                  <p className="text-Cool-gray text-sm">
                    Extra 1TB of cloud save
                  </p>
                </div>
                <div className="text-Purplish-blue text-sm">+${ timePlan==='Monthly'? '2/mo': '20/yr' }</div>
              </label>
            </li>
            <li className="w-full mt-3">
              <label
                htmlFor="customizable"
                className="w-full flex items-center justify-between border p-3 rounded-lg hover:cursor-pointer"
                onClick={selected}
                ref={cust}
              >
                <div className="px-2">
                  <input
                    type="checkbox"
                    name="customizable"
                    id="customizable"
                    className="bg-white border-gray-300 text-Purplish-blue w-5 h-5 rounded focus:ring-0"
                  />
                </div>

                <div className="flex-1 ml-2">
                  <p className="text-Marine-blue font-semibold">
                    Customizable profile
                  </p>
                  <p className="text-Cool-gray text-sm">
                    Custom theme on your profile
                  </p>
                </div>
                <div className="text-Purplish-blue text-sm">+${ timePlan==='Monthly'? '2/mo': '20/yr' }</div>
              </label>
            </li>
          </ul>
          <button type="submit" className="hidden" ref={btn}>h</button>
        </form>

        <Link
          to="/finish"
          className="hidden px-4 py-2 bg-Marine-blue font-normal rounded-md hover:bg-blue-800 text-white mx-4 md:block absolute bottom-0 right-0"
          onClick={() => {
            setCurPage(4);
            btn.current.click()
          }}
        >
          Next Step
        </Link>

        <Link onClick={() => { setCurPage(2) }} className="hidden px-4 py-2 font-medium text-Cool-gray md:block absolute bottom-0 left-0 hover:text-Marine-blue" to="/plan">
          Go Back
        </Link>
      </div>
      {/* Next Button */}
      <div className="fixed md:hidden flex justify-between items-center w-full bottom-0  bg-white  py-4">
        <Link className="px-4 py-2  font-medium rounded-md  text-Cool-gray " to="/plan" onClick={() => { setCurPage(2) }}>
          Go Back
        </Link>
        <Link
          className="px-4 py-2 bg-Marine-blue font-medium rounded-md hover:bg-blue-800 text-white mx-4 "
          to="/finish"
          onClick={() => {
            setCurPage(4);
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

export default Addons;
