import { navLinkdata } from "../../data.js";
import NavLinkBtn from "./navLinkBtn.jsx";

import { useState } from "react";

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function openMenu() {
        setIsMenuOpen(!isMenuOpen);
    }


    let hamburger = <div onClick={openMenu} className="me-7 pt-8 cursor-pointer md:hidden">
                    <img src="../src/assets/shared/icon-hamburger.svg"/>
                </div>

    if (isMenuOpen) {
        hamburger = <div onClick={openMenu}
                        className="
                        z-100
                        fixed top-0 right-0 w-1/2 h-screen pt-5
                        custom-text text-white text-md
                        bg-gradient-to-r from-white/3 via-white/5 to-black/1 
                        backdrop-blur-xl cursor-pointer px-5
                    ">
                        <div className="flex justify-end">
                            <img onClick={openMenu} className="me-5 size-5 block" src="../src/assets/shared/icon-close.svg"/>
                        </div>
                    {navLinkdata.map((item) => (
                            <NavLinkBtn 
                            key={item.label}
                            {...item}/>
                        ))}
                    </div>
    }

    
    return (
        <>
            <div className="flex justify-between md:items-center md:pt-0 lg:pt-8">
                <div className="ms-5 pt-5 md:pt-0 md:ms-7 lg:ms-10">
                    <img className="size-12 object-contain" src="../src/assets/shared/logo.svg" />
                </div>

                <div className="hidden md:block">
                    <div className="flex space-x-10 
                        custom-text text-white w-fit 
                        bg-gradient-to-r from-white/3 via-white/5 to-black/1 
                        backdrop-blur-xl text-md
                        md:ps-10 md:pe-20
                        lg:ps-30 lg:pe-50 
                    ">
                        {navLinkdata.map((item) => (
                            <NavLinkBtn 
                            key={item.label}
                            {...item}/>
                        ))}
                    </div>
                </div>

                {hamburger}

            </div>
        </>
    )
}

export default NavBar;