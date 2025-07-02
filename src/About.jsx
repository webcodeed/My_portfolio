import { motion } from "motion/react"
import { useTheme } from "./ThemeContext"
import {
    GlobeAltIcon,
    LightBulbIcon,
    IdentificationIcon,
} from "@heroicons/react/24/solid"

function About() {
    const { isDark } = useTheme()
    const values = [
        {
            head: "Clarity first:",
            body: "Simple beats clever. In code, design, and how I work.",
        },
        {
            head: "Always learning:",
            body: "I stay curious and build my skills one project at a time.",
        },
        {
            head: "Details matter:",
            body: "Small things like spacing and speed shape the full experience.",
        },
        {
            head: "People over pixels:",
            body: "I build for real users. Clean, accessible, and built with purpose.",
        },
        {
            head: "Care in every line:",
            body: "I value clear thinking, honest feedback, and doing things the right way.",
        },
    ]
    return (
        <section className={``}>
            <div className=" w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-300"></div>
            <div
                className={` transform transition-colors min-h-screen grid content-center duration-400 text-sm space-y-5 p-5 w-auto ${
                    isDark
                        ? "bg-gray-700 text-gray-200"
                        : "bg-white  text-gray-700"
                } `}
            >
                <motion.header
                    initial={{ opacity: 0, y:"50px" }}
                    whileInView={{ opacity: 1, y:"0px" }}
                    transition={{duration:1, delay:1}}
                    className={` text-center my-10`}
                >
                    <h1
                        className={` font-bold text-3xl sm:text-4xl lg:text-5xl ${
                            isDark ? "text-white" : "text-gray-700"
                        } `}
                    >
                        About Me
                    </h1>
                    <p>
                        Discover my journey, passion and the story behind my
                        work
                    </p>
                </motion.header>
                <main className=" space-y-5 md:grid md:grid-cols-2 md:gap-2">
                    <motion.div
                    initial={{ opacity: 0, y:"50px" }}
                    whileInView={{ opacity: 1, y:"0px" }}
                    transition={{duration:1, delay:1}}
                        className={` p-3 rounded-xl space-y-2 ${
                            isDark
                                ? "bg-gray-900/60 backdrop-blur-md border-gray-700"
                                : "bg-gray-200 backdrop-blur-md border-gray-20"
                        }`}
                    >
                        <div className="flex justify-center items-center space-x-2 ">
                            <IdentificationIcon className="w-6 h-6" />

                            <h3
                                className={` text-center font-bold text-xl sm:text-2xl lg:text-3xl ${
                                    isDark ? "text-white" : "text-gray-700"
                                }`}
                            >
                                Who Am I
                            </h3>
                        </div>
                        <p className=" leading-6">
                            I didn’t start in tech. I studied physics, the kind
                            of discipline that teaches you how to break down
                            problems and sit with the messy parts. But curiosity
                            pulled me into code, and I stayed for the challenge
                            of turning logic into something people can actually
                            see and use. Now i craft, responsive interactive and
                            smooth Websites. I’m not just learning this, I’m
                            living it, one project and pull request at a time.
                        </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y:"50px" }}
                    whileInView={{ opacity: 1, y:"0px" }}
                    transition={{duration:1, delay:1}}
                        className={` p-3 rounded-xl space-y-2 ${
                            isDark
                                ? "bg-gray-900/60 backdrop-blur-md border-gray-700"
                                : "bg-gray-200 backdrop-blur-md border-gray-20"
                        }`}
                    >
                        <div className="flex justify-center items-center space-x-2 ">
                            <LightBulbIcon className="w-6 h-6 " />
                            <h3
                                className={` text-center font-bold text-xl sm:text-2xl lg:text-3xl ${
                                    isDark ? "text-white" : "text-gray-700"
                                }`}
                            >
                                My Approach
                            </h3>
                        </div>
                        <p className=" leading-6">
                            For me, frontend isn’t just about making things look
                            good. It’s about crafting experiences that work
                            smoothly for real people. I care about the details,
                            the performance, and making sure users don’t have to
                            think twice when navigating a site. So i don’t just
                            throw components together. I think in systems and
                            patterns. Every line of code I write solves a
                            problem for a user, not just for a screen.
                        </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y:"50px" }}
                    whileInView={{ opacity: 1, y:"0px" }}
                    transition={{duration:1, delay:1}}
                        className={` p-3 rounded-xl space-y-2 ${
                            isDark
                                ? "bg-gray-900/60 backdrop-blur-md border-gray-700"
                                : "bg-gray-200 backdrop-blur-md border-gray-20"
                        }`}
                    >
                        <div className="flex justify-center items-center space-x-2 ">
                            <GlobeAltIcon className="w-6 h-6" />

                            <h3
                                className={` text-center font-bold text-xl sm:text-2xl lg:text-3xl ${
                                    isDark ? "text-white" : "text-gray-700"
                                }`}
                            >
                                Values
                            </h3>
                        </div>
                        <p className=" leading-6">
                            I build with intention, not just to finish a task,
                            but to create something that’s thoughtful and
                            lasting. Here are a few values that guide my work:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            {values.map((item) => (
                                <li key={item.head} className="">
                                    <span className="font-semibold">
                                        {item.head}{" "}
                                    </span>
                                    {item.body}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </main>
            </div>
        </section>
    )
}

export default About
