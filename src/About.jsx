import { motion } from "motion/react"
import { useTheme } from "./ThemeContext"
import {
    GlobeAltIcon,
    LightBulbIcon,
    IdentificationIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"

function About() {
    const [approach, setApproach] = useState(false)
    const [value, setValue] = useState(false)

    const { isDark } = useTheme()
    const values = [
        {
            icon: <IdentificationIcon className="w-5 h-5" />,
            head: "Clarity first:",
            body: "Simple beats clever. In code, design, and how I work.",
        },
        {
            icon: <IdentificationIcon className="w-5 h-5" />,
            head: "Always learning:",
            body: "I stay curious and build my skills one project at a time.",
        },
        {
            icon: <IdentificationIcon className="w-5 h-5" />,
            head: "Details matter:",
            body: "Small things like spacing and speed shape the full experience.",
        },
        {
            icon: <IdentificationIcon className="w-5 h-5" />,
            head: "People over pixels:",
            body: "I build for real users. Clean, accessible, and built with purpose.",
        },
        {
            icon: <IdentificationIcon className="w-5 h-5" />,
            head: "Care in every line:",
            body: "I value clear thinking, honest feedback, and doing things the right way.",
        },
    ]
    return (
        <section
            className={`pb-20 w-full transform transition-all duration-300 delay-125 ${
                isDark ? "bg-gray-900 text-gray-200" : "bg-white  text-gray-700"
            }`}
        >
            <div className=" w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-300"></div>
            <header
                className={` text-center space-y-3 p-3 transition-colors duration-300 delay-125 py-7   ${
                    isDark
                        ? " bg-gradient-to-br from-gray-800 via via-gray-700 to-gray-900"
                        : "bg-gradient-to-br from-white via-gray-200 to-gray-300"
                }`}
            >
                <h1
                    className={` font-bold text-3xl sm:text-4xl lg:text-5xl ${
                        isDark ? "text-white" : "text-gray-700"
                    } `}
                >
                    About Me
                </h1>
                <p>Discover my journey, passion and the story behind my work</p>
            </header>
            <main
                className={` space-y-5 md:grid md:grid-cols-2 gap-12 mb-10 min-h-screen grid content-center text-sm p-5 mt-10 w-auto md:max-w-9/10 md:mx-auto 
                 `}
            >
                <motion.div
                    initial={{ opacity: 0, y: "-50px" }}
                    whileInView={{ opacity: 1, y: "0px" }}
                    transition={{ duration: 1 }}
                    className={`space-y-2 
                        space-x-2 p-8 rounded-xl shadow-2xl border transform transition-colors duration-300 delay-125 ease-in-out hover:scale-101 ${
                            isDark
                                ? " backdrop-blur-md bg-gray-800 border-gray-600"
                                : " border-gray-300"
                        }`}
                >
                    <div className={`flex items-center gap-3 mb-6 `}>
                        <div
                            className={` rounded-lg p-2 ${
                                isDark
                                    ? "bg-blue-500/20 text-blue-400"
                                    : "bg-blue-100 text-blue-600"
                            }`}
                        >
                            <IdentificationIcon className="w-6 h-6" />
                        </div>

                        <h3
                            className={` font-bold text-xl sm:text-2xl lg:text-3xl ${
                                isDark ? "text-white" : "text-gray-700"
                            }`}
                        >
                            Who Am I
                        </h3>
                    </div>
                    <p className=" sm:text-base leading-relaxed">
                        I didn’t start in tech. I studied physics, the kind of
                        discipline that teaches you how to break down problems
                        and sit with the messy parts. But curiosity pulled me
                        into code, and I stayed for the challenge of turning
                        logic into something people can actually see and use
                    </p>
                    <p className=" mt-4 sm:text-base leading-relaxed">
                        Now i craft, responsive interactive and smooth Websites.
                        I’m not just learning this, I’m living it, one project
                        and pull request at a time.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: "-50px" }}
                    whileInView={{ opacity: 1, y: "0px" }}
                    transition={{ duration: 1 }}
                    className={`space-y-2 
                        space-x-2 p-8 rounded-xl shadow-2xl border transform transition-colors duration-300 delay-125 ease-in-out hover:scale-101 ${
                            isDark
                                ? " backdrop-blur-md bg-gray-800 border-gray-600"
                                : " border-gray-300"
                        }`}
                >
                    <div className={`flex items-center gap-3 mb-6 `}>
                        <div
                            className={` rounded-lg p-2 ${
                                isDark
                                    ? "bg-purple-500/20 text-purple-400"
                                    : "bg-purple-100 text-purple-600"
                            }`}
                        >
                            <LightBulbIcon className="w-6 h-6 " />
                        </div>
                        <h3
                            className={` text-center font-bold text-xl sm:text-2xl lg:text-3xl ${
                                isDark ? "text-white" : "text-gray-700"
                            }`}
                        >
                            My Approach
                        </h3>
                    </div >
                    <div className={` md:block ${approach?"block": "hidden"}`}>
                    <p className="sm:text-base leading-relaxed">
                        For me, frontend isn’t just about making things look
                        good. It’s about crafting experiences that work smoothly
                        for real people. I care about the details, the
                        performance, and making sure users don’t have to think
                        twice when navigating a site.
                    </p>
                    <p className=" mt-4 sm:text-base leading-relaxed">
                        So, i don’t just throw components together. I think in
                        systems and patterns. Every line of code I write solves
                        a problem for a user, not just for a screen.
                    </p>
                    </div>
                    <p className=" md:hidden mt-4 cursor-pointer bg-purple-500/50 rounded-4xl w-fit px-3 py-2"
                    onClick={() => setApproach(!approach)} >{approach? "Show less": "Show more"}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: "-50px" }}
                    whileInView={{ opacity: 1, y: "0px" }}
                    transition={{ duration: 1 }}
                    className={` md:col-span-2 space-y-2 
                        space-x-2 p-8 rounded-xl shadow-2xl border transform transition-colors duration-300 delay-125 ease-in-out hover:scale-101 ${
                            isDark
                                ? " backdrop-blur-md bg-gray-800 border-gray-600"
                                : " border-gray-300"
                        }`}
                >
                    <div className={`flex items-center gap-3 mb-6  `}>
                        <div
                            className={` rounded-lg p-2 ${
                                isDark
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-green-100 text-green-600"
                            }`}
                        >
                            <GlobeAltIcon className="w-6 h-6" />
                        </div>

                        <h3
                            className={` text-center font-bold text-xl sm:text-2xl lg:text-3xl ${
                                isDark ? "text-white" : "text-gray-700"
                            }`}
                        >
                            Values
                        </h3>
                    </div>
                    <div className={` md:block ${value? "block": "hidden"}`}>
                    <p className=" mb-8 sm:text-base leading-relaxed">
                        I build with intention, not just to finish a task, but
                        to create something that’s thoughtful and lasting. Here
                        are a few values that guide my work:
                    </p>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {values.map((item, index) => (
                            <li
                                key={index}
                                className={`p-6 rounded-xl border ${
                                    isDark
                                        ? "bg-gray-700 border-gray-600 hover:border-gray-500"
                                        : "bg-gray-50 border-gray-200"
                                }`}
                            >
                                <span
                                    className={`flex items-center gap-3 mb-3 ${
                                        isDark
                                            ? "text-gray-400"
                                            : "text-blue-600"
                                    }`}
                                >
                                    {item.icon}
                                    <h3
                                        className={` font-semibold ${
                                            isDark
                                                ? "text-white"
                                                : " text-gray-700"
                                        } `}
                                    >
                                        {item.head}
                                    </h3>
                                </span>
                                <p className="md:text-sm leading-relaxed  ">
                                    {item.body}
                                </p>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <p className=" md:hidden mt-4 cursor-pointer bg-green-500/50 rounded-4xl w-fit px-3 py-2"
                    onClick={() => setValue(!value)} >{value? "Show less": "Show more"}</p>
                </motion.div>
            </main>
            <div className=" text-center">
                <button
                    className={`rounded-full font-semibold px-10 py-3 min-w-50 hover:scale-95 bg-gradient-to-r from-purple-600 to-blue-300 transform transition-all ease-in-out duration-100 cursor-pointer 
                     ${isDark ? "text-gray-200" : "text-gray-700"}`}
                >
                    Let's build something together
                </button>
            </div>
        </section>
    )
}

export default About
