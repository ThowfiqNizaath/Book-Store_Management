import React from 'react'
import SingleBookCard from './SingleBookCard';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';


const CardView = ({books , loading}) => {

  return (
    <>
      {loading ? (
         <Spinner />
      ) : (
        <div className="grid max-xs:gap-y-4 sm:grid-cols-[1fr_1fr] gap-y-4 lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr]  w-full md:px-2 py-2 gap-x-5">
          {books.length > 0 ? (
            books.map((book) => <SingleBookCard book={book} key={book._id} />)
          ) : (
            <div className="col-span-2 font-medium text-gray-500 text-2xl">
              Books are not Available.
              <Link to="/books/create" className="text-blue-600 mx-2 hover:underline hover:text-blue-700">Do you want to add?</Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CardView