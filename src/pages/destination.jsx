import NavBar from "../components/navBar";
import { destinationData } from "../../data";
import PlanetContent from "../components/planetContent";
import TabBtn from "../components/tabBtn";

import { useState } from "react";
import { motion } from "framer-motion";
motion
export default function Destination() {
  const [selectedTopic, setSelectedTopic] = useState("moon");

  function handleSelect(data) {
    setSelectedTopic(data);
  }
  return (
    <>
      <div className="destination-bg">
        <NavBar />

        <div className="lg:flex">

          <div className="lg:w-4/3">
            <div className="flex flex-col justify-center my-10 md:my-20">
              <span className="custom-text text-white mb-10 text-center 
                      md:text-lg md:text-left md:ps-10 md:mb-20 
                      lg:ps-30">
                <p className="text-gray-500 inline-block pe-1">01</p>
                PICK YOUR DESTINATION
              </span>

              <motion.img
                className="w-2/5 mx-auto md:w-1/3"
                src={destinationData[selectedTopic].images.png}

                key={selectedTopic}
                initial={{ translateX: -1000, rotate: 100 }}
                animate={{ translateX: 0, rotate: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="lg:flex lg:flex-col lg:justify-start lg:pt-25">
            <ul className="flex space-x-6 justify-center lg:justify-start lg:space-x-8">
              <TabBtn onSelect={()=>handleSelect('moon')} isSelected={selectedTopic=='moon'}>MOON</TabBtn>
              <TabBtn onSelect={()=>handleSelect('mars')} isSelected={selectedTopic=='mars'}>MARS</TabBtn>
              <TabBtn onSelect={()=>handleSelect('europa')} isSelected={selectedTopic=='europa'}>EUROPA</TabBtn>
              <TabBtn onSelect={()=>handleSelect('titan')} isSelected={selectedTopic=='titan'}>TITAN</TabBtn>
            </ul>

            <PlanetContent
              name={destinationData[selectedTopic].name}
              desc={destinationData[selectedTopic].description}
              dis={destinationData[selectedTopic].distance}
              travel={destinationData[selectedTopic].travel}
            />
          </div>

        </div>
      </div>
    </>
  );
}
