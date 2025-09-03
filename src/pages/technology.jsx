import NavBar from "../components/navBar";
import TabTechBtn from "../components/tabTechBtn";
import TechContent from "../components/TechContent";

import { useState } from "react";
import { motion } from "framer-motion";
motion
import { techData } from "../../data";

export default function Technology() {
  const [topic, setTopic] = useState(0);

  function handleTopic(data) {
    setTopic(data);
  }

  return (
    <>
      <div className="technology-bg overflow-hidden">
        <NavBar />

        <div className="pt-10 lg:pt-20">
                <span className="custom-text text-white mb-10 text-center block
                        md:text-lg md:text-left md:ps-10 md:mb-20 
                        lg:ps-30 lg:inline">
                  <p className="text-gray-500 inline-block pe-1">03</p>
                  SPACE LAUNCH 101
                </span>
          </div>

        <div className="lg:flex lg:flex-row-reverse">

          <motion.div
          key={topic}
          initial={{ translateX: 400 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1, ease:"easeInOut" }}
          >
            <img className="w-full lg:hidden" src={techData[topic].images.landscape}/>
            <img className="hidden pb-20 float-right lg:block" src={techData[topic].images.portrait}/>
          </motion.div>

          <div className="flex flex-col text-center pb-20 lg:text-left lg:ps-30 lg:mt-30 lg:flex-row lg:w-2/3">

            <ul className="flex my-10 space-x-4 justify-center lg:justify-start lg:my-0 lg:me-18 lg:space-y-5 lg:flex-col">
              <TabTechBtn onSelect={() => handleTopic(0)} isSelected={topic==0}>1</TabTechBtn>
              <TabTechBtn onSelect={() => handleTopic(1)} isSelected={topic==1}>2</TabTechBtn>
              <TabTechBtn onSelect={() => handleTopic(2)} isSelected={topic==2}>3</TabTechBtn>
            </ul>

              <div>
                <TechContent
                name={techData[topic].name}
                desc={techData[topic].description}
                />
              </div>
          </div>

        </div>
      </div>
    </>
  );
}
