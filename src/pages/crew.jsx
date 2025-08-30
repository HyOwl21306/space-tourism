import NavBar from "../components/navBar";
import { crewData } from "../../data";

import TabCircle from "../components/tabCircle";
import CrewInfor from "../components/CrewInfor";

import { useState } from "react";
import { motion } from "framer-motion";
motion
export default function Crew() {
  const [circle, setCicle] = useState(0);

  function handleSelect(data) {
    setCicle(data);
  }
  return (
    <>
      <div className="crew-bg lg:h-screen overflow-hidden">
        <NavBar />

              <div className="pt-10 lg:pt-20">
                <span className="custom-text text-white mb-10 text-center block
                        md:text-lg md:text-left md:ps-10 md:mb-20 
                        lg:ps-30 lg:inline">
                  <p className="text-gray-500 inline-block pe-1">02</p>
                  MEET YOUR CREW
                </span>
              </div>
        <div className="lg:flex lg:flex-row-reverse">

          <div className="flex flex-col justify-center lg:w-4/3">
              <motion.img
                className="border-b border-amber-50/10 h-40 md:h-80 mx-auto lg:h-100"
                src={crewData[circle].images.png}
                key={circle}
                initial={{ translateY: 100, opacity: 0.5 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1, ease:"easeInOut" }}
              />
          </div>

          <div className="flex flex-col text-center pb-20 lg:text-left lg:ps-30 lg:mt-20">
              <CrewInfor 
              role={crewData[circle].role}
              name={crewData[circle].name}
              bio={crewData[circle].bio}
              />

            <ul className="flex space-x-3 justify-center lg:justify-start lg:space-x-5 lg:mt-18">
              <TabCircle onSelect={()=>handleSelect(0)} isSelected={circle==0}></TabCircle>
              <TabCircle onSelect={()=>handleSelect(1)} isSelected={circle==1}></TabCircle>
              <TabCircle onSelect={()=>handleSelect(2)} isSelected={circle==2}></TabCircle>
              <TabCircle onSelect={()=>handleSelect(3)} isSelected={circle==3}></TabCircle>
            </ul>

          </div>

        </div>
      </div>
    </>
  );
}
