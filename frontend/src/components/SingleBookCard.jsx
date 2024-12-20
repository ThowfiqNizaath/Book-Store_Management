import React from 'react'
import { MdOutlineMenuBook } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import {MdOutlineDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import ShowModel from './ShowModel';
import { useState } from 'react';
const SingleBookCard = ({book}) => {
    const [model, setModel] = useState(false);
  return (
    <article
      className="border border-gray-500 relative px-3 py-5 rounded-md"
      key={book._id}
    >
      <div className="text-gray-500 font-normal text-md">{book._id}</div>
      <div className="flex items-center gap-x-2 my-2">
        <MdOutlineMenuBook className="text-xl text-yellow-400" />
        {book.title}
      </div>
      <div className="flex items-center gap-x-2 my-2">
        <CgProfile className="text-xl text-orange-400" />
        {book.author}
      </div>
      <div className="flex justify-around mt-8">
        <FaEye
          className="text-2xl text-violet-800 cursor-pointer"
          onClick={() => setModel(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 " />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600" />
        </Link>
      </div>
      <div className="px-3 py-1 font-medium bg-orange-300 absolute top-1 right-1 rounded-md">
        {book.publishedYear}
      </div>
      {model && (
        <ShowModel
          key={book._id}
          currbook={book}
          onClose={() => setModel(false)}
        />
      )}
    </article>
  );
}

export default SingleBookCard