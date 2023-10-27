import React from "react";
import {FaLock} from "react-icons/fa"


export default function page() {
  return (
    
    <div className='bg-gray-100'>
            <div className="flex justify-start mt-3 ml-5">     
                <form className='w-3/4'>   
                    <label for="default-search" className=" text-sm font-medium text-teal-500 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-teal-500 dark:text-teal-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-2 pl-8 text-sm text-teal-500 border border-teal-500 rounded-lg" placeholder="Search" required/>
                        <button type="submit" className="text-white absolute right-2 bottom-1 bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-4 w-3/4 mt-5 mb-3 ml-5">
                <div className="bg-white cursor-pointer shadow-md p-1 flex items-center justify-center text-2xs text-teal-500 font-bold rounded-md border-1 border-teal-500 transition-transform group hover:translate-x-2">SNBT 2024 (7 Subtest) Part 1</div>
                <div className="bg-white cursor-pointer shadow-md p-2 flex items-center justify-center text-2xs text-teal-500 font-bold rounded-md border-1 border-teal-500 transition-transform group hover:translate-x-2">UM SAINTEK</div>
                <div className="bg-white cursor-pointer shadow-md p-2 flex items-center justify-center text-2xs text-teal-500 font-bold rounded-md border-1 border-teal-500 transition-transform group hover:translate-x-2">UM SOSHUM</div>
                <div className="bg-white cursor-pointer shadow-md p-2 flex items-center justify-center text-2xs text-teal-500 font-bold rounded-md border-1 border-teal-500 transition-transform group hover:translate-x-2">TOEFL</div>
                <div className="bg-white cursor-pointer shadow-md p-2 flex items-center justify-center text-2xs text-teal-500 font-bold rounded-md border-1 border-teal-500 transition-transform group hover:translate-x-2">Skolastik Ver. Kemdikbud</div>
                <div className="bg-white cursor-pointer shadow-md p-2 flex items-center justify-center text-2xs text-teal-500 font-bold rounded-md border-1 border-teal-500 transition-transform group hover:translate-x-2">TO Soshum</div>
            </div>
            <div className='leading-tight ml-5'>
                <div className='mt-0'><h1 className='font-bold text-teal-500 text-xl'>Try Out</h1></div>
                <div>
                <p className='text-teal-500 font-bold text-xl mt-2'>Gratis</p>
                <div className="grid grid-cols-1 divide-y w-3/4 gap-4 mt-2 mb-0 ">
                <div className="bg-white cursor-pointer shadow-md text-md text-teal-500 font-bold rounded-md border-1 border-teal-500 transition-transform group hover:translate-x-2 p-3 relative">
                    <span className="text-teal-500 text-2xs font-bold">7 Try Out SNBT 2024 (7 Subtest)</span>
                    <div className="absolute top-0 right-0 w-10 h-full bg-teal-500 flex items-center justify-center text-white text-md font-bold rounded-md">
                    Free
                    </div>
                </div>
                <div className="bg-white cursor-pointer shadow-md text-md text-teal-500 font-bold rounded-md transition-transform group hover:translate-x-2 p-3 relative">
                    <span className="text-teal-500 text-2xs font-bold">7 Try Out SNBT 2024 (7 Subtest)</span>
                    <div className="absolute top-0 right-0 w-10 h-full bg-teal-500 flex items-center justify-center text-white text-md font-bold rounded-md">
                    Free
                    </div>
                </div>
                </div>
                </div>        
                <div>
                <p className='text-teal-500 font-bold text-xl mt-2'>Premium</p>
                <div className="grid grid-cols-1 divide-y w-3/4 gap-4 mt-2 mb-0">
                <div className="bg-white cursor-pointer shadow-md text-md text-teal-500 font-bold rounded-md border-1 border-teal-500 transition-transform hover:translate-x-2 p-3 relative">
                    <span className="text-teal-500 text-2xs font-bold">7 Try Out SNBT 2024 (7 Subtest)</span>
                    <div className="absolute top-0 right-0 w-10 h-full bg-teal-500 flex items-center justify-center text-white text-md font-bold rounded-md">
                    <FaLock/>
                    </div>
                </div>
                <div className="bg-white cursor-pointer shadow-md text-md text-teal-500 font-bold rounded-md transition-transform group hover:translate-x-2 p-3 relative">
                    <span className="text-teal-500 text-2xstext-2xs font-bold">7 Try Out SNBT 2024 (7 Subtest)</span>
                    <div className="absolute top-0 right-0 w-10 h-full bg-teal-500 flex items-center justify-center text-white text-md font-bold rounded-md">
                    <FaLock/>
                    </div>
                </div>
                </div>
                </div>            
            </div>
      </div>
    
  );
}
