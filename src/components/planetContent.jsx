function PlanetContent({name, desc, dis, travel}) {
    return (
        <div className="text-center space-y-4 pt-10 pb-40 
                    md:space-y-10 md:pt-20 
                    lg:pt-5 lg:text-left lg:w-2/3 lg:pb-15">
            <h1 className="text-white text-5xl font-serif md:text-8xl lg:text-7xl">
                {name}
            </h1>
            <p className="text-pink-50 custom-text mx-10 md:mx-50 md:text-2xl lg:text-sm lg:mx-0 lg:w-140 lg:h-20 lg:pe-40">
                {desc}
            </p>
            <hr className="text-white/30 mx-10 my-10" />

            <div className="lg:flex lg:justify-start lg:space-x-20">
                <div className="mb-8 md:mb-15">
                <h2>AVG. DISTANCE</h2>
                <p className="text-white text-2xl md:text-5xl lg:text-2xl">
                    {dis}
                </p>
                </div>

                <div>
                    <h2>EST. TRAVEL TIME</h2>
                    <p className="text-white text-2xl md:text-5xl lg:text-2xl">
                        {travel}
                    </p>
                </div>

            </div>

        </div>
    )
}

export default PlanetContent;