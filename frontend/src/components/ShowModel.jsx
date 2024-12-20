import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const ShowModel = ({currbook,onClose}) => {
  return (
    <div className="fixed bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
      <div
        className="sm:w-[600px] max-w-full w-[80%] bg-white rounded-xl px-6 py-10 flex flex-col relative"
        // onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {currbook.publishedYear}
        </h2>
        <h4 className="my-2 text-gray-500">{currbook._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{currbook.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{currbook.author}</h2>
        </div>
        <p className="mt-4">Anything You want to show</p>
        <p className="my-2 max-2xs:h-[300px]  max-2xs:overflow-scroll">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
}

export default ShowModel