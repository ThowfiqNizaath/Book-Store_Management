import React from 'react'
import SingleBookCard from './SingleBookCard';


const CardView = ({books}) => {

  return (
    <>
      <div className="grid max-xs:gap-y-4 sm:grid-cols-[1fr_1fr] gap-y-4 lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr]  w-full md:px-2 py-2 gap-x-5">
        {books.map((book) => (
          <SingleBookCard book={book} key={book._id} />
        ))}
      </div>
    </>
  );
}

export default CardView