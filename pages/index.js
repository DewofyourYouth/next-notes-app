export default function Index({ notes }) {
  return (
    <div>
      <h1>Notes</h1>
      <div>
        {" "}
        {notes.map((note) => (
          <div className="note-div" key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const { data } = await res.json();
  return { notes: data };
};
