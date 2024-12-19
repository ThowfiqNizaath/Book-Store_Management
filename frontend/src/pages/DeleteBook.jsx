import React, { useEffect } from 'react'
import Backbutton from '../components/Backbutton'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()
  const handleDeletBook = async() => {
     axios.delete(`http://localhost:3000/books/${id}`)
     .then(res => {
        enqueueSnackbar('Successfully Deleted!',{
          variant: 'success',
        })
        navigate('/')
     }).catch(err => {
      enqueueSnackbar('Unable to delete book', {
        variant: 'error',
      })
      console.log(err)
     })
  }
 return(
  <div className="px-2 py-2">
    <div>
      <Backbutton />
    </div>
    <div className="my-3">
      <div className="text-3xl font-semibold">Delete Book</div>
      <div className="border-2 border-sky-500 sm:w-[500px] mx-auto my-8 rounded-lg px-8 py-5">
        <div className="text-center font-light text-xl">
          Are You Sure You want to delete this book?
        </div>
        <div className="w-full bg-red-600 text-white text-center py-3 mt-4" onClick={handleDeletBook}>
          Yes, Delete it
        </div>
      </div>
    </div>
  </div>
 )
}

export default DeleteBook