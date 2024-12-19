import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading ,setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`).then((res) => {
      setBook(res.data.book);
      setLoading(false);
    });
  }, []);
  return (
    <div className="px-4 py-2 sm:p-2">
      <div>
        <Backbutton />
      </div>
      <section className="my-3 sm:pl-4">
        <div className="text-3xl font-semibold ">Show Book</div>
        {
          loading ? <Spinner />: ''
        }
        <article className="border-2  border-sky-500 my-8 rounded-lg px-4 py-8 sm:w-[600px] ">
          <div className="py-4">
            <span className="text-md text-gray-500 mr-4 font-semibold">Id</span>
            <span className="text-lg font-light text-gray-800">{book._id}</span>
          </div>
          <div className="py-4">
            <span className="text-md text-gray-500 mr-4 font-semibold">
              Title
            </span>
            <span className="text-lg font-light text-gray-800">
              {book.title}
            </span>
          </div>
          <div className="py-4">
            <span className="text-md text-gray-500 mr-4 font-semibold">
              Author
            </span>
            <span className="text-lg font-light text-gray-800">
              {book.author}
            </span>
          </div>
          <div className="py-4">
            <span className="text-md text-gray-500 mr-4 font-semibold">
              Published Year
            </span>
            <span className="text-lg font-light text-gray-800">
              {book.publishedYear}
            </span>
          </div>
          <div className="py-4">
            <span className="text-md text-gray-500 mr-4 font-semibold">
              CreatedAt
            </span>
            <span className="text-lg font-light text-gray-800">
              {new Date(book.createdAt).toString()}
            </span>
          </div>
          <div className="py-4">
            <span className="text-md text-gray-500 mr-4 font-semibold">
              UpdatedAt
            </span>
            <span className="text-lg font-light text-gray-800">
              {new Date(book.updatedAt).toString()}
            </span>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ShowBook;
