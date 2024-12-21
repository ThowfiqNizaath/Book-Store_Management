import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import Spinner from "./Spinner";

const TableView = ({ books ,loading }) => {
  return loading ? (
    <Spinner />
  ) : books.length > 0 ?
  (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md ">Operations</th>
        </tr>
      </thead>
      <tbody>
        {
        books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.publishedYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-2">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))
      }
      </tbody>
    </table>
  ): (
    <div className="col-span-2 font-medium text-gray-500 text-2xl">
      Books are not Available.
      <Link to="/books/create" className="text-blue-600 mx-2 hover:underline hover:text-blue-700">Do you want to add?</Link>
      </div>
    )
};

export default TableView;
