import React from 'react';
import './NoteCard.css';
import DeleteIcon from './delete-icon.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import UpdateIcon from './update-icon.png';
import { Link } from 'react-router-dom';

function NoteCard({ _id, title, content, category, loadNotes }) {
  const deleteNote = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/notes/${_id}`)
    toast.success(response.data.message)
    loadNotes()
  }
  return (
    <div className='container border px-3 py-2 mx-auto my-3 rounded shadow bg-white w-50'>
      <h3>{title}</h3>
      <p>{content}</p>
      <span className='note-card-category bg-black text-white p-2 m-2 rounded'>{category}</span>
      <img src={DeleteIcon} alt='delete-icon' className='delete-icon me-4' onClick={deleteNote} />
      <Link to={`/update/${_id}`}>
        <img src={UpdateIcon} alt='update-icon' className='update-icon me-4' />
      </Link>
    </div>
  )
}

export default NoteCard