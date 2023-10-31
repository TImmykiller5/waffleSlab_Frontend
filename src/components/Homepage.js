import React from "react";
import { useState } from "react";
import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
import Form3 from "./forms/Form3";

function Homepage() {
  const [showCalc, setShowCalc] = useState(false);
  const [active, setActive] = useState(false);
  const [activeform, setActiveForm] = useState('panel');
  const handleFormSwitch = (trigger) => {
     setActiveForm(trigger);
  }
  const handleSelected = (e) => {
    console.log(e.target)
    setActive()
    e.target.classList.toggle('active')

  }
  return (
    <div className="bg-slate-50">
      <div className=" bg-slate-100 py-10 mt-16">
        <div className="flex flex-col gap-4 items-center  px-20">
          <div className=" border-2 bg-indigo-100 border-indigo-500 text-xs rounded-2xl px-2 py-1">
            Reinforced Concrete Design
          </div>
          <div>
            <h1 className="text-4xl">Flat hjsgrdo</h1>
          </div>
          <div>
            <p className="flex text-center">
              The Flat Slab Design app is meticulously crafted to assist
              students and engineers in swiftly creating flat slab designs
              across any platform. With user-friendly features and a powerful
              design engine, you can streamline the design process, ensuring
              efficiency and precision in every project. Welcome to a new era of
              effortless flat slab design.
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <button onClick={() => setShowCalc(!showCalc)} className="text-sm bg-gradient-to-b from-indigo-400 to-indigo-300 hover:from-indigo-400 hover:to-indigo-500 px-3 py-2 rounded-md text-white">
              Start New Project
            </button>
            <div>Or</div>
            <button className="text-sm bg-gradient-to-b from-indigo-400 to-indigo-300 hover:from-indigo-400 hover:to-indigo-500 px-3 py-2 rounded-md text-white">
              <p>Load Recent Project {">"}</p>
            </button>
          </div>
        </div>
      </div>
      <div className={`${showCalc ? "block" : "hidden"} `}>
        <div  className="flex flex-col gap-8 items-center">
          <h1>SLAB DESIGN</h1>
          <div className="flex gap-4 justify-between w-full p-4">
            <div className={`w-1/3`}>
              <button className="w-full" onClick={(e) => {handleFormSwitch('panel'); handleSelected(e)}}>
              Panel Information
              </button>
            </div>
            <div className={`w-1/3`}>
              <button className="w-full" onClick={() => handleFormSwitch('reinforcement')}>
              Reinforcement 
              </button>
            </div>
            <div className={`w-1/3`}>
              <button className="w-full" onClick={() => handleFormSwitch('loading')}>
              Loading Details

              </button>
            </div>
          </div>
          <div>
            {activeform === 'panel' ? <Form1 /> : activeform === 'reinforcement' ? <Form2/> : <Form3/> }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
