export default function CrewInfor({role, name, bio}) {
    return (
        <>
            <p className="text-sm text-gray-400 lg:text-xl lg:mb-2">
                {role}
            </p>
            <p className="text-lg text-white 
                font-serif font-extralight lg:text-4xl">
                {name}
            </p>
            
            <p className="custom-text text-slate-300 
                my-8 mx-5 md:mx-20 lg:mx-0 lg:pe-40">
                {bio}
            </p>
        </>
    )
}