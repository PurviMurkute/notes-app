import React, { useState } from 'react';
import './NewNote.css';
import axios from 'axios';
import toast from 'react-hot-toast';

function NewNote() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const addNote = async() => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/notes`,
    {
      title: title,
      category: category,
      content: content
    })

    toast.success(response.data.message)
    setTitle('')
    setCategory('')
    setContent('')
  }


  return (
    <div>
      <h1 className='text-center fw-bold p-1 mt-2'>NewNote</h1>

      <form className='form-newnote bg-white my-5 mx-auto p-3 rounded shadow'>
        <input type='text' placeholder='Title' value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} className='input-title fs-5 p-1 mb-3 mt-3' />

        <select value={category}
          onChange={(e) => {
            setCategory(e.target.value)
          }} className='input-category fs-5 py-1 px-auto mb-3'>
            <option>Select Category</option>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="learning">Learning</option>
          <option value="other">Other</option>
        </select>

        <input type='text' placeholder='Content' value={content} onChange={(e) => {
          setContent(e.target.value)
        }} className='input-content fs-5 py-1 px-auto mb-3' />

        <button
          type='button'
          onClick={addNote}
          className='button-save bg-black text-white fs-5 py-1 px-4 rounded-pill'
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default NewNote