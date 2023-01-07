import React, { useContext } from "react";
import sidebarmobile from "./images/bg-sidebar-mobile.svg";
import sidebardesktop from "./images/bg-sidebar-desktop.svg";
import Personal from "./components/Personal";
import Plan from "./components/Plan";
import Addons from "./components/Addons";
import Finish from "./components/Finish";
import Thank from "./components/Thank";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from './context/AllContext'

const App = () => {
  const {curPage} = useContext(UserContext)

  return (
    <BrowserRouter>
      <main className="min-h-screen md:flex md:justify-center md:items-center">
        <div className="md:flex md:w-[70vw] md:max-w-6xl md:bg-white md:shadow-lg md:rounded-xl md:p-3  ">
          {/* Mobile bg */}
          <div className="relative z-0 md:hidden">
            <img src={sidebarmobile} alt="" className="w-full" />
          </div>

          <div className="z-0 hidden md:block md:relative">
            <img src={sidebardesktop} alt="" className="w-full" />

            {/* Page number */}
            <div className="hidden mx-auto w-[50vw] relative -top-36 md:flex md:justify-around md:top-0 md:flex-col md:flex-1 md:absolute md:left-0 p-8">
              <div className="flex mb-7">
                <div className={`${curPage===1?'bg-Light-blue text-Marine-blue': 'text-white'} w-9 h-9 flex justify-center items-center rounded-full font-bold border`}>
                  1
                </div>
                <div className="mx-4">
                  <p className="text-Pastel-blue font-normal text-xs">STEP 1</p>
                  <p className="text-white text-sm font-medium -mt-[2px]">
                    YOUR INFO
                  </p>
                </div>
              </div>

              <div className="flex mb-7">
                <div className={`${curPage===2?'bg-Light-blue text-Marine-blue': 'text-white'} w-9 h-9 flex justify-center items-center rounded-full font-bold border`}>
                  2
                </div>
                <div className="mx-4">
                  <p className="text-Pastel-blue font-normal text-xs">STEP 2</p>
                  <p className="text-white text-sm font-medium -mt-[2px]">
                    SELECT PLAN
                  </p>
                </div>
              </div>

              <div className="flex mb-7">
                <div className={`${curPage===3?'bg-Light-blue text-Marine-blue': 'text-white'} w-9 h-9 flex justify-center items-center rounded-full font-bold border`}>
                  3
                </div>
                <div className="mx-4">
                  <p className="text-Pastel-blue font-normal text-xs">STEP 3</p>
                  <p className="text-white text-sm font-medium -mt-[2px]">
                    ADD-ONS
                  </p>
                </div>
              </div>

              <div className="flex mb-7">
                <div className={`${curPage===4?'bg-Light-blue text-Marine-blue': 'text-white'} w-9 h-9 flex justify-center items-center rounded-full font-bold border`}>
                  4
                </div>
                <div className="mx-4">
                  <p className="text-Pastel-blue font-normal text-xs">STEP 4</p>
                  <p className="text-white text-sm font-medium -mt-[2px]">
                    SUMMARY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Page number */}
          <div className="mx-auto w-[50vw] relative -top-36 flex justify-around md:top-0 md:flex-col md:flex-1 md:absolute md:left-0 md:hidden">
              <div className={`${curPage===1?'bg-Light-blue text-Marine-blue': 'text-white'} w-9 h-9 flex justify-center items-center rounded-full font-bold border`}>
              1
            </div>

            <div className={`${curPage===2?'bg-Light-blue text-Marine-blue': 'text-white'} w-9 h-9 flex justify-center items-center rounded-full font-bold border`}>
              2
            </div>

            <div className={`${curPage===3?'bg-Light-blue text-Marine-blue': 'text-white'} w-9 h-9 flex justify-center items-center rounded-full font-bold border`}>
              3
            </div>

            <div className={`${curPage===4?'bg-Light-blue text-Marine-blue': 'text-white'} w-9 h-9 flex justify-center items-center rounded-full font-bold border`}>
              4
            </div>
          </div>
          
          <div className="relative z-10 -top-24 md:static md:w-full md:flex-1 md:py-4">
            
            <Routes>
              <Route exact path="/multi-form-app" element={<Personal />} />
              <Route exact path="/plan" element={<Plan />} />
              <Route exact path="/addons" element={<Addons />} />
              <Route exact path="/finish" element={<Finish />} />
              <Route exact path="/thank" element={<Thank />} />
              </Routes>
              
            </div>
          
        </div>
        </main>
    </BrowserRouter>
  );
};

export default App;
