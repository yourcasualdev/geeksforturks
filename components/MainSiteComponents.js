
const CategoryShowCase = ({ title, desc, href, hrefName, color }) => {
    if (color === undefined) color = "bg-gray-300";
    return (
        <div className={`${color} w-full h-[40rem]`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 p-4 pt-10">
                        <h1 className="text-6xl font-bold text-center sm:pt-[5rem] lg:text-[5rem]">
                            {title}
                        </h1>
                        <p className="text-center text-gray-700 text-xl pt-10 ">
                            {desc}
                        </p>
                        <div className="flex justify-center pt-10">
                            <a
                                href={href}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded"
                            >
                                {hrefName}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    CategoryShowCase
}
