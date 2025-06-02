// This is a full React App.js using Material UI to make your notes app clean + modern

import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Card, CardContent, Typography, Grid } from '@mui/material';

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
    setTitle('');
    setContent('');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        📝 My Notes
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
          Add Note
        </Button>
      </form>

      <Grid container spacing={2}>
        {notes.map((note) => (
          <Grid item xs={12} key={note.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{note.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {note.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;


