import { motion } from "motion/react"
import { useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useTheme } from "./ThemeContext"
function NavBar() {
    //    DarkMode
    const { isDark, toggleTheme } = useTheme()

    // menuBar
    const [isMenu, setIsMenu] = useState(false)
    const nav = ["Home", "About", "Skill", "Projects", "Contact"]

    // Navbar animation
    const fadeIn = {
        hidden: { opacity: 0, y: "-100%" },
        show: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 2,
            },
        },
    }

    return (
        // Navbar
        <motion.nav
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className={` flex md:flex-wrap px-6 py-3 items-center justify-evenly w-full md:space-x-8 transition-colors delay-125 duration-300 fixed top-0 z-50 ${
                isDark
                    ? "bg-gray-800 backdrop-blur-md border-gray-700"
                    : "bg-gray-200 backdrop-blur-md border-gray-20"
            }`}
        >
            {/* Name header */}
            <h2 className=" grow-3 font-semibold text-2xl md:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text ">
                Ayomide Otegbade
            </h2>
            {/* ToggleButton */}
            <button
                onClick={toggleTheme}
                className=" space-x-5 text-2xl px-3 py-2 cursor-pointer hover:scale-120 active:scale-90 transform transition-all ease-in-out duration-200 "
            >
                {isDark ? (
                    <MoonIcon className="w-7 h-8 text-gray-200" />
                ) : (
                    <SunIcon className="w-7 h-8 text-gray-700" />
                )}
            </button>

            {/* Menu button */}
            <button
                onClick={() => setIsMenu(!isMenu)}
                className={`md:hidden ${
                    isDark ? "text-gray-200" : "text-gray-700"
                }`}
            >
                {isMenu ? (
                    <XMarkIcon className="w-7 h-8" />
                ) : (
                    <Bars3Icon className="w-7 h-8" />
                )}
            </button>
            {/* Navigation  */}
            {/* DO NOT FORGET USEREF AND ALSO THE EFFECT THAT HIGHLIGHTS THE CURRENT PAGE  */}
            <ul
                className={`md:flex md:flex-wrap md:justify-center  md:items-center md:grow-1 md:gap-5 absolute opacity-0 md:opacity-100 md:z-auto md:static md:p-0 md:h-auto md:translate-x-0 w-full md:w-auto p-2 backdrop-blur-md bg-inherit h-[40vh] transform transition-all ease-in-out duration-500
                ${
                    isMenu
                        ? "top-[80px] translate-x-0 opacity-100 z-10"
                        : "top-[-100%] translate-x-full opacity-0 z-[-1]"
                }
                `}
            >
                {nav.map((item) => (
                    <li
                        key={item}
                        className={` 
                                md:relative md:after:content-[''] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:h-[3px] md:after:w-full md:after:origin-center md:after:transform md:after:transition-transform md:after:duration-300 md:after:scale-x-0 md:hover:after:scale-x-100
                                md:text-lg md:p-0 w-auto md:hover:bg-transparent font-semibold cursor-pointer p-2  transition-colors duration-200 ${
                                    isDark
                                        ? "text-gray-200 md:after:bg-gray-200 hover:bg-gray-900"
                                        : "text-gray-700 hover:bg-gray-300 md:after:bg-gray-700 "
                                }`}
                        onClick={() => setIsMenu(!isMenu)}
                    >
                        {item}
                    </li>
                ))}
                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:p-0 p-2 w-max
                        "
                >
                    <a
                        href="http://google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={` px-5 py-2 text-md font-semibold rounded-lg
                                    ${
                                        isDark
                                            ? "text-gray-700 bg-blue-400"
                                            : "bg-purple-600 text-gray-200"
                                    }
                                `}
                    >
                        Resume
                    </a>
                </motion.li>
            </ul>
        </motion.nav>
    )
}

export default NavBar
