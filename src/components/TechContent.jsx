export default function TechContent({name, desc}) {
    return (
        <>
            <p className="text-sm text-gray-300 custom-text lg:text-md lg:mb-2">
                THE TERMINALOGY ...
            </p>
            <p className="text-lg text-white font-serif font-extralight lg:text-6xl">
                {name}
            </p>
            
            <p className="custom-text text-slate-200 my-5 mx-5 md:mx-20 lg:mx-0 lg:w-105">
                {desc}
            </p>
        </>
    )
}