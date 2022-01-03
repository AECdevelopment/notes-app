import {useState, useEffect} from 'react';
import { getAllNotes } from './services/notes/getAllNotes';
import { createNote } from './services/notes/createNote';

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [important, setImportant] = useState(false)
  const showAll = important ? notes.filter(note => note.important === true) : notes  
  
  useEffect(() => {
    getAllNotes().then((notes) => {
      setNotes(notes);
    });
    }, [])

  const handleChange = (e) => {
    setNewNote(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const noteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    createNote(noteToAdd).then(setNotes([...notes, noteToAdd]))
    setNewNote('')
  }

  const handleClick = () => {
    setImportant(!important)
  }

  return (
    <div className="App">
      <h1>Notas!</h1>
      <button onClick={handleClick}>{important ? 'show all': 'show only important'}</button>
      <ul>
        {showAll.map(note => <li key={note.id}>{note.content}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type={'text'} onChange={handleChange} value={newNote}></input>
        <button>Insert</button>
      </form>
    </div>
  );
}
  
export default App;