import React, { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/notes/')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/notes/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    })
      .then((res) => res.json())
      .then((newNote) => setNotes([...notes, newNote]));
  };

  return (
    <div>
      <h1>My Notes</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Content'
        />
        <button type='submit'>Add Note</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong>: {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

