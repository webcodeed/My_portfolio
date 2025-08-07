import { useTheme } from "./ThemeContext"

function Project() {
    const { isDark } = useTheme()
    return (
        <section
            className={`pb-20 w-full min-h-screen transform transition-colors duration-300 delay-125 ${
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
                    Projects
                </h1>
                <p>A collection of projects that showcase my skills and creativity</p>
            </header>
        </section>
    )
}

export default Project
