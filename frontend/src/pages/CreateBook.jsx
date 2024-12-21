import React, { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Backbutton from '../components/Backbutton'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { appContext } from '../Context/context'
const CreateBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishedYear, setPublishedYear] = useState(0)
  const {SERVER_URL} = useContext(appContext)
  const {enqueueSnackbar} = useSnackbar()
  const navigate = useNavigate()
  const handleSaveBook = async() => {
     try{
      const data = {
        title: title,
        author: author,
        publishedYear: publishedYear
      }
      await axios.post(`${SERVER_URL}/books`, data);
      enqueueSnackbar('Successfully created book!', {
        variant: 'success'
      })
      navigate('/')
     }catch(err){
      console.log(err)
       enqueueSnackbar("Please provide all details", {
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
        <h1 className="text-3xl font-semibold">Create Book</h1>
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
              onClick={handleSaveBook}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBook