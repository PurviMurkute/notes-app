import React, {useState, useEffect} from 'react';
import './Home.css';
import axios from 'axios';

function Home() {
    const [Notes, setNotes] = useState([]);

    const loadNotes = async()=>{
        const responce = await axios.get('http://localhost:5000/notes');

        console.log(responce.data.data);

        setNotes(responce.data.data);
    }

    useEffect(()=>{
        loadNotes();
    }, [])
    
  return (
    <div>
        <h1>Home</h1>

        {
            Notes.map((note, index)=>{
                return(
                    <div>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        <span>{note.category}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home