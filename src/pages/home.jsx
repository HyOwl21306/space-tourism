import NavBar from "../components/navBar";

export default function Home() {
  return (
    <>
      <div className="home-bg h-full pb-20 lg:h-screen">
        <NavBar />

        <div className="flex flex-col mt-10 items-center space-y-15 
            lg:flex-row lg:justify-between lg:mx-30 lg:mt-30">

          <div className="flex flex-col space-y-7 text-center lg:text-justify lg:w-1/2">
            <p className="custom-text text-blue-100 lg:text-lg">
              SO, YOU WANT TO TRAVEL TO
              </p>
            <h1 className="text-white font-serif text-8xl md:text-9xl">
              SPACE
            </h1>
            <p className="custom-text text-blue-100 mx-5 md:mx-40 lg:me-35 lg:mx-0">
              Let’s face it; if you want to go to space, 
              you might as well genuinely go to outer space and not hover kind of on the edge of it. 
              Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
  
          <div className="bg-white size-35 rounded-full flex font-serif 
            justify-center items-center lg:me-20 lg:size-50 animate-wiggle
            shadow-[0px_0px_50px_white]">
            <p className="lg:text-2xl">EXPLORE</p>
          </div>
        </div>

      </div>
    </>
  );
}
