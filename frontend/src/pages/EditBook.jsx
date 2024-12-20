import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Backbutton from "../components/Backbutton";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";
import { appContext } from "../Context/context";
const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false)
  const [publishedYear, setPublishedYear] = useState(0);
  const {SERVER_URL} = useContext(appContext)
  const navigate = useNavigate();
  const {id} = useParams()
  const {enqueueSnackbar} = useSnackbar()
  useEffect(() => {
    setLoading(true);
    const fetchBook = async () => {
      console.log(`${SERVER_URL}/books/${id}`);
      try {
        await axios
          .get(`${SERVER_URL}/books/${id}`)
          .then((response) => {
            const { title, author, publishedYear } = response.data.book;
            setTitle(title);
            setAuthor(author);
            setPublishedYear(publishedYear);
          });
          setLoading(false)
      } catch (err) {
          enqueueSnackbar("Fetching Error", {
          variant: "error",
        });
      }
    };
    fetchBook()

    return () => "hellow"
  },[])

  const handleEditBook = async() => {
    try{
      const data = {
        title: title,
        author: author,
        publishedYear: publishedYear
      }
      axios.put(`${SERVER_URL}/books/${id}`, data).then((res) => {
        enqueueSnackbar("Successfully created book!", {
          variant: "success",
        });
        navigate("/");
      });
    }catch(err){
         enqueueSnackbar("Unable to fetch API", {
           variant: "error",
         });
    }
  }

  return (
    <div className="px-2 py-2">
      <div className="">
        <Backbutton />
      </div>
      <div className="my-3 xs:px-2">
        <h1 className="text-3xl font-semibold">Edit Book</h1>
        {
          loading ? <Spinner /> : ''
        }
        <div className="border-2 border-sky-500 sm:w-[600px] mx-auto my-8 rounded-lg px-4 py-5">
          <div className="flex flex-col gap-y-1 mb-3">
            <label className="text-2xl  text-gray-500">Title</label>
            <input
              className="px-2 py-1 border border-gray-700 rounded-sm text-lg"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-3">
            <label className="text-2xl  text-gray-500">Author</label>
            <input
              className="px-2 py-1 border border-gray-700 rounded-sm text-lg"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-3">
            <label className="text-2xl  text-gray-500">Published Year</label>
            <input
              className="px-2 py-1 border border-gray-700 rounded-sm text-lg"
              type="number"
              value={publishedYear}
              onChange={(e) => setPublishedYear(e.target.value)}
            />
          </div>
          <div className="w-[80%] mx-auto mt-8">
            <button
              className="bg-sky-400 w-full py-[0.4rem] rounded-md font-semibold"
              onClick={handleEditBook}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
