import React from 'react'
import {useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate('/')
    }
  return (
    <div className="w-full md:w-[800px] md:mx-auto mt-[10%] h-screen font-bokor">
      <div className="text-center py-16">
        {/* <div class="flex justify-center items-center h-screen bg-gray-100"> */}
        <h1 className="text-6xl sm:text-9xl font-bold text-black drop-shadow-[0_0_2px_green]">
          404
        </h1>
        {/* </div> */}
        <div className="font-bold text-2xl sm:text-4xl py-4">
          PAGE NOT FOUND
        </div>
        <div className="font-semibold w-[80%] mx-auto">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable
        </div>
        <div className="my-8 font-semibold border-2 w-[70%] sm:w-[30%] py-2 border-r-green-500 border-b-green-500 m-auto hover:shadow-[1px_1px_2px_green] px-4" onClick={handleRedirect}>
         HOMEPAGE
        </div>
      </div>
    </div>
  );
}

export default NotFound