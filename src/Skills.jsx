import { useState } from "react"
import { useTheme } from "./ThemeContext"
import { motion } from "motion/react"
import {
    FaBookOpen,
    FaCode,
    FaCss3,
    FaDatabase,
    FaHtml5,
    FaJs,
    FaLaptopCode,
    FaLightbulb,
    FaNodeJs,
    FaPaintBrush,
    FaPuzzlePiece,
    FaReact,
    FaUsers,
} from "react-icons/fa"
import { LightBulbIcon } from "@heroicons/react/24/outline"
import {
    SiGit,
    SiGithub,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si"
import { BiMessageRoundedDetail, BiTransfer } from "react-icons/bi"
import { AiOutlineEye } from "react-icons/ai"

function Skills() {
    const { isDark } = useTheme()

    const [skills, setSkills] = useState("tech")

    const techSkills = [
        {
            name: "HTML",
            icon: <FaHtml5 />,
            level: "90",
            color: "from-orange-500 to-red-600",
        },
        {
            name: "CSS",
            icon: <FaCss3 />,
            level: "92",
            color: "from-blue-500 to-blue-700",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
            level: "92",
            color: "from-cyan-400 to-sky-500",
        },
        {
            name: "JavaScript",
            icon: <FaJs />,
            level: "85",
            color: "from-yellow-300 to-yellow-500",
        },
        {
            name: "React",
            icon: <FaReact />,
            level: "80",
            color: "from-cyan-300 to-cyan-500",
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs />,
            level: "20",
            color: "from-neutral-800 to-zinc-900",
        },
        {
            name: "Typescript",
            icon: <SiTypescript />,
            level: "20",
            color: "from-blue-500 to-blue-700",
        },
        {
            name: "REST APIs",
            icon: <BiTransfer />,
            level: "73",
            color: "from-gray-400 to-gray-600",
        },
        {
            name: "Node.js",
            icon: <FaNodeJs />,
            level: "20",
            color: "from-lime-500 to-emerald-600",
        },
        {
            name: "Appwrite",
            icon: <FaDatabase />,
            level: "70",
            color: "from-pink-400 to-rose-500",
        },
        {
            name: "GiT",
            icon: <SiGit />,
            level: "88",
            color: "from-orange-500 to-orange-700",
        },
        {
            name: "GitHub",
            icon: <SiGithub />,
            level: "85",
            color: "from-gray-800 to-gray-900",
        },
        {
            name: "VS Code",
            icon: <FaCode />,
            level: "95",
            color: "from-blue-500 to-indigo-600",
        },
        {
            name: "UI/UX Design",
            icon: <FaPaintBrush />,
            level: "50",
            color: "from-pink-500 to-purple-600",
        },
    ]

    const softSkils = [
        { name: "Problem Solving", icon: <FaPuzzlePiece />, level: "85" },
        { name: "Creative Thinking", icon: <FaLightbulb />, level: "81" },
        { name: "Attention to Detail", icon: <AiOutlineEye />, level: "80" },
        {
            name: "Communication Skills",
            icon: <BiMessageRoundedDetail />,
            level: "90",
        },
        { name: "Team Collaboration", icon: <FaUsers />, level: "90" },
        {
            name: "Adaptability & Continuous Learning",
            icon: <FaBookOpen />,
            level: "88",
        },
        { name: "Technical Proficiency", icon: <FaLaptopCode />, level: "88" },
    ]

    const Tech = ({ item, index }) => {
        {
            return (
                <div
                    className={` rounded-xl shadow-2xl p-3 mb-2 border hover:shadow-xl border-gray-100 ${
                        isDark
                            ? " backdrop-blur-md bg-gray-800 border-gray-600"
                            : " border-gray-300"
                    } `}
                >
                    <div className="flex justify-between items-end h-10  mb-1">
                        <div className="flex items-center  gap-1 mb-1">
                            <span
                                className={` rounded-lg p-2
                                 bg-gradient-to-br ${item.color} text-white `}
                            >
                                {item.icon}
                            </span>
                            <h4 className={`font-semibold text-sm md:text-md `}>
                                {item.name}
                            </h4>
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
                    className={` rounded-xl shadow-2xl p-4 mb-2 border hover:shadow-xl border-gray-100 ${
                        isDark
                            ? " backdrop-blur-md bg-gray-800 border-gray-600"
                            : " border-gray-300"
                    } `}
                >
                    <div className="flex justify-between items-end h-10  mb-1">
                        <div className="flex items-center  gap-1 mb-1">
                            <span
                                className={` rounded-lg p-2
                                ${
                                    isDark
                                        ? "bg-gradient-to-r from-blue-300 to-blue-400"
                                        : "bg-gradient-to-r from-purple-400 to-purple-600"
                                } text-white `}
                            >
                                {item.icon}
                            </span>
                            <h4 className={`font-semibold text-sm md:text-md `}>
                                {item.name}
                            </h4>
                        </div>
                        <span className=" text-sm">{item.level}%</span>
                    </div>
                    <div
                        className={` w-full rounded-full h-2 overflow-hidden bg-gray-200 `}
                    >
                        <div
                            className={`h-full bg-gradient-to-r ${
                                isDark
                                    ? "from-blue-300 to to-blue-400"
                                    : "from-purple-400 to-purple-600"
                            } rounded-full`}
                            style={{ width: `${item.level}%` }}
                        />
                    </div>
                </div>
            )
        }
    }
    return (
        <section
            className={`pb-20 w-full min-h-screen transform transition-colors duration-300 delay-125 ${
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
                    My
                    <span
                        className={`${
                            isDark ? "text-blue-400" : "text-purple-600"
                        }`}
                    >
                        {" "}Skills
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
                        className={`px-5 py-3 md:p-5 rounded-full font-semibold cursor-pointer ${
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
                        className={`px-5 py-3 md:p-5 rounded-full font-semibold cursor-pointer ${
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
                {/* ADD STAGGER ANIMATION TO CHILDREN */}
                <section
                    className={` ${
                        skills === "tech"
                            ? "grid-cols-2 md:grid-cols-3"
                            : "grid-cols-1 md:grid-cols-2"
                    } grid gap-3 m-5`}
                >
                    {skills === "tech" &&
                        techSkills.map((item, index) => (
                            <Tech key={index} item={item} index={index} />
                        ))}
                    {skills === "soft" &&
                        softSkils.map((item, index) => (
                            <Soft key={index} item={item} index={index} />
                        ))}
                </section>
            </main>
            <footer className="text-center mt-15 space-y-7">
                <p>Ready to work on your next project?</p>
                <div className=" space-x-3">
                    <button
                        className={`px-5 py-3 md:py-5 md:px-10 rounded-full ${
                            isDark
                                ? "bg-gradient-to-r from-blue-300 to-blue-400"
                                : " bg-gradient-to-r from-purple-400 to-purple-600"
                        }`}
                    >
                        Book me
                    </button>
                    <button
                        className={`px-5 py-3 md:py-5 md:px-10 rounded-full border ${
                            isDark ? " text-blue-400" : "  text-purple-600"
                        }`}
                    >
                        View Resume
                    </button>
                </div>
            </footer>
        </section>
    )
}

export default Skills
