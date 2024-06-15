import React, {useState, useEffect} from 'react';
import './Home.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteCard from './../../components/NoteCard/NoteCard';

function Home() {
    const [Notes, setNotes] = useState([]);

    const loadNotes = async()=>{
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes`);

        console.log(response.data.data);

        setNotes(response.data.data);
    }

    useEffect(()=>{
        loadNotes();
    }, [])

  return (
    <div>
        <h1 className='text-center fw-bold p-1 mt-2'>All Notes</h1>

        {
            Notes.map((note)=>{
                const {_id, title, content, category} = note;
                return( <NoteCard key={_id} _id={_id} title={title} content={content} category={category} loadNotes={loadNotes}/> )
            })
        }
    </div>
  )
}

export default Home