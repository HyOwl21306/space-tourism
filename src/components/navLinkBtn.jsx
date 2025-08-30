import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"
motion
function NavLinkBtn({to, number, label}) {
    return (
        <>
            <NavLink 
                to={to} 
                >
                {({ isActive }) => (
                    <motion.div 
                    className="relative py-5 md:py-10 lg:py-6"
                    whileHover={{ scale: 1.05 }}
                    >
                
                
                <span className="relative z-10">
                    <b className="font-bold me-2 md:hidden inline-block lg:inline-block">
                        {number}
                    </b> 
                    {label}
                </span>

                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                </motion.div>
                )}
            </NavLink>
        </>
    )
}

export default NavLinkBtn;