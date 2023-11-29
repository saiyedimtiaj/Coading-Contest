import {  FaBook, FaChevronRight } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { IoMdPodium } from "react-icons/io";


const Prectis = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-10">
            <div className="py-6 px-5 bg-gradient-to-b from-[#FFCE8B] to-[#FFE6C3] rounded-lg">
                <h1 className="text-2xl font-semibold">Recommended Practice Topics</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    <div className="p-4 bg-white rounded-md">
                        <div className="flex gap-2 items-center">
                        <img src="../assets/cpp.svg" alt="" />
                        <div>
                            <h1 className="text-xl font-medium ">Practice C++</h1>
                            <p className="flex gap-1 text-gray-600 items-center mt-1"><FaBook/>67 provlem</p>
                        </div>
                        </div>
                        <div className="divider"></div>
                        <p className="flex font-normal justify-end gap-2 text-blue-700 -mt-2 items-center">Get Started <span className="text-base mt-[2px]"><FaChevronRight/></span></p>
                    </div>
                    <div className="p-4 bg-white rounded-md">
                        <div className="flex gap-2 items-center">
                        <img src="../assets/python.svg" alt="" />
                        <div>
                            <h1 className="text-xl font-medium ">Practice Paython</h1>
                            <p className="flex gap-1 text-gray-600 items-center mt-1"><FaBook/>68 provlem</p>
                        </div>
                        </div>
                        <div className="divider"></div>
                        <p className="flex font-normal justify-end gap-2 text-blue-700 -mt-2 items-center">Get Started <span className="text-base mt-[2px]"><FaChevronRight/></span></p>
                    </div>
                    <div className="p-4 bg-white rounded-md">
                        <div className="flex gap-2 items-center">
                        <img src="../assets/basic-math-cpp.svg" alt="" />
                        <div>
                            <h1 className="text-xl font-medium ">Basice Math With C++</h1>
                            <p className="flex gap-1 text-gray-600 items-center mt-1"><FaBook/>24 provlem</p>
                        </div>
                        </div>
                        <div className="divider"></div>
                        <p className="flex font-normal justify-end gap-2 text-blue-700 -mt-2 items-center">Get Started <span className="text-base mt-[2px]"><FaChevronRight/></span></p>
                    </div>
                </div>
            </div>
                <div className="divider py-14"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
                    <div className="rounded-md relative border-gray-500 border">
                        <div className="h-14 w-full rounded-t-md bg-[#115FB7]"></div>
                        <img className="absolute top-8 left-7" src="../assets/cpp.svg" alt="" />
                        <div className="mt-12 pb-4 px-3">
                        <h1 className="text-xl font-medium ">Practice C++</h1>
                        <p className="text-sm text-gray-600 mt-3">Practice problems of C++, the language most used for DSA and low level programming due to its...</p>
                        <div className="divider mt-8"></div>
                        <div className="text-gray-600">
                            <p className="flex gap-1 items-center"><MdBookmarkAdd/>67 Provlems</p>
                            <p className="flex gap-1 items-center"><IoMdPodium/>Beginner Lavel</p>
                        </div>
                        </div>
                    </div>
                    <div className="rounded-md relative border-gray-500 border">
                        <div className="h-14 w-full rounded-t-md bg-[#BC8F2F]"></div>
                        <img className="absolute top-8 left-7" src="../assets/python.svg" alt="" />
                        <div className="mt-12 pb-4 px-3">
                        <h1 className="text-xl font-medium ">Practice Payphon</h1>
                        <p className="text-sm text-gray-600 mt-3">Practice Python problems, the language known for its simplicity and readability making it the best...</p>
                        <div className="divider mt-8"></div>
                        <div className="text-gray-600">
                            <p className="flex gap-1 items-center"><MdBookmarkAdd/>27 Provlems</p>
                            <p className="flex gap-1 items-center"><IoMdPodium/>Beginner Lavel</p>
                        </div>
                        </div>
                    </div>
                    <div className="rounded-md relative border-gray-500 border">
                        <div className="h-14 w-full rounded-t-md bg-[#985C44]"></div>
                        <img className="absolute top-8 left-7" src="../assets/java.svg" alt="" />
                        <div className="mt-12 pb-4 px-3">
                        <h1 className="text-xl font-medium ">Practice Java</h1>
                        <p className="text-sm text-gray-600 mt-3">Practice Java problems and get used to writing object oriented and robust code...</p>
                        <div className="divider mt-8"></div>
                        <div className="text-gray-600">
                            <p className="flex gap-1 items-center"><MdBookmarkAdd/>63 Provlems</p>
                            <p className="flex gap-1 items-center"><IoMdPodium/>Beginner Lavel</p>
                        </div>
                        </div>
                    </div>
                    <div className="rounded-md relative border-gray-500 border">
                        <div className="h-14 w-full rounded-t-md bg-[#3E4A9D]"></div>
                        <img className="absolute top-8 left-7" src="../assets/c.svg" alt="" />
                        <div className="mt-12 pb-4 px-3">
                        <h1 className="text-xl font-medium ">Practice C</h1>
                        <p className="text-sm text-gray-600 mt-3">Practice C problems, a great starting point if you really want to understand fundamenta...</p>
                        <div className="divider mt-8"></div>
                        <div className="text-gray-600">
                            <p className="flex gap-1 items-center"><MdBookmarkAdd/>33 Provlems</p>
                            <p className="flex gap-1 items-center"><IoMdPodium/>Beginner Lavel</p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Prectis;