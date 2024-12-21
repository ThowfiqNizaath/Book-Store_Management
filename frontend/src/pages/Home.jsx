import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import TableView from "../components/TableView";
import CardView from "../components/CardView";
import { appContext } from "../Context/context";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const {view, toggleView, SERVER_URL} = useContext(appContext)
  
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${SERVER_URL}/books`)
      .then((Response) => {
        setBooks(Response.data.books);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => toggleView('table')}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => toggleView('card')}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {view === "table" ? (
        <TableView books={books} loading={loading}/>
      ) : (
        <CardView books={books} loading={loading} />
      )}
    </div>
  );
};

export default Home;
