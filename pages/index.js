export default function Index({ notes }) {
  return (
    <div className="container px-4">
      <div className="row gx-5">
        <div className="col">
          <div className="p-5 mb-4 bg-light rounded-3 text-center">
            <h1 className="fw-bold">Notes</h1>
          </div>
        </div>
      </div>

      <div className="row gx-5">
        {" "}
        {notes.map((note) => (
          <div
            className={
              note.hebrew
                ? "col-sm-6 col-md-3 gx-3 hebrew-note p-3"
                : "col-sm-6 col-md-3 gx-5 note p-3"
            }
            key={note._id}
          >
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
