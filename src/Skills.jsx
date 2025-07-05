import { useState } from "react"
import { useTheme } from "./ThemeContext"
import { motion } from "motion/react"
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa"
import { LightBulbIcon } from "@heroicons/react/24/outline"

function Skills() {
    const { isDark } = useTheme()

    const [skills, setSkills] = useState("tech")

    const techSkills = [
        {
            name: "HTML",
            icon: <FaHtml5 />,
            level: "90",
            color: "from-cyan-400 to-cyan-600",
        },
        {
            name: "CSS",
            icon: <FaCss3 />,
            level: "92",
            color: "from-orange-400 to-orange-600",
        },
        {
            name: "Tailwind CSS",
            icon: <FaCss3 />,
            level: "92",
            color: "from-teal-400 to-teal-600",
        },
        {
            name: "JavaScript",
            icon: <FaHtml5 />,
            level: "85",
            color: "from-orange-400 to-orange-600",
        },
        { name: "React", icon: <FaReact />, level: "80", color: "" },
        {
            name: "Next.js",
            icon: <FaReact />,
            level: "20",
            color: "from-gray-600 to-gray-800",
        },
        {
            name: "Typescript",
            icon: <FaReact />,
            level: "20",
            color: "from-blue-400 to-blue-600",
        },
        {
            name: "REST APIs",
            icon: <FaReact />,
            level: "73",
            color: "from-purple-400 to-purple-600",
        },
        {
            name: "Node.js",
            icon: <FaReact />,
            level: "20",
            color: "from-green-400 to-green-600",
        },
        {
            name: "Appwrite",
            icon: <FaReact />,
            level: "70",
            color: "from-pink-400 to-pink-700",
        },
        {
            name: "Git & GitHub",
            icon: <FaReact />,
            level: "88",
            color: "from-gray-500 to-gray-700",
        },
        {
            name: "VS Code",
            icon: <FaReact />,
            level: "95",
            color: "from-indigo-400 to-indigo-600",
        },
        {
            name: "UI/UX Design",
            icon: <FaReact />,
            level: "50",
            color: "from-rose-400 to-rose-600",
        },
    ]

    const softSkils = [
        { name: "Problem Solving", icon: <LightBulbIcon />, level: "85" },
        { name: "Creative Thinking", icon: <LightBulbIcon />, level: "81" },
        { name: "Attention to Detail", icon: <LightBulbIcon />, level: "80" },
        { name: "Communication Skills", icon: <LightBulbIcon />, level: "90" },
        { name: "Team Collaboration", icon: <LightBulbIcon />, level: "90" },
        {
            name: "Adaptability & Continuous Learning",
            icon: <LightBulbIcon />,
            level: "88",
        },
        { name: "Technical Proficiency", icon: <LightBulbIcon />, level: "88" },
    ]

    const Tech = ({ item, index }) => {
        {
            return (
                <div
                    className={` rounded-xl shadow-2xl p-2 mb-2 border hover:shadow-xl border-gray-100 ${
                        isDark
                            ? " backdrop-blur-md bg-gray-800 border-gray-600"
                            : " border-gray-300"
                    } `}
                >
                    <div className="flex justify-between items-end h-10  mb-1">
                        <div className="flex items-center  gap-1 mb-1">
                            <span className={` rounded-lg  `}>{item.icon}</span>
                            <h4 className={`font-semibold `}>{item.name}</h4>
                        </div>
                        <span className=" text-sm">{item.level}%</span>
                    </div>
                    <div
                        className={` w-full rounded-full h-2 overflow-hidden bg-gray-200 `}
                    >
                        <div
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                            style={{ width: `${item.level}%` }}
                        />
                    </div>
                </div>
            )
        }
    }

    const Soft = ({ item, index }) => {
        {
            return (
                <div
                    className={` rounded-xl shadow-2xl p-2 mb-2 border hover:shadow-xl border-gray-100 ${
                        isDark
                            ? " backdrop-blur-md bg-gray-800 border-gray-600"
                            : " border-gray-300"
                    } `}
                >
                    <div className="flex justify-between items-end h-10  mb-1">
                        <div className="flex items-center  gap-1 mb-1">
                            <span className={` rounded-lg  `}>{item.icon}</span>
                            <h4 className={`font-semibold `}>{item.name}</h4>
                        </div>
                        <span className=" text-sm">{item.level}%</span>
                    </div>
                    <div
                        className={` w-full rounded-full h-2 overflow-hidden bg-gray-200 `}
                    >
                        <div
                            className={`h-full bg-gradient-to-r ${isDark?"from-blue-300 to to-blue-400":"from-purple-400 to-purple-600"} rounded-full`}
                            style={{ width: `${item.level}%` }}
                        />
                    </div>
                </div>
            )
        }
    }
    return (
        <section
            className={`pb-20 w-full transform transition-colors duration-300 delay-125 ${
                isDark ? "bg-gray-900 text-gray-200" : "bg-white  text-gray-700"
            }`}
        >
            <div className=" w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-300"></div>
            <header className="text-center space-y-2 px-3 py-7 mb-10 ">
                <h2
                    className={` font-bold text-3xl sm:text-4xl lg:text-5xl ${
                        isDark ? "text-white" : "text-gray-700"
                    } `}
                >
                    My{" "}
                    <span
                        className={`${
                            isDark ? "text-blue-400" : "text-purple-600"
                        }`}
                    >
                        Skills
                    </span>
                </h2>
                <p>
                    I build modern, responsive web apps with clean UI and smooth
                    UX blending design and code to create experiences that feel
                    intuitive, fast and delightful to use
                </p>
            </header>
            <main className={`w-auto md:max-w-9/10 md:mx-auto `}>
                <section
                    className={` flex mx-auto w-fit space-x-1.5 p-1 shadow-xl mb-8 rounded-full border  ${
                        isDark
                            ? " backdrop-blur-md bg-gray-800 border-gray-600"
                            : " border-gray-300"
                    }`}
                >
                    <span
                        onClick={() => setSkills("tech")}
                        className={`p-5 rounded-full font-semibold cursor-pointer ${
                            skills === "tech"
                                ? `shadow-2xl ${
                                      isDark
                                          ? "bg-gradient-to-r from-blue-300 to-blue-400"
                                          : "bg-gradient-to-r from-purple-400 to-purple-600"
                                  }`
                                : `${
                                      isDark
                                          ? " hover:text-gray-300"
                                          : " hover:text-gray-900"
                                  }`
                        }`}
                    >
                        Technical Skills
                    </span>
                    <span
                        onClick={() => setSkills("soft")}
                        className={`p-5 rounded-full font-semibold cursor-pointer ${
                            skills === "soft"
                                ? `shadow-2xl ${
                                      isDark
                                          ? "bg-gradient-to-r from-blue-300 to-blue-400"
                                          : "bg-gradient-to-r from-purple-400 to-purple-600"
                                  }`
                                : `${
                                      isDark
                                          ? " hover:text-gray-300"
                                          : " hover:text-gray-900"
                                  }`
                        }`}
                    >
                        Soft Skills
                    </span>
                </section>
                <section className={`grid grid-cols-2 md:grid-cols-3 gap-3 m-5`}>
                    {skills === "tech" && techSkills.map((item, index) => (
                        <Tech key={index} item={item} index={index} />
                    ))}
                    {skills === "soft" && softSkils.map((item, index) => (
                        <Soft key={index} item={item} index={index} />
                    ))}
                </section>
            </main>
            <footer></footer>
        </section>
    )
}

export default Skills
