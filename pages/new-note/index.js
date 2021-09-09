import { Button, Container, Form } from "react-bootstrap";

import { useState } from "react";

export default function NewNote() {
  const [note, setNote] = useState({
    title: null,
    description: null,
    hebrew: false,
  });

  const submitPost = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(note));
    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setNote({ title: null, description: null });
  };

  return (
    <Container>
      <h1>New Note</h1>
      <Form>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Some Title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        ></Form.Control>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={note.description}
          onChange={(e) => setNote({ ...note, description: e.target.value })}
        />
        <Form.Check
          type="checkbox"
          value={note?.hebrew}
          label="Hebrew"
          name="heb"
          onChange={(e) => {
            setNote({ ...note, hebrew: !note.hebrew });
          }}
        />
        <Button variant="outline-primary" onClick={(e) => submitPost(e)}>
          SUBMIT
        </Button>
      </Form>

      <h2>{note?.title}</h2>
      <p>{note?.description}</p>
    </Container>
  );
}
