import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa"
import { useTheme } from "./ThemeContext"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

function Home() {
    // Typing Animation Effect
    const [typedText, setTypedText] = useState(" ")
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentCharIndex, setCurrentCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const words = ["Web Developer", "Frontend Developer", "Creative Coder"]

    useEffect(() => {
        const currentWord = words[currentWordIndex]

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (currentCharIndex < currentWord.length) {
                    setTypedText(currentWord.substring(0, currentCharIndex + 1))
                    setCurrentCharIndex((prev) => prev + 1)
                } else {
                    setTimeout(() => setIsDeleting(true), 1000)
                }
            } else {
                if (currentCharIndex > 0) {
                    setTypedText(currentWord.substring(0, currentCharIndex - 1))
                    setCurrentCharIndex((prev) => prev - 1)
                } else {
                    setIsDeleting(false)
                    setCurrentWordIndex((prev) => (prev + 1) % words.length)
                }
            }
        }, 100)

        return () => clearTimeout(timer)
    }, [currentCharIndex, currentWordIndex, isDeleting, words])

    // Home animation
    const fadeInLeft = {
        hiddenLeft: { opacity: 0, x: "-100%" },
        hiddenRight: { opacity: 0, x: "100%" },
        show: {
            opacity: 1,
            x: "0%",

            transition: {
                duration: 2,
            },
        },
    }
    const { isDark } = useTheme()
    return (
        <header
            className={`transform transition-colors duration-400 grid content-center h-screen w-auto ${
                isDark ? "bg-gray-700" : "bg-white"
            }`}
        >
            <div
                className={`flex  flex-col items-center mx-3 sm:mx-7 md:mx-auto md:max-w-9/10 md:flex-row space-y-5 `}
            >
                <motion.figcaption
                    initial="hiddenLeft"
                    animate="show"
                    variants={fadeInLeft}
                    // initial={{ transform: "translateX(-1000px)" }}
                    // animate={{ transform: "translateX(0px)" }}
                    // transition={{ type: "spring" }}
                    className={` space-y-3 md:space-y-5 md:w-1/2`}
                >
                    <header
                        className={` text-xl sm:text-2xl lg:text-3xl md:space-y-2 font-bold ${
                            isDark ? "text-white" : "text-gray-700"
                        }`}
                    >
                        <h3 className="">Hello I'm</h3>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl">
                            Ayomide Otegbade
                        </h1>
                        <h3 className={isDark? "text-blue-300" : "text-purple-600"}>
                            I am {typedText}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                            >
                                |
                            </motion.span>
                        </h3>
                    </header>
                    <main
                        className={` lg:text-lg ${
                            isDark ? "text-gray-200" : "text-gray-700"
                        }`}
                    >
                        <p>
                            I build modern, responsive web apps with clean UI
                            and smooth UX bleeding design and code to create
                            experiences that feel intuitive, fast and delightful
                            to use.
                        </p>
                    </main>
                    <footer className="space-y-3 md:space-y-10">
                        <div
                            className={` flex space-x-3 text-2xl md:text-3xl lg:text-4xl ${
                                isDark ? "text-blue-300" : " text-purple-600"
                            }  `}
                        >
                            <a href="">
                                <FaGithub className=" active:scale-75" />
                            </a>
                            <a href="">
                                <FaLinkedin />
                            </a>
                            <a href="">
                                <FaTwitter />
                            </a>
                            <a href="">
                                <FaFacebook />
                            </a>
                            <a href="">
                                <FaInstagram />
                            </a>
                        </div>
                        <ul
                            className={`flex mt-7 space-x-3 ${
                                isDark ? "text-white" : "text-gray-900"
                            } font-semibold`}
                        >
                            <li className=" active:scale-95 transition-all ease-in-out">
                                <a
                                    className=" lg:text-lg py-3 px-13 sm:px-20 md:px-12 lg:px-18 rounded-xl  bg-gradient-to-r from-purple-600 to-blue-400"
                                    href=""
                                >
                                    Book me
                                </a>
                            </li>
                            <li className=" active:scale-95 transition-all ease-in-out">
                                <a
                                    className=" lg:text-lg py-3 px-13 sm:px-20 md:px-12 lg:px-18 rounded-xl  bg-gradient-to-r from-purple-600 to-blue-400"
                                    href=""
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </footer>
                </motion.figcaption>
                <motion.figure
                    initial="hiddenRight"
                    animate="show"
                    variants={fadeInLeft}
                    // initial={{ transform: "translateX(1000px)" }}
                    //     animate={{ transform: "translateX(0px)" }}
                    //     transition={{ duration:2 }}

                    className=" w-[40vh] sm:w-[-70vh] md:w-1/2 lg:w-2/5 xl:w-2/6 md:mx-auto h-auto  md:1/2"
                >
                    <motion.div
                        // initial={{ "--rotate": "0deg" }}
                        // animate={{ "--rotate": "360deg" }}
                        // transition={{ duration: 2, repeat: Infinity }}
                        // style={{ transform: 'rotate(var(--rotate))'}}

                        className={` border-l-2 border-t-4 m-2 rounded-full ${
                            isDark ? "border-gray-200" : " border-gray-800"
                        }`}
                    >
                        <img
                            className=" rounded-full w-full p-2"
                            src="https://i.ibb.co/pFk5yd2/official-photo-Copy.png"
                            alt="An Image of Otegbade Ayomide"
                        />
                    </motion.div>
                </motion.figure>
            </div>
        </header>
    )
}

export default Home
